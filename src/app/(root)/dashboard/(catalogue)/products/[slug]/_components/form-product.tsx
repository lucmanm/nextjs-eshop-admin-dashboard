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
import { UploadMultipleImage } from "@/components/upload-multiple-image";
import { Save } from "lucide-react";

const FormSchema = z.object({
  image: z.array(z.string()).nonempty({ message: "Missing input field required upload image" }),
  model: z.string().min(2, {
    message: " Input field model Required",
  }),
});

export function FormProduct() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      image: [],
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
        {/* Image upload component multiple images */}
        <FormField
          control={form.control}
          name="image"
          render={({ field: { value, onChange } }) => {
            // console.log(value);

            return (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <UploadMultipleImage value={value} onChange={(image) => onChange([...image, image])} />
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
        <Button type="submit" className=" gap-2 w-1/6 self-end hover:bg-green-600 font-semibold">
          <Save size={18} />
          Submit
        </Button>
      </form>
    </Form>
  );
}
