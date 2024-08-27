import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { ZProductSchema } from '@/schemas/product.schema';
import { Control } from 'react-hook-form';
import { z } from 'zod';

type TFieldInput = {
  control?: Control;
  name: keyof z.infer<typeof ZProductSchema>;
  inputLabel: string;
  placeholder: string;
  description?: string;
};
export const FieldInputTextArea = (props: TFieldInput) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="max-sm:text-xs">{props.inputLabel}</FormLabel>
          <FormControl>
            <Textarea placeholder={props.placeholder} {...field} className="resize-none" />
          </FormControl>
          <FormDescription>{props.description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
