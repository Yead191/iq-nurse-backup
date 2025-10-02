import ClinicalCategory from "@/components/ui/user-dashboard-pages/clinical-skills/ClinicalCategory";
import React from "react";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function page({ params }: PageProps) {
  const { category } = await params;
  console.log(category);
  return <ClinicalCategory category={category} />;
}
