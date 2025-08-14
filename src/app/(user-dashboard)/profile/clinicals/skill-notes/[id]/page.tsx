import SkillNotesPage from "@/components/ui/user-dashboard-pages/clinicals-page/clinical-skill-notes/SkillNotesPage";
import React from "react";
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function page({ params }: PageProps) {
  const { id } = await params;
  return <SkillNotesPage id={id} />;
}
