"use client";
import { zStoreInformation } from "@/schemas/storeinfo.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { FormFieldInput } from "../ui/form-field-input";
import { toast } from "@/components/ui/use-toast";
import { z } from "zod";
import { TabTransalation } from "@/components/tab-translation";
import { ButtonWithIcon } from "@/components/ui/button-w-icon";
import { Save } from "lucide-react";
import React from "react";

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
            <section className="grid md:grid-cols-3 gap-2 md:gap-4">
              <FormFieldInput name="enStoreName" formLabel="Store Name" />
              <FormFieldInput name="enAddress" formLabel="Store Address" />
              <FormFieldInput name="enWorkingTime" formLabel="Wokring Timings" />
              <FormFieldInput name="enAbout" formLabel="About Us" />
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
