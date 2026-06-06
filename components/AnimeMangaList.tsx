import AnimeMangaCard from "./AnimeMangaCard";
import type { AnimeMangaType, SectionKey } from "@/type/model";


const AnimeMangaList = ({ data, animeMangaListRefs, section }: { data: AnimeMangaType[]; animeMangaListRefs: React.RefObject<Record<SectionKey, (HTMLDivElement | null)[]>>; section: SectionKey }) => {
    return (
        <section 
            id={section}
            className="w-full py-8"
        >
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 max-w-full sm:max-w-[90%] h-auto mx-auto p-6 bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg border border-slate-200">
                {data.map((item, index) => (
                    <AnimeMangaCard key={item.id} item={item} index={index} w={"w-full"} cardRefs={animeMangaListRefs} section={section}/>
                ))}
            </div>
        </section>
    )
}

export default AnimeMangaList;