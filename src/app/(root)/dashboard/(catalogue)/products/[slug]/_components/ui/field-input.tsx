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
import { ZProductSchema } from '../form-product';
import { HTMLInputTypeAttribute } from 'react';

type TFieldInput = {
  control?: Control;
  name: keyof z.infer<typeof ZProductSchema>;
  inputLabel: string;
  placeholder: string;
  description?: string;
  type?: HTMLInputTypeAttribute | undefined;
  onChange?: () => void
};
export const FieldInput = (props: TFieldInput) => {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="max-sm:text-xs">{props.inputLabel}</FormLabel>
          <FormControl>
            <Input
              {...field}
              type={props.type ?? 'text'}
              placeholder={props.placeholder}
            />
          </FormControl>
          <FormDescription>{props.description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
