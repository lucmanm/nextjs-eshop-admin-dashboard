"use server"

import { prisma } from "@/lib/prisma"

export type TFileData = {
    model: string,
    ar_description: string
    en_description: string
    unit_price: string
    group_name: string
    big_showroom: string
    small_showroom: string
    wh_showroom: string
    web_showroom: string
}

export async function importExcelData(values: TFileData[]) {
    try {
        console.log(values);

    } catch (error) {
        console.log("TEST LOG", error);
    }
}