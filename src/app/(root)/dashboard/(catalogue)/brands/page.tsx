import { getBrands } from '@/actions/brand.action';
import { DataTable } from '@/components/table/data-table'
import React from 'react'
import { brandColumns } from './_components/brand-column';

const Page = async () => {
  const { results: brandData } = await getBrands();
  return (
    <div>
      <DataTable columns={brandColumns} data={brandData} />
    </div>
  )
}
export default Page
