interface NursingInterventionsSectionProps {
  interventions: string[]
}

export default function NursingInterventionsSection({ interventions }: NursingInterventionsSectionProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-700 mb-3">Nursing Interventions:</h3>
      <div className="space-y-2">
        {interventions.map((intervention, index) => (
          <div key={index} className="bg-[#e9e9f0] px-4 py-3 rounded">
            <p className="text-sm text-gray-800">{intervention}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
