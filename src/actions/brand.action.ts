"use server"
import { ENV } from "@/config/env-variable";
import { ZBrandSchema } from "@/schemas/brand.schema";
import { toast } from "react-toastify";
import { z } from "zod";

export async function createBrand(values: z.infer<typeof ZBrandSchema>) {
    try {
        const response = await fetch(`${ENV.PUBLIC_ESHOP_API}/brand`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        if (response.ok) {
            const results = await response.json()
            return { message: results.message, status: response.status, statusText: response.statusText }
        }

    } catch (error) {
        if (error instanceof z.ZodError) {
            return { message: "You have an error in submitting the brand", errors: error.errors, status: 501 };
        }
    }
}
export async function getBrand() {
    try {
        const response = await fetch(`${ENV.PUBLIC_ESHOP_API}/brand`)
        if (response.status === 200) {
            const data = await response.json()
            return data.results
        } else {
            return { message: "ERROR_FETCH_BRAND" }
        }


    } catch (error) {
        if (error instanceof z.ZodError) {
            return { message: "ERROR_GET_CATCH_BRAND", errors: error.errors, status: 501 };
        }
    }
}