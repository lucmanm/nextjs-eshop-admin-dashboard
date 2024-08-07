import { redirect } from "next/navigation";

const RootPage = ({ params }: { params: { lang: string } }) => {
  redirect(`${params.lang}/login`);
};

export default RootPage;
