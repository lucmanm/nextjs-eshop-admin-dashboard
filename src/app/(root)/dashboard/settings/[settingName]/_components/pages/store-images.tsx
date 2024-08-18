import React from "react";
import { CloudinaryImage } from "@/components/cloudinary-image";
import { Separator } from "@/components/ui/separator";
const imageUrl = "playground-images/icons/dyxiold2kps3jkkmdbjo";
const storeImageData = [
  {
    name: "Store Logo",
  },
  {
    name: "Store icon",
  },
  {
    name: "Product Default Image",
  },
  {
    name: "Category Default Image",
  },
  {
    name: "Vat Logo",
  },
];
export const StoreImages = () => {
  return (
    <section className="grid col-span-2 md:grid-cols-6">
      {storeImageData.map((data, idx) => (
        <div key={idx}>
          <span className="font-bold max-sm:text-xs px-4 py-2">{data.name}</span>
          <CloudinaryImage
            src={imageUrl}
            alt="dummy Image"
            width={200}
            height={200}
            className=" w-full"
          />
        </div>
      ))}

      <Separator className="col-span-2 md:col-span-6 h-1 rounded-sm shadow my-6" />
      <div className="grid col-span-2 grid-cols-2 md:grid-cols-6 md:col-span-6">
        <span className="font-bold max-sm:text-xs px-4 py-2 md:col-span-6 col-span-2">
          Payment Gateway Logo
        </span>
        {Array.from({ length: 7 }).map((_, idx) => (
          <CloudinaryImage
            key={idx}
            src={imageUrl}
            alt="dummy Image"
            width={200}
            height={200}
            className="w-full"
          />
        ))}
      </div>
    </section>
  );
};
