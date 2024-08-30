'use client';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';
import { usePathname, useRouter } from 'next/navigation';

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
] as const;

export type SearchQueryType = (typeof tabListData)[number]['value'];

export const TabList = () => {
  const router = useRouter();
  const pathname = usePathname();
  const onClick = (value: string) => {
    if (value === 'products') {
      router.replace(`${value}`);
    } else {
      router.replace(`${pathname}?search=${value}`);
    }
  };

  return (
    <TabsList>
      {tabListData.map((data) => (
        <TabsTrigger
          key={data.value}
          value={data.value}
          className="capitalize"
          onClick={() => onClick(`${data.value}`)}
        >
          {data.title}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};
