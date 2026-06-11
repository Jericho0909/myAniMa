import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const completedManga = await prisma.animeManga.findMany(
            {
                where: {
                    status: "Completed",
                    type: "Manga"
                }
            }
        )

        return Response.json({
            success: true,
            data: completedManga
        })
    } catch (error) {
        console.error("Error fetching completed Manga:", error)

        return Response.json(
            {
                success: false,
                message: "Failed to fetch completed Manga"
            },
            { status: 500 }
        )
    }
}