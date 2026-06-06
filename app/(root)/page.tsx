'use client'

import { useContext, useRef } from 'react'
import SectionObserverContext from '@/context/SectionObserverContext'
import Slider from "@/components/Slider";
import HorizontalCarousel from "@/components/HorizontalCarousel"
import MyAnimeManga from "@/components/MyAnimeManga";
import AnimeMangaList from "@/components/AnimeMangaList";
import { 
    Favorite_Anime, 
    Favorite_Manga, 
    Completed_Anime,
    Current_Anime, 
    Anime_List,
    Completed_Manga, 
    Current_Manga,
    Manga_List
} from "@/constants/animeData";
const Page = () => {
    const { sectionRefs } = useContext(SectionObserverContext)!
    const cardRefs = useRef({
        animeFav: [] as (HTMLDivElement | null)[],
        mangaFav: [] as (HTMLDivElement | null)[],
        animeList: [] as (HTMLDivElement | null)[],
        mangaList: [] as (HTMLDivElement | null)[],
        myAnimeWatchlist: [] as (HTMLDivElement | null)[],
        myMangaReadingList: [] as (HTMLDivElement | null)[]
    });


    return (
        <main className="min-h-full">
            <section
                id="home"
                ref={sectionRefs.home}
                className="w-auto border"
            >
                <Slider/>
            </section>
            <section
                id="anime"
                ref={sectionRefs.anime}
                className="w-auto mt-12 scroll-mt-16"
            >
                <h2 
                    className="text-3xl font-bold mt-8 text-left p-2" 
                    style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                    My Favorite Anime
                </h2>
                <HorizontalCarousel
                    data={Favorite_Anime}
                    cardRefs={cardRefs.current.animeFav}
                    section="animeFavorite"
                />
                <h2 
                    className="text-3xl font-bold mt-8 text-left p-2" 
                    style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                    My Anime List
                </h2>
                <MyAnimeManga
                    completedData={Completed_Anime}
                    currentData={Current_Anime}
                    listCardRefs={cardRefs.current.animeList}
                    section="animeList"
                />
                <h2 
                    className="text-3xl font-bold mt-8 text-left p-2" 
                    style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                    My Watchlist
                </h2>
                <AnimeMangaList 
                    data={Anime_List}
                    animeMangaListRefs={cardRefs.current.animeList}
                    section="animeWatchlist"
                />
            </section>
            <section
                id="manga"
                ref={sectionRefs.manga}
                className="w-auto mt-12 scroll-mt-16"
            >
                <h2 
                    className="text-3xl font-bold mt-8 text-left p-2" 
                    style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                    My Favorite Manga
                </h2>
                <HorizontalCarousel
                    data={Favorite_Manga}
                    cardRefs={cardRefs.current.mangaFav}
                    section="mangaFavorite"
                />
                <h2 
                    className="text-3xl font-bold mt-8 text-left p-2" 
                    style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                    My Manga List
                </h2>
                <MyAnimeManga
                    completedData={Completed_Manga}
                    currentData={Current_Manga}
                    listCardRefs={cardRefs.current.mangaList}
                    section="mangaList"
                />
                <h2 
                    className="text-3xl font-bold mt-8 text-left p-2" 
                    style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                    Reading List
                </h2>
                <AnimeMangaList 
                    data={Manga_List}
                    animeMangaListRefs={cardRefs.current.mangaList}
                    section="mangaReadingList"
                />
            </section>
        </main>
    )
}

export default Page