import { ZProductSchema } from "@/schemas/product.schema";
import { z } from "zod";

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { arDescription, brandId, categoryId, enDescription, images, isActive, model, price, salePrice, stock } = ZProductSchema.parse(body);
        console.log("ROUTE_DATA", arDescription, brandId, categoryId, enDescription, images, isActive, model, price, salePrice, stock);


        // const response = await prisma.slider.create({
        //     data: {
        //         enSlider,
        //         arSlider
        //     }
        // });
        return Response.json({ message: "Slider created successfully" });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return Response.json({ message: "You have an error submittion product~", errors: error.errors });
        }

    }
}