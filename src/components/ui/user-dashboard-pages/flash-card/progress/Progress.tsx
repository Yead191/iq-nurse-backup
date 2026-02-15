"use client";

import { Progress } from "antd";
import {
  BookOpen,
  TrendingUp,
  Calendar,
  Lightbulb,
  AlertCircle,
  Target,
} from "lucide-react";
import { format } from "date-fns";
import { CategoryProgress } from "@/data/sampleFlashcards";

interface ProgressSectionProps {
  categoryProgress: CategoryProgress[];
}

export function ProgressSection({ categoryProgress }: ProgressSectionProps) {
  /* ----------------------------- Overall Stats ----------------------------- */
  const overall = categoryProgress.reduce(
    (acc, cat) => {
      acc.reviewed += cat.reviewedCards;
      acc.total += cat.totalCards;
      acc.correct += (cat.correctPercentage / 100) * cat.reviewedCards;
      return acc;
    },
    { reviewed: 0, total: 0, correct: 0 }
  );

  const overallCompletion =
    overall.total > 0
      ? Math.round((overall.reviewed / overall.total) * 100)
      : 0;

  const overallAccuracy =
    overall.reviewed > 0
      ? Math.round((overall.correct / overall.reviewed) * 100)
      : 0;

  /* ---------------------- Personalized Recommendations --------------------- */
  const recommendations = categoryProgress
    .filter((c) => c.reviewedCards > 0 && c.correctPercentage < 70)
    .sort((a, b) => a.correctPercentage - b.correctPercentage)
    .slice(0, 3)
    .map((c, index) => ({
      category: c.category,
      reason: `Accuracy is ${Math.round(
        c.correctPercentage
      )}%. Focus on reviewing this topic.`,
      priority: index === 0 ? "high" : "medium",
    }));

  return (
    <div className="lg:py-0 lg:pt-6 lg:px-4">
      <div className="mb-8">
        <h1 className="mb-2 lg:text-2xl text-xl font-medium">Your Progress</h1>
        <p className="text-gray-500 lg:text-[16px] text-sm">
          Track your flashcard study progress across all nursing subjects
        </p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard
          title="Cards Reviewed"
          value={`${overall.reviewed} / ${overall.total}`}
          subtitle={`${overallCompletion}% complete`}
          icon={<BookOpen />}
        />
        <StatCard
          title="Overall Accuracy"
          value={`${overallAccuracy}%`}
          subtitle="Correct on first attempt"
          icon={<TrendingUp />}
        />
        <StatCard
          title="Study Streak"
          value="7 days"
          subtitle="Keep it up!"
          icon={<Calendar />}
        />
      </div>

      {/* ---------------- Recommendations ---------------- */}
      {recommendations.length > 0 && (
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-[#2C5F8D]" />
            <h2 className="text-xl">Study Recommendations</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {recommendations.map((rec) => (
              <div
                key={rec.category}
                className={`border-2 cursor-pointer rounded-xl p-6 transition hover:shadow-md ${
                  rec.priority === "high"
                    ? "border-red-200 bg-red-50"
                    : "border-yellow-200 bg-yellow-50"
                }`}
              >
                <div className="flex gap-3 p-5">
                  {rec.priority === "high" ? (
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  ) : (
                    <Target className="h-5 w-5 text-yellow-600" />
                  )}
                  <div>
                    <h3 className="text-sm font-semibold">{rec.category}</h3>
                    <p className="text-sm text-gray-600">{rec.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------------- Category Progress (MAIN PART) ---------------- */}
      <div>
        <h2 className="mb-4  lg:text-2xl text-xl font-medium">Progress by Category</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {categoryProgress.map((cat) => {
            const completion =
              cat.totalCards > 0
                ? Math.round(
                    (cat.reviewedCards / cat.totalCards) * 100
                  )
                : 0;

            return (
              <div
                key={cat.category}
                className="cursor-pointer rounded-xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                {/* Header */}
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <h3 className="lg:text-[16px] text-[15px] text-gray-700 font-medium">
                      {cat.category}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {cat.reviewedCards} / {cat.totalCards} cards
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="text-lg font-semibold">
                      {Math.round(cat.correctPercentage)}%
                    </div>
                    <p className="text-xs text-gray-500">Accuracy</p>
                  </div>
                </div>

                {/* AntD Progress */}
                <Progress
                  percent={completion}
                  strokeColor="#2C5F8D"
                  showInfo={false}
                />

                {cat.lastStudied && (
                  <p className="mt-2 text-xs text-gray-400">
                    Last studied:{" "}
                    {format(
                      new Date(cat.lastStudied),
                      "MMM d, yyyy"
                    )}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  subtitle,
  icon,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="cursor-pointer rounded-xl border border-gray-200 bg-white p-6 transition hover:shadow-md">
      <div className="flex items-center justify-between ">
        <div>
          <p className="text-sm text-gray-500">{title}</p> 
          <p className="lg:text-2xl text-xl font-semibold py-1">{value}</p>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
        <div className="text-gray-400">{icon}</div>
      </div>
    </div>
  );
}
