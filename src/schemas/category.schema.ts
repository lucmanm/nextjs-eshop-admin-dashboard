import { z } from "zod";

export const ZCategorySchema = z.object({
    id: z.string().min(1).optional(),
    enName: z.string().min(1, { message: 'Missing input required English Category Name' }),
    arName: z.string().min(1, { message: 'مفقود الإدخال المطلوب اسم الفئة العربية' }),
});
