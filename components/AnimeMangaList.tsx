import AnimeListCard from "@/components/AnimeListCard";
import { Anime_List } from "@/constants/animeData";

const AnimeMangaList = () => {
    return (
        <section className="w-full py-8">
            <div className="grid grid-cols-3 gap-4 max-w-full sm:max-w-[90%] h-auto mx-auto p-6 bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg border border-slate-200">
                {Anime_List.map((item) => (
                    <AnimeListCard key={item.id} anime={item} />
                ))}
            </div>
        </section>
    )
}

export default AnimeMangaList;