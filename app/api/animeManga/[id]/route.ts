import { prisma } from "@/lib/prisma";

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const body = await req.json()

        const updatedAnimeManga = await prisma.animeManga.update({
            where: {
                id,
            },
            data: body,
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
        )
    }
}

export async function DELETE(
    _: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        if (!id) {
            return Response.json(
                { success: false, message: "Invalid ID" },
                { status: 400 }
            );
        }

        const deleted = await prisma.animeManga.delete({
            where: { id },
        })

        return Response.json({
            success: true,
            data: deleted,
        })
    } catch (error) {
        console.log("DELETE ERROR:", error)

        return Response.json(
        { success: false, message: "Failed to Delete" },
        { status: 500 }
    );
  }
}