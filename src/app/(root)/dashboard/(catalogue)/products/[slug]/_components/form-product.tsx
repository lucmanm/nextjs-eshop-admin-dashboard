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

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

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

  const images = form.getValues("images");

  return (
    <div>
      {images.length >= 0 &&
        images.map((data, idx) => (
          <Card key={idx} className="overflow-hidden size-28">
            <CldImage alt={`${data}`} src={`${data}`} height={500} width={500} />
          </Card>
        ))}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Tabs defaultValue="english" className="">
            {/* Tabs buttons */}
            <TabsList className="grid grid-cols-2 w-80">
              <TabsTrigger value="english" className="gap-2 md:gap-4">
                <Image
                  className="rounded-full"
                  width={24}
                  height={24}
                  alt="United States"
                  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                />
                <span>English</span>
              </TabsTrigger>
              <TabsTrigger value="arabic" className="gap-2 md:gap-4">
                <Image
                  className="rounded-full"
                  width={24}
                  height={24}
                  alt="United States"
                  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg"
                />
                <span>Arabic</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="english">
              <Card>
                <CardHeader>
                  <CardTitle className="font-bold">Create Products</CardTitle>
                  <CardDescription>
                    Enter all the rquired filed mention on below describes about your product
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <FormField
                    control={form.control}
                    name="images"
                    render={({ field: { value } }) => {
                      console.log(value.map((data) => data));

                      return (
                        <FormItem>
                          <FormLabel />
                          <FormControl>
                            <div className="flex  flex-col gap-2 md:gap-4">
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
                </CardContent>
                <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="arabic">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, youll be logged out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
          <Button type="submit" className="gap-2 w-36 self-start hover:bg-green-600 font-semibold">
            <Save size={18} />
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
