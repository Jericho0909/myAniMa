import type { AnimeType } from "@/type/model";
import { Heart, Eye } from "lucide-react";

const AnimeListCard = ({ anime }: { anime: AnimeType }) => {
    return (
        <div className="group anime-list-card flex items-center gap-3 p-2 border-2 rounded-2xl mb-2 relative overflow-visible">

            {/* MAIN ITEM */}
            <img
                src={anime.image}
                alt={anime.title}
                className="w-12 h-12 object-cover rounded-full border-2 border-black shrink-0"
                loading="lazy"
            />

            <div className="flex-1 min-w-0">
                <h3
                    className="font-bold text-sm truncate"
                    style={{ fontFamily: "var(--font-lato)" }}
                >
                    {anime.title}
                </h3>
            </div>

            <button type="button" className="icon-btn z-10 p-1 cursor-pointer">
                {anime.status === "planToWatch" ||
                anime.status === "planToRead" ? (
                    <Eye size={20} className="text-gray-500" />
                ) : (
                    <Heart
                        size={20}
                        className={`${
                            anime.isFavorite
                                ? "text-red-500 fill-red-500"
                                : "text-gray-500"
                        }`}
                    />
                )}
            </button>

            {/* SIDEBAR PREVIEW */}
            <div
                className="anime-sidebar fixed top-0 right-0 h-screen w-80 bg-black/90 backdrop-blur-md border-l border-gray-700 p-5 z-50"
            >
                <img
                    src={anime.image}
                    alt={anime.title}
                    className="w-full h-48 rounded-xl object-cover"
                />

                <h2
                    className="text-white font-bold mt-4 text-xl"
                    style={{ fontFamily: "var(--font-fredoka)" }}
                >
                    {anime.title}
                </h2>

                <p
                    className="text-gray-300 mt-3 text-sm leading-relaxed line-clamp-4"
                    style={{ fontFamily: "var(--font-lato)" }}
                >
                    {anime.description}
                </p>

                <div className="flex gap-2 flex-wrap mt-4">
                    {anime.genre.map((genre, index) => (
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
    );
};

export default AnimeListCard;