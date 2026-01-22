import { Card, Progress } from "antd";
import { Target } from "lucide-react";
import type { FC } from "react";

interface Props {
  completed: boolean;
  passLikelihood: number;
  completedCount: number;
}

const NclexPredictor: FC<Props> = ({
  completed,
  passLikelihood,
  completedCount,
}) => {
  let color = "#ef4444";
  let message = "Focus on weak areas to improve";

  if (passLikelihood >= 75) {
    color = "#10b981";
    message = "Excellent! You're on track to pass";
  } else if (passLikelihood >= 60) {
    color = "#f59e0b";
    message = "Good progress. Keep studying!";
  }

  if (!completed) {
    return (
      <Card
        title={<span className="text-blue-900">NCLEX Predictor</span>}
        variant="outlined"
        className="border-blue-200 bg-blue-50"
      >
        <div className="flex flex-col items-center py-8">
          <div className="w-32 h-32 rounded-full border-8 border-blue-200 flex items-center justify-center mb-4">
            <Target className="w-16 h-16 text-blue-400" />
          </div>
          <p className="text-center text-sm text-blue-800 mb-2 font-medium">
            Complete all 5 NCLEX Practice Exams
          </p>
          <p className="text-center text-xs text-blue-600 mb-4">
            {completedCount} of 5 exams completed
          </p>
          <Progress
            percent={(completedCount / 5) * 100}
            strokeColor="#3b82f6"
          />
        </div>
      </Card>
    );
  }

  return (
    <Card
      title="NCLEX Predictor"
      extra={
        <p className="text-sm text-gray-500">Likelihood to pass the exam</p>
      }
    >
      <div className="flex flex-col items-center">
        <Progress
          type="circle"
          percent={passLikelihood}
          strokeColor={color}
          size={180}
          format={(percent) => `${percent}%`}
        />
        <p className="mt-4 text-center text-sm font-medium">{message}</p>
      </div>
    </Card>
  );
};

export default NclexPredictor;
