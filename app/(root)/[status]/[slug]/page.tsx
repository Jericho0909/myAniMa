import Link from "next/link";
import type {IconItem} from "@/type/model";
import { Favorite_Anime, 
    Favorite_Manga,
    Completed_Anime,
    Current_Anime,
    Completed_Manga,
    Current_Manga,
    Anime_List, 
    Manga_List
} from "@/constants/animeData";
import { Heart, 
    Eye,
    Check,
    Bookmark,
    BookOpenText,
    X
} from "lucide-react";

const AnimeMangaDetail = async ({params}: {params: Promise<{ status: string; slug: string }>}) => {
    const { status, slug } = await params
    const cleanSlug = decodeURIComponent(slug)
    

    const animeDetail = Favorite_Anime.find((a) => a.title === cleanSlug && a.status === status)
    const mangaDetail = Favorite_Manga.find((m) => m.title === cleanSlug && m.status === status)

    const completedAnimeDetail = Completed_Anime.find((a) => a.title === cleanSlug && a.status === status)
    const currentAnimeDetail = Current_Anime.find((a) => a.title === cleanSlug && a.status === status)

    const completedMangaDetail = Completed_Manga.find((m) => m.title === cleanSlug && m.status === status)
    const currentMangaDetail = Current_Manga.find((m) => m.title === cleanSlug && m.status === status)

    const animeListDetail = Anime_List.find((a) => a.title === cleanSlug && a.status === status)
    const mangaListDetail = Manga_List.find((m) => m.title === cleanSlug && m.status === status)

    const icons: Record<string, IconItem> = {
        "watching": { status: "Watching", icon: <Eye size={20} strokeWidth={3}/>, style: "bg-blue-500 text-white" },
        "reading": { status: "Reading", icon: <BookOpenText size={20} strokeWidth={3}/>, style: "bg-purple-500 text-white" },
        "completed": { status: "Completed", icon: <Check size={20} strokeWidth={3}/>, style: "bg-green-500 text-white" },
        "planToWatch": { status: "PlanToWatch", icon: <Bookmark size={20} strokeWidth={3}/>, style: "bg-amber-500 text-white" },
        "planToRead": { status: "PlanToRead", icon: <Bookmark size={20} strokeWidth={3}/>, style: "bg-orange-500 text-white" },
    };

    const detail = animeDetail || mangaDetail || completedAnimeDetail || currentAnimeDetail || completedMangaDetail || currentMangaDetail || animeListDetail || mangaListDetail;


    if (!detail) {
        return (
            <div className="h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 px-4">
                <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center border border-slate-200">
                    <p
                        className="text-sm text-slate-500"
                        style={{ fontFamily: "var(--font-fredoka)" }}
                    >
                        No detail found for <span className="font-semibold text-slate-700">"{cleanSlug}"</span>  
                    </p>

                </div>
            </div>
        )
    }

    return (
        <div className="h-screen bg-slate-50">
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

            {/* Content */}
        
        </div>
    )
}

export default AnimeMangaDetail