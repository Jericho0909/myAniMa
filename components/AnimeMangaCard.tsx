'use client'

import { useContext } from "react";
import SectionObserverContext from "@/context/SectionObserverContext";
import { handleSaveSectionAndIndex } from "@/utils/saveSection";
import { icons } from "@/constants/statusIcons";
import type { AnimeMangaType, SectionKey } from "@/type/model";
import Link from "next/link";

interface AnimeMangaCardType {
    index: number; 
    item: AnimeMangaType; 
    w: string; 
    cardRefs: React.RefObject<Record<SectionKey, (HTMLDivElement | null)[]>>; 
    section: SectionKey;
}

const AnimeMangaCard = ({ index, item, w, cardRefs, section }: AnimeMangaCardType) => {
    const { setActiveSection } = useContext(SectionObserverContext)!

    return (
        <Link
            href={`/${item.type}/${section}/${item.title}`}
        >
            <div
                ref={(el) => {
                    cardRefs.current[section][index] = el
                }}
                className={`group shrink-0 ${w} rounded-tl-xl rounded-br-xl overflow-hidden border border-gray-600`}
                onClick={() => {
                    setActiveSection(item.type === "Anime" ? "anime" : "manga");
                    handleSaveSectionAndIndex({ 
                        section, 
                        index, 
                        isScrollRestoration: section === "animeFav" || section === "mangaFav" ? true : false
                    })
                    
                }}
            >
                <div className="group anime-card relative overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.title}
                        className={`anime-image w-full ${w} h-60 sm:h-80 ${item.type === "Anime" ? "object-cover" : "object-fill"} transition-transform duration-500`}
                    />

                    {/* Overlay */}
                    <div
                        className="anime-overlay absolute inset-0 bg-black/70 opacity-0  transition-all duration-500 border"
                    />

                    {/* Content */}
                    <div
                        className="anime-content absolute inset-0 z-10 flex flex-col justify-end p-4 opacity-0 translate-y-6  transition-all duration-500 border-b-2 border-yellow-500"
                    >
                        <h3
                            className="text-white font-bold text-lg mb-2"
                            style={{ fontFamily: "var(--font-fredoka)" }}
                        >
                            {item.title}
                        </h3>

                        <p
                            className="text-gray-200 text-sm line-clamp-3 mb-3"
                            style={{ fontFamily: "var(--font-lato)" }}
                        >
                            {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {item.genre.slice(0, 2).map((genre, index) => (
                            <span
                                key={index}
                                className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full"
                            >
                                {genre}
                            </span>
                            ))}
                        </div>
                        <div
                            className={`rounded-full absolute top-2 right-2 p-1 z-20 ${item.status && icons[item.status]?.style}`}
                        >
                            {item.status && icons[item.status]?.icon}
                        </div>
                    </div>
                </div>

                {/* Normal title sa mobile */}
                
            </div>
        </Link>
    );
};

export default AnimeMangaCard;