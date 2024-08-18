import { notFound } from "next/navigation";
import { BannerPage } from "./_components/pages/banner";
// import { StoreImages } from "./_components/pages/store-images";

type SettingNameProps = {
  params: {
    settingName: string;
  };
};
type TSettingName = "Banners" | "images" | "details";

// function isTSettingName(value: string): value is TSettingName {
//   return value === "Banners" || value === "images" || value === "details";
// }

const SettingNamePage = async ({ params }: SettingNameProps) => {
  // Normalize and validate the setting name
  const decodedSettingName = decodeURI(params.settingName) as TSettingName;

  if (decodedSettingName === "Banners") {
    return <BannerPage />;
  } else {
    return notFound();
  }
};

export default SettingNamePage;
