'use client'

import Link from "next/link";
import useAnimeManga from "@/hooks/useAnimeManga";
import useAnimeMangaMutations from "@/hooks/useMutation";
import { getFavoriteAnime,
    getCompletedAnime,
    getWatchingAnime,
    getAnimeList,
    getFavoriteManga,
    getCompletedManga,
    getReadingManga,
    getMangaList
} from "@/app/selectors/animeMangaSelectors";
import { showSuccess } from "@/lib/toast";
import { icons } from "@/constants/statusIcons";
import { Heart, X } from "lucide-react";

interface AnimeMangaDetailCardType {
    type: string;
    title: string;
}

const AnimeMangaDetailCard = ({ type, title }: AnimeMangaDetailCardType) => {
    const { data: animeManga = [], isLoading} = useAnimeManga()
    const { update, remove } = useAnimeMangaMutations()
    const animeDetail = getFavoriteAnime(animeManga).find((a) => a.title === title && a.type === type)
    const mangaDetail = getFavoriteManga(animeManga).find((m) => m.title === title && m.type === type)

    const completedAnimeDetail = getCompletedAnime(animeManga).find((a) => a.title === title && a.type === type)
    const completedMangaDetail = getCompletedManga(animeManga).find((m) => m.title === title && m.type === type)

    const currentAnimeDetail = getWatchingAnime(animeManga).find((a) => a.title === title && a.type === type)
    const currentMangaDetail = getReadingManga(animeManga).find((m) => m.title === title && m.type === type)

    const animeListDetail = getAnimeList(animeManga).find((a) => a.title === title && a.type === type)
    const mangaListDetail = getMangaList(animeManga).find((m) => m.title === title && m.type === type)

    const detail = animeDetail || mangaDetail || completedAnimeDetail || currentAnimeDetail || completedMangaDetail || currentMangaDetail || animeListDetail || mangaListDetail

    const statusBtn = detail?.type === "Anime" 
        ? ["Completed", "Watching", "PlanToWatch"]
        : ["Completed", "Reading", "PlanToRead"]

    const handleFavorite = (
        e: React.MouseEvent<HTMLButtonElement>,
        id: string | undefined,
        isFavorite: boolean) => {
            e.preventDefault()
            if (!id) return
            update.mutate({
                id,
                isFavorite: isFavorite,
            })

            showSuccess(`${isFavorite ? "Successfully added to favorites!" : "Successfully removed from favorites!"}`);
    }

    const handleUpdateStatus = (
        e: React.MouseEvent<HTMLButtonElement>,
        id: string | undefined,
        status: string) => {
            e.preventDefault();
            if (!id) return;

            update.mutate({
                id,
                status: status,
            })
            showSuccess(`Status updated to ${status}`)
    }

    const handleRemove = (
        e: React.MouseEvent<HTMLButtonElement>,
        id: string | undefined,
    ) => {
        e.preventDefault()
        if (!id) return

        remove.mutate({id})
    }
    
    if(isLoading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="loader4"></div>
            </div>
        )
    }

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
                                className="w-40 h-40 sm:w-56 sm:h-56 lg:w-60 lg:h-60 xl:w-64 xl:h-64 rounded-2xl object-fill shadow-lg"
                            />
                        </div>
                        <div className="flex-1">
                            <h1
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                                style={{ fontFamily: "var(--font-fredoka)" }}
                            >
                                {detail.title}
                            </h1>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {detail.genre.map((genre, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 rounded-full bg-slate-200 text-sm"
                                        style={{ fontFamily: "var(--font-lato)" }}
                                    >
                                        {genre}
                                    </span>
                                ))}
                            </div>
                            <div className="overflow-y-auto mb-4">
                                <p
                                    className="text-slate-600 text-sm leading-relaxed whitespace-break-spaces"
                                    style={{ fontFamily: "var(--font-lato)" }}
                                >
                                    {detail.description}
                                </p>
                            </div>

                            <button
                                type="button"
                                className={`fav-btn flex items-center gap-2 px-5 py-2 rounded-xl transition-all mb-2 cursor-pointer ${detail.isFavorite ? "fav-active bg-red-500": "fav-inactive bg-gray-200"}`}
                                onClick={(e) => handleFavorite(e, detail.id, detail.isFavorite ? false : true) }
                            >
                                <span>
                                    <Heart size={20} strokeWidth={3}/> 
                                </span>
                                <span>
                                    {detail.isFavorite ? "Favorite" : "Unfavorite"}
                                </span>
                            </button>
                            <div
                                className="flex flex-wrap lg:items-center gap-2 p-2 rounded-2xl bg-slate-800 w-fit"
                            >
                                {statusBtn.map((btn, index) => {
                                    const isActive = btn === detail.status

                                    return (
                                        <button
                                            key={index}
                                            type="button"
                                            className={`status-btn flex items-center gap-2 px-5 py-2 rounded-xl font-semibold cursor-pointer transition-all ${icons[btn]?.style} ${isActive ? "active ring-2 ring-white/20" : "inactive"}`}
                                            onClick={(e) => handleUpdateStatus(e, detail.id, btn)}
                                        >
                                            <span>
                                                {icons[btn]?.icon}
                                            </span>
                                            <span>
                                                {icons[btn]?.status}
                                            </span>
                                        </button>
                                    )
                                })}
                            </div>
                            <button
                                type="button"
                                className="absolute bottom-1 right-1 p-2 border border-red-500"
                                onClick={(e) => handleRemove(e, detail.id)}
                            >
                                drop
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AnimeMangaDetailCard