import AnimeMangaCard from "./AnimeMangaCard";
import type { AnimeMangaType } from "@/type/model";


const AnimeMangaList = ({ data }: { data: AnimeMangaType[] }) => {
    return (
        <section className="w-full py-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 max-w-full sm:max-w-[90%] h-auto mx-auto p-6 bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg border border-slate-200">
                {data.map((item, index) => (
                    <AnimeMangaCard key={item.id} item={item} index={index} w={"w-full"}/>
                ))}
            </div>
        </section>
    )
}

export default AnimeMangaList;