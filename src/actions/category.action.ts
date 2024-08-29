"use server"
import { ENV } from "@/config/env-variable";
import { ZCategorySchema } from "@/schemas/category.schema";
import { z } from "zod";

export async function getCategories() {
    try {
        const response = await fetch(`${ENV.PUBLIC_ESHOP_API}/category`)
        if (response.status === 200) {
            const data = await response.json()
            return { message: "success", results: data.results }
        } else {
            return { message: "ERROR_FETCH_CATEGORIES" }
        }

    } catch (error) {
        if (error instanceof z.ZodError) {
            return { message: "ERROR_GET_CATCH_CATEGORIES", errors: error.errors, status: 501 };
        } else {
            return { message: "ERROR_GET_CATCH_CATEGORIES", }
        }
    }
}

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
            return { message: "You have an error in submitting the category data", errors: error.errors, status: 501 };
        }
    }
}