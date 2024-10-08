import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: NextRequest) {
    try {

        const quotationBody = await request.json()
        const { arDescription, enDescription, image, model, price, userId } = quotationBody;


        await prisma.quotation.create({
            data: {
                model,
                arDescription,
                enDescription,
                price,
                image,
                userId: "dummyUser"
            }
        })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ message: "ERROR_POST_QUOTATION", errors: error.errors });
        }
    }
}