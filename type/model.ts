export interface AnimeSlide {
  id: string
  title: string
  image: string
  genre: string[]
  description: string
}


export interface SliderState<T>  {
    activeIndex: number
    currentItem: T
    goTo: (index: number) => void
    count: number
}

export interface UseSliderOptions  {
    autoPlay?: boolean
    interval?: number // milliseconds
}