import { Progress, Badge } from "antd";
import { ChevronRight } from "lucide-react";
import { Category, Subtopic } from "@/data/types";

interface Props {
  category: Category;
  subtopic: Subtopic;
  onSelect: (category: Category, subtopic: Subtopic) => void;
}

export function SubtopicCard({ category, subtopic, onSelect }: Props) {
  const percent = Math.round(
    (subtopic.completed / subtopic.questionCount) * 100,
  );

  return (
    <div
      onClick={() => onSelect(category, subtopic)}
      className="border rounded-lg p-4 hover:bg-blue-50 cursor-pointer transition"
    >
      <div className="flex justify-between mb-2">
        <h4 className="text-sm font-medium">{subtopic.name}</h4>
        <ChevronRight className="w-4 h-4 text-gray-400" />
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
        <span>{subtopic.questionCount} questions</span>
        <Badge count={`${percent}%`} style={{ backgroundColor: "#1677ff" }} />
      </div>

      <Progress percent={percent} size="small" showInfo={false} />
    </div>
  );
}
