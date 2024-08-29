import { z } from "zod";

export const ZBrandSchema = z.object({
    id: z.string().min(1).optional(),
    enName: z.string().min(1, { message: 'Missing input required English Brand Name' }),
    arName: z.string().min(1, { message: 'مفقود الإدخال المطلوب اسم العلامة التجارية العربية' }),
});