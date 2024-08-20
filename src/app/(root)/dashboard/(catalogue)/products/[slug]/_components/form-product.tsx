'use client';

import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { ENV } from '@/config/env-variable';
import { zodResolver } from '@hookform/resolvers/zod';
import { ImageIcon, Save } from 'lucide-react';
import { CldImage, CldUploadWidget, CloudinaryUploadWidgetResults } from 'next-cloudinary';
import { useForm } from 'react-hook-form';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { FieldInput } from './ui/field-input';

export const zProductSchema = z.object({
  images: z.string().array(),
  model: z.string().min(2, {
    message: 'Input field model Required',
  }),
  description: z.string().min(1, { message: 'Missing input field description' }),
  price: z.string().min(1, { message: 'Missing input field price' }),
});

export function FormProduct() {
  const form = useForm<z.infer<typeof zProductSchema>>({
    resolver: zodResolver(zProductSchema),
    defaultValues: {
      images: [],
      model: '',
      description: '',

    },
  });

  function onSubmit(data: z.infer<typeof zProductSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const images = form.watch('images');

  return (
    <div>
      {images.length >= 0 && (
        <div className="flex flex-wrap gap-2 p-2 md:gap-4 md:p-4">
          {images.map((data) => (
            <Card key={data} className="size-28 overflow-hidden">
              <CldImage alt={`${data}`} src={`${data}`} height={500} width={500} />
            </Card>
          ))}
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Tabs defaultValue="english" className="">
            {/* Tabs buttons */}
            <TabsList className="grid w-80 grid-cols-2">
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
                    render={({ field: { onChange } }) => {
                      return (
                        <FormItem>
                          <FormLabel />
                          <FormControl>
                            <div className="flex flex-col gap-2 md:gap-4">
                              {/* Upload botton */}
                              <CldUploadWidget
                                uploadPreset={ENV.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                                onSuccess={(results: CloudinaryUploadWidgetResults) => {
                                  if (typeof results.info === 'object') {
                                    onChange([
                                      ...form.getValues('images'),
                                      results.info.secure_url,
                                    ]);
                                  }
                                }}
                                options={{
                                  sources: ['local', 'url', 'google_drive'],
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
                                      <ImageIcon className="size-4 text-slate-950 md:size-8" />
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
                  <FieldInput
                    inputLabel="Model"
                    name="model"
                    placeholder="Product Model"
                    description="Enter the product model of the item"
                  />
                  <FieldInput
                    inputLabel="Description"
                    name="description"
                    placeholder="Product Description"
                    description="Enter the product description of the item"
                  />
                </CardContent>
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
                  <FormField
                    control={form.control}
                    name="images"
                    render={({ field: { onChange } }) => {
                      return (
                        <FormItem>
                          <FormLabel />
                          <FormControl>
                            <div className="flex flex-col gap-2 md:gap-4">
                              {/* Upload botton */}
                              <CldUploadWidget
                                uploadPreset={ENV.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                                onSuccess={(results: CloudinaryUploadWidgetResults) => {
                                  if (typeof results.info === 'object') {
                                    onChange([
                                      ...form.getValues('images'),
                                      results.info.secure_url,
                                    ]);
                                  }
                                }}
                                options={{
                                  sources: ['local', 'url', 'google_drive'],
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
                                      <ImageIcon className="size-4 text-slate-950 md:size-8" />
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
              </Card>
            </TabsContent>
          </Tabs>
          <Button type="submit" className="w-36 gap-2 self-start font-semibold hover:bg-green-600">
            <Save size={18} />
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
