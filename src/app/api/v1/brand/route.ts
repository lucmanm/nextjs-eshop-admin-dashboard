import { prisma } from "@/lib/prisma";
import { ZBrandSchema } from "@/schemas/brand.schema";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { enName, arName } = ZBrandSchema.parse(body);

        const checkBrandName = await prisma.brand.findFirst({
            where: {
                OR: [
                    { arName: { equals: arName } },
                    { enName: { equals: enName } }
                ]
            }
        });

        if (checkBrandName) {
            return Response.json({ message: "This brand already exists" }, { status: 200});
        }

        const results = await prisma.brand.create({
            data: {
                arName,
                enName,
                logoUrl: ""
            }
        });
        return Response.json({ message: "Created successfully", results }, { status: 200 });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return Response.json({ message: "You have an error in submitting the brand", errors: error.errors }, { status: 400 });
        }
        // Handle any other errors
        // return Response.json({ message: "An unexpected error occurred", error: error.message }, { status: 500 });
    }
}
