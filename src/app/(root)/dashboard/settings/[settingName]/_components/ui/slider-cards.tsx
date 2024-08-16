"use client";
import React from "react";
import { z } from "zod";
import { CloudinaryImage } from "@/components/cloudinary-image";
import { Card } from "@/components/ui/card";
import { CloseButton } from "@/components/ui/close-btn";
import { TabTransalation } from "@/components/tab-translation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { CldUploadWidget, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { CirclePlus, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ENV } from "@/config/env-variable";
import { ButtonWithIcon } from "@/components/ui/button-w-icon";
import { ZSliderSchema } from "@/schemas/slider.schema";
import { revalidatePath } from "next/cache";
type TSliderProps = {
  items: z.infer<typeof ZSliderSchema>[];
};
export const BannersContainer = ({ items }: TSliderProps) => {
  // TODO Try to use useformcontext
  const form = useForm<z.infer<typeof ZSliderSchema>>({
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
      revalidatePath("/dashboard/settings/banners");
      if (response.ok) {
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        });
      }
    } catch (error) {
      toast({
        title: "ERROR_SUBMITTION",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
      console.log("ERROR_SUBMIT_SLIDER", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
                  {form.getValues("enSlider") ? (
                    <CloudinaryImage
                      src={form.getValues("enSlider")}
                      alt="cld sample"
                      className="h-36 overflow-hidden rounded-md object-cover"
                      width={1080}
                      height={300}
                    />
                  ) : (
                    <FormField
                      control={form.control}
                      name="enSlider"
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
                                        className={
                                          "group flex-1 flex h-36 bg-neutral-100 drop-shadow-sm"
                                        }
                                      >
                                        <CirclePlus className="max-sm:size-1/6 size-1/2 text-blue-600 group-hover:text-slate-100 " />
                                      </Button>
                                    );
                                  }}
                                </CldUploadWidget>
                              </div>
                            </FormControl>
                            <FormMessage />
                            {/* TODO error message shoudl be outside */}
                          </FormItem>
                        );
                      }}
                    />
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
                  {form.getValues("arSlider") ? (
                    <CloudinaryImage
                      src={form.getValues("arSlider")}
                      alt="cld sample"
                      className="h-36 overflow-hidden rounded-md object-cover"
                      width={1080}
                      height={300}
                    />
                  ) : (
                    <FormField
                      control={form.control}
                      name="arSlider"
                      render={({ field: { onChange } }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <div className="flex  flex-col gap-2 md:gap-4">
                                {/* Upload botton */}
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
                                        className={
                                          "group flex-1 flex h-36 bg-neutral-100 drop-shadow-sm"
                                        }
                                      >
                                        <CirclePlus className="max-sm:size-1/6 size-1/2 text-blue-600 group-hover:text-slate-100 " />
                                      </Button>
                                    );
                                  }}
                                </CldUploadWidget>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  )}
                </div>
              </React.Fragment>
            ),
          }}
        />
        <ButtonWithIcon
          {...{
            icon: <Save className="h-3.5 w-3.5" />,
            label: "Save",
            type: "submit",
            className: "w-1/6",
          }}
        />
      </form>
    </Form>
  );
};
