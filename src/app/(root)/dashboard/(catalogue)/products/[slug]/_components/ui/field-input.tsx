import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
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
export const FieldInput = (props: TFieldInput) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.inputLabel}</FormLabel>
          <FormControl>
            <Input placeholder={props.placeholder} {...field} />
          </FormControl>
          <FormDescription>{props.description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
