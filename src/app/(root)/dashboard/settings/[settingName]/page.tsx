import React from "react";
import { notFound } from "next/navigation";
import { CloudinaryImage } from "@/components/cloudinary-image";
import { TabTransalation } from "@/components/tab-translation";
import { CirclePlus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { CloseButton } from "@/components/ui/close-btn";
import { Button } from "@/components/ui/button";

const SliderImage = () => (
  <div className="max-sm:flex flex-col md:grid md:grid-cols-4 gap-4">
    {Array.from({ length: 6 }).map((_, idx) => (
      <Card key={idx} className="relative overflow-hidden">
        <CloseButton />
        <CloudinaryImage
          src="https://res.cloudinary.com/dzdcszrob/image/upload/v1713898626/cld-sample-3.jpg"
          alt="cld sample"
          className="h-36 overflow-hidden rounded-md object-cover"
          width={1080}
          height={300}
        />
      </Card>
    ))}
    <Button className="group flex-1 flex h-36 bg-neutral-100 drop-shadow-sm">
      <CirclePlus className="max-sm:size-1/6 size-1/2 text-blue-600 group-hover:text-slate-100 " />
    </Button>
  </div>
);

const SettingName = async ({ params }: { params: { settingName: string } }) => {
  const decodeParams = decodeURI(params.settingName).toLowerCase();

  if (!params.settingName || decodeParams === "") {
    notFound();
  }
  return (
    <main className="w-full p-2 md:p-6">
      <TabTransalation
        {...{
          enTitle: "Banners",
          enDesctription: "all the slider data available",
          arTitle: "لافتات",
          arDesctription: "جميع بيانات شريط التمرير المتاحة",
          enChildren: <SliderImage />,
          arChildren: <SliderImage />,
        }}
      />
    </main>
  );
};

export default SettingName;
