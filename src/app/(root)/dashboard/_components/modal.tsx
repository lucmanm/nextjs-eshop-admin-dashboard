'use client';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useStoreModal } from '@/hook/useStoreModal';

export function Modal() {
  const { isOpen, toggle, children } = useStoreModal((sate) => sate);

  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogContent className="sm:max-w-[425px] pt-12">
        {children}
      </DialogContent>
    </Dialog>
  );
}
