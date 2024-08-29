"use server"
import { ENV } from "@/config/env-variable";
import { ZProductSchema } from "@/schemas/product.schema";
import { z } from "zod";

export async function getProducts() {
    try {
        const response = await fetch(`${ENV.PUBLIC_ESHOP_API}/product`)
        if (response.status === 200) {
            const data = await response.json()
            return data.results
        } else {
            throw new Error("ERROR_REPONSE")
        }


    } catch (error) {
        console.log("ERROR_GET_PRODUCTS", error);
    }
}


export async function createProduct(data: z.infer<typeof ZProductSchema>) {
    try {
        const response = await fetch(`${ENV.PUBLIC_ESHOP_API}/product`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (response.status === 201) {
            const data = await response.json();
            return { message: data.message };
        } else if (response.status === 409) {
            const data = await response.json();
            return { message: data.message }
        } else {
            return { message: "ERROR DATA" }
        }

    } catch (error) {
        if (error instanceof z.ZodError) {
            return { message: "You have an error in submitting the product", errors: error.errors, status: 501 };
        } else {
            return { message: `An unexpected error occurred: ${(error as Error).message}` };
        }
    }
}
