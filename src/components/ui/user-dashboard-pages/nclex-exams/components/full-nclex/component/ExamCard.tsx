// src/components/exam/ExamCard.tsx
import { Button, Card, Progress, Tag, Alert } from "antd";
import {
  Lock,
  CheckCircle2,
  Clock,
  FileText,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface ExamCardProps {
  exam: any;
}

export function ExamCard({ exam }: ExamCardProps) {
  console.log(exam);
  const router = useRouter();
  const handleClick = () => {
    if (exam.isLocked) return;
    else if (!exam.isLocked) {
      //   onStartExam(exam);
      router.replace(
        `/profile/nclex-exams/start-exam?type=full-exam&examId=${exam.id}&count=${exam.questionCount}&mode=test`,
      );
    }
  };

  return (
    <div
      className={`border rounded-lg p-6 ${
        exam.isLocked
          ? "bg-gray-50 border-gray-300"
          : exam.isCompleted
            ? "border-green-300 bg-green-50/30"
            : "border-blue-300"
      }`}
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        {/* Exam Number / Status Icon */}
        <div className="flex items-start gap-4 flex-1">
          <div
            className={`w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold flex-shrink-0 ${
              exam.isLocked
                ? "bg-gray-200 text-gray-400"
                : exam.isCompleted
                  ? "bg-green-100 text-green-600"
                  : "bg-blue-100 text-blue-600"
            }`}
          >
            {exam.isLocked ? (
              <Lock className="w-8 h-8" />
            ) : exam.isCompleted ? (
              <CheckCircle2 className="w-8 h-8" />
            ) : (
              exam.number
            )}
          </div>

          {/* Exam Details */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h4
                className={`text-lg font-semibold ${
                  exam.isLocked ? "text-gray-400" : "text-gray-900"
                }`}
              >
                {exam.title}
              </h4>
              {exam.isCompleted && (
                <Tag color="green" className="text-xs">
                  Completed
                </Tag>
              )}
              {exam.isLocked && <Tag color="default">Locked</Tag>}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
              <div className="flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                <span>{exam.count} questions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{exam.timeLimit} minutes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                <span>{exam.difficulty} difficulty</span>
              </div>
            </div>

            {exam.isCompleted && exam.score !== undefined && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Score: {exam.score}%</span>
                  <span className="text-gray-500">
                    Completed on{" "}
                    {new Date(exam.completedDate!).toLocaleDateString()}
                  </span>
                </div>
                <Progress
                  percent={exam.score}
                  strokeColor="#10b981"
                  showInfo={false}
                />
              </div>
            )}

            {exam.isLocked && (
              <Alert
                message={`Complete NCLEX Practice Exam ${exam.number - 1} to unlock this exam`}
                type="info"
                showIcon
                icon={<AlertCircle className="w-4 h-4" />}
                className="mt-2 text-sm"
              />
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="ml-4 flex  md:flex-col gap-2">
          {exam.isCompleted ? (
            <>
              <Button onClick={handleClick}>Retake Exam</Button>
              <Button>Review Results</Button>
            </>
          ) : (
            <Button
              type="primary"
              onClick={handleClick}
              disabled={exam.isLocked}
              className="min-w-[120px]"
            >
              {exam.isLocked ? "Locked" : "Start Exam"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
