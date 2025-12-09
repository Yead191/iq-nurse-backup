import AssessmentPage from "@/components/ui/user-dashboard-pages/patient-assessment";
import React from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function page({ params }: PageProps) {
  const { id } = await params;

  return <AssessmentPage id={id} />;
}
