import { notFound } from "next/navigation";
import { BannerPage } from "./_components/pages/banner";
import { StoreImages } from "./_components/pages/store-images";

type SettingName = "banners" | "store images";

const SettingName = async ({ params }: { params: { settingName: string } }) => {
  const decodeParams = decodeURI(params.settingName).toLowerCase() as SettingName;

  if (!params.settingName) {
    notFound();
  }

  return (
    <main className="w-full p-2 md:p-6">
      {decodeParams === "banners" && <BannerPage />}
      {decodeParams === "store images" && <StoreImages />}
    </main>
  );
};

export default SettingName;
