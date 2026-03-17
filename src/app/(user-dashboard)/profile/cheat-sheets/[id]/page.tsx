import CheatSheetContent from "@/components/ui/user-dashboard-pages/cheat-sheets";
import { demoSheet } from "@/data/cheat-sheets/demoSheet";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function page({ params }: Props) {
  const { id } = await params;

  const sheet = {
    id: id,
    name: "ECG Interpretation Guide",
    categoryName: "Cardiovascular System",
    description: "Quick Reference Guide for Healthcare Professionals",
    content: demoSheet,
  };
  return <CheatSheetContent sheet={sheet} />;
}
