"use client";
import { Language } from "@/constant/languages";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";

export default function LanguageButton() {
  const router = useRouter();
  const locale = useLocale();

  const handleLanguageChange = (code: string) => {
    if (code.toLowerCase() !== locale) {
      router.push(`/${code.toLowerCase()}`);
    }
  };

  return (
    <>
      {Language.filter((lang) => lang.code.toLowerCase() !== locale.toLowerCase()).map((lang) => (
        <Button
          size="default"
          variant="outline"
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className="flex gap-4 border  border-slate-300"
        >
          <span>{lang.name}</span>
          <Image alt={lang.name} src={lang.image} width={24} height={24} />
        </Button>
      ))}
    </>
  );
}
