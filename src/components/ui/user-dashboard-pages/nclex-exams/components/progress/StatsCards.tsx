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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {allCompleted && (
        <Card>
          <Statistic
            title="Pass Likelihood"
            value={passLikelihood}
            valueStyle={{ color: "#2563eb" }}
            prefix={<Target className="inline mr-1" size={16} />}
            suffix="%"
          />
          <div className="text-xs text-gray-500 mt-1">
            Based on current performance
          </div>
        </Card>
      )}

      <Card className="boxShadow">
        <Statistic
          title="Total Questions"
          value={700}
          valueStyle={{ color: "black", fontWeight: "bold" }}
          prefix={<Award className="inline mr-1 text-green-400" size={16} />}
        />
        <div className="text-xs text-gray-500 mt-1">485 correct (69%)</div>
      </Card>

      <Card className="boxShadow">
        <Statistic
          title="Percentile Rank"
          value={percentileRank}
          valueStyle={{ color: "black", fontWeight: "bold" }}
          prefix={
            <TrendingUp className="inline mr-1 text-[#9333ea]" size={16} />
          }
          suffix="th"
        />
        <div className="text-xs text-gray-500 mt-1">Among all students</div>
      </Card>

      <Card className="boxShadow">
        <Statistic
          title="Study Streak"
          value={12}
          valueStyle={{ color: "black", fontWeight: "bold" }}
          prefix={<Flame className="inline mr-1 text-[#ea580c]" size={16} />}
          suffix="days"
        />
        <div className="text-xs text-gray-500 mt-1">Keep it up!</div>
      </Card>
    </div>
  );
};

export default StatsCards;
