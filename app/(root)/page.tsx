'use client'

import { useContext, useRef, useEffect  } from 'react'
import useAnimeManga from '@/hooks/useAnimeManga';
import SectionObserverContext from '@/context/SectionObserverContext'
import type { SectionKey } from '@/type/model';
import Slider from "@/components/Slider";
import HorizontalCarousel from "@/components/HorizontalCarousel"
import MyAnimeManga from "@/components/MyAnimeManga";
import AnimeMangaList from "@/components/AnimeMangaList";
const Page = () => {
    const { data: animeManga = [], isLoading } = useAnimeManga()
    const { sectionRefs } = useContext(SectionObserverContext)!
    
    const cardRefs = useRef<Record<SectionKey, (HTMLDivElement | null)[]>>({
        animeFav: [],
        mangaFav: [],
        animeList: [],
        mangaList: [],
        myAnimeWatchlist: [],
        myMangaReadingList: [],
    });

    const favoriteAnime = animeManga.filter(data => data.isFavorite === true && data.type === "Anime" )
    const completedAnime = animeManga.filter(data => data.status === "Completed" && data.type === "Anime" )
    const watchingAnime = animeManga.filter(data => data.status === "Watching" && data.type === "Anime" )
    const animeList = animeManga.filter(data => data.status === "PlanToWatch" && data.type === "Anime" )

    const favoriteManga = animeManga.filter(data => data.isFavorite === true && data.type === "Manga" )
    const completedManga = animeManga.filter(data => data.status === "Completed" && data.type === "Manga" )
    const readingManga = animeManga.filter(data => data.status === "Reading" && data.type === "Manga" )
    const mangaList = animeManga.filter(data => data.status === "PlanToRead" && data.type === "Manga" )

    useEffect(() => {
        const savedSection = sessionStorage.getItem("section") as keyof typeof cardRefs.current;
        const savedIndex = sessionStorage.getItem("index")

        if (!savedSection || savedIndex === null) return;

        const sectionRef = cardRefs.current[savedSection]
        const element = sectionRef?.[Number(savedIndex)]

        if (!element) return

        setTimeout(() => {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center",
            })

            sessionStorage.clear()
        }, 300)

    }, [])

    return (
        <main className="min-h-full w-full">
            <section
                id="home"
                ref={sectionRefs.home}
                className="w-auto"
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
                    data={favoriteAnime}
                    cardRefs={cardRefs}
                    loading = {isLoading}
                    section="animeFav"
                />
                <h2 
                    className="text-3xl font-bold mt-8 text-left p-2" 
                    style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                    My Anime List
                </h2>
                <MyAnimeManga
                    completedData={completedAnime}
                    currentData={watchingAnime}
                    listCardRefs={cardRefs}
                    loading = {isLoading}
                    section="animeList"
                />
                <h2 
                    className="text-3xl font-bold mt-8 text-left p-2" 
                    style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                    My Watchlist
                </h2>
                <AnimeMangaList 
                    data={animeList}
                    animeMangaListRefs={cardRefs}
                    loading = {isLoading}
                    section="myAnimeWatchlist"
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
                    data={favoriteManga}
                    cardRefs={cardRefs}
                    loading = {isLoading}
                    section="mangaFav"
                />
                <h2 
                    className="text-3xl font-bold mt-8 text-left p-2" 
                    style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                    My Manga List
                </h2>
                <MyAnimeManga
                    completedData={completedManga}
                    currentData={readingManga}
                    listCardRefs={cardRefs}
                    loading = {isLoading}
                    section="mangaList"
                />
                <h2 
                    className="text-3xl font-bold mt-8 text-left p-2" 
                    style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                    Reading List
                </h2>
                <AnimeMangaList 
                    data={mangaList}
                    animeMangaListRefs={cardRefs}
                    loading = {isLoading}
                    section="myMangaReadingList"
                />
            </section>
        </main>
    )
}

export default Page