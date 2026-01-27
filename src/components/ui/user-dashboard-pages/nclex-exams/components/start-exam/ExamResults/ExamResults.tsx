import { useState } from "react";
import { Button, Card, Progress } from "antd";
import { CheckCircle2, XCircle, Target } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Question } from "@/helpers/examUtils";
import { ExamSession } from "@/data/types";
import { QuestionReviewItem } from "./QuestionReviewItem";
import { useRouter } from "next/navigation";

interface ExamResultsProps {
  questions: Question[];
  answers: Record<string, string | string[]>;
  session: ExamSession;
  onReview: () => void;
}

export function ExamResults({
  questions,
  answers,
  session,
  onReview,
}: ExamResultsProps) {
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(
    new Set(),
  );
  const router = useRouter();
  // Calculations (unchanged)
  const correctCount = questions.filter((q) => {
    const userAnswer = answers[q.id];
    return (
      userAnswer &&
      JSON.stringify(userAnswer) === JSON.stringify(q.correctAnswer)
    );
  }).length;

  const incorrectCount =
    questions.length -
    correctCount -
    (questions.length -
      correctCount -
      questions.filter((q) => !answers[q.id]).length);
  const unansweredCount = questions.length - correctCount - incorrectCount;
  const scorePercentage = Math.round((correctCount / questions.length) * 100);

  // Category stats (unchanged)
  const categoryStats: Record<string, { correct: number; total: number }> = {};
  questions.forEach((q) => {
    if (!categoryStats[q.category])
      categoryStats[q.category] = { correct: 0, total: 0 };
    categoryStats[q.category].total++;
    if (
      answers[q.id] &&
      JSON.stringify(answers[q.id]) === JSON.stringify(q.correctAnswer)
    ) {
      categoryStats[q.category].correct++;
    }
  });

  const categoryData = Object.entries(categoryStats).map(
    ([category, stats]) => ({
      category,
      percentage: Math.round((stats.correct / stats.total) * 100),
      correct: stats.correct,
      total: stats.total,
    }),
  );

  const pieData = [
    { name: "Correct", value: correctCount, color: "#10b981" },
    { name: "Incorrect", value: incorrectCount, color: "#ef4444" },
    { name: "Unanswered", value: unansweredCount, color: "#d1d5db" },
  ];

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) next.delete(questionId);
      else next.add(questionId);
      return next;
    });
  };

  const getPassStatus = () => {
    if (scorePercentage >= 75)
      return {
        text: "Excellent!",
        color: "text-green-600",
        bgColor: "bg-green-50",
      };
    if (scorePercentage >= 60)
      return { text: "Pass", color: "text-blue-600", bgColor: "bg-blue-50" };
    return {
      text: "Needs Improvement",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    };
  };

  const passStatus = getPassStatus();
  const onExit = () => {
    router.push("/profile/nclex-exams/progress");
  };
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 fixed top-0 z-10 w-full">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Exam Results</h1>
            <p className="text-sm text-gray-600 mt-1">Exam Title</p>
          </div>
          <Button onClick={onExit}>Exit to Dashboard</Button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 flex flex-col gap-6 pt-[90px] lg:mt-6">
        {/* Score Summary */}
        <Card className={`${passStatus.bgColor} border-2`}>
          <div className="flex items-center justify-between">
            <div>
              <h2 className={`text-4xl font-bold mb-2 ${passStatus.color}`}>
                {scorePercentage}%
              </h2>
              <p className="text-lg">
                <span className={`font-semibold ${passStatus.color}`}>
                  {passStatus.text}
                </span>
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900">
                {correctCount}
              </div>
              <p className="text-sm text-gray-600">
                out of {questions.length} correct
              </p>
            </div>
          </div>
        </Card>

        {/* Performance Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-sm ">
            <div className="p-6 pb-2 flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-600">Correct</h3>
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <div className="px-6 pb-6">
              <div className="text-3xl font-bold text-green-600">
                {correctCount}
              </div>
              <Progress
                percent={(correctCount / questions.length) * 100}
                strokeColor="#10b981"
                showInfo={false}
                className="mt-2"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm ">
            <div className="p-6 pb-2 flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-600">Incorrect</h3>
              <XCircle className="w-5 h-5 text-red-600" />
            </div>
            <div className="px-6 pb-6">
              <div className="text-3xl font-bold text-red-600">
                {incorrectCount}
              </div>
              <Progress
                percent={(incorrectCount / questions.length) * 100}
                strokeColor="#ef4444"
                showInfo={false}
                className="mt-2"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm ">
            <div className="p-6 pb-2 flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-600">Unanswered</h3>
              <Target className="w-5 h-5 text-gray-600" />
            </div>
            <div className="px-6 pb-6">
              <div className="text-3xl font-bold text-gray-600">
                {unansweredCount}
              </div>
              <Progress
                percent={(unansweredCount / questions.length) * 100}
                showInfo={false}
                className="mt-2"
              />
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card title="Overall Performance">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value, percent }: any) =>
                    `${name}: ${value} (${(percent * 100).toFixed(0)}%)`
                  }
                  outerRadius={80}
                  dataKey="value"
                >
                  {pieData.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          <Card title="Performance by Category">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="category"
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis />
                <Tooltip />
                <Bar dataKey="percentage" fill="#3b82f6" name="Score %" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Category Breakdown */}
        <Card title="Category Breakdown">
          <div className="space-y-3 p-2">
            {categoryData.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">{cat.category}</span>
                  <span className="text-sm text-gray-600">
                    {cat.correct}/{cat.total} ({cat.percentage}%)
                  </span>
                </div>
                <Progress percent={cat.percentage} strokeColor="#3b82f6" />
              </div>
            ))}
          </div>
        </Card>

        {/* Question Review */}
        <Card title="Question Review">
          <p className="text-sm text-gray-600 mb-4 lg:px-6">
            Click on any question to view the rationale
          </p>
          <div className="space-y-3 lg:px-6">
            {questions?.map((question, index) => {
              const userAnswer = answers[question.id];
              const isExpanded = expandedQuestions.has(question.id);
              return (
                <QuestionReviewItem
                  key={question.id}
                  question={question}
                  index={index}
                  userAnswer={userAnswer}
                  isExpanded={isExpanded}
                  onToggle={toggleQuestion}
                />
              );
            })}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center pb-6">
          <Button onClick={onReview} size="large">
            Review Questions
          </Button>
          <Button type="primary" size="large" onClick={onExit}>
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
