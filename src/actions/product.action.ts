"use server"
import { ENV } from "@/config/env-variable";
import { ZProductSchema } from "@/schemas/product.schema";
import { z } from "zod";

// export async function getProducts() {
//     try {
//         const response = await fetch(`${process.env.PUBLIC_DUMMY_ECOMMERCE_API}`)
//         if (!response.ok) {
//             throw new Error("FAILED_FETCH_PRODUCTS");
//         }

//         const result = await response.json()
//         return result.products

//     } catch (error) {
//         console.log("ERROR_GET_PRODUCTS", error);
//     }
// }

export async function createProduct(data: z.infer<typeof ZProductSchema>) {
    try {
        const response = await fetch(`${ENV.PUBLIC_ESHOP_API}/product`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error(`Failed to submit product: ${response.statusText}`);
        }

        const results = await response.json()
        return { message: results }
    } catch (error) {
        // console.log("ERROR_GET_PRODUCTS", error);
        if (error instanceof z.ZodError) {
            return { message: "You have an error in submitting the product", errors: error.errors, status: 501 };
        }
    }
}