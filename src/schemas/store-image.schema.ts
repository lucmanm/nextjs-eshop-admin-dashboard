import { z } from "zod";

export const zStoreInformation = z.object({
    storeLogo: z.string().min(1, { message: "Missing file store logo" }),
    storeIcon: z.string().min(1, { message: "Missing file store icon" }),
    productDefaultsImage: z.string().min(1, { message: "Missing file store icon" }),
    categoryImage: z.string().min(1, { message: "Missing file store icon" }),
    vatLogo: z.string().min(1, { message: "Missing file store icon" }),
    paymentGatewayLogo: z.array(z.string())
});