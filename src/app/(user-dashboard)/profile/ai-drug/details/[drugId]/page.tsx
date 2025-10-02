import AIDrug from "@/components/ui/user-dashboard-pages/ai-drug";
import React from "react";

interface PageProps {
  params: Promise<{
    drugId: string;
  }>;
}

const AIDrugPage = async ({ params }: PageProps) => {
  const { drugId } = await params;

  return <AIDrug drugId={drugId} />;
};

export default AIDrugPage;
