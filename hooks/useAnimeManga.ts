"use client";

import { useState, useEffect } from "react";
import { getFavoriteAnime } from "@/lib/animeManga";
import type { AnimeMangaType } from "@/type/model";

const useAnimeMangaData = () => {
    const [ data, setData ] = useState<AnimeMangaType[]>([])
    const [ favoriteAnime, setFavoriteAnime ] = useState<AnimeMangaType[]>([])

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const data = await getFavoriteAnime()
                setFavoriteAnime(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchFavorites()
    }, [])

    return {
        data,
        favoriteAnime
    }
}

export default useAnimeMangaData