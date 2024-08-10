import { Button } from "@/components/ui/button";
import { ENV } from "@/config/env-variable";
import { Image as ImageIcon, X } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import { Fragment, useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";

type TImageUploadProps = {
  value: string[];
  onChange: (image: string) => void;
};

export const UploadMultipleImage = ({ value, onChange }: TImageUploadProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSuccess = (results: any) => {
    onChange(results.info.public_id);
    console.log(results.info.public_id);
  };

  if (!isMounted) {
    return null;
  }
  return (
    <Fragment>
      <div className="flex gap-4">
        {Array.isArray(value) &&
          value.map((data, idx) => (
            <div key={idx} className="relative border-2 shadow-sm bg-white rounded-md">
              <X className="absolute top-1 right-2 rounded-full border-2 border-red-900 text-red-900 hover:text-red-600 hover:border-red-600 hover:cursor-pointer size-5" />
              <CldImage
                width="500"
                height="500"
                src={data}
                sizes="100vw"
                alt="Description of my image"
                className="size-36"
              />
            </div>
          ))}

        <CldUploadWidget
          uploadPreset={ENV.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
          onSuccess={onSuccess}
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
