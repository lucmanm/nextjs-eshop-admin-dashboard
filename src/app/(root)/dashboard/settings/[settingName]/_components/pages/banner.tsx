import { getSliders } from "@/actions/getSlider";
import { BannersContainer } from "../ui/slider-cards";

export const BannerPage = async () => {
  const data = await getSliders();
  return <BannersContainer items={data} />;
};
