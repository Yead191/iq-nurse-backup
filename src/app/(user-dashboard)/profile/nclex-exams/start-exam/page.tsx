import { QuestionInterface } from "@/components/ui/user-dashboard-pages/nclex-exams/components/start-exam";
import { ExamSession } from "@/data/types";
import React from "react";

type ExamType = "category" | "full-exam";
type ExamMode = "practice" | "test";

interface PageProps {
  searchParams: Promise<{
    type?: string;
    mode?: string;
    categoryId?: string;
    subtopicId?: string;
    count?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;

  const { type, mode, categoryId, subtopicId, count } = params;

  const examType: ExamType =
    type === "category" || type === "full-exam" ? type : "category";

  const examMode: ExamMode =
    mode === "practice" || mode === "test" ? mode : "practice";

  const session: ExamSession = {
    type: examType,
    categoryId,
    subtopicId,
    count: Number(count) || 10,
    mode: examMode,
  };

  return (
    <div className="lg:pt-6">
      <QuestionInterface session={session} />
    </div>
  );
}
