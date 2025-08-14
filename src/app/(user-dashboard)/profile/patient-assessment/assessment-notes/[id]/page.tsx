import AssessmentNotesPage from "@/components/ui/user-dashboard-pages/patient-assessment-page/assessment-notes-page/AssessmentNotesPage";
import React from "react";
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function page({ params }: PageProps) {
  const { id } = await params;
  return <AssessmentNotesPage id={id} />;
}
