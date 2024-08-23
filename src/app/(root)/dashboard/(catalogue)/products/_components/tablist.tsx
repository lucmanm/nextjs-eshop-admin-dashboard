import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
const tabListData = [
  {
    title: 'products',
    value: 'products',
  },
  {
    title: 'brands',
    value: 'brands',
  },
  {
    title: 'category',
    value: 'category',
  },
];
export const TabList = () => {
  return (
    <TabsList>
      {tabListData.map((data) => (
        <TabsTrigger key={data.value} value={data.value} className="capitalize">
          {data.title}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};
