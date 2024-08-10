import React from "react";
import { ENV } from "@/config/env-variable";
import { FormProduct } from "./_components/form-product";

const Page = ({ params }: { params: { slug: string } }) => {
  const slug = decodeURI(params.slug)

  return (
    <React.Fragment>
        <FormProduct />
    </React.Fragment>
  );
};

export default Page;
