import { z } from "zod";

export const zStoreInformation = z.object({
    enStoreName: z.string().min(1, { message: "Please enter your  store name" }),
    arStoreName: z.string().min(1, { message: "Please enter your  store name" }),
    enAddress: z.string().min(1, { message: "Please enter your  store address" }),
    arAddress: z.string().min(1, { message: "Please enter your  store address" }),
    arWorkingTime: z.string().min(1, { message: "Please enter   Working timings" }),
    enWorkingTime: z.string().min(1, { message: "Please enter  arabic Working timings" }),
    enAbout: z.string().min(1, { message: "Please enter your  about us" }),
    arAbout: z.string().min(1, { message: "Please enter your  about us" }),
    enTaxNumber: z.number().min(1, { message: "Please enter your  tax number" }),
    arTaxNumber: z.number().min(1, { message: "Please enter your  tax number" }),
    arCommercialRegister: z.number().min(1, { message: "Please enter your  commercial register number" }),
    enCommercialRegister: z.number().min(1, { message: "Please enter your  commercial register number" }),
    enTelephone: z.string().min(1, { message: "Please enter your Telephone Number" }),
    arTelephone: z.string().min(1, { message: "Please enter your  Telephone Number" }),
    email: z.string().min(1, { message: "Please enter your  Telephone Number" }),
});