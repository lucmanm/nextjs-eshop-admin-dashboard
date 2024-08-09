import React from "react";
import { FormProduct } from "./_components/form";
import { ENV } from "@/config/env-variable";

const Page = ({ params }: { params: { slug: string } }) => {
  const slug = decodeURI(params.slug)

  return (
    <React.Fragment>
        <FormProduct />
    </React.Fragment>
  );
};

export default Page;
