import { ENV } from "@/config/env-variable";

export async function getSliders() {
    try {
        const response = await fetch(`${ENV.PUBLIC_ESHOP_API}/slider`)
        if (!response.ok) {
            throw new Error("FAILED_FETCH_SLIDERS");
        }
        const result = await response.json()
        return result.data

    } catch (error) {
        console.log("ERROR_GET_PRODUCTS", error);

    }
}