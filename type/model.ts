 type StatusType =
    | "Watching"
    | "Reading"
    | "Completed"
    | "PlanToWatch"
    | "PlanToRead"
    | ""

export type IconItem = {
    status: StatusType;
    icon: React.ReactNode;
    style?: string;
};


export type SectionKey =
    | "animeFav"
    | "mangaFav"
    | "animeList"
    | "mangaList"
    | "myAnimeWatchlist"
    | "myMangaReadingList";

export interface AnimeMangaType {
    id?: string;
    title: string;
    image: string ;
    genre: string[];
    description: string;
    isFavorite?: boolean;
    type: "Anime" | "Manga" | "";
    status?: StatusType;
    createdAt?: string;
    updatedAt? : string;
}

export interface SliderState<T>  {
    activeIndex: number
    currentItem: T
    goTo: (index: number) => void
    count: number
}

export interface UseSliderOptions  {
    autoPlay?: boolean
    interval?: number
}

