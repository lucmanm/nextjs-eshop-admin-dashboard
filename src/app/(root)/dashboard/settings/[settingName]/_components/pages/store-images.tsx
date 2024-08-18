import React from "react";
import { CloudinaryImage } from "@/components/cloudinary-image";
const imageUrl = "playground-images/icons/dyxiold2kps3jkkmdbjo";
export const StoreImages = () => {
  return (
    <section>
      <div>
        <span className="font-bold max-sm:text-xs">Store Logo</span>
        <CloudinaryImage src={imageUrl} alt="dummy Image" width={50} height={50} />
      </div>
      <span className="font-bold max-sm:text-xs">Store Icon</span>
      <CloudinaryImage src={imageUrl} alt="dummy Image" width={50} height={50} />
      <span className="font-bold max-sm:text-xs">Product Default </span>
      <CloudinaryImage src={imageUrl} alt="dummy Image" width={50} height={50} />
      <span className="font-bold max-sm:text-xs">Category Default Image</span>
      <CloudinaryImage src={imageUrl} alt="dummy Image" width={50} height={50} />
      <span className="font-bold max-sm:text-xs">Vat Logo</span>
      <CloudinaryImage src={imageUrl} alt="dummy Image" width={50} height={50} />
      <div className="grid grid-cols-6">
        <span className="col-span-6 font-bold max-sm:text-xs">Payment Gateway Logo</span>
        <CloudinaryImage src={imageUrl} alt="dummy Image" width={100} height={100} />
        <CloudinaryImage src={imageUrl} alt="dummy Image" width={100} height={100} />
        <CloudinaryImage src={imageUrl} alt="dummy Image" width={100} height={100} />
        <CloudinaryImage src={imageUrl} alt="dummy Image" width={100} height={100} />
        <CloudinaryImage src={imageUrl} alt="dummy Image" width={100} height={100} />
        <CloudinaryImage src={imageUrl} alt="dummy Image" width={100} height={100} />
        <CloudinaryImage src={imageUrl} alt="dummy Image" width={100} height={100} />
      </div>
    </section>
  );
};
