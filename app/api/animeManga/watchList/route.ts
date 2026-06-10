import { prisma } from "@/lib/prisma";

export async function GET() {
    try{
        const watchList = await prisma.animeManga.findMany(
            {
                where: {
                    status: "PlanToWatch",
                    type: "Anime"
                }
            }
        )

        return Response.json({
            success: true,
            data: watchList
        })
    } catch (error) {
        console.error("Error fetching watchList:", error)

        return Response.json(
            {
                success: false,
                message: "Failed to fetch favorites"
            },
            { status: 500 }
        )
    }
}