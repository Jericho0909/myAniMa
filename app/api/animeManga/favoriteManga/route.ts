import { prisma } from "@/lib/prisma";


export async function GET() {
    try {
        const favoriteManga = await prisma.animeManga.findMany (
            {
                where: {
                    isFavorite: true,
                    type: "Manga"
                }
            }
        )

        return Response.json({
            success: true,
            data: favoriteManga
        })

    } catch (error) {
        console.error("Error fetching favorite Manga:", error)

        return Response.json(
            {
                success: false,
                message: "Failed to fetch favorite Manga"
            },
            { status: 500 }
        )
    }
}