import NursingAssessment from "@/components/ui/user-dashboard-pages/nursing-assessment";
import { demoNursingContent } from "@/data/nursing-assessment/demoNursingContent";
import React from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function page({ params }: PageProps) {
  const { id } = await params;
  const assessment = {
    id: id,
    title: "Heart Rate and Rhythm",
    description: "Learn how to assess heart rate and rhythm",
    content: demoNursingContent,
  };

  return <NursingAssessment assessment={assessment} />;
}
