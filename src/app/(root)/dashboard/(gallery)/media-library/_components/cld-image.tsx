'use client';
import { Card } from '@/components/ui/card';
import { deleteCloundinaryImage, setTagNameCloundinaryImage } from '@/webhook/cloudinary';
import { Heart, X } from 'lucide-react';
import { CldImage, CldImageProps } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useCallback } from 'react';

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
      await setTagNameCloundinaryImage('favorite', public_id);
      toast.success('Favorited Successfully.');
      router.refresh();
    } catch (error) {
      toast.error('Failed to favorite image.');
    }
  }, [public_id, router]);

  return (
    <Card className="relative">
      <X
        onClick={handleDelete}
        className="absolute right-4 top-2 size-6 rounded-full border-2 border-red-900 text-red-900 hover:cursor-pointer hover:border-red-600 hover:text-red-600"
      />
      {isFavorate && (
        <Heart
          onClick={handleSetFavorate}
          className="absolute bottom-2 right-4 size-6 rounded-full text-slate-100 hover:cursor-pointer hover:border-lime-500 hover:text-red-600"
        />
      )}
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
