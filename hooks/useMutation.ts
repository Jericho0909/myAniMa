'use client'

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import type { AnimeMangaType } from "@/type/model";


const useAnimeMangaMutations = () => {
    const queryClient = useQueryClient()
    const router = useRouter()

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
        },
        onError: (error) => {
            console.error("Failed:", error);
        },
    })

    const update = useMutation({
        mutationFn: async ({ id, status, isFavorite }: { id: string; status?: string; isFavorite?: boolean; }) => {
            const res = await fetch(`/api/animeManga/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status, isFavorite }),
            })

            if (!res.ok) throw new Error("Update failed")

            return res.json()
        },

        onMutate: async (variables) => {
            await queryClient.cancelQueries({ queryKey: ["animeManga"] })

            const previousData = queryClient.getQueryData(["animeManga"])

            queryClient.setQueryData(["animeManga"], (old: any) => {
            if (!old) return old;

            return old.map((item: any) =>
                item.id === variables.id
                ? { ...item, ...variables }
                : item
            );
            });

            return { previousData }
        },

        onError: (_err, _variables, context) => {
            queryClient.setQueryData(["animeManga"], context?.previousData)
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["animeManga"] })
        },
    })

    const remove = useMutation({
        mutationFn: async ({ id }: { id: string }) => {
            const res = await fetch(`/api/animeManga/${id}`, {
                method: "DELETE",
            })

            if (!res.ok) throw new Error("Delete failed")

            const data = await res.json()
            return data
        },
         onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["animeManga"] })
            router.replace("/")
        },
        onError: (error) => {
            console.error("Failed:", error)
        },
    })

    return {
        add,
        update,
        remove
    }
}

export default useAnimeMangaMutations