import type { AnimeMangaType } from "@/type/model";

export async function getAllAnimeManga(): Promise<AnimeMangaType[]> {
  const res = await fetch('/api/animeManga', {
    cache: 'no-store',
  })
  const result = await res.json()

  return result.data
}
