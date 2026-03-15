import { EcgPracticeTest } from "@/components/ui/user-dashboard-pages/ecg-mastery-new/components/EcgPractice";
import { ecgContent } from "../../../../../../public/assets/files/ecgContent";
import EcgContentArea from "@/components/ui/user-dashboard-pages/ecg-mastery-new";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = {
    title: slug,
    description:
      "The heart’s electrical conduction system generates and transmits electrical impulses that coordinate the mechanical contraction of the myocardium.",
    content: ecgContent,
  };
  if (slug === "practice-strips") {
    return <EcgPracticeTest />;
  }
  return <EcgContentArea content={content} />;
}
