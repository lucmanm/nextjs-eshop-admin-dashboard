import React from "react";
import { notFound } from "next/navigation";
import { CloudinaryImage } from "@/components/cloudinary-image";
import { TabTransalation } from "@/components/tab-translation";

const SliderImage = () => (
  <div className="max-sm:flex flex-col md:grid md:grid-cols-4 gap-4">
    {Array.from({ length: 6 }).map((_, idx) => (
      <div key={idx} className="relative">
        <CloudinaryImage
          src="https://res.cloudinary.com/dzdcszrob/image/upload/v1713898626/cld-sample-3.jpg"
          alt="cld sample"
          className="h-36 overflow-hidden rounded-md object-cover"
          width={1080}
          height={300}
        />
      </div>
    ))}
  </div>
);

const SettingName = async ({ params }: { params: { settingName: string } }) => {
  const decodeParams = decodeURI(params.settingName).toLowerCase();

  if (!params.settingName || decodeParams === "") {
    notFound();
  }
  return (
    <div className="w-full">
      <TabTransalation
        {...{
          enTitle: "Banners",
          enDesctription: "all the slider data available",
          arTitle: "لافتات",
          arDesctription: "جميع بيانات شريط التمرير المتاحة",
          enchildren: <SliderImage />,
          archildren: <SliderImage />,
        }}
      />
    </div>
  );
};

export default SettingName;
