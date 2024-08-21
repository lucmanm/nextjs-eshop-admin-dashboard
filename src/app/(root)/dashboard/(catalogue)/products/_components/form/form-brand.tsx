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
import { toast } from '@/components/ui/use-toast';
import { useStoreModal } from '@/hook/useStoreModal';
import { zodResolver } from '@hookform/resolvers/zod';
import { Save } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const brandSchema = z.object({
  enName: z.string().min(1, { message: 'Missing input required English Brand Name' }),
  arName: z.string().min(1, { message: 'Missing input required Arabic Brand Name' }),
});
export function FormBrand() {
  const { toggle, headerData } = useStoreModal((sate) => sate);
  // Desctructure the headerData
  const { arTitle, enTitle, arDescription, enDescription } = headerData;

  const form = useForm<z.infer<typeof brandSchema>>({
    resolver: zodResolver(brandSchema),
    defaultValues: {
      arName: '',
      enName: '',
    },
  });
  const onSubmit = (data: z.infer<typeof brandSchema>) => {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <TabTransalation
          {...{
            enDescription,
            enTitle,
            arDescription,
            arTitle,

            // English  input
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
                      <Input placeholder="Brand Name" {...field} />
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
