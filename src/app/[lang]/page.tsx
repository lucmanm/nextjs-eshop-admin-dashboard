import React from "react";
import { useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";

export default function Page() {
  const t = useTranslations("HomePage");

  return (
    <div>
      Page
      {t("title")}
    </div>
  );
}
