import { z } from "zod";

export const ZProductSchema = z.object({
    images: z.string().array(),
    model: z.string().min(2, {
        message: 'Input field model Required',
    }),
    enDescription: z.string().min(1, { message: 'Missing input field description' }),
    arDescription: z.string().min(1, { message: 'Missing input description' }),
    price: z.coerce.number().min(1, { message: 'Missing input field price' }),
    salePrice: z.coerce.number().min(0, { message: 'Missing input field sale price' }),
    stock: z.coerce.number().min(1, { message: 'Missing input field inventory' }),
    isActive: z.boolean().default(false),
    categoryId: z.string().min(1, { message: 'Missing input field category' }),
    brandId: z.string().min(1, { message: 'Missing input field category' }),
});