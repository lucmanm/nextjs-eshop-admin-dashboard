import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ENV } from '@/config/env-variable';
import { ImageIcon } from 'lucide-react';
import { CldUploadWidget, CloudinaryUploadWidgetResults } from 'next-cloudinary';
import { Control, useFormContext } from 'react-hook-form';

export const FieldUpload = () => {
  const formContext = useFormContext();
  return (
    <FormField
      control={formContext.control}
      name="images"
      render={({ field: { onChange } }) => {
        return (
          <FormItem>
            <FormLabel />
            <FormControl>
              <div className="flex flex-col gap-2 md:gap-4">
                {/* Upload botton */}
                <CldUploadWidget
                  uploadPreset={ENV.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                  onSuccess={(results: CloudinaryUploadWidgetResults) => {
                    if (typeof results.info === 'object') {
                      onChange([...formContext.getValues('images'), results.info.secure_url]);
                    }
                  }}
                  options={{
                    sources: ['local', 'url', 'google_drive'],
                  }}
                >
                  {({ open }) => {
                    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
                      e.preventDefault();
                      open();
                    };

                    return (
                      <Button
                        variant="outline"
                        onClick={onClick}
                        className="flex size-28 flex-col gap-4"
                      >
                        <ImageIcon className="size-4 text-slate-950 md:size-8" />
                        <span className="max-sm:text-xs">Upload Image</span>
                      </Button>
                    );
                  }}
                </CldUploadWidget>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
