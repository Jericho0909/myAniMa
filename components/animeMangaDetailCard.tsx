'use client'

import Link from "next/link";
import useAnimeManga from "@/hooks/useAnimeManga";
import { getFavoriteAnime,
    getCompletedAnime,
    getWatchingAnime,
    getAnimeList,
    getFavoriteManga,
    getCompletedManga,
    getReadingManga,
    getMangaList
} from "@/app/selectors/animeMangaSelectors";
import { icons } from "@/constants/statusIcons";
import { Heart, X } from "lucide-react";

interface AnimeMangaDetailCardType {
    status: string;
    title: string;
}

const AnimeMangaDetailCard = ({ status, title }: AnimeMangaDetailCardType) => {
    const { data: animeManga = [] } = useAnimeManga()
    const animeDetail = getFavoriteAnime(animeManga).find((a) => a.title === title && a.status === status)
    const mangaDetail = getFavoriteManga(animeManga).find((m) => m.title === title && m.status === status)

    const completedAnimeDetail = getCompletedAnime(animeManga).find((a) => a.title === title && a.status === status)
    const completedMangaDetail = getCompletedManga(animeManga).find((m) => m.title === title && m.status === status)

    const currentAnimeDetail = getWatchingAnime(animeManga).find((a) => a.title === title && a.status === status)
    const currentMangaDetail = getReadingManga(animeManga).find((m) => m.title === title && m.status === status)

    const animeListDetail = getAnimeList(animeManga).find((a) => a.title === title && a.status === status)
    const mangaListDetail = getMangaList(animeManga).find((m) => m.title === title && m.status === status)

    const detail = animeDetail || mangaDetail || completedAnimeDetail || currentAnimeDetail || completedMangaDetail || currentMangaDetail || animeListDetail || mangaListDetail;


    if (!detail) {
        return (
            <div className="h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 px-4">
                <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center border border-slate-200">
                    <p
                        className="text-sm text-slate-500"
                        style={{ fontFamily: "var(--font-fredoka)" }}
                    >
                        No detail found for <span className="font-semibold text-slate-700">"{title}"</span>  
                    </p>

                </div>
            </div>
        )
    }

    return (
        <section className="relative h-full">
            <img
                src={detail.image}
                alt={detail.title}
                className="w-full h-full object-fill blur-[6px]"
            />

            <div className="absolute inset-0 bg-black/60" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[75%] lg:w-[60%]  z-10">
                    <div className="relative bg-white w-full rounded-3xl shadow-2xl p-6 md:p-8">
                    <Link
                        href={`/`}
                        className="close-btn absolute top-4 right-4 p-2 rounded-full transition-all cursor-pointer"
                    >
                        <X size={24} strokeWidth={3} />
                    </Link>
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center justify-center w-full h-full">
                            <img
                                src={detail.image}
                                alt={detail.title}
                                className="w-72 h-72 rounded-2xl object-fill shadow-lg"
                            />
                        </div>
                        <div className="flex-1">
                            <h1
                                className="text-4xl font-bold mb-4"
                                style={{ fontFamily: "var(--font-fredoka)" }}
                            >
                                {detail.title}
                            </h1>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {detail.genre.map((genre, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 rounded-full bg-slate-200 text-sm "
                                        style={{ fontFamily: "var(--font-lato)" }}
                                    >
                                        {genre}
                                    </span>
                                ))}
                            </div>
                            <div className="overflow-y-auto mb-4">
                                <p
                                    className="text-slate-600 leading-relaxed whitespace-break-spaces"
                                    style={{ fontFamily: "var(--font-lato)" }}
                                >
                                    {detail.description}
                                </p>
                            </div>

                            <div 
                                className="flex gap-4 mt-6 font-semibold"
                                style={{ fontFamily: "var(--font-fredoka)" }}
                            >
                                <button
                                    type="button"
                                    className={`fav-btn flex items-center gap-2 px-5 py-2 rounded-xl transition-all cursor-pointer ${detail.isFavorite ? "fav-active bg-red-500": "fav-inactive bg-gray-200"}`}
                                >
                                    <span>
                                        <Heart size={20} strokeWidth={3}/> 
                                    </span>
                                    <span>
                                        {detail.isFavorite ? "Favorite" : "Unfavorite"}
                                    </span>
                                </button>

                                <button
                                    type="button"
                                    className={`status-btn flex items-center gap-2 px-5 py-2 rounded-xl font-semibold cursor-pointer transition-all ${detail.status && icons[detail.status]?.style}`}
                                >
                                    <span>
                                        {
                                            detail.status && icons[detail.status]?.icon
                                        }
                                    </span>
                                    <span>
                                        {
                                            detail.status && icons[detail.status]?.status
                                        }
                                    </span>
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default AnimeMangaDetailCard