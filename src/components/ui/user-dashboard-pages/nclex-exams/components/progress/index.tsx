// ProgressSection.tsx
"use client";

import type { FC } from "react";
import StatsCards from "./StatsCards";
import NclexPredictor from "./NclexPredictor";
import OverallPerformancePie from "./OverallPerformancePie";
import CategoryPerformanceList from "./CategoryPerformanceList";
import RecommendationsGrid from "./RecommendationsGrid";
import {
  categoryPerformance,
  performanceData,
  recommendations,
} from "@/data/nclex-exam/progressData";

const passLikelihood = 78;
const percentileRank = 65;
const completedNCLEXExams = 2;
const allNCLEXExamsCompleted = false;

const ProgressSection: FC = () => {
  return (
    <div className="space-y-8 ">
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
