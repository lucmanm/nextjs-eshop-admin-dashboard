import { getBrands } from '@/actions/brand.action';
import { getProducts } from '@/actions/product.action';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import React from 'react';
import { RighSideOptions } from './_components/rightp-side-options';
import { columns as brandColumns, TBrandColumns } from './_components/table/brand-column';
import { DataTable } from './_components/table/data-table';
import { columns as productColumn, TProductColumn } from './_components/table/product-column';
import { TabList } from './_components/tablist';
import { getCategories } from '@/actions/category.action';

export default async function Page() {
  const result: TProductColumn[] = await getProducts();
  const { results: brandData } = await getBrands();
  const { results: categoriesData }  = await getCategories();


  return (
    <React.Fragment>
      <main className="flex flex-1 items-center justify-center rounded-lg">
        <div className="grid flex-1 items-start gap-4 md:gap-8">
          <Tabs defaultValue="products">
            <div className="flex items-center">
              {/* Tablist */}
              <TabList />
              {/* Product Right menus and options */}
              <RighSideOptions />
            </div>
            <TabsContent value="products">
              <DataTable columns={productColumn} data={result} />
            </TabsContent>
            <TabsContent value="brands">
              <DataTable columns={brandColumns} data={brandData} />
            </TabsContent>
            <TabsContent value="category">
              <DataTable columns={brandColumns} data={categoriesData} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </React.Fragment>
  );
}
