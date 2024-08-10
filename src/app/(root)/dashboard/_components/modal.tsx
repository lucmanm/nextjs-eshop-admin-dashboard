"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStoreModal } from "@/hook/useStoreModal";
import { useLocale } from "next-intl";
import { isRtlLang } from "rtl-detect";

export function Modal() {
  const { isOpen, toggle, headerData } = useStoreModal((sate) => sate);
  const locale = useLocale();
  const rtl = isRtlLang(locale);

  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{headerData?.title}</DialogTitle>
          <DialogDescription>{headerData?.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Brand" className="text-right">
              {rtl ? "ماركة" : "Brand"}
            </Label>
            <Input id="name" defaultValue="Dell" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="arabic-brand-name" className="text-right">
              {rtl ? "عربيc" : "Arabic"}
            </Label>
            <Input id="arabic-brand-name" defaultValue="ديل" className="col-span-3" />
          </div>
        </div>
        <DialogFooter className="gap-4">
          <Button type="button" onClick={() => {}} className="hover:bg-green-600">
            Save
          </Button>
          <DialogClose asChild>
            <Button type="button" onClick={() => toggle} className="bg-red-900 hover:bg-red-600">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
