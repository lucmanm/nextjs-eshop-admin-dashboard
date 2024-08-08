import React from "react";
import { NoResult } from "@/components/no-result";

export default async function Page() {


  return (
    <React.Fragment>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg ">
        <NoResult />
      </div>
    </React.Fragment>
  );
}
