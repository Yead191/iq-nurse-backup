import NclexContent from "@/components/ui/user-dashboard-pages/nclex-exams";
import React from "react";

interface nclexParams {
  params: Promise<{ slug: string }>;
}

export default async function page({ params }: nclexParams) {
  const { slug } = await params;

  return <NclexContent id={slug} />;
}
