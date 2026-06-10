import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const favorites = await prisma.animeManga.findMany(
            {
                where: {
                    isFavorite: true,
                    type: "Anime"

                }
            }
        )

        return Response.json({
            success: true,
            data: favorites
        })

    } catch (error) {
        console.error("Error fetching favorites:", error)

        return Response.json(
            {
                success: false,
                message: "Failed to fetch favorites"
            },
            { status: 500 }
        )
    }
}