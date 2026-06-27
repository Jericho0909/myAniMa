import List from "@/components/List"
const AllAnimeManga = async ({params}: {params: Promise<{section: string }>}) => {
    const { section } = await params
    return (
        <List
            section={section}
        />
    )
}

export default AllAnimeManga