import { Card, Progress } from "antd";
import type { FC } from "react";

interface Category {
  category: string;
  score: number;
  total: number;
  color: string;
  peerAverage: number;
}

interface Props {
  data: Category[];
}

const CategoryPerformanceList: FC<Props> = ({ data }) => {
  return (
    <Card
      title="Performance by Category"
      extra={
        <p className="hidden lg:block text-sm text-gray-500">
          Your scores across different NCLEX categories
        </p>
      }
    >
      <div className="space-y-6">
        {data?.map((cat) => {
          const diff = cat.score - cat.peerAverage;
          const absDiff = Math.abs(diff);
          let tagColor = "default";
          let tagText = "At peer average";

          if (diff > 0) {
            tagColor = "success";
            tagText = `+${absDiff}% vs peers`;
          } else if (diff < 0) {
            tagColor = "warning";
            tagText = `-${absDiff}% vs peers`;
          }

          return (
            <div key={cat.category}>
              <div className="flex flex-col lg:flex-row justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="font-medium">{cat.category}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded ${tagColor === "success" ? "bg-green-100 text-green-700" : tagColor === "warning" ? "bg-orange-100 text-orange-700" : "bg-gray-100 text-gray-600"}`}
                  >
                    {tagText}
                  </span>
                </div>
                <span className="text-sm text-gray-600">
                  {cat.score}% ({cat.total} questions)
                </span>
              </div>

              <div className="relative">
                <Progress
                  percent={cat.score}
                  showInfo={false}
                  strokeColor="#e5e7eb"
                />
                <div
                  className="absolute top-2 left-0 h-2 rounded-full"
                  style={{ width: `${cat.score}%`, backgroundColor: cat.color }}
                />
                <div
                  className="absolute top-2 w-0.5 bg-gray-700 h-2"
                  style={{ left: `${cat.peerAverage}%` }}
                  title={`Peer average: ${cat.peerAverage}%`}
                >
                  <div className="absolute -top-0.5 -left-1 w-3 h-3 rounded-full bg-gray-700 border-2 border-white" />
                </div>
              </div>

              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>Your score: {cat.score}%</span>
                <span>Peer average: {cat.peerAverage}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default CategoryPerformanceList;
