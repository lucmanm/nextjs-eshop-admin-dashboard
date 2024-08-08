"use client";
import { cn } from "@/lib/utils";
import { Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

type TSettingsCardProps = {
  title?: string;
  description?: string;
};

export const SettingsCard = ({ title, description }: TSettingsCardProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={`${pathname}/${title}`}
      className={cn(
        "flex border items-center p-3 lg:p-4 gap-4 rounded-lg shadow-sm overflow-hidden"
      )}
    >
      <div>
        <Building2 />
      </div>
      <div className="w-full overflow-hidden">
        <p className="max-sm:text-sm">{title}</p>
        <p className="max-sm:text-xs truncate">{description}</p>
      </div>
    </Link>
  );
};
