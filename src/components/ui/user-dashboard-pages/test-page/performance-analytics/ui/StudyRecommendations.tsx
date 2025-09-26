export default function StudyRecommendations() {
  const weakAreas = [
    { topic: "Mental Health - Anxiety Disorders", priority: "high" },
    { topic: "Medical-Surgical - Endocrine Disorders", priority: "high" },
    { topic: "Pharmacology - Cardiovascular Medications", priority: "medium" },
  ];

  const studyPlan = [
    "Focus 60% of your study time on your identified weak areas",
    "Spend 30% reviewing moderate-strength topics",
    "Dedicate 10% to maintaining strong areas",
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-foreground">
        Study Recommendations
      </h2>
      <p className="text-sm text-muted-foreground">
        Based on your performance, We recommend focusing on these areas:
      </p>

      {/* Weak Areas */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">
          Weak Areas To Focus On
        </h3>
        <div className="space-y-2">
          {weakAreas.map((area, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-muted rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                    area.priority === "high" ? "bg-red-500" : "bg-blue-500"
                  }`}
                >
                  {index + 1}
                </div>
                <span className="text-sm text-foreground">{area.topic}</span>
              </div>
              <button className="px-3 py-1 bg-primary text-white text-xs rounded hover:bg-blue-700 transition-colors">
                Study Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Study Plan */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">
          Recommended Study Plan
        </h3>
        <p className="text-sm text-muted-foreground">
          To maximize your NCLEX preparation, We recommended:
        </p>
        <ul className="space-y-2">
          {studyPlan.map((item, index) => (
            <li
              key={index}
              className="flex items-start space-x-2 text-sm text-foreground"
            >
              <span className="text-green-500 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <button className="w-full mt-4 px-4 py-2 bg-primary text-white text-sm rounded hover:bg-blue-700 transition-colors">
          Generate Personalized Study Plan
        </button>
      </div>
    </div>
  );
}
