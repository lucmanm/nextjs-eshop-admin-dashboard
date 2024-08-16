import { z } from "zod";

export const ZSliderSchema = z.object({
    enSlider: z.string().min(1),
    arSlider: z.string().min(1),
});