import { CloudinaryImage } from "@/components/cloudinary-image";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { ENV } from "@/config/env-variable";
import { CirclePlus } from "lucide-react";
import { CldUploadWidget, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { useFormContext } from "react-hook-form";

type TFieldUploadStoreImage = {
  name: string;
  alt: string;
};
export const FieldUploadStoreImage = ({ name, alt }: TFieldUploadStoreImage) => {
  const { control, getValues } = useFormContext();
  return (
    <div className="size-48">
      <span className="font-bold max-sm:text-xs py-2 text-sm">Store Logo</span>
      {getValues(name) ? (
        <CloudinaryImage
          src={`${getValues(name)}`}
          alt={alt}
          width={200}
          height={200}
          className="size-40 shadow border object-cover overflow-hidden rounded-md"
        />
      ) : (
        <FormField
          control={control}
          name={name}
          render={({ field: { onChange } }) => {
            return (
              <FormItem>
                <FormControl>
                  <div className="flex  flex-col gap-2 md:gap-4">
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
                            className="group flex size-40 bg-neutral-100 shadow border rounded-md border-slate-300"
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
      )}
    </div>
  );
};
