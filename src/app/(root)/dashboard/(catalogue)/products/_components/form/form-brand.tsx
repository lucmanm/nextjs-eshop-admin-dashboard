'use client';
import { TabTransalation } from '@/components/tab-translation';
import { ButtonWithIcon } from '@/components/ui/button-w-icon';
import { DialogFooter } from '@/components/ui/dialog';
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
import { ENV } from '@/config/env-variable';
import { useStoreModal } from '@/hook/useStoreModal';
import { zodResolver } from '@hookform/resolvers/zod';
import { Save } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

export const ZBrandSchema = z.object({
  enName: z.string().min(1, { message: 'Missing input required English Brand Name' }),
  arName: z.string().min(1, { message: 'مفقود الإدخال المطلوب اسم العلامة التجارية العربية' }),
});
export function FormBrand() {
  const router = useRouter();

  const { toggle, headerData } = useStoreModal();
  // Desctructure the headerData
  const { arTitle, enTitle, arDescription, enDescription } = headerData;

  const form = useForm<z.infer<typeof ZBrandSchema>>({
    resolver: zodResolver(ZBrandSchema),
    defaultValues: {
      arName: '',
      enName: '',
    },
  });

  async function onSubmit(data: z.infer<typeof ZBrandSchema>) {
    try {
      const response = await fetch(`${ENV.PUBLIC_ESHOP_API}/brand`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Successfully Added.');
        router.refresh();
        form.reset();
        toggle()
      } else {
        toggle()
        toast.error('Data Subimtted ERROR');
      }
    } catch (error) {
      toast.error('ERROR_BRAND_FORM_SUBMITION');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <TabTransalation
          {...{
            enDescription,
            enTitle,
            arDescription,
            arTitle,
            enChildren: (
              <FormField
                control={form.control}
                name="enName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand Name </FormLabel>
                    <FormControl>
                      <Input placeholder="Brand Name" {...field} />
                    </FormControl>
                    <FormDescription>Enter brand name in english language</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ),
            arChildren: (
              <FormField
                control={form.control}
                name="arName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>اسم العلامة التجارية</FormLabel>
                    <FormControl>
                      <Input placeholder="اسم العلامة التجارية" {...field} />
                    </FormControl>
                    <FormDescription>أدخل اسم العلامة التجارية باللغة العربية</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ),
          }}
        />

        <DialogFooter className="gap-4">
          <ButtonWithIcon
            {...{
              icon: <Save className="size-4" />,
              label: 'Save',
            }}
          />
          <ButtonWithIcon
            {...{
              icon: <Save className="size-4" />,
              label: 'Cancel',
              onClick: () => toggle(),
              className: 'bg-red-600 gap-2',
            }}
          />
        </DialogFooter>
      </form>
    </Form>
  );
}
