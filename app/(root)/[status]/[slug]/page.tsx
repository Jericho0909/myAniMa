import AnimeMangaDetailCard from "@/components/animeMangaDetailCard";
const AnimeMangaDetail = async ({params}: {params: Promise<{ status: string; slug: string }>}) => {
    const { status, slug } = await params
    const cleanSlug = decodeURIComponent(slug)
    


    return (
        <div className="h-screen bg-slate-50">
            <AnimeMangaDetailCard
                status={status}
                title={cleanSlug}
            />
        </div>
    )
}

export default AnimeMangaDetail