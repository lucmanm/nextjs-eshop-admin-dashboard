import { ENV } from "@/config/env-variable";
import { ZProductSchema } from "@/schemas/product.schema";
import { infer, z } from "zod";

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
        await fetch('/api/v1/products', {
            method: "POST",
            body: JSON.stringify(data)
        })
        // if (!response.ok) {
        //     throw new Error("FAILED_CREATE_PRODUCT");
        // }
        // const result = await response.json()
        // return result.products

    } catch (error) {
        console.log("ERROR_GET_PRODUCTS", error);
    }
}