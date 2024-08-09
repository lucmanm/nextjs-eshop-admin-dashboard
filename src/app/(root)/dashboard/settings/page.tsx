import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SettingsCard } from "./_components/settings-card";

import { settingsData, synchronizationData } from "@/constant/settingsData";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle>Frontend Settings</CardTitle>
          <CardDescription>Configure your frontend informationd details</CardDescription>
        </CardHeader>
        {/* Container */}
        <CardContent className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
          {settingsData.map(({ descriptionAr, descriptionEn, icon, nameAr, nameEn }) => (
            <SettingsCard
              key={nameEn}
              item={{ descriptionAr, descriptionEn, icon, nameAr, nameEn }}
            />
          ))}
        </CardContent>
      </Card>
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle>Frontend Settings</CardTitle>
          <CardDescription>Configure your frontend informationd details</CardDescription>
        </CardHeader>
        {/* Container */}
        <CardContent className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
          {synchronizationData.map(({ descriptionAr, descriptionEn, icon, nameAr, nameEn }) => (
            <SettingsCard
              key={nameEn}
              item={{ descriptionAr, descriptionEn, icon, nameAr, nameEn }}
            />
          ))}
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default IndexPage;
