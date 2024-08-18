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

  if (!["banners", "store images"].includes(decodedSettingName)) {
    return notFound();
  }

  switch (decodedSettingName) {
    case "banners":
      return <BannerPage />;
    case "store images":
      return <StoreImages />;
    default:
      return notFound();
  }
};

export default SettingNamePage;
