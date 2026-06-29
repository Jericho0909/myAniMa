'use client'

import { AnimeMangaType, SectionKey } from "@/type/model"
import useAnimeManga from "@/hooks/useAnimeManga"
import { useCardRefs } from "@/hooks/useCardRefs"
import { getFavoriteAnime,
    getFavoriteManga,
    getCompletedAnime,
    getCompletedManga,
    getWatchingAnime,
    getReadingManga,
} from "@/app/selectors/animeMangaSelectors"
import AnimeMangaCard from "./AnimeMangaCard"
import AnimeMangaCardSkeleton from "./SkeletonCard"
const List = ({section}: {section: SectionKey}) => {
    
    const { data: animeManga, isLoading } = useAnimeManga()
    const cardRefs = useCardRefs()

    if(isLoading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="loader4"></div>
            </div>
        )
    }

    const buildData = (animeManga: AnimeMangaType[]) => ({
        animeFav: getFavoriteAnime(animeManga),
        mangaFav: getFavoriteManga(animeManga),
        animeList: [
            ...getCompletedAnime(animeManga),
            ...getWatchingAnime(animeManga),
        ],
        mangaList: [
            ...getCompletedManga(animeManga),
            ...getReadingManga(animeManga),
        ],
    })

    const setOfData = buildData(animeManga!)
    const data = setOfData[section as keyof typeof setOfData]


    return(
        <>
            {section === "animeFav" || section === "mangaFav"
                ? (
                    <section className="h-auto my-16">
                        <h3 
                            className="text-3xl font-bold mt-8 text-left p-2" 
                            style={{ fontFamily: 'var(--font-fredoka)' }}
                        >
                            {section === "animeFav"
                                ? "My Favorite Anime"
                                : "My Favorite Manga"
                            }
                        </h3>
                        {isLoading
                            ? (
                                Array.from({ length: 10 }).map((_, index) => (
                                    <AnimeMangaCardSkeleton 
                                        key={index} 
                                        w={"sm:w-64 lg:w-72"}
                                    />
                                ))
                            )
                            : (
                                data.length !== 0
                                ? (
                                        <div className="max-w-full md:max-w-[90%] min-h-screen mx-auto p-6 bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg border border-slate-200">
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 p-2">
                                            {data.map((item, index) => (
                                                <AnimeMangaCard 
                                                    key={index} 
                                                    index={index} 
                                                    item={item} 
                                                    w={"sm:w-64 lg:w-full"}
                                                    cardRefs={cardRefs}
                                                    section={section}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )
                                : (
                                    <p 
                                        className="text-base font-semibold text-gray-500"
                                        style={{ fontFamily: 'var(--font-lato)' }}
                                    >
                                        {section === "animeFav"
                                            ? "Add your Favorite Anime"
                                            : "Add your Favorite Manga"
                                        }
                                    </p>
                                )
                            )
                        }
                    </section>
                )
                : (
                    <section className="h-auto my-16">
                        <div>
                            <h3 
                                className="text-3xl font-bold mt-8 text-left p-2" 
                                style={{ fontFamily: 'var(--font-fredoka)' }}
                            >
                                {section === "animeList"
                                    ? "Anime I've Finished"
                                    : "Manga I've Finished"
                                }
                            </h3>
                            {isLoading
                                ? (
                                    Array.from({ length: 10 }).map((_, index) => (
                                    <AnimeMangaCardSkeleton 
                                        key={index} 
                                        w={"sm:w-64 lg:w-72"}
                                    />
                                ))
                                )
                                : (
                                    data.length !== 0
                                    ? (
                                            <div className="max-w-full md:max-w-[90%] min-h-screen mx-auto p-6 bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg border border-slate-200">
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 p-2">
                                                {data.map((item, index) => (
                                                item.status === "Completed" && (
                                                    <AnimeMangaCard 
                                                        key={index} 
                                                        index={index} 
                                                        item={item} 
                                                        w={"sm:w-64 lg:w-full"}
                                                        cardRefs={cardRefs}
                                                        section={section}
                                                    />
                                                )
                                            ))}
                                            </div>
                                        </div>
                                    )
                                    : (
                                        <p 
                                            className="text-base font-semibold text-gray-500"
                                            style={{ fontFamily: 'var(--font-lato)' }}
                                        >
                                            {section === "animeList"
                                                ? "You haven’t finished any anime yet."
                                                : "You haven’t finished any manga yet."
                                            }
                                        </p>
                                    )
                                )
                            }
                        </div>
                        <div>
                            <h2 
                                className="text-3xl font-bold mt-8 text-left p-2" 
                                style={{ fontFamily: 'var(--font-fredoka)' }}
                            >
                                {section === "animeList"
                                    ? "What I'm Watching"
                                    : "What I'm Reading"
                                }
                            </h2>
                            {isLoading
                                ? (
                                    Array.from({ length: 10 }).map((_, index) => (
                                    <AnimeMangaCardSkeleton 
                                        key={index} 
                                        w={"sm:w-64 lg:w-72"}
                                    />
                                ))
                                )
                                : (
                                    data.length !== 0
                                    ? (
                                            <div className="max-w-full md:max-w-[90%] min-h-screen mx-auto p-6 bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg border border-slate-200">
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 p-2">
                                                {data.map((item, index) => (
                                                item.status !== "Completed" && (
                                                    <AnimeMangaCard 
                                                        key={index} 
                                                        index={index} 
                                                        item={item} 
                                                        w={"sm:w-64 lg:w-full"}
                                                        cardRefs={cardRefs}
                                                        section={section}
                                                    />
                                                )
                                            ))}
                                            </div>
                                        </div>
                                    )
                                    : (
                                        <p 
                                            className="text-base font-semibold text-gray-500"
                                            style={{ fontFamily: 'var(--font-lato)' }}
                                        >
                                            {section === "animeList"
                                                ? "Your anime journey starts here.  Add your first anime!"
                                                : "Nothing to read yet. Discover a new manga today"
                                            }
                                        </p>
                                    )
                                )
                            }
                        </div>
                    </section>
                )
            }
        </>
    )
}

export default List
