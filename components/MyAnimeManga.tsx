import type { AnimeMangaType, SectionKey } from "@/type/model";
import AnimeMangaListCard from "./AnimeMangaListCard";
import interSectionObserver from "@/hooks/useIntersectionObserver";
import AnimeCardListSkeleton from "./SkeletonCardList";
import { motion } from "framer-motion";

interface MyAnimeMangaType {
    completedData: AnimeMangaType[]; 
    currentData: AnimeMangaType[]; 
    listCardRefs: React.RefObject<Record<SectionKey, (HTMLDivElement | null)[]>>; 
    loading: boolean; 
    section: SectionKey;
}

const MyAnimeManga = ({completedData, currentData, listCardRefs, loading, section}: MyAnimeMangaType ) => {
    const myAnimeMangaSection = interSectionObserver({ th: 0.2 })
    return (
        <section 
            id={section}
            className="w-full py-8 overflow-hidden"
        >
            <motion.div 
                ref={myAnimeMangaSection.ref}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-full sm:max-w-[90%] h-152 mx-auto p-6 bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg border border-slate-200"
            >
                <div className="w-full h-auto bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <h3
                        className="text-2xl font-bold text-left p-2"
                        style={{ fontFamily: 'var(--font-fredoka)' }}
                    >
                        {section === "animeList"
                            ? "Anime I've Finished"
                            : "Manga I've Finished"
                        }
                    </h3>
                    {loading 
                        ? (
                            Array.from({ length: 5 }).map((_, index) => (
                                <AnimeCardListSkeleton key={index} />
                            ))
                        )
                        : (
                            completedData.length !== 0
                            ? (
                                completedData.map((item, index) => (
                                    <AnimeMangaListCard key={index} item={item} index={index} cardRefs={listCardRefs} section={section} />
                                ))
                            )
                            : (
                                <div className="w-full h-full flex flex-col items-center justify-center">
                                    <p
                                        className="text-base font-semibold text-gray-500"
                                        style={{ fontFamily: 'var(--font-lato)'}}
                                    >
                                        {section === "animeList"
                                            ? "You haven’t finished any anime yet."
                                            : "You haven’t finished any manga yet."
                                        }
                                    </p>
                                </div>
                            )
                        
                        )
                    }
                </div>
                <div className="w-full h-auto bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <h3
                        className="text-2xl font-bold text-left p-2"
                        style={{ fontFamily: 'var(--font-fredoka)' }}
                    >
                        {section === "animeList"
                            ? "What I'm Watching"
                            : "What I'm Reading"
                        }
                    </h3>
                    {loading
                        ? (
                            Array.from({ length: 5 }).map((_, index) => (
                                <AnimeCardListSkeleton key={index} />
                            ))
                        )
                        : (
                            currentData.length !== 0
                            ? (
                                currentData.map((item, index) => (
                                    <AnimeMangaListCard key={index} item={item} index={index} cardRefs={listCardRefs} section={section} />
                                ))
                            )
                            : (
                                <div className="w-full h-full flex flex-col items-center justify-center">
                                    <p
                                        className="text-base font-semibold text-gray-500"
                                        style={{ fontFamily: 'var(--font-lato)'}}
                                    >
                                        {section === "animeList"
                                            ? "Your anime journey starts here.  Add your first anime!"
                                            : "Nothing to read yet. Discover a new manga today"
                                        }
                                    </p>
                                </div>
                            )
                            
                        )
                    }
                </div>
            </motion.div>
        </section>
    )
}

export default MyAnimeManga