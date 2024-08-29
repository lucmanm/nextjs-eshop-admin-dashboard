import { getBrands } from '@/actions/brand.action';
import React from 'react';
import { FormProduct } from './_components/form-product';
import { getCategories } from '@/actions/category.action';

const Page = async ({ params }: { params: { slug: string } }) => {

  const slug = decodeURI(params.slug);

  const { results: brandData } = await getBrands();
  const { results: categoryData } = await getCategories();

  return (
    <React.Fragment>
      <FormProduct {...{ brands: brandData, categories: categoryData }} />
    </React.Fragment>
  );
};

export default Page;
