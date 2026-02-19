// StatsCards.tsx
import { Card, Statistic } from "antd";
import { Target, Award, TrendingUp, Flame } from "lucide-react";
import type { FC } from "react";

interface Props {
  passLikelihood: number;
  percentileRank: number;
  allCompleted: boolean;
  completedNCLEXExams: number;
}

const StatsCards: FC<Props> = ({
  passLikelihood,
  percentileRank,
  allCompleted,
}) => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
      {allCompleted && (
        <div className="boxShadow rounded-lg p-2 py-4 md:p-4 flex flex-col justify-center">
          <p className="text-xs md:text-sm md:font-medium text-nowrap">
            Pass Likelihood
          </p>
          <div className="flex items-center gap-2 mt-2">
            <Target className="inline mr-1 text-[#2563eb]" size={16} />
            <p className="text-2xl font-bold">{passLikelihood}</p>
            <p className="text-2xl font-bold">%</p>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Based on current performance
          </div>
        </div>
      )}

      <div className="boxShadow rounded-lg p-2 py-4 md:p-4 flex flex-col justify-center">
        <p className="text-xs md:text-sm md:font-medium text-nowrap">
          Total Questions
        </p>
        <div className="flex items-center gap-2 mt-2">
          <Award className="inline mr-1 text-green-400" size={16} />
          <p className="text-2xl font-bold">700</p>
        </div>
        <p className="text-[10px] md:text-xs text-gray-500 mt-1">
          485 correct (69%)
        </p>
      </div>

      <div className="boxShadow rounded-lg p-2 py-4 md:p-4 flex flex-col justify-center">
        <p className="text-xs md:text-sm md:font-medium text-nowrap">
          Percentile Rank
        </p>
        <div className="flex items-center gap-2 mt-2">
          <TrendingUp className="inline mr-1 text-[#9333ea]" size={16} />
          <p className="text-2xl font-bold">65</p>
        </div>
        <p className="text-[10px] md:text-xs text-gray-500 mt-1">
          Among all students
        </p>
      </div>

      <div className="boxShadow rounded-lg p-2 py-4 md:p-4 flex flex-col justify-center">
        <p className="text-xs md:text-sm md:font-medium text-nowrap">
          Study Streak
        </p>
        <div className="flex items-center gap-2 mt-2">
          <Flame className="inline mr-1 text-[#ea580c]" size={16} />
          <p className="text-2xl font-bold">12</p>
        </div>
        <p className="text-[10px] md:text-xs text-gray-500 mt-1 ">
          Keep it up!
        </p>
      </div>
    </div>
  );
};

export default StatsCards;
