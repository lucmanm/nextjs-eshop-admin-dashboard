"use server"
import { ENV } from "@/config/env-variable";
import { ZBrandSchema } from "@/schemas/brand.schema";
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


export async function getBrands() {
    try {
        const response = await fetch(`${ENV.PUBLIC_ESHOP_API}/brand`)
        if (response.status === 200) {
            const data = await response.json()
            return { message: "success", results: data.results }
        } else {
            return { message: "ERROR_FETCH_BRAND" }
        }


    } catch (error) {
        if (error instanceof z.ZodError) {
            return { message: "ERROR_GET_CATCH_BRAND", errors: error.errors, status: 501 };
        } else {
            return { message: "ERROR_GET_CATCH_BRAND", }
        }
    }
}

// export async function getBrand(id: string) {
//     try {
//         const response = await fetch(`${ENV.PUBLIC_ESHOP_API}/brand/${data}`)
//         if (response.status === 200) {
//             const data = await response.json()
//             return { message: "success", results: data.results }
//         } else {
//             return { message: "ERROR_FETCH_BRAND" }
//         }


//     } catch (error) {
//         if (error instanceof z.ZodError) {
//             return { message: "ERROR_GET_CATCH_BRAND", errors: error.errors, status: 501 };
//         } else {
//             return { message: "ERROR_GET_CATCH_BRAND", }
//         }
//     }
// }

export async function deleteBrand(id: string) {
    try {

        const response = await fetch(`${ENV.PUBLIC_ESHOP_API}/brand/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            return { success: false, message: "ERROR_DELETE_BRAND" }
        } else {
            return { success: true, message: "Successfully Deleted" }
        }

    } catch (error) {

        let errorMessage = "ERROR_DELETE_CATCHED_BRAND";

        if (error instanceof z.ZodError) {
            errorMessage = "ERROR_DELETE_CATCHED_BRAND";
        }
        return { success: false, message: errorMessage, }


    }
}