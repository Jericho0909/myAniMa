import type { AnimeMangaType } from "@/type/model";

export const getFavoriteAnime = (animeManga: AnimeMangaType[]) => {
    return animeManga.filter((item) => item.isFavorite && item.type ==="Anime")
}

export const getCompletedAnime = (animeManga: AnimeMangaType[]) => {
    return animeManga.filter((item) =>item.status === "Completed" && item.type === "Anime")
}

export const getWatchingAnime = (animeManga: AnimeMangaType[]) => {
    return animeManga.filter((item) => item.status === "Watching" && item.type === "Anime")
}


export const getAnimeList = (animeManga: AnimeMangaType[]) => {
    return animeManga.filter((item) => item.status === "PlanToWatch" && item.type === "Anime")
}

export const getFavoriteManga = (animeManga: AnimeMangaType[]) => {
    return animeManga.filter((item) => item.isFavorite && item.type === "Manga")
}


export const getCompletedManga = (animeManga: AnimeMangaType[]) => {
    return animeManga.filter((item) => item.status === "Completed" &&item.type === "Manga")
}

export const getReadingManga = (animeManga: AnimeMangaType[]) => {
    return animeManga.filter((item) =>item.status === "Reading" && item.type === "Manga")
}

export const getMangaList = (animeManga: AnimeMangaType[]) => {
    return animeManga.filter((item) => item.status === "PlanToRead" && item.type === "Manga")
}