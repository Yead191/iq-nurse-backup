"use client";

import { LabsContentArea } from "@/components/ui/user-dashboard-pages/labs-reference-new";
import { LabsPracticeTest } from "@/components/ui/user-dashboard-pages/labs-reference-new/components/LabsPractice";
import { demoLabContent } from "@/data/labs-ref/demoLabContent";
import React, { use } from "react";

export default function LabsContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const labsContent = {
    title: slug,
    description: "",
    content: demoLabContent,
  };
  if (slug === "practice-test") {
    return <LabsPracticeTest />;
  }
  return <LabsContentArea content={labsContent} />;
}
