import React from "react";
import cloudinary from "cloudinary";
import { CloudImage } from "@dashboard/_components/cld-image";
import { TImage } from "@/types/cloudinary";
import { ENV } from "@/config/env-variable";

cloudinary.v2.config({
  cloud_name: ENV.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
});

const Page = async () => {

  const response = (await cloudinary.v2.search
    .expression("resource_type:image AND folder:eshop")
    .sort_by("public_id", "desc")
    .max_results(4)
    .execute()) as { resources: TImage[] };

  return (
    <div className="flex flex-wrap gap-4">
      {response.resources.map((data, idx) => {
        return <CloudImage key={idx} public_id={data.public_id} />;
      })}
    </div>
  );
};
export default Page;
