import AnimeMangaDetailCard from "@/components/animeMangaDetailCard";
const AnimeMangaDetail = async ({params}: {params: Promise<{ type: string; slug: string }>}) => {
    const { type, slug } = await params
    const cleanSlug = decodeURIComponent(slug)
    
    return (
        <div className="h-screen bg-slate-50">
            <AnimeMangaDetailCard
                type={type}
                title={cleanSlug}
            />
        </div>
    )
}

export default AnimeMangaDetail