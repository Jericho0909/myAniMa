import type { SectionKey } from "@/type/model"
import List from "@/components/List"
const AllAnimeManga = async ({params}: {params: Promise<{section: SectionKey }>}) => {
    const { section } = await params
    return (
        <List
            section={section}
        />
    )
}

export default AllAnimeManga