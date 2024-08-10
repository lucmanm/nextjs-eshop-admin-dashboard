import { Button } from "@/components/ui/button";
import { ENV } from "@/config/env-variable";
import { Image as ImageIcon } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";

export const ImageUpload = () => {
  return (
    <CldUploadWidget
      uploadPreset="o375nvkg"
    >
      {({ open }) => {
        return (
          <Button onClick={() => open()} className=" gap-2">
            <ImageIcon />
            <span>Upload an Image</span>
          </Button>
        );
      }}
    </CldUploadWidget>
  );
};
