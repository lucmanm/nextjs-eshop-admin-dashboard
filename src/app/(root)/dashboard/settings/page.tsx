import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SettingsCard } from "./_components/settings-card";

import { settingsData, adminData } from "@/constant/settingsData";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle>Store Settings</CardTitle>
          <CardDescription>Settings and Configurations about our storefront</CardDescription>
        </CardHeader>
        {/* Container */}
        <CardContent className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:grid-cols-3">
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
          <CardTitle>Admin Settings</CardTitle>
          <CardDescription>Here is your all configuration about your admin settings.</CardDescription>
        </CardHeader>
        {/* Container */}
        <CardContent className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:grid-cols-3">
          {adminData.map(({ descriptionAr, descriptionEn, icon, nameAr, nameEn }) => (
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
