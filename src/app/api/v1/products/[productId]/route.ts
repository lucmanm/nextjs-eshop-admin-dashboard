import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    try {
        const results = await prisma.product.findFirst({
            where: {
                id: params.slug
            }
        })
        return NextResponse.json({ message: "success", results })
    } catch (error: any) {
        // Safely handle any kind of error object
        const errorMessage = error?.message || "An unknown error occurred";
        const errorDetails = error?.errors || [];

        return NextResponse.json({
            message: "Failed to get data from product by id",
            error: errorMessage,
            errors: errorDetails
        }, { status: 500 });
    }
}