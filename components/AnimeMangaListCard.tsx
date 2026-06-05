import { useRef } from "react";
import Link from "next/link";
import type { AnimeMangaType } from "@/type/model";
import { Heart, Eye } from "lucide-react";

const AnimeMangaListCard = ({ item, index }: { item: AnimeMangaType; index: number }) => {
    const listCardRef = useRef<HTMLDivElement | null>(null);

    return (
        <Link
            href={`/${item.status}/${item.title}`}
        >
            <div 
                ref={(el) => {listCardRef.current = el}}
                className="group anime-list-card flex items-center gap-3 p-2 border-2 rounded-2xl mb-2 relative overflow-visible cursor-pointer"
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

                <button type="button" className="icon-btn z-10 p-1 cursor-pointer">
                    {item.status === "planToWatch" ||
                    item.status === "planToRead" ? (
                        <Eye size={20} className="text-gray-500" />
                    ) : (
                        <Heart
                            size={20}
                            className={`${
                                item.isFavorite
                                    ? "text-red-500 fill-red-500"
                                    : "text-gray-500"
                            }`}
                        />
                    )}
                </button>

                {/* SIDEBAR PREVIEW */}
                <div
                    className="item-sidebar fixed top-0 right-0 h-screen w-80 bg-black/90 backdrop-blur-md border-l border-gray-700 p-5 z-50"
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-80 rounded-xl ${item.type === "Anime" ? "object-cover" : "object-fill"}`}
                    />

                    <div className="text-right mt-2">
                        <button type="button" className="icon-btn p-1 cursor-pointer">
                            {item.status === "planToWatch" || item.status === "planToRead" 
                                ? (
                                <Eye size={20} className="text-gray-500" />
                                ) 
                                : (
                                    <Heart
                                        size={20}
                                        className={`${
                                            item.isFavorite
                                                ? "text-red-500 fill-red-500"
                                                : "text-gray-500"
                                        }`}
                                    />
                                )
                            }
                        </button>
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