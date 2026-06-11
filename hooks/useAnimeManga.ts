"use client";

import { useState, useEffect } from "react";
import { getFavoriteAnime,
    getCompletedAnime,
    getWatchingAnime,
    getAnimeList,
    getFavoriteManga,
    getCompletedManga,
    getReadingManga,
    getMangaList
} from "@/lib/animeManga";
import type { AnimeMangaType } from "@/type/model";

const useAnimeMangaData = () => {
    const [ loading, setLoading ] = useState(true)
    const [ data, setData ] = useState<AnimeMangaType[]>([])
    const [ favoriteAnime, setFavoriteAnime ] = useState<AnimeMangaType[]>([])
    const [ favoriteManga, setFavoriteManga ] = useState<AnimeMangaType[]>([])
    const [ completedAnime, setCompletedAnime ] = useState<AnimeMangaType[]>([])
    const [ completedManga, setCompletedManga ] = useState<AnimeMangaType[]>([])
    const [ watchingAnime, setWatchingAnime ] = useState<AnimeMangaType[]>([])
    const [ readingManga, setReadingtManga ] = useState<AnimeMangaType[]>([])
    const [ animeList, setAnimeList ] = useState<AnimeMangaType[]>([])
    const [ mangaList, setMangaList ] = useState<AnimeMangaType[]>([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const favoriteAnimeData = await getFavoriteAnime()
                const completedAnimeData = await getCompletedAnime()
                const watchingAnimeData = await getWatchingAnime()
                const animeListData = await getAnimeList()
                const favoriteMangaData = await getFavoriteManga()
                const completedMangaData = await getCompletedManga()
                const readingMangaData = await getReadingManga()
                const mangaListData = await getMangaList()
                setFavoriteAnime(favoriteAnimeData)
                setCompletedAnime(completedAnimeData)
                setWatchingAnime(watchingAnimeData)
                setAnimeList(animeListData)
                setFavoriteManga(favoriteMangaData)
                setCompletedManga(completedMangaData)
                setReadingtManga(readingMangaData)
                setMangaList(mangaListData)
            } catch (error) {
                console.log(error)
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, 1500)
            }
        }
        fetchData()
    }, [])

    return {
        loading,
        data,
        favoriteAnime,
        favoriteManga,
        completedAnime,
        completedManga,
        watchingAnime,
        readingManga,
        animeList,
        mangaList
    }
}

export default useAnimeMangaData