import DosageContentClient from "@/components/ui/user-dashboard-pages/dosage-calculation";
import { PracticeArea } from "@/components/ui/user-dashboard-pages/dosage-calculation-new/components/PracticeArea";
import { PracticeTest } from "@/components/ui/user-dashboard-pages/dosage-calculation-new/components/PracticeTest";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const topic = {
    title: slug,
    description: "Practice Area",
    keyConcepts: [],
    formulas: [],
    importantPoints: [],
    clinicalTips: [],
    safetyConsiderations: [],
  };

  if (slug === "practice-test") {
    return <PracticeTest />;
  }
  return <PracticeArea topic={topic} />;
}
