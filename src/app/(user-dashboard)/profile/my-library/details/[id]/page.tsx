import SingleLibrary from "@/components/ui/user-dashboard-pages/my-library-page/single-library/SingleLibrary";
import React from "react";
interface pageProps {
  params: Promise<{
    id: string;
  }>;
}
export default async function page({ params }: pageProps) {
  const { id } = await params;
  console.log(id);
  return <SingleLibrary id={id} />;
}
