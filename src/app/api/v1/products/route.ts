import { prisma } from "@/lib/prisma";
import { ZProductSchema } from "@/schemas/product.schema";
import { NextResponse } from "next/server";
import { z } from "zod";

import { type NextRequest } from 'next/server'
// TODO isactive no working
export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const searchQuery = searchParams.get('search')?.toString() || '';

        const results = await prisma.product.findMany({
            where: {
                OR: searchQuery
                    ? [
                        {
                            model: {
                                contains: searchQuery,
                                mode: 'insensitive',
                            },
                        },
                        {
                            enDescription: {
                                contains: searchQuery,
                                mode: 'insensitive',
                            },
                        },
                        {
                            category: {
                                enName: {
                                    contains: "PC Dell",
                                    mode: 'insensitive',
                                }
                            }
                        }
                    ]
                    : undefined, // If no search query, return all products
            },
            include: {
                images: true,
                brand: true,
                category: true,
            },
            orderBy: {
                createdAt: 'asc',
            },
            take: 30,
            skip: 0,
        });

        return NextResponse.json({ results, message: 'success' }, { status: 200 });

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

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { arDescription, brandId, categoryId, enDescription, images, isActive, model, price, salePrice, stock } = ZProductSchema.parse(body);

        // WIP FILTER ALL THE DATA BEFORE ENTERING

        // Brand and Category ID Checking
        const checkCategory = await prisma.category.findUnique({
            where: { id: categoryId }
        })

        if (!checkCategory) {
            return NextResponse.json({ message: "Error this category not available~" });
        }
        // Check the brand if available
        const checkBrand = await prisma.brand.findUnique({
            where: { id: brandId }
        })

        if (!checkBrand) {
            return NextResponse.json({ message: "Error this brandF not available~" });
        }

        const existingProduct = await prisma.product.findFirst({
            where: {
                OR: [
                    { model },
                    { enDescription },
                    { arDescription }
                ]
            }
        });
        console.log("TEST_LOG");

        if (existingProduct) {
            if (existingProduct.model === model) {
                return NextResponse.json({ message: `Model "${model}" already exists.` }, { status: 409 });
            }
            if (existingProduct.enDescription === enDescription) {
                return NextResponse.json({ message: `English description "${enDescription}" already exists.` }, { status: 409 });
            }
            if (existingProduct.arDescription === arDescription) {
                return NextResponse.json({ message: `Arabic description "${arDescription}" already exists.` }, { status: 409 });
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

        return NextResponse.json({ message: "Product created successfully" }, { status: 201 });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return Response.json({ message: "You have an error submittion product~", errors: error.errors });
        }
    }
}

