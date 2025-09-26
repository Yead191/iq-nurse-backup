export default function NCLEXReadiness() {
  const readinessData = [
    { category: "Content Knowledge", percentage: 88, color: "bg-blue-500" },
    { category: "Critical Thinking", percentage: 92, color: "bg-blue-500" },
    { category: "Test Strategy", percentage: 75, color: "bg-orange-500" },
    { category: "Time Management", percentage: 85, color: "bg-blue-500" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-foreground">NCLEX Readiness</h2>
      <p className="text-sm text-muted-foreground">
        Your current readiness for the NCLEX exam
      </p>

      {/* Percentile Ranking */}
      <div className="bg-muted rounded-lg p-4">
        <div className="text-center space-y-2">
          <div className="text-3xl font-bold text-primary">
            48th Percentile
          </div>
          <div className="text-sm text-primary font-medium">
            High Likelihood of Passing
          </div>
        </div>
      </div>

      {/* Readiness Breakdown */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">
          Readiness Breakdown
        </h3>
        <div className="space-y-3">
          {readinessData.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">
                  {item.category}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {item.percentage}%
                </span>
              </div>
              <div className="progress-bar h-2">
                <div
                  className={`progress-fill h-full ${item.color}`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
