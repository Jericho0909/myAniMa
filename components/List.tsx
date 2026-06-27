'use client'

import { AnimeMangaType } from "@/type/model"
import useAnimeManga from "@/hooks/useAnimeManga"
import { getFavoriteAnime,
    getFavoriteManga,
    getCompletedAnime,
    getCompletedManga,
    getWatchingAnime,
    getReadingManga,
} from "@/app/selectors/animeMangaSelectors"
const List = ({section}: {section: string}) => {
    const { data: animeManga } = useAnimeManga()
    
    const buildData = (animeManga: AnimeMangaType[]) => ({
        animeFav: getFavoriteAnime(animeManga),
        mangaFav: getFavoriteManga(animeManga),
        animeList: [
            ...getCompletedAnime(animeManga),
            ...getWatchingAnime(animeManga),
        ],
        mangaList: [
            ...getCompletedManga(animeManga),
            ...getReadingManga(animeManga),
        ],
    })

    const setOfData = buildData(animeManga!)
    const data = setOfData[section as keyof typeof setOfData]



    return(
        <section className="h-screen">
            {section}
        </section>
    )
}

export default List
