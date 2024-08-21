'use client';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useStoreModal } from '@/hook/useStoreModal';
import { FormBrand } from '../(catalogue)/products/_components/form/form-brand';

export function Modal() {
  const { isOpen, toggle } = useStoreModal((sate) => sate);

  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogContent className="sm:max-w-[425px] pt-12">
        <FormBrand />
      </DialogContent>
    </Dialog>
  );
}
