export const handleSaveSection = ({e, type}: {e: React.MouseEvent<HTMLDivElement>, type: string}) => {
    e.preventDefault()
    sessionStorage.setItem("section", type === "Anime" ? "Anime" : "Manga")
}