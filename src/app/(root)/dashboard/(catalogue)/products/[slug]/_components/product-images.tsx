import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CldImage } from 'next-cloudinary';
import { FieldUpload } from './ui/field-upload';
import { Fragment } from 'react';
import { deleteCloundinaryImage } from '@/webhook/cloudinary';
type TProductImage = {
  images: string[];
  className?: string;
};
export const ProductImage = (props: TProductImage) => {
  const handleDelete = (data: string) => {
    console.log(data);
  };

  return (
    <div className={cn('grid grid-cols-3 gap-2 md:h-44', props.className)}>
      {props.images.length >= 0 && (
        <Fragment>
          {props.images.map((data) => (
            <Card
              key={data}
              className="overflow-hidden hover:cursor-pointer hover:border-2 hover:border-red-800 sm:size-28 md:size-20 md:p-2"
              onClick={() => handleDelete(data)}
            >
              <CldImage alt={`${data}`} src={`${data}`} height={500} width={500} />
            </Card>
          ))}
        </Fragment>
      )}
      {props.images.length < 6 && <FieldUpload />}
    </div>
  );
};
