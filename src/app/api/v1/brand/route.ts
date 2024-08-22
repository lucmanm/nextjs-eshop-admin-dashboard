import { ZBrandSchema } from "@/app/(root)/dashboard/(catalogue)/products/_components/form/form-brand";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        console.log(body.enName);

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
            return NextResponse.json({ message: "This brand already exists" }, { status: 400 });
        }

        const response = await prisma.brand.create({
            data: {
                arName,
                enName,
                logoUrl: ""
            }
        });

        return NextResponse.json({ message: "Created successfully", results: response }, { status: 200 });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ message: "You have an error in submitting the brand", errors: error.errors }, { status: 400 });
        }
        // Handle any other errors
        // return NextResponse.json({ message: "An unexpected error occurred", error: error.message }, { status: 500 });
    }
}
