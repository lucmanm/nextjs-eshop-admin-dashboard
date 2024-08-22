"use server"
import { ENV } from "@/config/env-variable";
import { ZBrandSchema } from "@/schemas/brand.schema";
import { z } from "zod";

export async function createBrand(values: z.infer<typeof ZBrandSchema>) {
    try {
        const res = await fetch(`${ENV.PUBLIC_ESHOP_API}/brand`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        if (res.ok) {
            const response = await res.json()
            return response
        }
        // else {
        //     return { message: "MUSKILA BAI" }
        // }

    } catch (error) {
        console.log(error);
    }
}