'use client'

import { useState, useRef } from "react"
import type { AnimeMangaType } from "@/type/model"


const AnimeMangaForm = () => {
    const [data, setData] = useState<AnimeMangaType>({
        id: "",
        title: "",
        image: "",
        genre: [],
        description: "",
        isFavorite: false,
        type: "Anime",
        status: "watching"
    })
    const imageInputRef = useRef<HTMLInputElement | null>(null)


    return (
        <form className="flex flex-col gap-6 bg-linear-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-3xl shadow-lg p-8 sm:p-10">

            {/* IMAGE INPUT */}
            <div
                className="w-40 h-40 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer overflow-hidden"
                onClick={() => imageInputRef.current?.click()}
            >
                {data.image ? (
                    <img
                            src={""}
                            className="w-full h-full object-cover"
                            alt="preview"
                        />
                    ) : (
                        <span className="text-sm text-gray-500">
                            Click to upload image
                        </span>
                    )
                }
                <input
                    ref={imageInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                />
            </div>
            {/* TITLE */}
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="anime-manga-title"
                    className="text-base font-semibold"
                    style={{ fontFamily: "var(--font-lato)" }}
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
                    style={{ fontFamily: "var(--font-lato)" }}
                >
                    Description
                </label>

                <textarea
                    id="anime-manga-description"
                    name="description"
                    placeholder="Once upon a time..."
                    value={data.description}
                    onChange={(e) => {
                        setData((data) => ({
                            ...data,
                            [e.target.name]: e.target.value
                        }))
                    }}
                    className="text-base font-semibold h-32 resize-none overflow-auto border rounded-md p-2"
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

            <button
                type="submit"
                className="watch-btn w-full py-3 px-4 bg-black text-white font-semibold rounded-lg transition-all duration-200 shadow-md cursor-pointer"
            >
                Add to WatchList
            </button>

        </form>
    )
}

export default AnimeMangaForm