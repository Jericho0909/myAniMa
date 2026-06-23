import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs"

export async function GET() {
    try {
        const animeManga = await prisma.animeManga.findMany()

        return NextResponse.json({
            success: true,
            data: animeManga,
        })
    } catch (error) {

    return Response.json(
        {
        success: false,
        message: "Failed to fetch anime",
        error: error instanceof Error ? error.message : String(error),
        },
        { status: 500 }
    );
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
            return NextResponse.json(
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

        return NextResponse.json(anime, { status: 201 })
    } catch (error) {
        console.error(error)

        return NextResponse.json(
            { message: 'Failed to create anime' },
            { status: 500 }
        )
    }
}
