import type { AnimeMangaType } from "@/type/model";

export async function getAllAnime(): Promise<AnimeMangaType[]> {
  const res = await fetch('/api/animeManga')
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

export async function getCompletedAnime(): Promise<AnimeMangaType[]> {
    try {
        const res = await fetch('/api/animeManga/completedAnime')

        if (!res.ok) {
            throw new Error('Failed to fetch completed anime')
        }

        const result = await res.json()

        return result.data
    } catch (error) {
        console.error("Error fetching completed anime:", error)
        return []
    }
}

export async function getWatchingAnime(): Promise<AnimeMangaType[]> {
    try {
        const res = await fetch('/api/animeManga/watchingAnime')

        if (!res.ok) {
            throw new Error('Failed to fetch watching anime')
        }

        const result = await res.json()

        return result.data

    } catch (error) {
        console.error("Error fetching watching anime:", error)
        return []
    }
}

export async function getAnimeList(): Promise<AnimeMangaType[]> {
    try {
        const res = await fetch('/api/animeManga/animeList')

        if (!res.ok) {
            throw new Error('Failed to fetch animeList')
        }

        const result = await res.json();

        return result.data
    } catch (error) {
        console.error("Error fetching animeList:", error)
        return []
    }
}

/// MANGA DATA ///

export async function getFavoriteManga(): Promise<AnimeMangaType[]> {
    try {
        const res = await fetch('/api/animeManga/favoriteManga')

        if (!res.ok) {
            throw new Error('Failed to fetch favorite manga')
        }

        const result = await res.json();

        return result.data
    } catch (error) {
        console.error("Error fetching favorite manga:", error)
        return []
    }
}

export async function getCompletedManga(): Promise<AnimeMangaType[]> {
    try {
        const res = await fetch('/api/animeManga/completedManga')

        if (!res.ok) {
            throw new Error('Failed to fetch completed manga')
        }

        const result = await res.json()

        return result.data
    } catch (error) {
        console.error("Error fetching completed anime:", error)
        return []
    }
}

export async function getReadingManga(): Promise<AnimeMangaType[]> {
    try {
        const res = await fetch('api/animeManga/readingManga')

        if (!res.ok) {
            throw new Error('Failed to fetch reading manga')
        }

        const result = await res.json()

        return result.data
    } catch (error) {
        console.error("Error fetching reading manga:", error)
        return []
    }
}

export async function getMangaList(): Promise<AnimeMangaType[]> {
    try {
        const res = await fetch('/api/animeManga/mangaList')

        if (!res.ok) {
            throw new Error('Failed to fetch MangaList')
        }

        const result = await res.json();

        return result.data
    } catch (error) {
        console.error("Error fetching MangaList:", error)
        return []
    }
}