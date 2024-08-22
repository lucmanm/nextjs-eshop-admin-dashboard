import React, { Dispatch, Fragment, SetStateAction } from "react";

import { sideMenu } from "@/constant/sidebar-menu";
import { useLocale } from "next-intl";
import { isRtlLang } from "rtl-detect";
import { Separator } from "@/components/ui/separator";
import { FolderInput, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type TNavigationProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
};

export const Navigation: React.FC<TNavigationProps> = ({ setIsOpen, isOpen }) => {
  const router = useRouter();
  const locale = useLocale();
  const rtl = isRtlLang(locale);

  const onClickLink = (path: string) => {
    isOpen && setIsOpen(!isOpen);
    router.push(`/dashboard/${path}`);
  };

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {sideMenu.length > 0 &&
        sideMenu.map(({ nameEn, icons, path, count, nameAr }) => (
          <Button
            key={nameEn}
            variant={"ghost"}
            className="flex justify-start gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
            onClick={() => onClickLink(path)}
          >
            {icons}
            <Fragment>{rtl ? nameAr : nameEn}</Fragment>

            {count && (
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                {count}
              </Badge>
            )}
          </Button>
        ))}
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
