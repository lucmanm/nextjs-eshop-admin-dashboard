"use client";
import React from "react";
import { z } from "zod";
import { CloudinaryImage } from "@/components/cloudinary-image";
import { Card } from "@/components/ui/card";
import { CloseButton } from "@/components/ui/close-btn";
import { TabTransalation } from "@/components/tab-translation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save } from "lucide-react";
import { ButtonWithIcon } from "@/components/ui/button-w-icon";
import { ZSliderSchema } from "@/schemas/slider.schema";
import { ImageUploadField } from "./image-upload-field";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type TSliderProps = {
  items: z.infer<typeof ZSliderSchema>[];
};

export const BannersContainer = ({ items }: TSliderProps) => {
  const router = useRouter();
  const formMethods = useForm<z.infer<typeof ZSliderSchema>>({
    resolver: zodResolver(ZSliderSchema),
    defaultValues: {
      arSlider: "",
      enSlider: "",
    },
  });

  async function onSubmit(data: z.infer<typeof ZSliderSchema>) {
    try {
      const response = await fetch("/api/v1/slider", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Banner added Successfully");
        router.refresh();
        formMethods.reset();
      }
    } catch (error) {
      toast.error("ERROR_BANNER_SUBMIT");
    }
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <TabTransalation
          {...{
            arTitle: "لافتات",
            arDescription: "",
            enTitle: "Banners",
            enDescription: "",
            enChildren: (
              <React.Fragment>
                <div className="max-sm:flex max-sm:flex-col md:grid md:grid-cols-4 gap-4">
                  {items.map((item, idx) => (
                    <Card key={idx} className="relative overflow-hidden hover:bg-slate-100/25">
                      <CloseButton />
                      <CloudinaryImage
                        src={item.enSlider}
                        alt="cld sample"
                        className="h-36 overflow-hidden rounded-md object-cover"
                        width={1080}
                        height={300}
                      />
                    </Card>
                  ))}
                  {formMethods.getValues("enSlider") ? (
                    <CloudinaryImage
                      src={formMethods.getValues("enSlider")}
                      alt="cld sample"
                      className="h-36 overflow-hidden rounded-md object-cover"
                      width={1080}
                      height={300}
                    />
                  ) : (
                    <ImageUploadField name="enSlider" />
                  )}
                </div>
              </React.Fragment>
            ),
            arChildren: (
              <React.Fragment>
                <div className="max-sm:flex max-sm:flex-col md:grid md:grid-cols-4 gap-4">
                  {items.map((item, idx) => (
                    <Card key={idx} className="relative overflow-hidden hover:bg-slate-100/25">
                      <CloseButton />
                      <CloudinaryImage
                        src={item.enSlider}
                        alt="cld sample"
                        className="h-36 overflow-hidden rounded-md object-cover"
                        width={1080}
                        height={300}
                      />
                    </Card>
                  ))}
                  {formMethods.getValues("arSlider") ? (
                    <CloudinaryImage
                      src={formMethods.getValues("arSlider")}
                      alt="cld sample"
                      className="h-36 overflow-hidden rounded-md object-cover"
                      width={1080}
                      height={300}
                    />
                  ) : (
                    <ImageUploadField name="arSlider" />
                  )}
                </div>
              </React.Fragment>
            ),
          }}
        />
        {/* error message test */}
        <div className="text-red-600">{formMethods.formState.errors.enSlider?.message}</div>
        <ButtonWithIcon
          {...{
            icon: <Save className="h-3.5 w-3.5" />,
            label: "Save",
            type: "submit",
            className: "w-1/6",
          }}
        />
      </form>
    </FormProvider>
  );
};
