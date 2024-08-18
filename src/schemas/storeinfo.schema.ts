import { z } from "zod";

export const zStoreInformation = z.object({
    enStoreName: z.string().min(1, { message: "Please enter your english store name" }),
    arStoreName: z.string().min(1, { message: "Please enter your arabic store name" }),
});