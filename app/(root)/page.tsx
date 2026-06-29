'use client'

import { useContext, useRef, useEffect  } from 'react'
import useAnimeManga from '@/hooks/useAnimeManga';
import { useCardRefs } from '@/hooks/useCardRefs';
import SectionObserverContext from '@/context/SectionObserverContext'
import Slider from "@/components/Slider";
import HorizontalCarousel from "@/components/HorizontalCarousel"
import MyAnimeManga from "@/components/MyAnimeManga";
import AnimeMangaList from "@/components/AnimeMangaList";
import { getFavoriteAnime,
    getCompletedAnime,
    getWatchingAnime,
    getAnimeList,
    getFavoriteManga,
    getCompletedManga,
    getReadingManga,
    getMangaList
} from '../selectors/animeMangaSelectors';
const Page = () => {
    const { data: animeManga = [], isLoading } = useAnimeManga()
    const cardRefs = useCardRefs()
    const { sectionRefs } = useContext(SectionObserverContext)!
    

    useEffect(() => {
        const useCustomScroll = JSON.parse(
            sessionStorage.getItem("useCustomScroll") || "false"
        )

        if (!useCustomScroll) return;
        const savedSection = sessionStorage.getItem("section") as keyof typeof cardRefs.current;
        const savedIndex = sessionStorage.getItem("index")

        if (!savedSection || savedIndex === null) return;

        const sectionRef = cardRefs.current[savedSection]
        const card = sectionRef?.[Number(savedIndex)]
        const section = document.getElementById(savedSection)

        const element = card ?? section

        if (!element) return

        setTimeout(() => {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center",
            })

            sessionStorage.clear()
        }, 900)

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
                    data={getFavoriteAnime(animeManga)}
                    cardRefs={cardRefs}
                    loading = {isLoading}
                    section="animeFav"
                    type = "Anime"
                />
                <h2 
                    className="text-3xl font-bold mt-8 text-left p-2" 
                    style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                    My Anime List
                </h2>
                <MyAnimeManga
                    completedData={getCompletedAnime(animeManga)}
                    currentData={getWatchingAnime(animeManga)}
                    listCardRefs={cardRefs}
                    loading = {isLoading}
                    section="animeList"
                    type="Anime"
                />
                <h2 
                    className="text-3xl font-bold mt-8 text-left p-2" 
                    style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                    My Watchlist
                </h2>
                <AnimeMangaList 
                    data={getAnimeList(animeManga)}
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
                    data={getFavoriteManga(animeManga)}
                    cardRefs={cardRefs}
                    loading = {isLoading}
                    section="mangaFav"
                    type="Manga"
                />
                <h2 
                    className="text-3xl font-bold mt-8 text-left p-2" 
                    style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                    My Manga List
                </h2>
                <MyAnimeManga
                    completedData={getCompletedManga(animeManga)}
                    currentData={getReadingManga(animeManga)}
                    listCardRefs={cardRefs}
                    loading = {isLoading}
                    section="mangaList"
                    type="Manga"
                />
                <h2 
                    className="text-3xl font-bold mt-8 text-left p-2" 
                    style={{ fontFamily: 'var(--font-fredoka)' }}
                >
                    Reading List
                </h2>
                <AnimeMangaList 
                    data={getMangaList(animeManga)}
                    animeMangaListRefs={cardRefs}
                    loading = {isLoading}
                    section="myMangaReadingList"
                />
            </section>
        </main>
    )
}

export default Page