import type { AnimeMangaType, SectionKey } from "@/type/model";
import AnimeMangaCard from "./AnimeMangaCard";
import AnimeCardSkeleton from "./skeletonCard";
import interSectionObserver from "@/hooks/useIntersectionObserver";
import { motion } from "framer-motion";


const AnimeMangaList = ({ data, animeMangaListRefs, loading, section }: { data: AnimeMangaType[]; animeMangaListRefs: React.RefObject<Record<SectionKey, (HTMLDivElement | null)[]>>; loading: boolean; section: SectionKey }) => {
    const animeMangaSection = interSectionObserver({ th: 0.2 })

    return (
        <section 
            id={section}
            className="w-full py-8 overflow-hidden"
        >
            {data.length !== 0
                ? (
                    <motion.div
                        ref={animeMangaSection.ref}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 max-w-full sm:max-w-[90%] h-auto mx-auto p-6 bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg border border-slate-200"
                    >
                        {loading
                            ? (
                                Array.from({ length: 5 }).map((_, index) => (
                                    <AnimeCardSkeleton key={index} />
                                ))
                            )
                            : (
                                data.map((item, index) => (
                                    <AnimeMangaCard key={item.id} item={item} index={index} w={"w-full"} cardRefs={animeMangaListRefs} section={section}/>
                                ))
                            )
                        }
                    </motion.div>
                )
                : (
                    <motion.div
                        ref={animeMangaSection.ref}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center justify-center max-w-full sm:max-w-[90%] h-60 sm:h-80 mx-auto p-6 bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg border border-slate-200"
                    >
                        <p 
                            className="text-base font-semibold text-gray-500"
                            style={{ fontFamily: 'var(--font-lato)' }}
                        >
                            {section === "animeFav"
                                ? "Start building your anime collection"
                                : "Start building your manga collection."
                            }
                        </p>
                    </motion.div>
                )
            }
        </section>
    )
}

export default AnimeMangaList;