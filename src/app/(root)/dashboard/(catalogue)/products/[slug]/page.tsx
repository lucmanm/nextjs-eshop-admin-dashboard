import React from "react";
import { FormProduct } from "./_components/form";

const Page = ({ params }: { params: { slug: string } }) => {

  return (
    <React.Fragment>
      <FormProduct />
    </React.Fragment>
  );
};

export default Page;
