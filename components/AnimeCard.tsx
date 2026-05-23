import type { AnimeType } from "@/type/model";
import { Heart } from "lucide-react";

const AnimeCard = ({ item}: { item: AnimeType }) => {
    return (
        <div 
            className="shrink-0 w-56 h-auto rounded-tl-xl rounded-br-xl overflow-hidden border border-gray-300 cursor-pointer relative"
        >
            <button
                type="button"
                className="absolute bottom-0 right-0 p-1 favorite-heart-button"
            >
                <Heart
                    size={20} 
                    className={`cursor-pointer ${item.isFavorite ? 'text-red-500 fill-red-500' : 'text-black'}`}
                />
            </button>
            <img
                src={item.image}
                alt={item.title}
                className={`w-full h-80 ${item.type === "Anime" ? "object-cover" : "object-fill"}`}
            />
            <h3
                className="font-semibold text-lg mt-2 px-2 truncate"
                style={{ fontFamily: 'var(--font-fredoka)' }}
            >
                {item.title}
            </h3>
            {item.genre.map((genre, genreIndex) => (
                genreIndex < 2 && (
                    <span
                        key={genreIndex}
                        className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-2 mx-1 my-2 font-semibold"
                        style={{ fontFamily: 'var(--font-lato)' }}
                    >
                        {genre}
                    </span>
                )
            ))}
        </div>
    )
}

export default AnimeCard;