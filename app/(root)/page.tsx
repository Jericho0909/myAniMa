'use client'

import { useContext, useRef, useEffect  } from 'react'
import SectionObserverContext from '@/context/SectionObserverContext'
import useAnimeMangaData from '@/hooks/useAnimeManga';
import type { SectionKey } from '@/type/model';
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
    const { loading,
        favoriteAnime, 
        completedAnime,
        watchingAnime,
        animeList 
} = useAnimeMangaData()
    const cardRefs = useRef<Record<SectionKey, (HTMLDivElement | null)[]>>({
        animeFav: [],
        mangaFav: [],
        animeList: [],
        mangaList: [],
        myAnimeWatchlist: [],
        myMangaReadingList: [],
    });


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

    useEffect(() => {
        console.log(favoriteAnime)
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
                    loading = {loading}
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
                    loading = {loading}
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
                    data={Favorite_Manga}
                    cardRefs={cardRefs}
                    loading = {loading}
                    section="mangaFav"
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
                    listCardRefs={cardRefs}
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
                    animeMangaListRefs={cardRefs}
                    loading = {loading}
                    section="myMangaReadingList"
                />
            </section>
        </main>
    )
}

export default Page