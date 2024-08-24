"use server"
import { ENV } from "@/config/env-variable";
import { ZSliderSchema } from "@/schemas/slider.schema";
import { z } from "zod";

export async function getSliders() {
    'use server'
    try {
        const response = await fetch(`${ENV.PUBLIC_ESHOP_API}/slider`)
        if (!response.ok) {
            throw new Error("FAILED_FETCH_SLIDERS");
        }
        const result = await response.json()
        return result.data
    } catch (error) {
        console.log("FAILED_FETCH_SLIDERS", error);
    }
}
export async function createSlider(data: z.infer<typeof ZSliderSchema>) {
    try {
        await fetch(`${ENV.PUBLIC_ESHOP_API}/slider`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        return { message: "Successfully Created", status: 201 }

    } catch (error) {
        return { message: "ERROR_CATCH_RESULT" }
    }
}