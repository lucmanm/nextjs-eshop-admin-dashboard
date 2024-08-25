import React from 'react';
import { ENV } from '@/config/env-variable';
import { FormProduct } from './_components/form-product';
import { getBrand } from '@/actions/brand.action';

const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = decodeURI(params.slug);

  const brandData = await getBrand();
  console.log(brandData);


  return (
    <React.Fragment>
      <FormProduct />
    </React.Fragment>
  );
};

export default Page;
