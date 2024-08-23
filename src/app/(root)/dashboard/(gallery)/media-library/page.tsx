import { getCloundinaryImages } from '@/webhook/cloudinary';
import { CloudImage } from '@dashboard/_components/cld-image';
import { useRouter } from 'next/navigation';

const Page = async () => {
  const results = await getCloundinaryImages();

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {results.resources.map((data, idx) => {
        return (
          <div key={idx} className="relative">
            <CloudImage
              isFavorate
              public_id={data.public_id}
              className="h-36 overflow-hidden rounded-sm object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};
export default Page;
