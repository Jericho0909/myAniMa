import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const animeManga = await prisma.animeManga.findMany()

        return Response.json({
        success: true,
        data: animeManga
        })
    } catch (error) {
        return Response.json({
        success: false,
        message: 'Failed to fetch anime'
        }, { status: 500 })
    }
}



export async function POST(request: Request) {
    try {
        const body = await request.json()

        if (!body.title ||
            !body.description ||
            !body.image ||
            !body.type ||
            !body.status ||
            !body.genre
            ){
            return Response.json(
                { message: 'Missing required fields' },
                { status: 400 }
            )
        }

        const anime = await prisma.animeManga.create({
            data: {
                title: body.title,
                description: body.description,
                image: body.image,
                type: body.type,
                status: body.status,
                genre: body.genre,
            }
        })

        return Response.json(anime, { status: 201 })
    } catch (error) {
        console.error(error)

        return Response.json(
            { message: 'Failed to create anime' },
            { status: 500 }
        )
    }
}