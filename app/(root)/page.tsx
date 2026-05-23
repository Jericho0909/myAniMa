import Slider from "@/components/Slider";
import HorizontalCarousel from "@/components/HorizontalCarousel"
import MyAnime from "@/components/MyAnime";
import { Favorite_Anime } from "@/constants/animeData";
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
                Anime List
            </h2>
            <MyAnime/>
            <h2 
                className="text-3xl font-bold mt-8 text-left p-2" 
                style={{ fontFamily: 'var(--font-fredoka)' }}
            >
                My Favorite Manga
            </h2>
        </main>
    )
}

export default Page