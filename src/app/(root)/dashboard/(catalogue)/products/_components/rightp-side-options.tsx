'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { File, ListFilter, PlusCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useStoreModal } from '@/hook/useStoreModal';
import { useLocale } from 'next-intl';
import { isRtlLang } from 'rtl-detect';
import { ButtonWithIcon } from '@/components/ui/button-w-icon';
import { FormBrand } from '../[slug]/_components/form/form-brand';
import { FormCategory } from '../[slug]/_components/form/form-category';

type onOpenModalData = 'addBrand' | 'addCategory';

export const RighSideOptions = () => {
  const router = useRouter();
  const { toggle, setHeaderData, setChildren } = useStoreModal((state) => state);
  const locale = useLocale();
  const rtl = isRtlLang(locale);

  const onClick = () => {
    router.push(`/dashboard/products/create product`);
  };

  const openModal = (values: onOpenModalData) => {
    const headerData = {
      addBrand: {
        arTitle: 'إضsافة العلامة التجارية',
        enTitle: 'Add Brand',
        enDescription: 'Enter Product Brand',
        arDescription: 'أدخل العلامة التجارية للمنتج',
      },
      addCategory: {
        arTitle: 'إضافة الفئة',
        enTitle: 'Add Category',
        enDescription: 'Enter Product Category',
        arDescription: 'أدخل الفئة للمنتج',
      },
    };

    if (headerData[values]) {
      setHeaderData(headerData[values]);
      if (values === 'addBrand') {
        setChildren(<FormBrand />);
      } else if (values === 'addCategory') {
        setChildren(<FormCategory />);
      }
      toggle();
    }
  };

  return (
    <div className="ml-auto flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 gap-1 md:hidden">
            <ListFilter className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Options</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Select Options</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuCheckboxItem onClick={() => onClick()}>
            Create Product
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem onClick={() => openModal('addBrand')}>
            Add Brand
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem onClick={() => openModal('addCategory')}>
            Add Category
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        onClick={() => router.push('/dashboard/settings/import products')}
        variant="outline"
        className="h-8 gap-1"
      >
        <File className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Import Products</span>
      </Button>
      {/* Desktop View */}
      <div className="hidden gap-2 md:flex">
        <ButtonWithIcon
          {...{
            icon: <PlusCircle className="h-3.5 w-3.5" />,
            label: 'Create Product',
            onClick: () => onClick(),
          }}
        />
        <ButtonWithIcon
          {...{
            icon: <PlusCircle className="h-3.5 w-3.5" />,
            label: 'Add Brand',
            onClick: () => openModal('addBrand'),
          }}
        />
        <ButtonWithIcon
          {...{
            icon: <PlusCircle className="h-3.5 w-3.5" />,
            label: 'Add Category',
            onClick: () => openModal('addCategory'),
          }}
        />
      </div>
    </div>
  );
};
