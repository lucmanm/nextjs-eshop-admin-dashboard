import { notFound } from "next/navigation";
import { BannerPage } from "./_components/pages/banner";
import { StoreImages } from "./_components/pages/store-images";

type SettingNameProps = {
  params: {
    settingName: string;
  };
};

type SettingName = "banners" | "store images";

const SettingNamePage = async ({ params }: SettingNameProps) => {
  // Normalize and validate the setting name
  const decodedSettingName = decodeURIComponent(params.settingName).toLowerCase();

  if (!["banners", "store images"].includes(decodedSettingName)) {
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
