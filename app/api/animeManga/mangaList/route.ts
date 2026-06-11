import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const mangaList = await prisma.animeManga.findMany(
            {
                where: {
                    status: "PlanToRead",
                    type: "Manga"
                }
            }
        )

        return Response.json({
            success: true,
            data: mangaList
        })

    } catch (error) {
        console.error("Error fetching mangaList:", error)

        return Response.json(
            {
                success: false,
                message: "Failed to fetch mangaList"
            },
            { status: 500 }
        )
    }
}