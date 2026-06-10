import { prisma } from "@/lib/prisma";

export async function GET() {
    try{
        const completedAnime = await prisma.animeManga.findMany(
            {
                where: {
                    status: "Completed",
                    type: "Anime"
                }
            }
        )

        return Response.json({
            success: true,
            data: completedAnime
        })
    } catch (error) {
        console.error("Error fetching Completed Anime:", error)

        return Response.json(
            {
                success: false,
                message: "Failed to fetch favorites"
            },
            { status: 500 }
        )
    }
}