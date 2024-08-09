import { redirect } from "next/navigation";

const RootPage = () => {
  redirect(`/login`);
};

export default RootPage;
