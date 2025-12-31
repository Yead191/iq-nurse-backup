import ClinicalSkillDetails from "@/components/ui/user-dashboard-pages/clinical-skills/ClinicalSkillDetails";
import { clinicalSkillsData } from "@/data/clinical-skills-data";
import { Empty } from "antd";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  // Flatten all skills to find the specific one by ID
  const allSkills = clinicalSkillsData.flatMap((cat) => cat.skills);
  const skill = allSkills.find((s) => s.id === id);

  if (!skill) {
    return (
      <div className="flex items-center justify-center h-full p-6">
        <Empty description="Skill not found" />
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-0 ">
      <ClinicalSkillDetails skill={skill} />
    </div>
  );
}
