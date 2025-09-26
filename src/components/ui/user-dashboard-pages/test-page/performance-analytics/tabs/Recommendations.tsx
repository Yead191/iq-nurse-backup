"use client";

import NCLEXReadiness from "../ui/NCLEXReadiness";
import StudyRecommendations from "../ui/StudyRecommendations";

export default function Recommendations() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <StudyRecommendations />
      <NCLEXReadiness />
    </div>
  );
}
