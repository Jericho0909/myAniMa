import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const readingManga = await prisma.animeManga.findMany(
            {
                where: {
                    status: "Reading",
                    type: "Manga"
                }
            }
        )

        return Response.json({
            success: true,
            data: readingManga
        })
    } catch (error) {
        console.error("Error fetching reading manga:", error)

        return Response.json(
            {
                success: false,
                message: "Failed to fetch reading manga"
            },
            { status: 500 }
        )
    }
}