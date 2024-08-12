"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Save } from "lucide-react";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { ENV } from "@/config/env-variable";
import { TResults } from "@/components/upload-multiple-image";

const FormSchema = z.object({
  images: z.array(z.string()).nonempty({ message: "Missing input field required upload image" }),
  model: z.string().min(2, {
    message: "Input field model Required",
  }),
});

export function FormProduct() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      images: [],
      model: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="images"
          render={({ field: { value, onChange } }) => {
            return (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <div className="flex ">
                    {value.length >= 0 &&
                      value.map((data, idx) => (
                        <CldImage
                          key={idx}
                          alt="asdasd"
                          src={data}
                          className="size-10"
                          height={500}
                          width={500}
                        />
                      ))}
                      {/* Upload botton */}

                    <CldUploadWidget
                      uploadPreset={ENV.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                      onSuccess={(results) => {
                        if (results.info && typeof results.info !== "string") {
                          onChange((prevIamges: any) => [...prevIamges, results.info?.secure_url]);
                        }
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
                            className="flex size-28 flex-col gap-4"
                          >
                            <Save className="text-slate-950 size-7" />
                            Upload
                          </Button>
                        );
                      }}
                    </CldUploadWidget>
                  </div>
                </FormControl>
                <FormDescription>Upload an image</FormDescription>
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
