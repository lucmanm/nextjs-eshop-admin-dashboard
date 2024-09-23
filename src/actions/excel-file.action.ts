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
});

export async function importExcelData(values: z.infer<typeof excelSchema>[]) {
    try {
        const response = await Promise.all(
            values.map(async (value) => {
                await prisma.product.upsert({
                    where: { model: value.model }, // Adjust the unique identifier as needed
                    update: {
                        arDescription: value.ar_description,
                        enDescription: value.en_description,
                        price: value.unit_price,
                        stock: Number(value.web_showroom),
                        category: {
                            connectOrCreate: {
                                create: {
                                    arName: value.group_name,
                                    enName: value.group_name
                                },
                                where: {
                                    enName: value.group_name
                                }
                            }
                        }
                    },
                    create: {
                        arDescription: value.ar_description,
                        enDescription: value.en_description,
                        model: value.model,
                        price: value.unit_price,
                        stock: Number(value.web_showroom),
                        category: {
                            connectOrCreate: {
                                create: {
                                    arName: value.group_name,
                                    enName: value.group_name
                                },
                                where: {
                                    enName: value.group_name
                                }
                            }
                        }
                    }
                });
            })
        );

        if (response) {
            return { message: "Successfully Uploaded", status: 200 };
        }
    } catch (error) {
        console.error(error); // Log error for debugging
        return {
            status: 409,
            message: "Missing data in cells input",
            // TODO you are getting error here even the upload is success
        };
    }
}
