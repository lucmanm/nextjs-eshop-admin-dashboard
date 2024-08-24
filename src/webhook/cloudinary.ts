'use server';
import { TImage } from '@/types/cloudinary';
import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';

export const getCloundinaryImages = async () => {
  const response = (await cloudinary.v2.search
    .expression('resource_type:image AND folder:eshop')
    .sort_by('public_id', 'desc')
    .max_results(10)
    .execute()) as { resources: TImage[] };

  return response;
};

export const searchCloundinaryImages = async () => {
  const response = await cloudinary.v2.search
    .expression('')
    .fields('context')
    .fields('tags')
    .max_results(10)
    .execute();
};

export const setTagNameCloundinaryImage = async (tag_name: string, public_id: string) => {
  await cloudinary.v2.uploader.add_tag(tag_name, [public_id]);
};

export const deleteCloundinaryImage = async (public_id: string) => {
  try {
    await cloudinary.v2.uploader.destroy(public_id);
  } catch (error) {
    console.log("ERROR_DELETE_IMAGES_CLD", error);
  }
};
