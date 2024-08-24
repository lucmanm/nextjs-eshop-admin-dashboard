import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CldImage } from 'next-cloudinary';
import { FieldUpload } from './ui/field-upload';
type TProductImage = {
  images: string[];
  className?: string;
};
export const ProductImage = (props: TProductImage) => {
  return (
    <div className={cn(props.className)}>
      {props.images.length >= 0 && (
        <div className="grid grid-cols-2 gap-2">
          {props.images.map((data) => (
            <Card key={data} className="Fmd:p-2 size-28 overflow-hidden sm:p-1">
              <CldImage alt={`${data}`} src={`${data}`} height={500} width={500} />
            </Card>
          ))}
          {/* Upload image component */}
        </div>
      )}
      {props.images.length < 3 && <FieldUpload />}
    </div>
  );
};
