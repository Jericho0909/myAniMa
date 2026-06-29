import Link from "next/link";
import { handleSaveSectionAndIndex } from "@/utils/saveSection";
import type { AnimeMangaType, SectionKey } from "@/type/model";
import AnimeMangaListCard from "./AnimeMangaListCard";
import AnimeMangaCardListSkeleton from "./SkeletonCardList";
import interSectionObserver from "@/hooks/useIntersectionObserver";
import { motion } from "framer-motion";

interface MyAnimeMangaType {
    completedData: AnimeMangaType[]; 
    currentData: AnimeMangaType[]; 
    listCardRefs: React.RefObject<Record<SectionKey, (HTMLDivElement | null)[]>>; 
    loading: boolean; 
    section: SectionKey;
    type: string;
}

const MyAnimeManga = ({completedData, currentData, listCardRefs, loading, section, type}: MyAnimeMangaType ) => {
    const myAnimeMangaSection = interSectionObserver({ th: 0.2 })
    return (
        <section 
            id={section}
            className="relative w-full py-8 overflow-hidden"
        >
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="relative max-w-full sm:max-w-[90%] mx-auto p-6 bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg border border-slate-200"
            >
                <Link
                    href={`/${type}/${section}`}
                    onClick={() =>
                        handleSaveSectionAndIndex({
                            section: section,
                            index: -1,
                            isScrollRestoration: false
                        })
                    }
                >
                    <div className="see-more-link absolute bottom-1 right-3 text-sm text-red-500">
                        see more
                    </div>
                </Link>
                <div
                    ref={myAnimeMangaSection.ref}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-hidden"
                >
                    <div className="w-full h-152 bg-white rounded-xl p-6 shadow-sm border border-slate-100">
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
                                    <AnimeMangaCardListSkeleton key={index} />
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
                    <div className="w-full h-152 bg-white rounded-xl p-6 shadow-sm border border-slate-100">
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
                                    <AnimeMangaCardListSkeleton key={index} />
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
                </div>
            </motion.div>
        </section>
    )
}

export default MyAnimeManga