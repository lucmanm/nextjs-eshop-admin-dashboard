import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { isRtlLang } from "rtl-detect";

type TSettingsCardProps = {
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: React.JSX.Element;
};

export const SettingsCard = ({ item }: { item: TSettingsCardProps }) => {
  const locale = useLocale();
  const rtl = isRtlLang(locale);

  return (
    <Link
      href={`/dashboard/settings/${item.nameEn.toLowerCase()}`}
      className={cn(
        "flex border items-center p-3 lsg:p-4 gap-4 rounded-lg shadow-sm overflow-hidden"
      )}
    >
      <div>{item.icon}</div>
      <div className="w-full overflow-hidden">
        <p className="max-sm:text-sm font-bold capitalize">{rtl ? item.nameAr : item.nameEn}</p>
        <p className="max-sm:text-xs truncate">{rtl ? item.descriptionAr : item.descriptionEn}</p>
      </div>
    </Link>
  );
};
