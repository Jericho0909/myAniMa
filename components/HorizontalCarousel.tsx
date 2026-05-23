'use client';

import { useRef } from 'react';
import { ArrowBigLeftDash, ArrowBigRightDash, Heart } from 'lucide-react';
import { AnimeType } from '@/type/model';

const HorizontalCarousel = ({ data }: { data: AnimeType[] }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    
    if (scrollContainerRef.current) {
      const scrollAmount = 240;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full py-8">
        <div className="max-w-full sm:max-w-[90%] mx-auto">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => scroll('left')}
                    className="p-2 hover:bg-gray-200 rounded"
                >
                    <ArrowBigLeftDash size={24} />
                </button>
                <div 
                    ref={scrollContainerRef} 
                    className="flex gap-4 overflow-hidden flex-1"
                >
                    {data.map((item, index) => (
                        <div 
                            key={index} 
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
                    ))}
                </div>
                <button
                    onClick={() => scroll('right')}
                    className="p-2 hover:bg-gray-200 rounded"
                >
                    <ArrowBigRightDash size={24} />
                </button>
            </div>
        </div>
    </section>
  );
};

export default HorizontalCarousel;
