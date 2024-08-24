'use client';
import { Card } from '@/components/ui/card';
import { deleteCloundinaryImage, setTagNameCloundinaryImage } from '@/webhook/cloudinary';
import { CldImage, CldImageProps } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

type CloudImageProps = {
  public_id: string;
  isFavorate?: boolean;
} & Omit<CldImageProps, 'width' | 'height' | 'src' | 'sizes' | 'alt' | 'priority'>;

export const CloudImage = ({ public_id, isFavorate, ...props }: CloudImageProps) => {
  const router = useRouter();

  const handleDelete = useCallback(async () => {
    try {
      await deleteCloundinaryImage(public_id);
      toast.success('Deleted Successfully.');
      router.refresh();
    } catch (error) {
      toast.error('Failed to delete image.');
    }
  }, [public_id, router]);

  const handleSetFavorate = useCallback(async () => {
    try {
      await setTagNameCloundinaryImage("favorite",public_id);
      toast.success('Favorited Successfully.');
      router.refresh();
    } catch (error) {
      toast.error('Failed to favorite image.');
    }
  }, [public_id, router]);

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
