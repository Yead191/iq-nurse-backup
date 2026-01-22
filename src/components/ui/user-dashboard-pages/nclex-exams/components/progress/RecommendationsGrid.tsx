// RecommendationsGrid.tsx
import { Card } from "antd";
import { AlertCircle, Target, CheckCircle2 } from "lucide-react";
import type { FC } from "react";

interface Props {
  recommendations: {
    focus: string[];
    maintain: string[];
    strengths: string[];
  };
}

const RecommendationsGrid: FC<Props> = ({ recommendations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <Card
        title={
          <div className="flex items-center gap-2">
            <AlertCircle className="text-orange-600" size={18} />
            <span className="text-orange-900">Focus Areas</span>
          </div>
        }
        className="border border-orange-200 bg-orange-50"
      >
        <ul className="space-y-2 text-sm text-orange-800">
          {recommendations.focus.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-orange-600 mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      </Card>

      <Card
        title={
          <div className="flex items-center gap-2">
            <Target className="text-blue-600" size={18} />
            <span className="text-blue-900">Maintain</span>
          </div>
        }
        className="border border-blue-200 bg-blue-50"
      >
        <ul className="space-y-2 text-sm text-blue-800">
          {recommendations.maintain.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      </Card>

      <Card
        title={
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-green-600" size={18} />
            <span className="text-green-900">Strengths</span>
          </div>
        }
        className="border border-green-200 bg-green-50"
      >
        <ul className="space-y-2 text-sm text-green-800">
          {recommendations.strengths.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default RecommendationsGrid;
