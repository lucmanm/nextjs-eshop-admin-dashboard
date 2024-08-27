import { prisma } from "@/lib/prisma";
import { ZProductSchema } from "@/schemas/product.schema";
import { NextResponse } from "next/server";
import { z } from "zod";
export async function GET(req: Request) {
    try {
        const results = await prisma.product.findMany({
            include: {
                images: true,
                brand: true,
                category: true
            }
        });

        return NextResponse.json({ results, message: "Success" }, { status: 200 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { message: "You have an error getting product data~", errors: error.errors },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { message: "An unexpected error occurred" },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { arDescription, brandId, categoryId, enDescription, images, isActive, model, price, salePrice, stock } = ZProductSchema.parse(body);

        const existingProduct = await prisma.product.findFirst({
            where: {
                OR: [
                    { model },
                    { enDescription },
                    { arDescription }
                ]
            }
        });

        if (existingProduct) {
            if (existingProduct.model === model) {
                return NextResponse.json({ message: `Model "${model}" already exists.` });
            }
            if (existingProduct.enDescription === enDescription) {
                return NextResponse.json({ message: `English description "${enDescription}" already exists.` });
            }
            if (existingProduct.arDescription === arDescription) {
                return NextResponse.json({ message: `Arabic description "${arDescription}" already exists.` });
            }
        }


        await prisma.product.create({
            data: {
                arDescription,
                enDescription,
                model,
                brandId,
                images: {
                    createMany: {
                        data: images.map((image: string) => ({
                            imageUrl: image
                        }))
                    }
                },
                price,
                isActive,
                stock,
                categoryId,
                salePrice,
            }
        });

        return NextResponse.json({ message: "Product created successfully" });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return Response.json({ message: "You have an error submittion product~", errors: error.errors });
        }
    }
}

