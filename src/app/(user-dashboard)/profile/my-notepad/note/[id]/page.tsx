import React from "react";

interface pageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function page({ params }: pageProps) {
  const { id } = await params;
  console.log(id);
  return <div>page</div>;
}
