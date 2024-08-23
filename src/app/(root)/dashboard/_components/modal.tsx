'use client';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useStoreModal } from '@/hook/useStoreModal';

export function Modal() {
  const { isOpen, toggle, children } = useStoreModal((sate) => sate);

  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogContent className="w-[420px] pt-12 rounded-md">{children}</DialogContent>
    </Dialog>
  );
}
