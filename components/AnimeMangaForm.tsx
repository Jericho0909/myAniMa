'use client'

import { useState, useRef } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useImage from "@/hooks/useImage"
import type { AnimeMangaType } from "@/type/model"

interface CreateAnimeMangaInput {
    title: string;
    image: string;
    genre: string[];
    description: string;
    type: "Anime" | "Manga";
    status: string;
}

const AnimeMangaForm = () => {
    const queryClient = useQueryClient()
    const { handleUpload, preview, setPreview, loadingImg } = useImage()
    const imageInputRef = useRef<HTMLInputElement | null>(null)
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const [data, setData] = useState<AnimeMangaType>({
        title: "",
        image: "",
        genre: [],
        description: "",
        type: "Anime",
        status: ""
    })

    const genraArr: string[] = [
        "Action",
        "Adventure",
        "Romance",
        "Comedy",
        "Drama",
        "Fantasy",
        "Horror",
        "Slice of Life",
        "Sci-Fi",
        "Supernatural",
        "Psychological",
        "Thriller",
        "School"
    ]

   const mutation = useMutation({
        mutationFn: async (newAnime: AnimeMangaType) => {
            const res = await fetch("/api/animeManga", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAnime),
            })

            return res.json()
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["animeManga"] })
        }
    })

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        const finalData: AnimeMangaType = {
            ...data,
            image: preview || "",
            status:
            data.type === "Anime"
                ? "PlanToWatch"
                : "PlanToRead",
        }

        try{
            setIsLoading(true)
            await mutation.mutateAsync(finalData)

            setData({
                title: "",
                image: "",
                genre: [],
                description: "",
                type: "Anime",
                status: ""
            })
            setPreview(null)
        } catch (error) {
            console.error('Failed to submit:', error)
        } finally {
            setTimeout(() => {
                setIsLoading(false)
            }, 2500)
        }
    }


    return (
        <div className="relative">
            <form 
                onSubmit={handleSubmit}
                className={`flex flex-col gap-6 bg-linear-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-3xl shadow-lg p-8 sm:p-10 transition ${
                isLoading ? "blur-[2px]" : ""}`}
            >

                {/* IMAGE INPUT */}
                <div
                    className="w-40 h-40 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer overflow-hidden"
                    onClick={() => imageInputRef.current?.click()}
                >
                    {loadingImg ? (
                        <div className="loader2" />
                    ) : preview ? (
                        <img
                            src={preview}
                            className="w-full h-full object-fill"
                            alt="preview"
                        />
                    ) : (
                        <span className="text-sm text-gray-500">
                            Click to upload image
                        </span>
                    )}

                    <input
                        ref={imageInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleUpload}
                    />
                </div>
                {/* TITLE */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="anime-manga-title"
                        className="text-base font-semibold"
                        style={{ fontFamily: "var(--font-fredoka)" }}
                        spellCheck={false}
                    >
                        Title
                    </label>

                    <input
                        id="anime-manga-title"
                        type="text"
                        name="title"
                        placeholder="Attack on Titan"
                        value={data.title}
                        onChange={(e) => {
                            setData((data) => ({
                                ...data,
                                [e.target.name]: e.target.value
                            }))
                        }}
                        className="text-sm font-semibold px-2 py-2 w-full border rounded-md"
                        style={{ fontFamily: "var(--font-lato)" }}
                    />
                </div>

                {/* DESCRIPTION */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="anime-manga-description"
                        className="text-base font-semibold"
                        style={{ fontFamily: "var(--font-fredoka)" }}
                    >
                        Description
                    </label>

                    <textarea
                        id="anime-manga-description"
                        name="description"
                        placeholder="Once upon a time..."
                        value={data.description}
                        spellCheck={false}
                        onChange={(e) => {
                            setData((data) => ({
                                ...data,
                                [e.target.name]: e.target.value
                            }))
                        }}
                        className="text-sm font-semibold h-32 resize-none overflow-auto border rounded-md p-2"
                        style={{ fontFamily: "var(--font-lato)" }}
                    />
                </div>

                {/* TYPE */}
                <div className="flex gap-6">

                    <div className="flex items-center gap-2">
                        <input
                            id="anime-manga-typeAnime"
                            type="radio"
                            name="type"
                            value="Anime"
                            checked={data.type === "Anime"}
                            onChange={(e) => {
                                setData((data) => ({
                                    ...data,
                                    type: e.target.value as "Anime" | "Manga"
                                }))
                            }}
                            className="w-4 h-4 cursor-pointer"
                        />
                        <label
                            htmlFor="anime-manga-typeAnime"
                            className="text-base font-semibold"
                            style={{ fontFamily: "var(--font-lato)" }}
                        >
                            Anime
                        </label>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            id="anime-manga-typeManga"
                            type="radio"
                            name="type"
                            value="Manga"
                            checked={data.type === "Manga"}
                            onChange={(e) => {
                                setData((data) => ({
                                    ...data,
                                    type: e.target.value as "Anime" | "Manga"
                                }))
                            }}
                            className="w-4 h-4 cursor-pointer"
                        />
                        <label
                            htmlFor="anime-manga-typeManga"
                            className="text-base font-semibold"
                            style={{ fontFamily: "var(--font-lato)" }}
                        >
                            Manga
                        </label>
                    </div>

                </div>

                {/* GENRE */}
                <div className="flex flex-col gap-3">
                    <label
                        className="text-base font-semibold"
                        style={{ fontFamily: "var(--font-fredoka)" }}
                    >
                        Genre
                    </label>

                    <div className="flex flex-wrap gap-3">
                        {genraArr.map((genre) => (
                            <label
                                key={genre}
                                className={`text-sm font-semibold px-3 py-1 border rounded-full cursor-pointer transition-all duration-200
                                ${
                                    data.genre.includes(genre)
                                        ? "bg-black text-white border-black"
                                        : "bg-white text-black border-gray-300 hover:border-black"
                                }`}
                                style={{ fontFamily: "var(--font-lato)" }}
                            >
                                <input
                                    type="checkbox"
                                    value={genre}
                                    checked={data.genre.includes(genre)}
                                    onChange={(e) => {
                                        const checked = e.target.checked;

                                        setData((prev) => ({
                                            ...prev,
                                            genre: checked
                                                ? [...prev.genre, genre]
                                                : prev.genre.filter((g) => g !== genre),
                                        }));
                                    }}
                                    className="hidden"
                                />
                                {genre}
                            </label>
                        ))}
                    </div>
                </div>

                <button
                    type="submit"
                    className="watch-btn w-full py-3 px-4 bg-black text-white font-semibold rounded-lg transition-all duration-200 shadow-md cursor-pointer"
                >
                    {data.type === "Anime"
                        ? "Add to WatchList"
                        : "Add to ReadingList"
                    }
                </button>

            </form>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-3xl z-20">
                    <div className="loader3"></div>
                </div>
            )}
        </div>
    )
}

export default AnimeMangaForm