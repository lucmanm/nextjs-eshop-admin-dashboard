import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zStoreInformation } from "@/schemas/storeinfo.schema";
import React from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

type TFormTextareaProps = {
  name: keyof z.infer<typeof zStoreInformation>;
  formLabel?: string;
  className?: string;
  placeholder?: string;
  description?: string;
};
export const FormFieldTextArea = (props: TFormTextareaProps) => {
  const { control } = useFormContext<z.infer<typeof zStoreInformation>>();
  return (
    <FormField
      control={control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.formLabel}</FormLabel>
          <FormControl>
            <Textarea placeholder={props.placeholder} className="resize-none" {...field} />
          </FormControl>
          <FormDescription>{props.description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
