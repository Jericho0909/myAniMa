'use client';

import { useRef } from 'react';
import Link from "next/link";
import interSectionObserver from '@/hooks/useIntersectionObserver';
import AnimeMangaCard from './AnimeMangaCard';
import AnimeMangaCardSkeleton from './SkeletonCard';
import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react';
import { AnimeMangaType, SectionKey } from '@/type/model';
import { handleSaveSectionAndIndex } from '@/utils/saveSection';
import { motion } from 'framer-motion';

interface HorizontalCarouselType {
    data: AnimeMangaType[]; 
    cardRefs: React.RefObject<Record<SectionKey, (HTMLDivElement | null)[]>>;
    loading: boolean; 
    section: SectionKey;
    type: string;
}

const HorizontalCarousel = ({ data, cardRefs, loading, section, type }: HorizontalCarouselType) => {
    const horizontalCarouselSection = interSectionObserver({ th: 0.2 })
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 840;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section 
            id={section}
            className="w-full py-8 px-1 overflow-hidden"
        >
            <motion.div 
                ref={horizontalCarouselSection.ref}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="relative max-w-full md:max-w-[90%] h-auto mx-auto p-6 bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg border border-slate-200"
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
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => scroll('left')}
                        className="p-2 hover:bg-gray-200 rounded"
                    >
                        <ArrowBigLeftDash size={24} />
                    </button>
                    <div 
                        ref={scrollContainerRef} 
                        className={`flex gap-4 overflow-hidden flex-1
                            ${data.length !== 0 ? "" : "items-center justify-center h-60 sm:h-80" }
                        `}
                    >
                        {loading 
                            ? (
                                Array.from({ length: 8 }).map((_, index) => (
                                    <AnimeMangaCardSkeleton 
                                        key={index} 
                                        w={"sm:w-64 lg:w-72"}
                                    />
                                ))
                            )
                            : (
                                data.length !== 0
                                ? (
                                    data.map((item, index) => (
                                        <AnimeMangaCard 
                                            key={index} 
                                            index={index} 
                                            item={item} 
                                            w={"w-50 sm:w-64 lg:w-72"}
                                            cardRefs={cardRefs}
                                            section={section}
                                        />
                                    ))
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
                    </div>
                    <button
                        onClick={() => scroll('right')}
                        className="p-2 hover:bg-gray-200 rounded"
                    >
                        <ArrowBigRightDash size={24} />
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default HorizontalCarousel;
