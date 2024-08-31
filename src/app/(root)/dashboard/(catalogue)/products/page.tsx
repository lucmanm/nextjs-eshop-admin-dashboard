import { getBrands } from '@/actions/brand.action';
import { getCategories } from '@/actions/category.action';
import { getProducts } from '@/actions/product.action';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import React from 'react';
import { RighSideOptions } from './_components/rightp-side-options';
import { columns as brandColumns } from './_components/table/columns-brand';
import { columns as productColumn } from './_components/table/columns-product';
import { DataTable } from './_components/table/data-table';
import { SearchQueryType, TabList } from './_components/tablist';

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Extract the value of the 'search' query parameter
  const searchValue = searchParams?.search;

  // Handle the case where 'search' might be an array or undefined
  const searchQuery: SearchQueryType =
    ((Array.isArray(searchValue) ? searchValue[0] : searchValue) as SearchQueryType) || 'products';

  const { results: productsData } = await getProducts();
  const { results: brandData } = await getBrands();
  const { results: categoriesData } = await getCategories();

  return (
    <React.Fragment>
      <main className="flex flex-1 items-center justify-center rounded-lg">
        <div className="grid flex-1 items-start gap-4 md:gap-8">
          <Tabs defaultValue={searchQuery}>
            <div className="flex items-center">
              {/* Tablist */}
              <TabList />
              {/* Product Right menus and options */}
              <RighSideOptions />
            </div>
            {searchQuery === 'products' && (
              <TabsContent value="products">
                <DataTable columns={productColumn} data={productsData} />
              </TabsContent>
            )}

            {searchQuery === 'brands' && (
              <TabsContent value="brands">
                <DataTable columns={brandColumns} data={brandData} />
              </TabsContent>
            )}

            {searchQuery === 'category' && (
              <TabsContent value="category">
                <DataTable columns={brandColumns} data={categoriesData} />
              </TabsContent>
            )}
          </Tabs>
        </div>
      </main>
    </React.Fragment>
  );
}
