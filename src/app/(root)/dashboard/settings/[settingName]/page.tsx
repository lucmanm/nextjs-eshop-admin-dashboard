import { notFound } from "next/navigation";
import { BannerPage } from "./_components/pages/banner-page";
import { StoreImages } from "./_components/pages/store-images";

type SettingNameProps = {
  params: {
    settingName: string;
  };
};

export type TSettingName = "banners" | "store images";

const SettingNamePage = async ({ params }: SettingNameProps) => {
  const decodedSettingName = decodeURI(params.settingName).toLowerCase() as TSettingName;

  if (!["Banners", "store images"].includes(decodedSettingName)) {
    return notFound();
  }

  switch (decodedSettingName) {
    case "banners":
      return (
        <main className="w-full p-2 md:p-6">
          <BannerPage />
        </main>
      );
    case "store images":
      return (
        <main className="w-full p-2 md:p-6">
          <StoreImages />
        </main>
      );
    default:
      return notFound();
  }
};

export default SettingNamePage;
