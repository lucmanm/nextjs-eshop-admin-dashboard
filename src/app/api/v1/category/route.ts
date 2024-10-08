import { prisma } from "@/lib/prisma";
import { ZCategorySchema } from "@/schemas/category.schema";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { enName, arName } = ZCategorySchema.parse(body);

        const checkBrandName = await prisma.category.findFirst({
            where: {
                OR: [
                    { arName: { equals: arName } },
                    { enName: { equals: enName } }
                ]
            }
        });

        if (checkBrandName) {
            return Response.json({ message: "This category already exists" });
        }

        const results = await prisma.category.create({
            data: {
                arName,
                enName: enName.toLowerCase(),
            }
        });

        return Response.json({ message: "Created successfully", results }, { status: 200 });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return Response.json({ message: "You have an error in submitting the brand", errors: error.errors }, { status: 400 });
        }
    }
}

export async function GET(request: Request) {
    try {

        const results = await prisma.category.findMany();
        return NextResponse.json({ message: "Created successfully", results }, { status: 200 });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ message: "You have an error in query the category", errors: error.errors }, { status: 400 });
        }
    }
}
