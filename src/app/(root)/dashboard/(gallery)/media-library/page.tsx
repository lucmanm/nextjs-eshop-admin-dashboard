import React from "react";
import cloudinary from "cloudinary";
import { CloudImage, TImage } from "../../_components/cld-image";

type TResources = {
  resources: TImage[];
};
const Page = async () => {

  const response: TResources = await cloudinary.v2.search
    .expression("resource_type:image AND folder:eshop")
    .sort_by("public_id", "desc")
    .max_results(4)
    .execute();

  return (
    <div className="flex flex-wrap gap-4">
      {response.resources.map((data, idx) => {
        return <CloudImage key={idx} public_id={data.public_id} />;
      })}
    </div>
  );
};
export default Page;
