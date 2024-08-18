"use client";
import { zStoreInformation } from "@/schemas/storeinfo.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { FormFieldInput } from "../ui/form-field-input";
import { toast } from "@/components/ui/use-toast";
import { z } from "zod";

export default function StoreInformation() {
  const formMethod = useForm<z.infer<typeof zStoreInformation>>({
    resolver: zodResolver(zStoreInformation),
    defaultValues: {
      enStoreName: "",
      arStoreName: "",
    },
  });

  function onSubmit(data: z.infer<typeof zStoreInformation>) {
    toast({
      title: "Success",
      description: "Store information has been submitted successfully.",
    });
  }

  return (
    <FormProvider {...formMethod}>
      <form onSubmit={formMethod.handleSubmit(onSubmit)}>
        <FormFieldInput name="enStoreName" formLabel="English Store Name" />
        <FormFieldInput name="arStoreName" formLabel="Arabic Store Name" />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}
