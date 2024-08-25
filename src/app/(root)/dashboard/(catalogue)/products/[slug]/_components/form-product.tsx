'use client';

import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Save } from 'lucide-react';
import { FormProvider, useForm } from 'react-hook-form';

import { TabTransalation } from '@/components/tab-translation';
import { ZBrandSchema } from '@/schemas/brand.schema';
import { ZCategorySchema } from '@/schemas/category.schema';
import { BrandCombobox } from './brand-combobox';
import { CaetogoryCombobox } from './category-combobox';
import { ProductImage } from './product-images';
import { FieldInput } from './ui/field-input';
import { FieldInputTextArea } from './ui/field-input-textarea';

export const zProductSchema = z.object({
  images: z.string().array(),
  model: z.string().min(2, {
    message: 'Input field model Required',
  }),
  enDescription: z.string().min(1, { message: 'Missing input field description' }),
  arDescription: z.string().min(1, { message: 'Missing input description' }),
  price: z.number().min(1, { message: 'Missing input field price' }),
  salePrice: z.number().min(1, { message: 'Missing input field sale price' }),
  stock: z.number().min(1, { message: 'Missing input field inventory' }),
  isActive: z.boolean().default(false),
  categoryId: z.string().min(1, { message: 'Missing input field category' }),
  brandId: z.string().min(1, { message: 'Missing input field category' }),
});

type TFormProduct = {
  brands: z.infer<typeof ZBrandSchema>[];
  categories: z.infer<typeof ZCategorySchema>[];
};

export function FormProduct(props: TFormProduct) {
  const { brands, categories } = props;

  const form = useForm<z.infer<typeof zProductSchema>>({
    resolver: zodResolver(zProductSchema),
    defaultValues: {
      images: [],
      model: '',
      enDescription: '',
      arDescription: '',
      brandId: '',
      categoryId: '',
      isActive: false,
      price: 0.0,
      salePrice: 0.0,
      stock: 0,
    },
  });

  function onSubmit(data: z.infer<typeof zProductSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const images = form.watch('images');

  return (
    <div className="py-8">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <TabTransalation
            {...{
              enTitle: 'Create Product',
              enDescription: 'Field all the required filed to add product',
              arTitle: 'إنشاء المنتج',
              arDescription: 'حقل جميع الحقل المطلوب لإضافة المنتج',
              enChildren: (
                <div className="flex flex-col-reverse gap-4 md:grid md:grid-cols-12">
                  <div className="md:col-span-9">
                    <FieldInput
                      inputLabel="Model"
                      name="model"
                      placeholder="Product Model"
                      description="Enter the product model of the item"
                    />
                    <FieldInputTextArea
                      inputLabel="Description"
                      name="enDescription"
                      placeholder="Product Description"
                      description="Enter the product description of the item"
                    />
                    <BrandCombobox
                      {...{
                        name: 'brandId',
                        data: brands,
                        formLabel: 'Brand',
                      }}
                    />
                    <CaetogoryCombobox
                      {...{
                        name: 'categoryId',
                        data: categories,
                        formLabel: 'Product Category',
                      }}
                    />

                    <FieldInput
                      inputLabel=" Price"
                      type="number"
                      name="price"
                      placeholder="0.00"
                      description="Enter the product price"
                    />

                    <FieldInput
                      inputLabel="Sale Price"
                      name="salePrice"
                      placeholder="0.00"
                      description="Enter the product Sale price"
                    />

                    <FieldInput
                      inputLabel="Stock Available"
                      name="stock"
                      placeholder="0"
                      description="Enter the stock available of the product"
                    />
                  </div>

                  <ProductImage images={images} className="md:col-span-3" />
                </div>
              ),
              arChildren: (
                <div className="flex flex-col-reverse gap-4 md:grid md:grid-cols-12">
                  <div className="md:col-span-9">
                    <FieldInput
                      inputLabel="Model"
                      name="model"
                      placeholder="Product Model"
                      description="Enter the product model of the item"
                    />
                    <FieldInputTextArea
                      inputLabel="Description"
                      name="arDescription"
                      placeholder="Product Description"
                      description="Enter the product description of the item"
                    />
                    <BrandCombobox
                      {...{
                        name: 'brandId',
                        data: brands,
                        formLabel: 'Brand',
                      }}
                    />
                    <CaetogoryCombobox
                      {...{
                        name: 'categoryId',
                        data: categories,
                        formLabel: 'Product Category',
                      }}
                    />
                    <FieldInput
                      inputLabel=" Price"
                      name="price"
                      placeholder="0.00"
                      description="Enter the product price"
                    />
                    <FieldInput
                      inputLabel="Sale Price"
                      name="salePrice"
                      placeholder="0.00"
                      description="Enter the product Sale price"
                    />
                    <FieldInput
                      inputLabel="Stock Available"
                      name="stock"
                      placeholder="0"
                      description="Enter the stock available of the product"
                    />
                  </div>
                  <ProductImage images={images} className="md:col-span-3" />
                </div>
              ),
            }}
          />
          <Button
            type="submit"
            className="w-36 gap-2 self-start font-semibold hover:bg-green-600 max-sm:h-7"
          >
            <Save size={18} />
            Submit
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
