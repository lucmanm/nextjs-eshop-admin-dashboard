import { getBrands } from '@/actions/brand.action';
import { DataTable } from '@/components/table/data-table';
import React from 'react';
import { brandColumns } from './_components/columns-brand';
import { AlertDialogModal } from '../../_components/modals/alert-modal';

const Page = async () => {
  const { results: brandData } = await getBrands();
  return (
    <div className="capitalize">
      <AlertDialogModal/>
      <DataTable columns={brandColumns} data={brandData} />;
    </div>
  );
};
export default Page;
