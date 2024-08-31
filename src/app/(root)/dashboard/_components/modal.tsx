'use client';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useStoreModal } from '@/hook/useStoreModal';
import { useEffect, useState } from 'react';

export function Modal() {
  const { isOpen, toggle, children } = useStoreModal((sate) => sate);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogContent className="w-[420px] rounded-md pt-12">{children}</DialogContent>
    </Dialog>
  );
}
