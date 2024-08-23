'use client';
import { createCategory } from '@/actions/category.action';
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
import { useStoreModal } from '@/hook/useStoreModal';
import { ZBrandSchema } from '@/schemas/brand.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Save } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

export function FormCategory() {
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

  async function onSubmit(values: z.infer<typeof ZBrandSchema>) {
    const reponse = await createCategory(values);

    if (reponse?.status === 201) {
      toast.success(reponse?.message);
    } else {
      toast.warning(reponse?.message);
    }
    router.refresh();
    form.reset();
    toggle()
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
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Category Name"
                        {...field}
                        disabled={form.formState.isSubmitting}
                      />
                    </FormControl>
                    <FormDescription>Enter category name in English language</FormDescription>
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
                    <FormLabel>اسم الفئة</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="اسم الفئة"
                        {...field}
                        disabled={form.formState.isSubmitting}
                      />
                    </FormControl>
                    <FormDescription>أدخل اسم الفئة باللغة العربية</FormDescription>
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
