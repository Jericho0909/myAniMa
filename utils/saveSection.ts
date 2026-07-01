export const handleSaveSectionAndIndex = ({ section, index, isScrollRestoration }: { section: string; index: number; isScrollRestoration: boolean }) => {
    sessionStorage.setItem("section", section)
    sessionStorage.setItem("index", index.toString())
    sessionStorage.setItem("useCustomScroll", JSON.stringify(isScrollRestoration))
}