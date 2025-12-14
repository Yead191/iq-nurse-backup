import type { MedicationData } from "@/data/carePlansCategories"

interface MedicationsSectionProps {
  medications: MedicationData[]
}

export default function MedicationsSection({ medications }: MedicationsSectionProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-700 mb-3">Medications:</h3>
      <div className="space-y-4">
        {medications.map((medication, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Medication Header */}
            <div className="bg-[#3b82f6] text-white px-4 py-3">
              <h4 className="font-semibold text-white">
                {medication.name} {medication.dosage}
              </h4>
            </div>

            {/* Medication Details */}
            <div className="bg-white px-4 py-3 space-y-2">
              <div className="flex gap-2">
                <span className="font-semibold text-sm text-gray-700">Route:</span>
                <span className="text-sm text-gray-800">{medication.route}</span>
                <span className="font-semibold text-sm text-gray-700 ml-4">Frequency:</span>
                <span className="text-sm text-gray-800">{medication.frequency}</span>
              </div>

              <div>
                <span className="font-semibold text-sm text-gray-700">Purpose:</span>
                <span className="text-sm text-gray-800 ml-2">{medication.purpose}</span>
              </div>

              <div>
                <span className="font-semibold text-sm text-gray-700">Nursing Considerations:</span>
                <span className="text-sm text-gray-800 ml-2">{medication.nursingConsiderations}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
