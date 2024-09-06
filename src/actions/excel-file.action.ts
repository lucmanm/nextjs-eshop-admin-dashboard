"use server"

import { prisma } from "@/lib/prisma";
import { z } from "zod";

const excelSchema = z.object({
    model: z.string().min(1),
    ar_description: z.string().min(1),
    en_description: z.string().min(1),
    unit_price: z.coerce.string().min(1),
    group_name: z.string().min(1),
    big_showroom: z.coerce.number().min(1),
    small_showroom: z.coerce.string().min(1),
    wh_showroom: z.coerce.string().min(1),
    web_showroom: z.coerce.string().min(1),
})


// export type TFileData = {
//     model: string,
//     ar_description: string
//     en_description: string
//     unit_price: string
//     group_name: string
//     big_showroom: string
//     small_showroom: string
//     wh_showroom: string
//     web_showroom: string
// }

export async function importExcelData(values: z.infer<typeof excelSchema>[]) {
    try {

        const productResponse = await prisma.product.createMany({
            data: values.map(data => ({
                model: data.model,
                enDescription: data.en_description,
                arDescription: data.ar_description,
                price: data.unit_price,
                brandId: "cm06w36ci00022po30ovsfdrw",
                isActive: true,
                stock: data.big_showroom,
                categoryId: "cm05v0n4t00012po3pa5q898f",

            })),
            skipDuplicates: true
        })

        if (productResponse) {
            return { message: "Successfully Uplaoded", status: 200 }
        }

    } catch (error) {
        return {
            status: 409,
            message: "Missing data in cells input"
        }

    }
}