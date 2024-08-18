import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { ENV } from "@/config/env-variable";
import { ZSliderSchema } from "@/schemas/slider.schema";
import { CirclePlus } from "lucide-react";
import { CldUploadWidget, CloudinaryUploadWidgetResults } from "next-cloudinary";
import React from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

type SliderFieldProps = {
  name: "enSlider" | "arSlider";
};
export const ImageUploadField = ({ name }: SliderFieldProps) => {
  const { control } = useFormContext<z.infer<typeof ZSliderSchema>>();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { onChange } }) => {
        return (
          <FormItem>
            <FormControl>
              <div className="flex  flex-col gap-2 md:gap-4">
                {/* Upload botton */}
                {/* TODO onchange previous value is not updating */}
                <CldUploadWidget
                  uploadPreset={ENV.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                  onSuccess={(results: CloudinaryUploadWidgetResults) => {
                    if (typeof results.info === "object") {
                      onChange(results.info.secure_url);
                    }
                  }}
                  options={{
                    sources: ["local", "url", "google_drive"],
                  }}
                >
                  {({ open }) => {
                    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
                      e.preventDefault();
                      open();
                    };

                    return (
                      <Button
                        onClick={onClick}
                        className={"group flex-1 flex h-36 bg-neutral-100 drop-shadow-sm"}
                      >
                        <CirclePlus className="max-sm:size-1/6 size-1/2 text-blue-600 group-hover:text-slate-100 " />
                      </Button>
                    );
                  }}
                </CldUploadWidget>
              </div>
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
};
