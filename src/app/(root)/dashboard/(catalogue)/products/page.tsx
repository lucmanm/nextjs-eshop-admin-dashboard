import React from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { RighSideOptions } from './_components/rightp-side-options';
import { columns, Payment } from './_components/table/column';
import { DataTable } from './_components/table/data-table';
import { TabList } from './_components/tablist';

const data: Payment[] = [
  {
    id: 'm5gr84i9',
    model: 'model1',
    image: 'https://res.cloudinary.com/dzdcszrob/image/upload/v1721464840/playground-images/icons/mqfen1cbhqcpggyowiwr.png',
    price: 316,
    status: 'success',
    products: 'Product 1',
    stock: 2,
    sku: '59011',
  },
  {
    id: '3u1reuv4',
    model: 'model2',
    image: 'https://res.cloudinary.com/dzdcszrob/image/upload/v1721464840/playground-images/icons/mqfen1cbhqcpggyowiwr.png',
    price: 242,
    status: 'success',
    products: 'Product 2',
    stock: 2,
    sku: '59011',
  },
  {
    id: 'derv1ws0',
    model: 'model3',
    image: 'https://res.cloudinary.com/dzdcszrob/image/upload/v1721464840/playground-images/icons/mqfen1cbhqcpggyowiwr.png',
    price: 837,
    status: 'processing',
    products: 'Product 3',
    stock: 2,
    sku: '59011',
  },
  {
    id: '5kma53ae',
    model: 'model4',
    image: 'https://res.cloudinary.com/dzdcszrob/image/upload/v1721464840/playground-images/icons/mqfen1cbhqcpggyowiwr.png',
    price: 874,
    status: 'success',
    products: 'Product 4',
    stock: 2,
    sku: '59011',
  },
  {
    id: 'bhqecj4p',
    model: 'model5',
    image: 'https://res.cloudinary.com/dzdcszrob/image/upload/v1721464840/playground-images/icons/mqfen1cbhqcpggyowiwr.png',
    price: 721,
    status: 'failed',
    products: 'Product 5',
    stock: 2,
    sku: '59011',
  },
  {
    id: 'bhqecj4p',
    model: 'model5',
    image: 'https://res.cloudinary.com/dzdcszrob/image/upload/v1721464840/playground-images/icons/mqfen1cbhqcpggyowiwr.png',
    price: 721,
    status: 'failed',
    products: 'Product 5',
    stock: 2,
    sku: '59011',
  },
  {
    id: 'bhqecj4p',
    model: 'model5',
    image: 'https://res.cloudinary.com/dzdcszrob/image/upload/v1721464840/playground-images/icons/mqfen1cbhqcpggyowiwr.png',
    price: 721,
    status: 'failed',
    products: 'Product 5',
    stock: 2,
    sku: '59011',
  },
  {
    id: 'bhqecj4p',
    model: 'model5',
    image: 'https://res.cloudinary.com/dzdcszrob/image/upload/v1721464840/playground-images/icons/mqfen1cbhqcpggyowiwr.png',
    price: 721,
    status: 'failed',
    products: 'Product 5',
    stock: 2,
    sku: '59011',
  },
  {
    id: 'bhqecj4p',
    model: 'model5',
    image: 'https://res.cloudinary.com/dzdcszrob/image/upload/v1721464840/playground-images/icons/mqfen1cbhqcpggyowiwr.png',
    price: 721,
    status: 'failed',
    products: 'Product 5',
    stock: 2,
    sku: '59011',
  },
  {
    id: 'bhqecj4p',
    model: 'model5',
    image: 'https://res.cloudinary.com/dzdcszrob/image/upload/v1721464840/playground-images/icons/mqfen1cbhqcpggyowiwr.png',
    price: 721,
    status: 'failed',
    products: 'Product 5',
    stock: 2,
    sku: '59011',
  },
  {
    id: 'bhqecj4p',
    model: 'model5',
    image: 'https://res.cloudinary.com/dzdcszrob/image/upload/v1721464840/playground-images/icons/mqfen1cbhqcpggyowiwr.png',
    price: 721,
    status: 'failed',
    products: 'Product 5',
    stock: 2,
    sku: '59011',
  },
];

export default async function Page() {
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
              <DataTable columns={columns} data={data} />
            </TabsContent>
            <TabsContent value="brands">
              <DataTable columns={columns} data={data} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </React.Fragment>
  );
}
