import ClinicalsPageDetails from "@/components/ui/user-dashboard-pages/clinical-skills/ClinicalSkillDetails";
import React from "react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ClinicalsPage({ params }: Props) {
  const { id } = await params;
  return <ClinicalsPageDetails />;
}
