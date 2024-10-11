import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";



export async function GET(request: NextRequest, { params }: { params: { quotation_by_id: string } }) {
    try {


        const { quotation_by_id } = params

        const results = await prisma.quotation.findFirst({
            where: {
                quoteNumber: decodeURIComponent(quotation_by_id)
            },
        })

        return NextResponse.json({ results, message: "success" }, { status: 200 });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ message: "ERROR_GET_QUOTATION", errors: error.errors });
        }
    }
}