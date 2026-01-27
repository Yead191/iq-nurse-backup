import { useState } from "react";
import { Card, Progress } from "antd";
import { FileText } from "lucide-react";
import { ExamCard } from "./component/ExamCard";
import { fullNclexExam } from "@/data/nclex-exam/full-nclexData";

export function FullNCLEXPracticeSection() {
  const [exams] = useState(fullNclexExam);

  const completedExams = exams.filter((e) => e.isCompleted).length;
  const averageScore =
    completedExams > 0
      ? Math.round(
          exams
            .filter((e) => e.isCompleted)
            .reduce((sum, e) => sum + (e.score || 0), 0) / completedExams,
        )
      : 0;

  return (
    <section className="">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="pb-3">
            <div className="text-sm font-medium text-gray-600">
              Exams Completed
            </div>
          </div>

          <div className="text-3xl font-bold">
            {completedExams} / {exams.length}
          </div>
          <Progress
            percent={(completedExams / exams.length) * 100}
            strokeColor="#3b82f6"
            showInfo={false}
            className="mt-2"
          />
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="pb-3">
            <div className="text-sm font-medium text-gray-600">
              Average Score
            </div>
          </div>

          <div className="text-3xl font-bold text-blue-600">
            {completedExams > 0 ? `${averageScore}%` : "N/A"}
          </div>
          {completedExams > 0 && (
            <p className="text-xs text-gray-500 mt-1">
              Based on {completedExams} exams
            </p>
          )}
        </div>

        <div className="p-6 border border-gray-200 rounded-lg">
          <div className="pb-3">
            <div className="text-sm font-medium text-gray-600">
              Total Questions
            </div>
          </div>

          <div className="text-3xl font-bold">375</div>
          <p className="text-xs text-gray-500 mt-1">
            Across all 5 practice exams
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="p-6">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900">
                Full NCLEX Simulation Experience
              </h3>
              <p className="text-sm text-blue-700 mt-2">
                Each exam simulates the actual NCLEX-RN experience with the same
                tools, format, and time constraints. Exams build progressively
                in difficulty and unlock sequentially as you complete them.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mb-6 border border-amber-200 bg-amber-50 rounded-lg">
        <div className="p-6">
          <h3 className="text-base font-semibold text-amber-900 mb-4">
            Exam Tips
          </h3>
          <ul className="space-y-2 text-sm text-amber-800">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-0.5">•</span>
              <span>
                Take exams in a quiet environment to simulate actual test
                conditions
              </span>
            </li>
            {/* ... other tips ... */}
          </ul>
        </div>
      </div>

      {/* Exam List – now using ExamCard */}
      <div className="flex flex-col gap-4 space-y-4">
        {exams?.map((exam) => (
          <ExamCard key={exam.id} exam={exam} />
        ))}
      </div>
    </section>
  );
}
