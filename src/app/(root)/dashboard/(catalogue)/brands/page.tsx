import { getBrands } from '@/actions/brand.action';
import { DataTable } from '@/components/table/data-table';
import React from 'react';
import { brandColumns } from './_components/columns-brand';

const Page = async () => {
  const { results: brandData } = await getBrands();
  return <DataTable columns={brandColumns} data={brandData} />;
};
export default Page;
