export interface AnimeMangaType {
    id: string
    title: string
    image: string 
    genre: string[]
    description: string
    isFavorite?: boolean
    type: "Anime" | "Manga"
    status?: "watching" | "reading" | "completed" | "planToWatch" | "planToRead"
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
