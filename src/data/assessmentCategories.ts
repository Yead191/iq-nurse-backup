export interface PatientAssessmentProps {
  categories?: typeof assessmentCategories;
  onCategorySelect?: (categoryId: string) => void;
  title?: string;
  className?: string;
}

export const assessmentCategories = [
  {
    id: "head-to-toe",
    label: "Head to Toe",
    icon: "/assets/patient-icons/head-to-toe-icon.svg",
  },
  {
    id: "head",
    label: "Head",
    icon: "/assets/patient-icons/head-icon.svg",
  },
  {
    id: "neck",
    label: "Neck",
    icon: "/assets/patient-icons/neck-icon.svg",
  },
  {
    id: "eyes",
    label: "Eyes",
    icon: "/assets/patient-icons/eyes-icon.svg",
  },
  {
    id: "nose-sinus",
    label: "Nose & Sinus",
    icon: "/assets/patient-icons/nose-icon.svg",
  },
  {
    id: "ears",
    label: "Ears",
    icon: "/assets/patient-icons/ears-icon.svg",
  },
  {
    id: "mouth-throat",
    label: "Mouth & Throat",
    icon: "/assets/patient-icons/mouth-icon.svg",
  },
  {
    id: "chest",
    label: "Chest",
    icon: "/assets/patient-icons/chest-icon.svg",
  },
  {
    id: "abdomen",
    label: "Abdomen",
    icon: "/assets/patient-icons/abdomen-icon.svg",
  },
  {
    id: "pulse-vascular",
    label: "Pulse & Vascular",
    icon: "/assets/patient-icons/pulse-icon.svg",
  },
  {
    id: "extremities",
    label: "Extremities & Musculoskeletal",
    icon: "/assets/patient-icons/extremities-icon.svg",
  },
  {
    id: "neurological",
    label: "Neurological",
    icon: "/assets/patient-icons/neurological-icon.svg",
  },
];
