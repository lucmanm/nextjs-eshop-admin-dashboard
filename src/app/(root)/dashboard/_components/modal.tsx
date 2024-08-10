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
import { useStoreModal } from "@/hook/useStoreModal";
import { useLocale } from "next-intl";
import { isRtlLang } from "rtl-detect";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";

const brandSchema = z.object({
  image: z.string().min(1, { message: "Missing input required Upload image" }),
  nameEn: z.string().min(1, { message: "Missing input required English Brand Name" }),
  nameAr: z.string().min(1, { message: "Missing input required Arabic Brand Name" }),
});
export function Modal() {
  const { isOpen, toggle, headerData } = useStoreModal((sate) => sate);
  const locale = useLocale();
  const rtl = isRtlLang(locale);

  const form = useForm<z.infer<typeof brandSchema>>({
    resolver: zodResolver(brandSchema),
    defaultValues: {
      image: "",
      nameAr: "",
      nameEn: "",
    },
  });
  const onSubmit = (data: z.infer<typeof brandSchema>) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };
  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{headerData?.title}</DialogTitle>
          <DialogDescription>{headerData?.description}</DialogDescription>
        </DialogHeader>
        {/* Forms Data */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <div className="flex gap-4">

              <div>
                <FormField
                  control={form.control}
                  name="nameEn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>English Brand Name </FormLabel>
                      <FormControl>
                        <Input placeholder="Brand Name" {...field} />
                      </FormControl>
                      <FormDescription>Enter brand name in enligh language</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nameAr"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Arabic Brand Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Brand Name" {...field} />
                      </FormControl>
                      <FormDescription>Enter brand name in arabic language </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter className="gap-4">
              <Button type="submit" className="hover:bg-green-600">
                Save
              </Button>
              <DialogClose asChild>
                <Button
                  type="button"
                  onClick={() => toggle}
                  className="bg-red-900 hover:bg-red-600"
                >
                  Cancel
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
