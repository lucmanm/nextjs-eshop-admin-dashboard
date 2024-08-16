import React, { ReactElement } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useLocale } from "next-intl";
import { isRtlLang } from "rtl-detect";

type TabTransalationProps = {
  enTitle?: string;
  enDescription?: string;
  arTitle?: string;
  arDescription?: string;
  enChildren?: React.ReactNode;
  arChildren?: React.ReactNode;
};
export const TabTransalation = (props: TabTransalationProps) => {
  const locale = useLocale();
  const rtl = isRtlLang(locale);
  return (
    <Tabs defaultValue="english">
      {/* Tabs buttons */}
      <TabsList className="grid grid-cols-2">
        <TabsTrigger value="english" className="gap-2 md:gap-4">
          <Image
            className="rounded-full"
            width={24}
            height={24}
            alt="United States"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
          />
          {rtl ? <span>إنجليزي</span> : <span>English</span>}
        </TabsTrigger>
        <TabsTrigger value="arabic" className="gap-2 md:gap-4">
          <Image
            className="rounded-full"
            width={24}
            height={24}
            alt="United States"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg"
          />
          {rtl ? <span>عربي</span> : <span>Arabic</span>}
        </TabsTrigger>
      </TabsList>

      <TabsContent value="english">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">{props.enTitle}</CardTitle>
            <CardDescription>{props.enDescription}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">{props.enChildren}</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="arabic" dir="rtl">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">{props.arTitle}</CardTitle>
            <CardDescription>{props.arDescription}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">{props.arChildren}</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
