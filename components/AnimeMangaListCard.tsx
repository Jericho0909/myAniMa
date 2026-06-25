import { useContext } from "react";
import Link from "next/link";
import SectionObserverContext from "@/context/SectionObserverContext";
import { handleSaveSectionAndIndex } from "@/utils/saveSection";
import type { AnimeMangaType, SectionKey } from "@/type/model";
import { icons } from "@/constants/statusIcons";

interface AnimeMangaListCardType {
    item: AnimeMangaType; 
    index: number; 
    cardRefs: React.RefObject<Record<SectionKey, (HTMLDivElement | null)[]>>; 
    section: SectionKey;
}

const AnimeMangaListCard = ({ item, index, cardRefs, section }: AnimeMangaListCardType) => {
    const { setActiveSection } = useContext(SectionObserverContext)!


    return (
        <Link
            href={`/${item.type}/${item.title}`}
        >
            <div 
                ref={(el) => {
                    cardRefs.current[section][index] = el;
                }}
                className="group anime-list-card flex items-center gap-3 p-2 border-2 rounded-2xl mb-2 cursor-default relative overflow-visible transition-all ease-in-out "
                onClick={() => {
                    setActiveSection(item.type === "Anime" ? "anime" : "manga")
                    handleSaveSectionAndIndex({ section, index })
                }}
            >

                {/* MAIN ITEM */}
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded-full border-2 border-black shrink-0"
                    loading="lazy"
                />

                <div className="flex-1 min-w-0">
                    <h3
                        className="font-bold text-sm truncate"
                        style={{ fontFamily: "var(--font-lato)" }}
                    >
                        {item.title}
                    </h3>
                </div>

                <div className={`rounded-full z-10 p-1 ${item.status && icons[item.status]?.style}`}>
                    {section === "animeList"
                        ? (
                            item.status && icons[item.status]?.icon
                        )
                        : (
                            item.status && icons[item.status]?.icon
                        )
                    }
                </div>

                {/* SIDEBAR PREVIEW */}
                <div
                    className="item-sidebar fixed top-0 right-0 h-screen w-80 bg-black/90 backdrop-blur-md border-l border-gray-700 p-5 z-50"
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-80 rounded-xl ${item.type === "Anime" ? "object-cover" : "object-fill"}`}
                    />

                    <div className="flex items-center justify-end mt-2">
                        <div className="text-right p-1">
                            <div className={`rounded-full p-1 ${item.status && icons[item.status]?.style}`}>
                                {section === "animeList"
                                    ? (
                                        item.status && icons[item.status]?.icon
                                    )
                                    : (
                                        item.status && icons[item.status]?.icon
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <h3
                        className="text-white font-bold mt-3 text-xl"
                        style={{ fontFamily: "var(--font-fredoka)" }}
                    >
                        {item.title}
                    </h3>

                    <p
                        className="text-gray-300 mt-3 text-sm leading-relaxed line-clamp-4"
                        style={{ fontFamily: "var(--font-lato)" }}
                    >
                        {item.description}
                    </p>

                    <div className="flex gap-2 flex-wrap mt-4">
                        {item.genre.map((genre, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 rounded-full bg-white/10 text-white text-xs border border-white/10"
                            >
                                {genre}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default AnimeMangaListCard;