import { notFound } from "next/navigation";
import { BannerPage } from "./_components/pages/banner-page";
import { StoreImages } from "./_components/pages/store-images";
import StoreInformation from "./_components/pages/store-information";
import { TSettingName } from "@/constant/settingsData";

type SettingNameProps = {
  params: {
    settingName: string;
  };
};

const SettingNamePage = async ({ params }: SettingNameProps) => {

  const decodedSettingName = decodeURI(params.settingName).toLowerCase() as TSettingName;

  switch (decodedSettingName) {
    case "banners":
      return <BannerPage />;
    case "store images":
      return <StoreImages />;
    case "store information":
      return <StoreInformation />;
    default:
      return notFound();
  }
};

export default SettingNamePage;
