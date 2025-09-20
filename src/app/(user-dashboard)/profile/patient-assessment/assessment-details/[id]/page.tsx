import AssessmentDetailsPage from "@/components/ui/user-dashboard-pages/patient-assessment/assessment-details/AssessmentDetailsPage";
import React from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}
export default async function page({ params }: PageProps) {
  const { id } = await params;
  console.log(id);
  return <AssessmentDetailsPage id={id} />;
}
