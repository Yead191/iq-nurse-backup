// ProgressSection.tsx
"use client";

import type { FC } from "react";
import StatsCards from "./StatsCards";
import NclexPredictor from "./NclexPredictor";
import OverallPerformancePie from "./OverallPerformancePie";
import CategoryPerformanceList from "./CategoryPerformanceList";
import RecommendationsGrid from "./RecommendationsGrid";

// Mock data (same as before)
const passLikelihood = 78;
const percentileRank = 65;
const completedNCLEXExams = 2;
const allNCLEXExamsCompleted = false;

const categoryPerformance = [
  {
    category: "Fundamentals",
    score: 85,
    total: 180,
    color: "#10b981",
    peerAverage: 78,
  },
  {
    category: "Medical-Surgical",
    score: 72,
    total: 220,
    color: "#3b82f6",
    peerAverage: 75,
  },
  {
    category: "Pharmacology",
    score: 68,
    total: 150,
    color: "#f59e0b",
    peerAverage: 71,
  },
  {
    category: "Maternal & Newborn",
    score: 81,
    total: 140,
    color: "#ec4899",
    peerAverage: 76,
  },
  {
    category: "Pediatrics",
    score: 75,
    total: 100,
    color: "#8b5cf6",
    peerAverage: 73,
  },
  {
    category: "Mental Health",
    score: 79,
    total: 90,
    color: "#06b6d4",
    peerAverage: 74,
  },
  {
    category: "Community Health",
    score: 65,
    total: 60,
    color: "#f59e0b",
    peerAverage: 70,
  },
  {
    category: "Leadership",
    score: 70,
    total: 45,
    color: "#6366f1",
    peerAverage: 72,
  },
];

const performanceData = [
  { type: "Correct", value: 485, color: "#10b981" },
  { type: "Incorrect", value: 215, color: "#ef4444" },
];

const recommendations = {
  focus: [
    "Pharmacology - Dosage Calculations",
    "Medical-Surgical - Cardiovascular System",
  ],
  maintain: [
    "Maternal & Newborn - Postpartum Care",
    "Mental Health - Therapeutic Communication",
  ],
  strengths: [
    "Fundamentals - Basic Care & Comfort",
    "Pediatrics - Growth & Development",
  ],
};

const ProgressSection: FC = () => {
  return (
    <div className="space-y-8">
      {/* Stats cards */}
      <StatsCards
        passLikelihood={passLikelihood}
        percentileRank={percentileRank}
        completedNCLEXExams={completedNCLEXExams}
        allCompleted={allNCLEXExamsCompleted}
      />

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <NclexPredictor
          completed={allNCLEXExamsCompleted}
          passLikelihood={passLikelihood}
          completedCount={completedNCLEXExams}
        />

        <OverallPerformancePie data={performanceData} />
      </div>

      {/* Category performance */}
      <CategoryPerformanceList data={categoryPerformance} />

      {/* Recommendations  */}
      <RecommendationsGrid recommendations={recommendations} />
    </div>
  );
};

export default ProgressSection;
