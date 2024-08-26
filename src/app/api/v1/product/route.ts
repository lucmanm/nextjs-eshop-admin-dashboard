import { prisma } from "@/lib/prisma";
import { ZProductSchema } from "@/schemas/product.schema";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: Request, res: NextResponse) {
    try {
        const body = await req.json()
        const { arDescription, brandId, categoryId, enDescription, images, isActive, model, price, salePrice, stock } = ZProductSchema.parse(body);

        // const checkModel = await prisma.product.findUnique({
        //     where: { model }
        // })

        // if (checkModel) {
        //     return Response.json({ message: `Model already exist` });
        // }


        const createProductStatus = await prisma.product.create({
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

        return NextResponse.json({ message: "Slider created successfully" });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return Response.json({ message: "You have an error submittion product~", errors: error.errors });
        }
    }
}