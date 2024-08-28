import React from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { RighSideOptions } from './_components/rightp-side-options';
import { columns, Payment, Product } from './_components/table/column';
import { DataTable } from './_components/table/data-table';
import { TabList } from './_components/tablist';
import { getProducts } from '@/actions/product.action';
import { defaultProductImage } from '@/constant/default-images';

const data: Payment[] = [
  {
    id: 'm5gr84i9',
    model: 'model1',
    image: defaultProductImage,
    price: 316,
    status: 'success',
    products: 'Product 1',
    stock: 2,
    sku: '59011',
  },
  {
    id: '3u1reuv4',
    model: 'model2',
    image: defaultProductImage,
    price: 242,
    status: 'success',
    products: 'Product 2',
    stock: 2,
    sku: '59011',
  },
  {
    id: 'derv1ws0',
    model: 'model3',
    image: defaultProductImage,
    price: 837,
    status: 'processing',
    products: 'Product 3',
    stock: 2,
    sku: '59011',
  },
  {
    id: '5kma53ae',
    model: 'model4',
    image: defaultProductImage,
    price: 874,
    status: 'success',
    products: 'Product 4',
    stock: 2,
    sku: '59011',
  },
  {
    id: 'bhqecj4p',
    model: 'model5',
    image: defaultProductImage,
    price: 721,
    status: 'failed',
    products: 'Product 5',
    stock: 2,
    sku: '59011',
  },
  {
    id: 'bhqecj4p',
    model: 'model5',
    image: defaultProductImage,
    price: 721,
    status: 'failed',
    products: 'Product 5',
    stock: 2,
    sku: '59011',
  },
  {
    id: 'bhqecj4p',
    model: 'model5',
    image: defaultProductImage,
    price: 721,
    status: 'failed',
    products: 'Product 5',
    stock: 2,
    sku: '59011',
  },
  {
    id: 'bhqecj4p',
    model: 'model5',
    image: defaultProductImage,
    price: 721,
    status: 'failed',
    products: 'Product 5',
    stock: 2,
    sku: '59011',
  },
  {
    id: 'bhqecj4p',
    model: 'model5',
    image: defaultProductImage,
    price: 721,
    status: 'failed',
    products: 'Product 5',
    stock: 2,
    sku: '59011',
  },
  {
    id: 'bhqecj4p',
    model: 'model5',
    image: defaultProductImage,
    price: 721,
    status: 'failed',
    products: 'Product 5',
    stock: 2,
    sku: '59011',
  },
  {
    id: 'bhqecj4p',
    model: 'model5',
    image: defaultProductImage,
    price: 721,
    status: 'failed',
    products: 'Product 5',
    stock: 2,
    sku: '59011',
  },
];

export default async function Page() {
  const result: Product[] = await getProducts();

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
              <DataTable columns={columns} data={result} />
            </TabsContent>
            {/* <TabsContent value="brands">
              <DataTable columns={columns} data={data} />
            </TabsContent> */}
          </Tabs>
        </div>
      </main>
    </React.Fragment>
  );
}
