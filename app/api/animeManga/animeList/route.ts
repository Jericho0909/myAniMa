import { prisma } from "@/lib/prisma";

export async function GET() {
    try{
        const animeList = await prisma.animeManga.findMany(
            {
                where: {
                    status: "PlanToWatch",
                    type: "Anime"
                }
            }
        )

        return Response.json({
            success: true,
            data: animeList
        })
    } catch (error) {
        console.error("Error fetching animeList:", error)

        return Response.json(
            {
                success: false,
                message: "Failed to fetch animeList"
            },
            { status: 500 }
        )
    }
}