"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { ImageIcon, Save } from "lucide-react";
import { CldImage, CldUploadWidget, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { ENV } from "@/config/env-variable";
import { Card } from "@/components/ui/card";

const zProductSchema = z.object({
  images: z.string().array(),
  model: z.string().min(2, {
    message: "Input field model Required",
  }),
});

export function FormProduct() {
  const form = useForm<z.infer<typeof zProductSchema>>({
    resolver: zodResolver(zProductSchema),
    defaultValues: {
      images: [],
      model: "",
    },
  });

  function onSubmit(data: z.infer<typeof zProductSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  console.log(form.getValues());

  const onUpload = (value: string) => {
    form.setValue("images", [...form.getValues("images"), value]);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="images"
          render={({ field: { value, onChange } }) => {
            console.log(value.map((data) => data));

            return (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <div className="flex  flex-col gap-2 md:gap-4">
                    <div className="flex gap-2 md:gap4">
                      {value.length >= 0 &&
                        value.map((data, idx) => (
                          <Card key={idx} className="overflow-hidden size-28">
                            <CldImage alt={`${data}`} src={`${data}`} height={500} width={500} />
                          </Card>
                        ))}
                      {/* Upload botton */}

                      <CldUploadWidget
                        uploadPreset={ENV.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                        onSuccess={(results: CloudinaryUploadWidgetResults) => {
                          if (typeof results.info === "object") {
                            onUpload(results.info.secure_url);
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
                              variant="outline"
                              onClick={onClick}
                              className="flex  gap-4 size-28 flex-col"
                            >
                              <ImageIcon className="text-slate-950 size-4 md:size-8" />
                              <span className="max-sm:text-xs">Upload Image</span>
                            </Button>
                          );
                        }}
                      </CldUploadWidget>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="model"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Model</FormLabel>
              <FormControl>
                <Input placeholder="Model" {...field} />
              </FormControl>
              <FormDescription>Input model or series of the product</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="gap-2 w-1/6 self-end hover:bg-green-600 font-semibold">
          <Save size={18} />
          Submit
        </Button>
      </form>
    </Form>
  );
}
