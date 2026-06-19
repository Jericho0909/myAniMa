'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AnimeMangaType } from "@/type/model";


const useAnimeMangaMutations = () => {
    const queryClient = useQueryClient()

    const add = useMutation({
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

    const update = useMutation({
        mutationFn: async ({ id, status, isFavorite, }: { id: string; status?: string; isFavorite?: boolean; }) => {
            const res = await fetch(`/api/animeManga/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    status,
                    isFavorite,
                }),
            })
            return res.json()
            
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["animeManga"] })
        },
        
    })

    return {
        add,
        update
    }
}

export default useAnimeMangaMutations