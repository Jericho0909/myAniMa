import type { AnimeMangaType } from "@/type/model";

export async function getAllAnimeManga(): Promise<AnimeMangaType[]> {
    const res = await fetch("/api/animeManga", {
        method: "GET",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
        },
    })
  const result = await res.json()

  return result.data
}
