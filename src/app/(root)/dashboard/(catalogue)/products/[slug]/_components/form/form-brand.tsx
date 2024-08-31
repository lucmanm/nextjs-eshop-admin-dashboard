'use client';
import { createBrand } from '@/actions/brand.action';
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
import { ZBrandSchema } from '@/schemas/brand.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Save } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

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
    const reponse = await createBrand(data);

    if (reponse?.status === 201) {
      toast.success(reponse?.message);
      form.reset()
      toggle()
      router.refresh()
    } else {
      toast.warning(reponse?.message);
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
                    <FormLabel>Brand Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Brand Name"
                        {...field}
                        disabled={form.formState.isSubmitting}
                      />
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
                      <Input
                        placeholder="اسم العلامة التجارية"
                        {...field}
                        disabled={form.formState.isSubmitting}
                      />
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
              type: 'submit',
              disabled: form.formState.isSubmitting,
            }}
          />
          <ButtonWithIcon
            {...{
              icon: <Save className="size-4" />,
              label: 'Cancel',
              type: 'button',
              onClick: () => toggle(),
              className: 'bg-red-600 gap-2',
              disabled: form.formState.isSubmitting,
            }}
          />
        </DialogFooter>
      </form>
    </Form>
  );
}
