'use client';

import { deleteBrand } from '@/actions/brand.action';
import { DataTableColumnHeader } from '@/components/table/column-header';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { defaultProductImage } from '@/constant/default-images';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

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
    header: ({ column }) => <DataTableColumnHeader column={column} title="Brand Name"/>,
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
    cell: ({ getValue }) => {
      const id = getValue();
// WIP get the id off the cells
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Update</DropdownMenuItem>
            <DropdownMenuItem onClick={async ()=> {
              await deleteBrand(id as string)
            }}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
