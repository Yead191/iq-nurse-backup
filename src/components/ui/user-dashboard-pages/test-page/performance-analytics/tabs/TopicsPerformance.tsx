"use client";

import TopicMastery from "../ui/TopicMastery";

const topicData = [
  { name: "Cardiovascular", percentage: 92, color: "bg-cyan-500" },
  { name: "Respiratory", percentage: 88, color: "bg-cyan-500" },
  { name: "Neurological", percentage: 76, color: "bg-blue-600" },
  { name: "Pharmacology", percentage: 65, color: "bg-blue-600" },
  { name: "Maternal Health", percentage: 82, color: "bg-cyan-500" },
  { name: "Pediatrics", percentage: 79, color: "bg-orange-500" },
  { name: "Medical-Surgical", percentage: 58, color: "bg-pink-500" },
];

export default function TopicsPerformance() {
  return (
    <div className="space-y-8">
      {/* Topic Mastery */}
      <TopicMastery topics={topicData} />
    </div>
  );
}
