import Slider from "@/components/Slider";
import HorizontalCarousel from "@/components/HorizontalCarousel"
import MyAnime from "@/components/MyAnime";
import AnimeMangaList from "@/components/AnimeMangaList";
import { Favorite_Anime, Favorite_Manga, Completed_Anime, Current_Anime, Completed_Manga, Current_Manga } from "@/constants/animeData";
const Page = () => {
    return (
        <main className="min-h-full">
            <Slider/>
            <h2 
                className="text-3xl font-bold mt-8 text-left p-2" 
                style={{ fontFamily: 'var(--font-fredoka)' }}
            >
                My Favorite Anime
            </h2>
            <HorizontalCarousel
                data={Favorite_Anime}
            />
            <h2 
                className="text-3xl font-bold mt-8 text-left p-2" 
                style={{ fontFamily: 'var(--font-fredoka)' }}
            >
                My Anime List
            </h2>
            <MyAnime
                completedData={Completed_Anime}
                currentData={Current_Anime}
            />
             <h2 
                className="text-3xl font-bold mt-8 text-left p-2" 
                style={{ fontFamily: 'var(--font-fredoka)' }}
            >
                My Watchlist
            </h2>
            <AnimeMangaList />
            <h2 
                className="text-3xl font-bold mt-8 text-left p-2" 
                style={{ fontFamily: 'var(--font-fredoka)' }}
            >
                My Favorite Manga
            </h2>
            <HorizontalCarousel
                data={Favorite_Manga}
            />
            <h2 
                className="text-3xl font-bold mt-8 text-left p-2" 
                style={{ fontFamily: 'var(--font-fredoka)' }}
            >
                My Manga List
            </h2>
            <MyAnime
                completedData={Completed_Manga}
                currentData={Current_Manga}
            />
        </main>
    )
}

export default Page