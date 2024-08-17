import React from "react";
import cloudinary from "cloudinary";
import { CloudImage } from "@dashboard/_components/cld-image";
import { TImage } from "@/types/cloudinary";

const Page = async () => {
  const response = (await cloudinary.v2.search
    .expression("resource_type:image AND folder:eshop")
    .sort_by("public_id", "desc")
    .max_results(4)
    .execute()) as { resources: TImage[] };

  return (
    <div className="flex flex-wrap gap-4">
      {response.resources.map((data, idx) => {
        return (
          <CloudImage key={idx} public_id={data.public_id} className="overflow-hidden rounded-sm" />
        );
      })}
    </div>
  );
};
export default Page;
