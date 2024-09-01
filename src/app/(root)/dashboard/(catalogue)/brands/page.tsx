import { getBrands } from '@/actions/brand.action';
import React from 'react';
import { brandColumns } from './_components/columns-brand';
import { AlertDialogModal } from '../../_components/modals/alert-modal';
import { DataTable } from './_components/data-table';

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
