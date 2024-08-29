import { getBrands } from '@/actions/brand.action';
import React from 'react';
import { FormProduct } from './_components/form-product';
import { getCategory } from '@/actions/category.action';

const Page = async ({ params }: { params: { slug: string } }) => {

  const slug = decodeURI(params.slug);

  const { results: brandResult } = await getBrands();
  const categoryData = await getCategory();


  return (
    <React.Fragment>
      <FormProduct {...{ brands: brandResult, categories: categoryData }} />
    </React.Fragment>
  );
};

export default Page;
