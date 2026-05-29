import AnimeMangaForm from "@/components/AnimeMangaForm"

const AddWatchList = () => {
    return(
        <main className="min-h-screen w-full flex flex-col items-center justify-center">
            <section className="w-full max-w-3xl">
                <h2
                    className="text-3xl  font-bold mb-4"
                    style={{ fontFamily: "var(--font-fredoka)" }}
                >
                    Add WatchList
                </h2>
                <AnimeMangaForm/>
            </section>
        </main>
    )
}

export default AddWatchList