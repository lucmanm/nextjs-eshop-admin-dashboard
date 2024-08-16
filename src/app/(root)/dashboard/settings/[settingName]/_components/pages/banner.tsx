import { getSliders } from "@/actions/getSlider";
import { SliderCard } from "../ui/slider-cards";

export const BannerPage = async () => {
  const data = await getSliders();
  return <SliderCard items={data} />;
};
