import { TemplatePreview } from "@/components/ui/user-dashboard-pages/templates-page/TemplatePreview";
import React from "react";
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function page({ params }: PageProps) {
  const { id } = await params;
  return <TemplatePreview id={id} />
}
