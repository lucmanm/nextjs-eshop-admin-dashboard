import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { ENV } from "@/config/env-variable";
import { Image as ImageIcon, X } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { TOnSuccess } from "@/types/cloudinary";

type TImageUploadProps = {
  value: string[];
  onChange: (image: []) => void;
};

type TIamgeUrl = {
  info: {
    url: string
  };
};

export const UploadMultipleImage = ({ value, onChange }: TImageUploadProps) => {
  const onUploadAdded = (results: TIamgeUrl) => {
    console.log(results.info.url);
    // onChange(results.info.url)
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
                priority
                alt="Description of my image"
                className="size-36"
              />
            </div>
          ))}

        <CldUploadWidget
          uploadPreset={ENV.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
          onUploadAdded={(results) => onUploadAdded(results)}
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
