"use client";

import { useState, useEffect } from "react";
import { getFavoriteAnime,
    getWatchList
} from "@/lib/animeManga";
import type { AnimeMangaType } from "@/type/model";

const useAnimeMangaData = () => {
    const [ data, setData ] = useState<AnimeMangaType[]>([])
    const [ favoriteAnime, setFavoriteAnime ] = useState<AnimeMangaType[]>([])
    const [ favoriteManga, setFavoriteManga ] = useState<AnimeMangaType[]>([])
    const [ completedAnime, setCompletedAnime ] = useState<AnimeMangaType[]>([])
    const [ completedManga, setCompletedManga ] = useState<AnimeMangaType[]>([])
    const [ currentAnime, setCurrentAnime ] = useState<AnimeMangaType[]>([])
    const [ currentManga, setCurrentManga ] = useState<AnimeMangaType[]>([])
    const [ animeList, setAnimeList ] = useState<AnimeMangaType[]>([])
    const [ mangaList, setMangaList ] = useState<AnimeMangaType[]>([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const favoriteAnimeData = await getFavoriteAnime()
                const animeListData = await getWatchList()
                setFavoriteAnime(favoriteAnimeData)
                setAnimeList(animeListData)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return {
        data,
        favoriteAnime,
        favoriteManga,
        completedAnime,
        completedManga,
        currentAnime,
        currentManga,
        animeList,
        mangaList
    }
}

export default useAnimeMangaData