import type { CarePlanContent as CarePlanContentType } from "@/data/carePlansCategories"
import NursingInterventionsSection from "./components/sections/NursingInterventionsSection"
import MedicationsSection from "./components/sections/MedicationsSection"
import PatientGoalsSection from "./components/sections/PatientGoalsSection"


interface CarePlanContentProps {
  content: CarePlanContentType
}

export default function CarePlanContent({ content }: CarePlanContentProps) {
  return (
    <div className="space-y-6">
      {/* Diagnosis Header */}
      <div className="bg-[#1e3a5f] text-white px-6 py-4 rounded-lg">
        <h2 className="text-lg font-semibold">{content.diagnosisTitle}</h2>
      </div>

      {/* Related To */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Related To:</h3>
        <p className="text-sm text-gray-600">{content.relatedTo}</p>
      </div>

      {/* As Evidenced By */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">As Evidenced By:</h3>
        <p className="text-sm text-gray-600">{content.evidencedBy}</p>
      </div>

      {/* Patient Goals */}
      <PatientGoalsSection goals={content.patientGoals} />

      {/* Nursing Interventions */}
      <NursingInterventionsSection interventions={content.nursingInterventions} />

      {/* Medications */}
      {content.medications.length > 0 && <MedicationsSection medications={content.medications} />}
    </div>
  )
}
