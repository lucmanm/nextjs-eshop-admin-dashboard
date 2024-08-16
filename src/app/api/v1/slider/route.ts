import { prisma } from "@/lib/prisma";
import { ZSliderSchema } from "@/schemas/slider.schema";
import { NextResponse } from "next/server";
import { z } from "zod";
export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { arSlider, enSlider } = ZSliderSchema.parse(body);

        const response = await prisma.slider.create({
            data: {
                enSlider,
                arSlider
            }
        });
        return Response.json({ message: "Slider created successfully", data: response });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ message: "You have an error submittion~", errors: error.errors });
        }

    }
}

export async function GET(request: Request) {
    try {
        const respose = await prisma.slider.findMany()
        return Response.json({ message: "success", data: respose })
    } catch (error) {
        console.log("ERROR_POST_SLIDER", error);

    }
}