export const handleSaveSection = ({ type}: { type: string}) => {
    sessionStorage.setItem("section", type === "Anime" ? "Anime" : "Manga")
}