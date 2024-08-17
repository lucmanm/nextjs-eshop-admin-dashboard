import { z } from "zod";

export const ZSliderSchema = z.object({
    enSlider: z.string().min(1, { message: "Please select and image to add banners" }),
    arSlider: z.string().min(1, { message: "Please select and image to add banners" }),
});