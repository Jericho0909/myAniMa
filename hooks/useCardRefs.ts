import { useRef } from "react";
import { SectionKey } from "@/type/model";

export const useCardRefs = () => {
    const cardRefs = useRef<Record<SectionKey, (HTMLDivElement | null)[]>>({
        animeFav: [],
        mangaFav: [],
        animeList: [],
        mangaList: [],
        myAnimeWatchlist: [],
        myMangaReadingList: [],
    })

    return cardRefs
}