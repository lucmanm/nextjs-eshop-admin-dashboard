"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { File, ListFilter, PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useStoreModal } from "@/hook/useStoreModal";
import { useLocale } from "next-intl";
import { isRtlLang } from "rtl-detect";

export const ProductRightMenu = () => {
  const router = useRouter();
  const { toggle, setHeaderData } = useStoreModal((sate) => sate);
  const locale = useLocale();
  const rtl = isRtlLang(locale);

  const onClick = () => {
    router.push(`/dashboard/products/create product`);
  };

  const openModal = () => {
    toggle();
    setHeaderData({
      title: rtl ? "إضافة العلامة التجارية" : "Add Brand",
      description: rtl ? "أدخل العلامة التجارية للمنتج" : "Enter Product Brand",
    });
  };


  return (
    <div className="ml-auto flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <ListFilter className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Filter by</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button size="sm" variant="outline" className="h-8 gap-1">
        <File className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
      </Button>
      <Button size="sm" className="h-8 gap-1" onClick={onClick}>
        <PlusCircle className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Product</span>
      </Button>
      <Button size="sm" className="h-8 gap-1" onClick={openModal}>
        <PlusCircle className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Create Brand</span>
      </Button>
    </div>
  );
};
