import type { AnimeMangaType } from "@/type/model";

export const getFavoriteAnime = (animeManga: AnimeMangaType[]) => {
    return animeManga.filter((item) => item.isFavorite && item.type ==="Anime").sort((a, b) =>new Date(b.updatedAt ?? 0).getTime() - new Date(a.updatedAt ?? 0).getTime())
}

export const getCompletedAnime = (animeManga: AnimeMangaType[]) => {
    return animeManga.filter((item) =>item.status === "Completed" && item.type === "Anime").sort((a, b) =>new Date(b.updatedAt ?? 0).getTime() - new Date(a.updatedAt ?? 0).getTime())
}

export const getWatchingAnime = (animeManga: AnimeMangaType[]) => {
    return animeManga.filter((item) => item.status === "Watching" && item.type === "Anime").sort((a, b) =>new Date(b.updatedAt ?? 0).getTime() - new Date(a.updatedAt ?? 0).getTime())
}

export const getAnimeList = (animeManga: AnimeMangaType[]) => {
    return animeManga.filter((item) => item.status === "PlanToWatch" && item.type === "Anime").sort((a, b) =>new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime())
}

export const getFavoriteManga = (animeManga: AnimeMangaType[]) => {
    return animeManga.filter((item) => item.isFavorite && item.type === "Manga").sort((a, b) =>new Date(b.updatedAt ?? 0).getTime() - new Date(a.updatedAt ?? 0).getTime())
}

export const getCompletedManga = (animeManga: AnimeMangaType[]) => {
    return animeManga.filter((item) => item.status === "Completed" &&item.type === "Manga").sort((a, b) =>new Date(b.updatedAt ?? 0).getTime() - new Date(a.updatedAt ?? 0).getTime())
}

export const getReadingManga = (animeManga: AnimeMangaType[]) => {
    return animeManga.filter((item) =>item.status === "Reading" && item.type === "Manga").sort((a, b) =>new Date(b.updatedAt ?? 0).getTime() - new Date(a.updatedAt ?? 0).getTime())
}

export const getMangaList = (animeManga: AnimeMangaType[]) => {
    return animeManga.filter((item) => item.status === "PlanToRead" && item.type === "Manga").sort((a, b) =>new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime())
}