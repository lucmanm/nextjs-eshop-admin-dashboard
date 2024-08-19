'use client';
import { CloudinaryImage } from '@/components/cloudinary-image';
import { ButtonWithIcon } from '@/components/ui/button-w-icon';
import { Form } from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Save } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FieldUploadStoreImage } from '../_components/ui/field-upload-store-image';

const imageUrl = 'playground-images/icons/dyxiold2kps3jkkmdbjo';

// const storeImageData = [
//   { imageTitle: 'Store Logo', name: 'storeLogo' },
// { imageTitle: "Store Icon", name: "storeIcon" },
// { imageTitle: "Product Default Image", name: "productDefaultImage" },
// { imageTitle: "Category Default Image", name: "categoryDefaultImage" },
// { imageTitle: "Vat Logo", name: "vatLogo" },
// ];

export const zStoreImages = z.object({
  storeLogo: z.string().min(1, { message: 'Missing file store logo' }).optional().nullable(),
  storeIcon: z.string().min(1, { message: 'Missing file store icon' }).optional().nullable(),
  // vatLogo: z.string().min(1, { message: 'Missing file VAT logo' }).optional(),
  // productDefaultImage: z
  //   .string()
  //   .min(1, { message: "Missing file product default image" })
  //   .optional(),
  // categoryDefaultImage: z
  //   .string()
  //   .min(1, { message: "Missing file category default image" })
  //   .optional(),
});

export const StoreImages = () => {
  const form = useForm<z.infer<typeof zStoreImages>>({
    resolver: zodResolver(zStoreImages),
    defaultValues: {
      storeLogo: null,
      storeIcon: null,
      // vatLogo: '',
      // categoryDefaultImage: "",
      // productDefaultImage: "",
    },
  });

  const onSubmit = (values: z.infer<typeof zStoreImages>) => {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <section className="col-span-2 grid md:grid-cols-6">
          {/* Cosntiner */}
          <div className="col-span-2 grid grid-cols-2 gap-2 md:col-span-6 md:grid-cols-6 md:gap-4">
            <FieldUploadStoreImage name="storeLogo" alt="Store Logo" />
            <FieldUploadStoreImage name="storeIcon" alt="Store Icon" />
          </div>
          <Separator className="col-span-2 my-6 rounded-sm md:col-span-6" />

          <div className="col-span-2 grid grid-cols-2 md:col-span-6 md:grid-cols-6">
            <span className="col-span-2 px-4 py-2 text-sm font-bold max-sm:text-xs md:col-span-6">
              Payment Gateway Logo
            </span>
            {Array.from({ length: 7 }).map((_, idx) => (
              <CloudinaryImage
                key={idx}
                src={imageUrl}
                alt="dummy Image"
                width={200}
                height={200}
                className="w-full"
              />
            ))}
          </div>
          <ButtonWithIcon type="submit" label="Save" icon={<Save className="size-4" />} />
        </section>
      </form>
    </Form>
  );
};
