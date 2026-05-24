import type { AnimeType } from "@/type/model";
import { Heart, Eye } from 'lucide-react';

const AnimeListCard = ({ anime }: { anime: AnimeType }) => {
    return (
        <div className="flex items-center gap-2 p-2 border-2 rounded-2xl mb-2">
            <img
                src={anime.image}
                alt={anime.title}
                className="w-12 h-12 object-cover rounded-full border-2 border-black"
                loading="lazy"
            />
            <div className="flex-1">
                <span 
                    className="font-bold text-sm"
                    style={{ fontFamily: 'var(--font-lato)' }}
                >
                    {anime.title}
                </span>
            </div>
            <button
                type="button"
                className="p-1 icon-btn"
            >
                {anime.status === "planToWatch" || anime.status === "planToRead" ? (
                    <Eye className={`transition-colors duration-300 ${anime.isFavorite ? 'text-pink-600' : 'text-gray-500'}`} />
                ) : (
                    <Heart className={`transition-colors duration-300 ${anime.isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-500'}`} />
                )}
            </button>
        </div>
    )
}

export default AnimeListCard