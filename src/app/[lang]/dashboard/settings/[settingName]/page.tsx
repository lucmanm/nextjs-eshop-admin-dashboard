import { notFound } from "next/navigation";
import React from "react";

const SettingName = async ({ params }: { params: { settingName: string;} }) => {
  const decodeParams = decodeURI(params.settingName).toLowerCase();

  if (!params.settingName || decodeParams === "") {
    notFound();
  }

  return (
    <React.Fragment>
        <p>System Data page</p>
    </React.Fragment>
  )
};

export default SettingName;
