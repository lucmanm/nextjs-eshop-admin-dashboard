"use client";
import React from "react";
import { notFound } from "next/navigation";
import { CloudinaryImage } from "@/components/cloudinary-image";
import { TabTransalation } from "@/components/tab-translation";
import { CirclePlus, ImageIcon, Save } from "lucide-react";
import { Card } from "@/components/ui/card";
import { CloseButton } from "@/components/ui/close-btn";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { CldUploadWidget, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { ENV } from "@/config/env-variable";
import { ButtonWithIcon } from "@/components/ui/button-w-icon";
import { ZSliderSchema } from "@/app/api/v1/slider/route";

export const FormSlider = () => {
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
    <div className="max-sm:flex flex-col md:grid md:grid-cols-4 gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="enSlider"
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
                              className="group flex-1 flex h-36 bg-neutral-100 drop-shadow-sm"
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
                              className="group flex-1 flex h-36 bg-neutral-100 drop-shadow-sm"
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

          <ButtonWithIcon
            {...{
              icon: <Save className="h-3.5 w-3.5" />,
              label: "Save",
              type: "submit",
            }}
          />
        </form>
      </Form>
    </div>
  );
};
