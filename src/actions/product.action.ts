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

type Result<T> = {
    message: T;
    errors?: any;  // Adjust the type to match the actual error structure
    status?: number;
};

export async function createProduct<T>(data: z.infer<typeof ZProductSchema>): Promise<Result<T>> {
    try {
        const response = await fetch(`${ENV.PUBLIC_ESHOP_API}/product`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Failed to submit product: ${response.statusText}`);
        }

        const responseData = await response.json();
        return { message: responseData.messag as T };

    } catch (error) {
        if (error instanceof z.ZodError) {
            return { message: "You have an error in submitting the product" as T, errors: error.errors, status: 501 };
        } else {
            return { message: `An unexpected error occurred: ${(error as Error).message}` as T, status: 500 };
        }
    }
}
