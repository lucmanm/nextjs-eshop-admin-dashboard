import { getSliders } from "@/actions/getSlider";
import { BannersContainer } from "../_components/forms/form-banners";

export const BannerPage = async () => {
  const data = await getSliders();
  return <BannersContainer items={data} />;
};
