export interface MedicalCategory {
  id: string;
  name: string;
  icon: string;
}

export interface Documentation {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  createdAt: string;
  readTime: number;
  isBookmarked: boolean;
}

// Medical categories aligned with sidebar
export const medicalCategories: MedicalCategory[] = [
  {
    id: "critical-care",
    name: "Critical Care",
    icon: "❤️‍🔥",
  },
  {
    id: "anatomy-physiology",
    name: "Anatomy & Physiology",
    icon: "🧠",
  },
  {
    id: "pharmacology",
    name: "Pharmacology",
    icon: "💊",
  },
  {
    id: "medication-calculation",
    name: "Medication Calculation",
    icon: "🧮",
  },
  {
    id: "pathophysiology",
    name: "Pathophysiology",
    icon: "💓",
  },
  {
    id: "mental-health",
    name: "Mental Health",
    icon: "🧘",
  },
  {
    id: "fundamentals",
    name: "Fundamentals",
    icon: "📖",
  },
  {
    id: "medical-surgical",
    name: "Medical Surgical",
    icon: "🩺",
  },
  {
    id: "ob-maternity",
    name: "OB-Maternity",
    icon: "👶",
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    icon: "🍼",
  },
];

export const documentationData: Documentation[] = [
  // Critical Care
  {
    id: "1",
    categoryId: "critical-care",
    title: "ICU Monitoring Protocols",
    description:
      "Guidelines for patient monitoring in intensive care units, including ventilator management and hemodynamic monitoring.",
    createdAt: "2024-01-15",
    readTime: 10,
    isBookmarked: false,
  },
  {
    id: "2",
    categoryId: "critical-care",
    title: "Sepsis Management",
    description:
      "Evidence-based approaches to early recognition and management of sepsis and septic shock.",
    createdAt: "2024-01-10",
    readTime: 12,
    isBookmarked: true,
  },
  {
    id: "3",
    categoryId: "critical-care",
    title: "Airway Management",
    description:
      "Step-by-step guide for emergency airway assessment, intubation, and tracheostomy care in ICU.",
    createdAt: "2024-01-09",
    readTime: 9,
    isBookmarked: false,
  },
  {
    id: "4",
    categoryId: "critical-care",
    title: "Hemodynamic Support",
    description:
      "Protocols for vasopressor use, fluid resuscitation, and monitoring cardiac output in critical patients.",
    createdAt: "2024-01-07",
    readTime: 11,
    isBookmarked: true,
  },
  {
    id: "5",
    categoryId: "critical-care",
    title: "ARDS Management",
    description:
      "Ventilation strategies and supportive care guidelines for patients with acute respiratory distress syndrome.",
    createdAt: "2024-01-05",
    readTime: 13,
    isBookmarked: false,
  },
  {
    id: "6",
    categoryId: "critical-care",
    title: "Shock Protocols",
    description:
      "Recognition and treatment of hypovolemic, cardiogenic, distributive, and obstructive shock in ICU settings.",
    createdAt: "2024-01-03",
    readTime: 8,
    isBookmarked: true,
  },
  {
    id: "7",
    categoryId: "critical-care",
    title: "Sedation and Pain Management",
    description:
      "ICU sedation protocols including pain control, delirium prevention, and daily sedation breaks.",
    createdAt: "2024-01-02",
    readTime: 7,
    isBookmarked: false,
  },
  {
    id: "8",
    categoryId: "critical-care",
    title: "Code Blue & Resuscitation",
    description:
      "Stepwise ACLS-based approach to managing cardiac arrest and rapid response in critical care units.",
    createdAt: "2024-01-01",
    readTime: 14,
    isBookmarked: true,
  },

  // Anatomy & Physiology
  {
    id: "3",
    categoryId: "anatomy-physiology",
    title: "Human Nervous System",
    description:
      "Comprehensive overview of the central and peripheral nervous system, including brain and spinal cord functions.",
    createdAt: "2024-01-08",
    readTime: 9,
    isBookmarked: false,
  },
  {
    id: "4",
    categoryId: "anatomy-physiology",
    title: "Musculoskeletal Anatomy",
    description:
      "Detailed study of human muscles, joints, and bones with clinical relevance.",
    createdAt: "2024-01-05",
    readTime: 7,
    isBookmarked: true,
  },

  // Pharmacology
  {
    id: "5",
    categoryId: "pharmacology",
    title: "Antibiotic Guidelines",
    description:
      "Updated recommendations for selecting and dosing antibiotics in clinical practice.",
    createdAt: "2024-01-12",
    readTime: 8,
    isBookmarked: false,
  },
  {
    id: "6",
    categoryId: "pharmacology",
    title: "Pain Management Drugs",
    description:
      "Pharmacological management of acute and chronic pain, including opioid and non-opioid options.",
    createdAt: "2024-01-09",
    readTime: 10,
    isBookmarked: true,
  },

  // Medication Calculation
  {
    id: "7",
    categoryId: "medication-calculation",
    title: "Dosage Calculations",
    description:
      "Step-by-step guide to calculating safe medication dosages for adult and pediatric patients.",
    createdAt: "2024-01-07",
    readTime: 6,
    isBookmarked: false,
  },
  {
    id: "8",
    categoryId: "medication-calculation",
    title: "IV Infusion Rates",
    description:
      "Protocols for calculating IV drip rates and infusion times in critical care.",
    createdAt: "2024-01-04",
    readTime: 8,
    isBookmarked: true,
  },

  // Pathophysiology
  {
    id: "9",
    categoryId: "pathophysiology",
    title: "Diabetes Pathophysiology",
    description:
      "Cellular and systemic mechanisms underlying type 1 and type 2 diabetes.",
    createdAt: "2024-01-06",
    readTime: 11,
    isBookmarked: false,
  },
  {
    id: "10",
    categoryId: "pathophysiology",
    title: "Cancer Development",
    description:
      "Pathophysiological processes in tumor formation, progression, and metastasis.",
    createdAt: "2024-01-03",
    readTime: 12,
    isBookmarked: true,
  },

  // Mental Health
  {
    id: "11",
    categoryId: "mental-health",
    title: "Depression Management",
    description:
      "Diagnosis and treatment strategies for major depressive disorder in various care settings.",
    createdAt: "2024-01-14",
    readTime: 9,
    isBookmarked: false,
  },
  {
    id: "12",
    categoryId: "mental-health",
    title: "Anxiety Disorders",
    description:
      "Overview of anxiety disorders with pharmacological and non-pharmacological interventions.",
    createdAt: "2024-01-11",
    readTime: 7,
    isBookmarked: true,
  },

  // Fundamentals
  {
    id: "13",
    categoryId: "fundamentals",
    title: "Basic Nursing Skills",
    description:
      "Essential nursing skills including vital signs, hygiene, and patient communication.",
    createdAt: "2024-01-13",
    readTime: 8,
    isBookmarked: false,
  },
  {
    id: "14",
    categoryId: "fundamentals",
    title: "Infection Control",
    description:
      "Protocols for maintaining aseptic techniques and preventing hospital-acquired infections.",
    createdAt: "2024-01-09",
    readTime: 6,
    isBookmarked: true,
  },

  // Medical Surgical
  {
    id: "15",
    categoryId: "medical-surgical",
    title: "Postoperative Care",
    description:
      "Guidelines for post-surgical monitoring, pain management, and complication prevention.",
    createdAt: "2024-01-16",
    readTime: 10,
    isBookmarked: false,
  },
  {
    id: "16",
    categoryId: "medical-surgical",
    title: "Preoperative Assessment",
    description:
      "Checklist and risk evaluation protocols for surgical patients before anesthesia.",
    createdAt: "2024-01-12",
    readTime: 9,
    isBookmarked: true,
  },

  // OB-Maternity
  {
    id: "17",
    categoryId: "ob-maternity",
    title: "Labor & Delivery",
    description:
      "Step-by-step guide to managing normal and complicated labor and delivery.",
    createdAt: "2024-01-14",
    readTime: 12,
    isBookmarked: false,
  },
  {
    id: "18",
    categoryId: "ob-maternity",
    title: "Postpartum Care",
    description:
      "Guidelines for maternal recovery, breastfeeding, and newborn care in the postpartum period.",
    createdAt: "2024-01-10",
    readTime: 8,
    isBookmarked: true,
  },

  // Pediatrics
  {
    id: "19",
    categoryId: "pediatrics",
    title: "Child Growth & Development",
    description:
      "Milestones and monitoring strategies for normal growth and development in children.",
    createdAt: "2024-01-15",
    readTime: 7,
    isBookmarked: false,
  },
  {
    id: "20",
    categoryId: "pediatrics",
    title: "Pediatric Emergency Care",
    description:
      "Emergency protocols for common pediatric emergencies including asthma, dehydration, and seizures.",
    createdAt: "2024-01-11",
    readTime: 10,
    isBookmarked: true,
  },
];
