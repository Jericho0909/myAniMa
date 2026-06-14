import { prisma } from "@/lib/prisma";

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const body = await req.json();

        const updatedAnimeManga = await prisma.animeManga.update({
            where: {
                id,
            },
            data: {
                status: body.status,
            },
        });

        return Response.json({
            success: true,
            data: updatedAnimeManga,
        });
    } catch (error) {
        return Response.json(
            {
                success: false,
                message: "Failed to update status",
            },
            { status: 500 }
        );
    }
}