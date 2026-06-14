'use client'

import { useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import SectionObserverContext from "@/context/SectionObserverContext";
import { handleSaveSectionAndIndex } from "@/utils/saveSection";
import type { AnimeMangaType, SectionKey } from "@/type/model";
import Link from "next/link";
import { Eye, BookOpenText } from "lucide-react";

const AnimeMangaCard = ({ index, item, w, cardRefs, section }: { index: number; item: AnimeMangaType; w: string; cardRefs: React.RefObject<Record<SectionKey, (HTMLDivElement | null)[]>>; section: SectionKey }) => {
    const queryClient = useQueryClient()
    const { setActiveSection } = useContext(SectionObserverContext)!

    const mutation = useMutation({mutationFn: async ({ id, status }: { id: string; status: string }) => {
        const res = await fetch(`/api/animeManga/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status }),
                });

            return res.json()
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["animeManga"] })
        },
    })

    const handleUpdateStatus = (
        e: React.MouseEvent<HTMLButtonElement>,
        id: string | undefined
    ) => {
        e.preventDefault();
        if (!id) return;

        const updatedStatus = section === "myAnimeWatchlist" ? "Watching" : "Reading"

        mutation.mutate({
            id,
            status: updatedStatus,
        })
    }

    return (
        <Link
            href={`/${item.status}/${item.title}`}
        >
            <div
                ref={(el) => {
                    cardRefs.current[section][index] = el;
                }}
                className={`group shrink-0 ${w} rounded-tl-xl rounded-br-xl overflow-hidden border border-gray-600 cursor-pointer`}
                onClick={() => {
                    setActiveSection(item.type === "Anime" ? "anime" : "manga");
                    handleSaveSectionAndIndex({ section, index })
                    
                }}
            >
                <div className="group anime-card relative overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.title}
                        className={`anime-image w-full h-60 sm:h-80 ${item.type === "Anime" ? "object-cover" : "object-fill"} transition-transform duration-500`}
                    />

                    {/* Overlay */}
                    <div
                        className="anime-overlay absolute inset-0 bg-black/70 opacity-0  transition-all duration-500"
                    />

                    {/* Content */}
                    <div
                        className="anime-content absolute inset-0 z-10 flex flex-col justify-end p-4 opacity-0 translate-y-6  transition-all duration-500"
                    >
                        <h3
                            className="text-white font-bold text-lg mb-2"
                            style={{ fontFamily: "var(--font-fredoka)" }}
                        >
                            {item.title}
                        </h3>

                        <p
                            className="text-gray-200 text-sm line-clamp-3 mb-3"
                            style={{ fontFamily: "var(--font-lato)" }}
                        >
                            {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {item.genre.slice(0, 2).map((genre, index) => (
                            <span
                                key={index}
                                className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full"
                            >
                                {genre}
                            </span>
                            ))}
                        </div>
                        <button
                            type="button"
                            className="absolute top-2 right-2 p-1 z-20 icon-btn"
                            onClick={(e) => handleUpdateStatus(e, item.id)}
                        >
                            {section === "myAnimeWatchlist"
                                ? (
                                    <Eye
                                        size={20}
                                        color="green"
                                        className="cursor-pointer"
                                    />
                                )
                                : (
                                    <BookOpenText
                                        size={20}
                                        color="green"
                                        className="cursor-pointer"
                                    />
                                )
                            }
                        </button>
                    </div>
                </div>

                {/* Normal title sa mobile */}
                <div className="p-2 group-hover:hidden">
                    <h3
                        className="font-semibold text-lg truncate"
                        style={{ fontFamily: "var(--font-fredoka)" }}
                    >
                        {item.title}
                    </h3>
                </div>
            </div>
        </Link>
    );
};

export default AnimeMangaCard;