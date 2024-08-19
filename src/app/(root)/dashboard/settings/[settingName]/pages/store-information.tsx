"use client";
import { zStoreInformation } from "@/schemas/storeinfo.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { FormFieldInput } from "../_components/ui/form-field-input";
import { toast } from "@/components/ui/use-toast";
import { z } from "zod";
import { TabTransalation } from "@/components/tab-translation";
import { ButtonWithIcon } from "@/components/ui/button-w-icon";
import { Save } from "lucide-react";
import React from "react";
import { FormFieldTextArea } from "../_components/ui/form-field-textarea";

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
        <TabTransalation
          arTitle="تخزين المعلومات"
          enTitle="Store Information"
          enChildren={
            <section className="grid md:grid-cols-3 gap-2 md:gap-4 text-sm">
              <FormFieldInput name="enStoreName" formLabel="Store Name" placeholder="Store names" />
              <FormFieldInput
                name="enAddress"
                formLabel="Store Address"
                placeholder="Store Address"
              />
              <FormFieldTextArea
                name="enWorkingTime"
                formLabel="Wokring Timings"
                placeholder="Working Times"
              />
              <FormFieldInput name="enAbout" formLabel="About Us" placeholder="About us" />
              <FormFieldInput name="enTelephone" formLabel="Telephone" placeholder="Telephone" />
              <FormFieldInput
                name="enTaxNumber"
                formLabel="Tax Certificate Number"
                placeholder="Tax Certificate Number"
              />
              <FormFieldInput
                name="enCommercialRegister"
                formLabel="Commercial Number"
                placeholder="Commercial Registry Number"
              />
              <FormFieldInput name="email" formLabel="Email" placeholder="Email" />
            </section>
          }
          arChildren={<FormFieldInput name="arStoreName" formLabel="Arabic Store Name" />}
        />
        <ButtonWithIcon
          type="submit"
          label="Save"
          icon={<Save className="size-4" />}
          className="drop-shadow-md my-4"
        />
      </form>
    </FormProvider>
  );
}
