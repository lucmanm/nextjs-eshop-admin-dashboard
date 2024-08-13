import React from "react";
import { notFound } from "next/navigation";
import { CloudinaryImage } from "@/components/cloudinary-image";

const SettingName = async ({ params }: { params: { settingName: string } }) => {
  const decodeParams = decodeURI(params.settingName).toLowerCase();

  if (!params.settingName || decodeParams === "") {
    notFound();
  }

  return (
    <div className="w-full">
      <CloudinaryImage
        src="https://res.cloudinary.com/dzdcszrob/image/upload/v1713898626/cld-sample-3.jpg"
        alt="cld sample"
        className="w-[800] overflow-hidden rounded-md"
        height={1080}
        width={300}
      />
    </div>
  );
};

export default SettingName;
