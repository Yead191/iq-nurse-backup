interface PatientGoalsSectionProps {
  goals: string[]
}

export default function PatientGoalsSection({ goals }: PatientGoalsSectionProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-700 mb-3">Patient Goals:</h3>
      <div className="space-y-2">
        {goals.map((goal, index) => (
          <div key={index} className="bg-[#dbeafe] border-l-4 border-[#3b82f6] px-4 py-3 rounded">
            <p className="text-sm text-gray-800">{goal}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
