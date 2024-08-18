import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zStoreInformation } from "@/schemas/storeinfo.schema";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

type FormFieldInput = {
  name: keyof z.infer<typeof zStoreInformation>;
  formLabel?: string;
};
export const FormFieldInput = ({ name, formLabel }: FormFieldInput) => {
  const { control } = useFormContext<z.infer<typeof zStoreInformation>>();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{formLabel}</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormDescription>This is your public display name.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
