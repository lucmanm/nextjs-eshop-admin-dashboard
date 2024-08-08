import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SettingsCard } from "./_components/settings-card";
import { useLocale } from "next-intl";

const IndexPage = () => {
  const locale = useLocale();
  const settingsData = {
    "en-us": [
      {
        title: "store Information",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
      },
      {
        title: "store Information",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
      },
      {
        title: "store Information",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
      },
      {
        title: "store Information",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
      },
      {
        title: "store Information",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
      },
      {
        title: "store Information",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
      },
      {
        title: "store Information",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
      },
      {
        title: "store Information",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
      },
    ],
    "ar-sa": [
      {
        title: "معلومات المتجر",
        description: "لوريم إيبسوم، دولور سيت أميت كونسيكتتور أديبيسيسينج إيليت.",
      },
      {
        title: "معلومات المتجر",
        description: "لوريم إيبسوم، دولور سيت أميت كونسيكتتور أديبيسيسينج إيليت.",
      },
      {
        title: "معلومات المتجر",
        description: "لوريم إيبسوم، دولور سيت أميت كونسيكتتور أديبيسيسينج إيليت.",
      },
      {
        title: "معلومات المتجر",
        description: "لوريم إيبسوم، دولور سيت أميت كونسيكتتور أديبيسيسينج إيليت.",
      },
      {
        title: "معلومات المتجر",
        description: "لوريم إيبسوم، دولور سيت أميت كونسيكتتور أديبيسيسينج إيليت.",
      },
      {
        title: "معلومات المتجر",
        description: "لوريم إيبسوم، دولور سيت أميت كونسيكتتور أديبيسيسينج إيليت.",
      },
      {
        title: "معلومات المتجر",
        description: "لوريم إيبسوم، دولور سيت أميت كونسيكتتور أديبيسيسينج إيليت.",
      },
      {
        title: "معلومات المتجر",
        description: "لوريم إيبسوم، دولور سيت أميت كونسيكتتور أديبيسيسينج إيليت.",
      },
    ],
  };

  const dataToDisplay = settingsData[locale as keyof typeof settingsData] || settingsData["en-us"];

  return (
    <React.Fragment>
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Frontend Settings</CardTitle>
            <CardDescription>Configure your frontend informationd details</CardDescription>
          </CardHeader>
          {/* Container */}
          <CardContent className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {dataToDisplay.map((data, idx) => (
              <SettingsCard key={idx} title={data.title} description={data.description} />
            ))}
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </section>
    </React.Fragment>
  );
};

export default IndexPage;
