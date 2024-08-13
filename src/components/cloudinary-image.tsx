"use client";
import React from "react";
import { CldImage, CldImageProps } from "next-cloudinary";

export const CloudinaryImage = (props: CldImageProps) => {
  return <CldImage {...props} />;
};
