import { Completed_Anime } from "@/constants/animeData";
import AnimeListCard from "./AnimeListCard";
const MyAnime = () => {
    return (
        <section className="w-full py-8">
            <div className="grid grid-cols-2 gap-6 max-w-full sm:max-w-[90%] h-auto mx-auto p-6 bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg border border-slate-200">
                <div className="w-full h-auto bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <h3
                        className="text-2xl font-bold text-left p-2" 
                        style={{ fontFamily: 'var(--font-fredoka)' }}
                    >
                        Anime I've Finished
                    </h3>
                    {Completed_Anime.map((anime, index) => (
                        <AnimeListCard key={index} anime={anime}/>
                    ))}
                </div>
                <div className="w-full h-auto bg-white rounded-xl p-6 shadow-sm border border-slate-100">

                </div>
            </div>
        </section>
    )
}

export default MyAnime