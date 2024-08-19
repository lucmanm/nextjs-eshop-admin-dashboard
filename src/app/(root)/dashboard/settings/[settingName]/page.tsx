import { notFound } from 'next/navigation';
import { BannerPage } from './pages/banner-page';
import { StoreImages } from './pages/store-images';
import StoreInformation from './pages/store-information';
import { TSettingName } from '@/constant/settingsData';

type SettingNameProps = {
  params: {
    settingName: string;
  };
};

const SettingNamePage = async ({ params }: SettingNameProps) => {
  const decodedSettingName = decodeURI(params.settingName).toLowerCase() as TSettingName;

  switch (decodedSettingName) {
    case 'banners':
      return <BannerPage />;
    case 'store information':
      return <StoreInformation />;
    case 'store images':
      return <StoreImages />;
    default:
      return notFound();
  }
};

export default SettingNamePage;
