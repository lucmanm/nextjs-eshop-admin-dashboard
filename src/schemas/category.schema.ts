import { z } from "zod";

export const ZCategorySchema = z.object({
    enName: z.string().min(1, { message: 'Missing input required English Category Name' }),
    arName: z.string().min(1, { message: 'مفقود الإدخال المطلوب اسم الفئة العربية' }),
});
