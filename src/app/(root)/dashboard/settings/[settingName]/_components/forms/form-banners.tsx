'use client';
import { createSlider } from '@/actions/slider.action';
import { CloudinaryImage } from '@/components/cloudinary-image';
import { TabTransalation } from '@/components/tab-translation';
import { ButtonWithIcon } from '@/components/ui/button-w-icon';
import { Card } from '@/components/ui/card';
import { CloseButton } from '@/components/ui/close-btn';
import { ZSliderSchema } from '@/schemas/slider.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Save } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { ImageUploadField } from '../ui/image-upload-field';

type TSliderProps = {
  items: z.infer<typeof ZSliderSchema>[];
};

export const BannersContainer = ({ items }: TSliderProps) => {
  const router = useRouter();
  const formMethods = useForm<z.infer<typeof ZSliderSchema>>({
    resolver: zodResolver(ZSliderSchema),
    defaultValues: {
      arSlider: '',
      enSlider: '',
    },
  });

  async function onSubmit(data: z.infer<typeof ZSliderSchema>) {
    const result = await createSlider(data);
    if (result.status === 201) {
      router.refresh();
      formMethods.reset();
    } else {
      toast.warning('ERROR_SUBMITTION_SLIDER');
    }
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <TabTransalation
          {...{
            arTitle: 'لافتات',
            arDescription: '',
            enTitle: 'Banners',
            enDescription: '',
            enChildren: (
              <React.Fragment>
                <div className="gap-4 max-sm:flex max-sm:flex-col md:grid md:grid-cols-4">
                  {items.map((item, idx) => (
                    <Card key={idx} className="relative overflow-hidden hover:bg-slate-100/25">
                      <CloseButton />
                      <CloudinaryImage
                        src={item.enSlider}
                        alt="cld sample"
                        className="h-36 overflow-hidden rounded-md object-cover"
                        width={1080}
                        height={300}
                      />
                    </Card>
                  ))}
                  {formMethods.getValues('enSlider') ? (
                    <CloudinaryImage
                      src={formMethods.getValues('enSlider')}
                      alt="cld sample"
                      className="h-36 overflow-hidden rounded-md object-cover"
                      width={1080}
                      height={300}
                    />
                  ) : (
                    <ImageUploadField name="enSlider" />
                  )}
                </div>
              </React.Fragment>
            ),
            arChildren: (
              <React.Fragment>
                <div className="gap-4 max-sm:flex max-sm:flex-col md:grid md:grid-cols-4">
                  {items.map((item, idx) => (
                    <Card key={idx} className="relative overflow-hidden hover:bg-slate-100/25">
                      <CloseButton />
                      <CloudinaryImage
                        src={item.enSlider}
                        alt="cld sample"
                        className="h-36 overflow-hidden rounded-md object-cover"
                        width={1080}
                        height={300}
                      />
                    </Card>
                  ))}
                  {formMethods.getValues('arSlider') ? (
                    <CloudinaryImage
                      src={formMethods.getValues('arSlider')}
                      alt="cld sample"
                      className="h-36 overflow-hidden rounded-md object-cover"
                      width={1080}
                      height={300}
                    />
                  ) : (
                    <ImageUploadField name="arSlider" />
                  )}
                </div>
              </React.Fragment>
            ),
          }}
        />
        {/* error message test */}
        <div className="text-red-600">{formMethods.formState.errors.enSlider?.message}</div>
        <ButtonWithIcon
          {...{
            icon: <Save className="h-3.5 w-3.5" />,
            label: 'Save',
            type: 'submit',
            className: 'w-1/6',
          }}
        />
      </form>
    </FormProvider>
  );
};
