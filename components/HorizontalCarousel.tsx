'use client';

import { useRef } from 'react';
import { ArrowBigLeftDash, ArrowBigRightDash, Heart } from 'lucide-react';



const CAROUSEL_ITEMS = [
  {
    id: "1",
    title: "Attack on Titan",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: "Action, Fantasy",
    isFavorite: true
  },
  {
    id: "2",
    title: "Demon Slayer",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: "Action, Supernatural",
    isFavorite: false
  },
  {
    id: "3",
    title: "My Teen Romantic Comedy",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254610/snafuW_ldvh0e.webp",
    genre: "Romance, Comedy",
    isFavorite: true
  },
  {
    id: "4",
    title: "Jujutsu Kaisen",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: "Action, Supernatural",
    isFavorite: true
  },
  {
    id: "5",
    title: "Steins;Gate",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: "Sci-Fi, Thriller",
    isFavorite: true
  },
  {
    id: "6",
    title: "Jujutsu Kaisen",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: "Action, Supernatural",
    isFavorite: true
  },
  {
    id: "7",
    title: "Steins;Gate",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: "Sci-Fi, Thriller",
    isFavorite: true
  },
  {
    id: "8",
    title: "Jujutsu Kaisen",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254585/aotW_j0i9vt.webp",
    genre: "Action, Supernatural",
    isFavorite: true
  },
  {
    id: "9",
    title: "Steins;Gate",
    image: "https://res.cloudinary.com/daxhmcpkq/image/upload/v1779254597/dsW_kelu9f.webp",
    genre: "Sci-Fi, Thriller",
    isFavorite: true
  },
];

const HorizontalCarousel = () => {
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
                    {CAROUSEL_ITEMS.map((item, index) => (
                        <div 
                            key={index} 
                            className="shrink-0 w-56 h-auto rounded-tl-xl rounded-br-xl overflow-hidden border border-gray-300 cursor-pointer relative"
                        >
                            <button
                                type="button"
                                className="absolute top-0 right-0 p-1"
                            >
                                <Heart 
                                    size={20} 
                                    className={`${item.isFavorite ? 'text-red-500 fill-red-500' : 'text-white'}`}
                                />
                            </button>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-80 object-cover"
                            />
                            <h3
                                className="font-semibold text-lg mt-2 px-2 truncate"
                                style={{ fontFamily: 'var(--font-fredoka)' }}
                            >
                                {item.title}
                            </h3>
                            <p
                                className="text-sm text-gray-600 px-2 mb-1"
                                style={{ fontFamily: 'var(--font-lato)' }}
                            >
                                {item.genre}
                            </p>
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
