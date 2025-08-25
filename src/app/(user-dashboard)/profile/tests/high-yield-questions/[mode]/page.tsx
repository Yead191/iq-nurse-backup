import TestQuestionPageMain from "@/components/ui/user-dashboard-pages/Test-Quizzers-Page/high-yield-questions-page/test-question-page/TestQuestionPageMain";

import React from "react";
interface PageProps {
  params: Promise<{
    mode: string;
  }>;
}

export default async function page({ params }: PageProps) {
  const { mode } = await params;
  //   console.log(mode);
  return <TestQuestionPageMain mode={mode} />;
}
