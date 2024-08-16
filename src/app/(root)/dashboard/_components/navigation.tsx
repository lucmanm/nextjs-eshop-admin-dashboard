import React from "react";
import { sideMenu } from "@/constant/sidebar-menu";
import { useLocale } from "next-intl";
import { isRtlLang } from "rtl-detect";
import { Separator } from "@/components/ui/separator";
import { FolderInput, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const Navigation = () => {
  const locale = useLocale();
  const rtl = isRtlLang(locale);
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {sideMenu.length > 0
        ? sideMenu.map(({ nameEn, icons, path, count, nameAr }) => (
            <Link
              key={nameEn}
              href={`/dashboard/${path}`}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
            >
              {icons}
              {rtl ? nameAr : nameEn}
              {count && (
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  {count}
                </Badge>
              )}
            </Link>
          ))
        : "No Data from Sidebar"}
      <Separator className="my-2" />
      <Link
        href="/dashboard/media-library"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <FolderInput className="h-4 w-4" />
        Media Library
      </Link>
      <Link
        href={`/dashboard/settings`}
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
      >
        <Settings className="h-4 w-4" />
        Settings
      </Link>
    </nav>
  );
};
