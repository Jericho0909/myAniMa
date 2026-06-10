import type { AnimeMangaType } from "@/type/model";

export async function getAllAnime(): Promise<AnimeMangaType[]> {
  const res = await fetch('/api/anime')
  const result = await res.json()

  return result.data
}

export async function getFavoriteAnime(): Promise<AnimeMangaType[]> {
    try {
        const res = await fetch('/api/animeManga/favoriteAnime')

        if (!res.ok) {
            throw new Error('Failed to fetch favorite anime')
        }

        const result = await res.json();

        return result.data
    } catch (error) {
        console.error("Error fetching favorite anime:", error)
        return []
    }
}

export async function getWatchList(): Promise<AnimeMangaType[]> {
    try {
        const res = await fetch('/api/animeManga/watchList')

        if (!res.ok) {
            throw new Error('Failed to fetch favorite anime')
        }

        const result = await res.json();

        return result.data;
    } catch (error) {
        console.error("Error fetching favorite anime:", error)
        return [];
    }
}