import { getCategories } from '@/actions/category.action';
import { DataTable } from '@/components/table/data-table';
import React from 'react';
import { columnsCategory } from './_components/collumns-category';

const Page = async () => {
  const { results: categoriesData } = await getCategories();
  return <DataTable columns={columnsCategory} data={categoriesData} />;
};
export default Page;
