"use server"
import { ENV } from "@/config/env-variable";
import { ZCategorySchema } from "@/schemas/category.schema";
import { z } from "zod";

export async function createCategory(values: z.infer<typeof ZCategorySchema>) {
    try {
        const response = await fetch(`${ENV.PUBLIC_ESHOP_API}/category`, {
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