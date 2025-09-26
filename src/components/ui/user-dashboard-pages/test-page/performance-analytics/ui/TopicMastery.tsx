interface Topic {
  name: string
  percentage: number
  color: string
}

interface TopicMasteryProps {
  topics: Topic[]
}

export default function TopicMastery({ topics }: TopicMasteryProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-2">Topic Mastery</h2>
        <p className="text-muted-foreground">Your performance across different NCLEX topics</p>
      </div>

      <div className="space-y-4">
        {topics.map((topic, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{topic.name}</span>
                <span className="text-sm font-semibold text-foreground">{topic.percentage}%</span>
              </div>
              <div className="progress-bar h-2">
                <div className={`progress-fill h-full ${topic.color}`} style={{ width: `${topic.percentage}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
