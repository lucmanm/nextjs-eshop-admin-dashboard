import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        console.log("TEST_LOG",params.id);

        const { id } = params
        const results = await prisma.brand.delete(
            { where: { id } }
        );

        return NextResponse.json({ message: "success", results }, { status: 200 });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return Response.json({ message: "You have an error in getting the brand", errors: error.errors }, { status: 400 });
        }
    }

}
