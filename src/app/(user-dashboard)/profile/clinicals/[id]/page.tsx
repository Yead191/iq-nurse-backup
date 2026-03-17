import PracticalSkillDetails from "@/components/ui/user-dashboard-pages/practical-skill";
import { PracticeSkillTest } from "@/components/ui/user-dashboard-pages/practical-skill/components/PracticalTest";
import { demoSkillContent } from "@/data/practicalSkill/demoSkillContent";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const skill = {
    title: id,
    category: "Fundamentals / Basic Skills",
    description:
      "Master this essential nursing skill with step-by-step guidance",
    duration: "10-15 minutes",
    content: demoSkillContent,
  };
  if (id === "practice-test") {
    return (
      <div>
        <PracticeSkillTest />
      </div>
    );
  }
  return (
    <div className="px-4 lg:px-0 ">
      <PracticalSkillDetails skill={skill} />
    </div>
  );
}
