import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Control } from 'react-hook-form';
import { z } from 'zod';
import { zProductSchema } from '../form-product';

type TFieldInput = {
  control?: Control;
  name: keyof z.infer<typeof zProductSchema>;
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
          <FormLabel>{props.inputLabel}</FormLabel>
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
