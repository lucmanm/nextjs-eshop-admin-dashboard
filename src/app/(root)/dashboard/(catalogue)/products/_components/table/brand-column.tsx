'use client';

import { DataTableColumnHeader } from '@/components/table/column-header';
import { Checkbox } from '@/components/ui/checkbox';
import { defaultProductImage } from '@/constant/default-images';
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import { BrandCellAction } from './components/brand-cell-actions';

export type TBrandColumns = {
  id: string;
  logoUrl: string | null;
  arName: string;
  enName: number;
};

export const columns: ColumnDef<TBrandColumns>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'enName',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Brand Name" />,
  },
  {
    accessorKey: 'logoUrl',
    header: 'Brand Logo',
    cell: ({ row }) => {
      // const images = row.getValue('images') as string[];
      return (
        <div className="text-right font-medium">
          <Image
            src={defaultProductImage}
            alt="product image"
            width={50}
            height={50}
            className="size-12 object-cover"
          />
        </div>
      );
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const id = row.original.id;

      return <BrandCellAction id={id} />;
    },
  },
];
