import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zStoreInformation } from "@/schemas/storeinfo.schema";
import { Store } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

type FormFieldInput = {
  name: keyof z.infer<typeof zStoreInformation>;
  formLabel?: string;
  className?: string;
  placeholder?: string;
  description?: string;
};
export const FormFieldInput = (props: FormFieldInput) => {
  const { control } = useFormContext<z.infer<typeof zStoreInformation>>();
  return (
    <FormField
      control={control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.formLabel}</FormLabel>
          <FormControl>
            <Input placeholder={props.placeholder} {...field} className={cn(props.className)} />
          </FormControl>
          <FormDescription>{props.description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
