import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./local-switcher-select";
import { getUserLocale } from "@/services/local";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();


  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: "en-us",
          label: t("en-us"),
        },
        {
          value: "ar-sa",
          label: t("ar-sa"),
        },
      ]}
      label={t("label")}
    />
  );
}
