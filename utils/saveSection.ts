export const handleSaveSectionAndIndex = ({ section, index }: { section: string; index: number }) => {
    sessionStorage.setItem("section", section)
    sessionStorage.setItem("index", index.toString())
}