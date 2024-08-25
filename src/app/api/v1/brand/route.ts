import { prisma } from "@/lib/prisma";
import { ZBrandSchema } from "@/schemas/brand.schema";
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
            return Response.json({ message: "This brand already exists" });
        }

        const results = await prisma.brand.create({
            data: {
                arName,
                enName: enName.toLowerCase(),
            }
        });

        return Response.json({ message: "Created successfully", results }, { status: 201 });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return Response.json({ message: "You have an error in submitting the brand", errors: error.errors }, { status: 400 });
        }
    }
}


export async function GET(request: Request) {
    try {
        const results = await prisma.brand.findMany();
        return Response.json({ message: "Success", results }, { status: 200 });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return Response.json({ message: "You have an error in getting the brand", errors: error.errors }, { status: 400 });
        }
    }
}