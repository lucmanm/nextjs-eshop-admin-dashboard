import { ZProductSchema } from "@/schemas/product.schema";
import { z } from "zod";

export async function getProducts() {
    try {
        const response = await fetch(`${process.env.PUBLIC_DUMMY_ECOMMERCE_API}`)
        if (!response.ok) {
            throw new Error("FAILED_FETCH_PRODUCTS");
        }

        const result = await response.json()
        return result.products

    } catch (error) {
        console.log("ERROR_GET_PRODUCTS", error);
    }
}

export async function createProduct(data: z.infer<typeof ZProductSchema>) {
    try {
        const response = await fetch('/api/v1/product', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        const results = await response.json()
        console.log(results.message);

    } catch (error) {
        console.log("ERROR_GET_PRODUCTS", error);
    }
}