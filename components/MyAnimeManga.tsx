import AnimeMangaListCard from "./AnimeMangaListCard";
import type { AnimeMangaType, SectionKey } from "@/type/model";
const MyAnimeManga = ({completedData, currentData, listCardRefs, section}: { completedData: AnimeMangaType[]; currentData: AnimeMangaType[]; listCardRefs: React.RefObject<Record<SectionKey, (HTMLDivElement | null)[]>>; section: SectionKey }) => {
    return (
        <section 
            id={section}
            className="w-full py-8"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-full sm:max-w-[90%] h-auto mx-auto p-6 bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg border border-slate-200">
                <div className="w-full h-auto bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <h3
                        className="text-2xl font-bold text-left p-2"
                        style={{ fontFamily: 'var(--font-fredoka)' }}
                    >
                        Anime I've Finished
                    </h3>
                    {completedData.map((item, index) => (
                        <AnimeMangaListCard key={index} item={item} index={index} cardRefs={listCardRefs} section={section} />
                    ))}
                </div>
                <div className="w-full h-auto bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <h3
                        className="text-2xl font-bold text-left p-2"
                        style={{ fontFamily: 'var(--font-fredoka)' }}
                    >
                        What I'm Watching
                    </h3>
                    {currentData.map((item, index) => (
                        <AnimeMangaListCard key={index} item={item} index={index} cardRefs={listCardRefs} section={section} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MyAnimeManga