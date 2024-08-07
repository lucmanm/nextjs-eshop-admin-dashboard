import React from "react";
import { getTranslations } from "next-intl/server";
import LanguageButton from "@/components/language-button";

export default async function Page() {
  const t = await getTranslations("HomePage");

  return (
    <div>
      <LanguageButton />
      Page
      {t("title")}
    </div>
  );
}
