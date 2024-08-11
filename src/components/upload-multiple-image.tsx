import { Button } from "@/components/ui/button";
import { ENV } from "@/config/env-variable";
import { Image as ImageIcon, X } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import { Fragment, useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";

type TImageUploadProps = {
  value: string[];
  onChange: (image: string[]) => void;
};

type TCoundinaryResults = {
  info: {
    folder: string;
    original_filename: string;
    public_id: string;
    secure_url: string;
    signature: string;
    url: string;
    created_at: string;
    thumbnail_url: string;
    tags: [];
  };
};

export const UploadMultipleImage = ({ value, onChange }: TImageUploadProps) => {
  const onUploadAdded = (results: TCoundinaryResults) => {
    const newImageUrl = results.info.secure_url; // Get the new image URL
    onChange([...value, newImageUrl]); // Append the new image URL to the existing list
  };

  const removeImage = (index: number) => {
    // Remove the image at the specified index
    const updatedImages = value.filter((_, i) => i !== index);
    onChange(updatedImages);
  };

  return (
    <Fragment>
      <div className="flex gap-4">
        {value?.length > 0 &&
          value.map((publicUrl) => (
            <div key={publicUrl} className="relative border-2 shadow-sm bg-white rounded-md">
              <X className="absolute top-1 right-2 rounded-full border-2 border-red-900 text-red-900 hover:text-red-600 hover:border-red-600 hover:cursor-pointer size-5" />
              <CldImage
                width="500"
                height="500"
                src={publicUrl}
                sizes="100vw"
                alt="Description of my image"
                className="size-36"
              />
            </div>
          ))}

        <CldUploadWidget
          uploadPreset={ENV.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
          onSuccess={onUploadAdded}
        >
          {({ open }) => {
            return (
              <Button
                onClick={() => open()}
                className="size-36 flex flex-col gap-2"
                variant="outline"
              >
                <ImageIcon />
                <span>Upload an Image</span>
              </Button>
            );
          }}
        </CldUploadWidget>
      </div>
    </Fragment>
  );
};
