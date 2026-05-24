'use client';

import { useRef } from 'react';
import AnimeCard from './AnimeCard';
import { ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react';
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
    <section className="w-full py-8 px-1">
        <div className="max-w-full md:max-w-[90%] h-auto mx-auto p-6 bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg border border-slate-200">
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
                        <AnimeCard key={index} item={item}/>
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
