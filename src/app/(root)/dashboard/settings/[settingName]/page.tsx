import React from "react";
import { notFound } from "next/navigation";
import { CloudinaryImage } from "@/components/cloudinary-image";
import { TabTransalation } from "@/components/tab-translation";
import { X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SliderImage = () => (
  <div className="max-sm:flex flex-col md:grid md:grid-cols-4 gap-4">
    {Array.from({ length: 6 }).map((_, idx) => (
      <Card key={idx} className="relative overflow-hidden">
        <X className="size-5 rounded-full absolute right-2 top-2 bg-slate-100 text-red-600 hover:text-slate-100 hover:bg-red-600 cursor-pointer p-0.5" />
        <CloudinaryImage
          src="https://res.cloudinary.com/dzdcszrob/image/upload/v1713898626/cld-sample-3.jpg"
          alt="cld sample"
          className="h-36 overflow-hidden rounded-md object-cover"
          width={1080}
          height={300}
        />
      </Card>
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
