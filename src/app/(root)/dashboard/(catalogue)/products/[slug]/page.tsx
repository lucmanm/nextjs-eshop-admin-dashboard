import { getBrand } from '@/actions/brand.action';
import React from 'react';
import { FormProduct } from './_components/form-product';

const Page = async ({ params }: { params: { slug: string } }) => {
  const slug = decodeURI(params.slug);

  const brandData = await getBrand();

  return (
    <React.Fragment>
      <FormProduct {...{ brand: brandData?.results }} />
    </React.Fragment>
  );
};

export default Page;
