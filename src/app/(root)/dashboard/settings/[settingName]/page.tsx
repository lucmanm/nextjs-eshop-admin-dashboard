import { notFound } from "next/navigation";
import React from "react";
import { SliderForm } from "./_components/slider-form";

const SettingName = async ({ params }: { params: { settingName: string } }) => {
  const decodeParams = decodeURI(params.settingName).toLowerCase();

  if (!params.settingName || decodeParams === "") {
    notFound();
  }

  return (
    <div>
      Sldier Form Working in progress
    </div>
  );
};

export default SettingName;
