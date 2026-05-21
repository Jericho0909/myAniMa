import Slider from "@/components/Slider";
import HorizontalCarousel from "@/components/HorizontalCarousel"
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
            <HorizontalCarousel/>
        </main>
    )
}

export default Page