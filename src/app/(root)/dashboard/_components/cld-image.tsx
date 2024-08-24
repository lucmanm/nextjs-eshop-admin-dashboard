'use client';
import { Card } from '@/components/ui/card';
import { CldImage, CldImageProps } from 'next-cloudinary';

type CloudImageProps = {
  public_id: string;
} & Omit<CldImageProps, 'width' | 'height' | 'src' | 'sizes' | 'alt' | 'priority'>;

export const CloudImage = ({ public_id, ...props }: CloudImageProps) => {

  return (
    <Card className="relative">
      <CldImage
        width="400"
        height="400"
        src={public_id}
        sizes="100vw"
        alt="Description of my image"
        priority
        {...props}
      />
    </Card>
  );
};
