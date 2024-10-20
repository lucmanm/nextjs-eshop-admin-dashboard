import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: NextRequest) {
    try {

        const quotationBody = await request.json()

        const { arDescription, enDescription, image, model, price, quantity, quoteNumber, productId } = quotationBody;

        const checkProduct = await prisma.quotation.findMany({
            where: {
                id: productId
            }
        })

        if (checkProduct) {
            return NextResponse.json({ result: "Item Already Exits" }, {
                status: 409, statusText: "Conflict"
            })
        }

        const created = await prisma.quotation.create({
            data: {
                quoteNumber,
                model,
                arDescription,
                enDescription,
                price,
                image,
                quantity,
                userId: "dummyUser"
            }
        })

        if (created) {
            return NextResponse.json({ result: "Created Successfully" }, { status: 201, statusText: "Created" })
        }

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ message: "ERROR_POST_QUOTATION", errors: error.errors });
        }
    }
}