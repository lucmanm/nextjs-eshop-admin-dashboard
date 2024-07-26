import { getProducts } from "@/actions/getProducts";
import { NoResult } from "@/components/no-result";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { TProduct } from "@/types/products";
import React from "react";

export default async function Page() {

  const data: TProduct[] = await getProducts();

  return (
    <React.Fragment>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Products</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg ">
        {data.length > 0 ? <DataTable columns={columns} data={data} /> : <NoResult />}
      </div>
    </React.Fragment>
  );
}
