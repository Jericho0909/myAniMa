import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const watchingAnime = await prisma.animeManga.findMany(
            {
                where: {
                    status: "Watching",
                    type: "Anime"
                }
            }
        )
        return Response.json({
            success: true,
            data: watchingAnime
        })
    } catch (error) {
        console.error("Error fetching watching anime:", error)

        return Response.json(
            {
                success: false,
                message: "Failed to fetch watching anime"
            },
            { status: 500 }
        )
    }
}