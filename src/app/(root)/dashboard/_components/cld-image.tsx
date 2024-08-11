"use client";
import { Card } from "@/components/ui/card";
import { CldImage, CldImageProps } from "next-cloudinary";

type CloudImage = {
  public_id: string;
} & Omit<CldImageProps, "width" | "height" | "src" | "sizes" | "alt" | "priority">;

export const CloudImage = ({ public_id, ...props }: CldImageProps) => {
  return (
    <Card>
      <CldImage
        width="200"
        height="200"
        src={public_id}
        sizes="100vw"
        alt="Description of my image"
        priority
        {...props}
      />
    </Card>
  );
};
