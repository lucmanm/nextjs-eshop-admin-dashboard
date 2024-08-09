"use client";
import { CldUploadButton, CldUploadWidget } from "next-cloudinary";
import React from "react";
import { Button } from "@/components/ui/button";

export const FormProduct = () => {
  const sample = "cld-sample-2";
  return (
    <React.Fragment>
      <CldUploadWidget uploadPreset="<Your Upload Preset>" >
        {({ open }) => {
          return <Button onClick={() => open()}>Upload an Image</Button>;
        }}
      </CldUploadWidget>
    </React.Fragment>
  );
};
