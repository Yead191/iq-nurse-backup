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

export const medicalCategories: MedicalCategory[] = [
  {
    id: "cardiovascular",
    name: "Cardiovascular System",
    icon: "❤️",
  },
  {
    id: "respiratory",
    name: "Respiratory System",
    icon: "🫁",
  },
  {
    id: "neurology",
    name: "Neurology",
    icon: "🧠",
  },
  {
    id: "orthopedic",
    name: "Orthopedic",
    icon: "🦴",
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    icon: "🫃",
  },
  {
    id: "endocrine",
    name: "Endocrine System",
    icon: "⚡",
  },
  {
    id: "dermatology",
    name: "Dermatology",
    icon: "🧴",
  },
];

export const documentationData: Documentation[] = [
  // Cardiovascular System
  {
    id: "1",
    categoryId: "cardiovascular",
    title: "Cardiac Catheterization Procedures",
    description:
      "Comprehensive guide to cardiac catheterization techniques, including preparation, procedure steps, and post-operative care protocols.",
    createdAt: "2024-01-15",
    readTime: 8,
    isBookmarked: false,
  },
  {
    id: "2",
    categoryId: "cardiovascular",
    title: "Heart Failure Management",
    description:
      "Evidence-based approaches to managing acute and chronic heart failure, including medication protocols and lifestyle interventions.",
    createdAt: "2024-01-10",
    readTime: 12,
    isBookmarked: true,
  },
  {
    id: "3",
    categoryId: "cardiovascular",
    title: "Arrhythmia Recognition",
    description:
      "Essential guide to identifying and treating common cardiac arrhythmias in surgical and medical settings.",
    createdAt: "2024-01-08",
    readTime: 6,
    isBookmarked: false,
  },
  {
    id: "4",
    categoryId: "cardiovascular",
    title: "Hypertension Protocols",
    description:
      "Updated guidelines for managing hypertensive emergencies and routine blood pressure control in hospitalized patients.",
    createdAt: "2024-01-05",
    readTime: 7,
    isBookmarked: false,
  },
  {
    id: "5",
    categoryId: "cardiovascular",
    title: "Coronary Artery Disease",
    description:
      "Diagnostic and treatment strategies for coronary artery disease, including surgical and non-surgical interventions.",
    createdAt: "2024-01-03",
    readTime: 10,
    isBookmarked: true,
  },
  {
    id: "6",
    categoryId: "cardiovascular",
    title: "Valve Replacement Surgery",
    description:
      "Pre-operative, intra-operative, and post-operative care for patients undergoing cardiac valve replacement procedures.",
    createdAt: "2024-01-01",
    readTime: 15,
    isBookmarked: false,
  },
  {
    id: "7",
    categoryId: "cardiovascular",
    title: "Pacemaker Implantation",
    description:
      "Complete guide to pacemaker implantation procedures, device selection, and long-term patient management.",
    createdAt: "2023-12-28",
    readTime: 9,
    isBookmarked: false,
  },
  {
    id: "8",
    categoryId: "cardiovascular",
    title: "Cardiac Emergency Protocols",
    description:
      "Rapid response protocols for cardiac emergencies including MI, cardiac arrest, and cardiogenic shock.",
    createdAt: "2023-12-25",
    readTime: 11,
    isBookmarked: true,
  },

  // Respiratory System
  {
    id: "9",
    categoryId: "respiratory",
    title: "Airway and Lungs Management",
    description:
      "The airways are a network of tubes that carry air in and out of the lungs, including the nose, mouth, trachea, and bronchi.",
    createdAt: "2024-01-14",
    readTime: 7,
    isBookmarked: false,
  },
  {
    id: "10",
    categoryId: "respiratory",
    title: "Mechanical Ventilation",
    description:
      "Comprehensive protocols for initiating, managing, and weaning patients from mechanical ventilation support.",
    createdAt: "2024-01-12",
    readTime: 13,
    isBookmarked: true,
  },
  {
    id: "11",
    categoryId: "respiratory",
    title: "Pneumonia Treatment",
    description:
      "Evidence-based treatment protocols for community-acquired and hospital-acquired pneumonia in surgical patients.",
    createdAt: "2024-01-09",
    readTime: 8,
    isBookmarked: false,
  },
  {
    id: "12",
    categoryId: "respiratory",
    title: "Chest Tube Management",
    description:
      "Insertion, maintenance, and removal protocols for chest tubes in various clinical scenarios.",
    createdAt: "2024-01-07",
    readTime: 6,
    isBookmarked: false,
  },
  {
    id: "13",
    categoryId: "respiratory",
    title: "COPD Exacerbation",
    description:
      "Management strategies for acute COPD exacerbations in hospitalized patients, including medication and oxygen therapy.",
    createdAt: "2024-01-04",
    readTime: 9,
    isBookmarked: true,
  },
  {
    id: "14",
    categoryId: "respiratory",
    title: "Pulmonary Embolism",
    description:
      "Diagnostic workup and treatment protocols for suspected and confirmed pulmonary embolism cases.",
    createdAt: "2024-01-02",
    readTime: 10,
    isBookmarked: false,
  },

  // Neurology
  {
    id: "15",
    categoryId: "neurology",
    title: "Stroke Management",
    description:
      "Rapid assessment and treatment protocols for acute stroke, including thrombolytic therapy and surgical interventions.",
    createdAt: "2024-01-13",
    readTime: 12,
    isBookmarked: true,
  },
  {
    id: "16",
    categoryId: "neurology",
    title: "Seizure Protocols",
    description:
      "Management of seizures and status epilepticus in hospitalized patients, including medication protocols.",
    createdAt: "2024-01-11",
    readTime: 8,
    isBookmarked: false,
  },
  {
    id: "17",
    categoryId: "neurology",
    title: "Traumatic Brain Injury",
    description:
      "Comprehensive care protocols for patients with traumatic brain injury, from initial assessment to rehabilitation.",
    createdAt: "2024-01-06",
    readTime: 14,
    isBookmarked: true,
  },
  {
    id: "18",
    categoryId: "neurology",
    title: "Spinal Cord Injuries",
    description:
      "Assessment and management of acute spinal cord injuries, including surgical and non-surgical approaches.",
    createdAt: "2023-12-30",
    readTime: 11,
    isBookmarked: false,
  },

  // Orthopedic
  {
    id: "19",
    categoryId: "orthopedic",
    title: "Hip Fracture Surgery",
    description:
      "Surgical techniques and post-operative care for hip fracture patients, including rehabilitation protocols.",
    createdAt: "2024-01-16",
    readTime: 10,
    isBookmarked: false,
  },
  {
    id: "20",
    categoryId: "orthopedic",
    title: "Joint Replacement",
    description:
      "Pre-operative planning and post-operative care for knee and hip joint replacement surgeries.",
    createdAt: "2024-01-08",
    readTime: 13,
    isBookmarked: true,
  },

  // Gastroenterology
  {
    id: "21",
    categoryId: "gastroenterology",
    title: "Bowel Obstruction",
    description:
      "Diagnostic approach and treatment options for small and large bowel obstructions in surgical patients.",
    createdAt: "2024-01-15",
    readTime: 9,
    isBookmarked: false,
  },
  {
    id: "22",
    categoryId: "gastroenterology",
    title: "Appendectomy Procedures",
    description:
      "Laparoscopic and open appendectomy techniques, including management of complicated appendicitis.",
    createdAt: "2024-01-12",
    readTime: 7,
    isBookmarked: true,
  },

  // Endocrine System
  {
    id: "23",
    categoryId: "endocrine",
    title: "Diabetes Management",
    description:
      "Perioperative glucose control protocols for diabetic patients undergoing surgical procedures.",
    createdAt: "2024-01-14",
    readTime: 8,
    isBookmarked: false,
  },
  {
    id: "24",
    categoryId: "endocrine",
    title: "Thyroid Surgery",
    description:
      "Surgical techniques for thyroidectomy and management of post-operative complications.",
    createdAt: "2024-01-10",
    readTime: 11,
    isBookmarked: true,
  },

  // Dermatology
  {
    id: "25",
    categoryId: "dermatology",
    title: "Wound Care Management",
    description:
      "Evidence-based wound care protocols for surgical and non-surgical wounds, including dressing selection.",
    createdAt: "2024-01-13",
    readTime: 6,
    isBookmarked: false,
  },
  {
    id: "26",
    categoryId: "dermatology",
    title: "Skin Grafting Techniques",
    description:
      "Surgical techniques for skin grafting procedures, including donor site selection and post-operative care.",
    createdAt: "2024-01-09",
    readTime: 12,
    isBookmarked: true,
  },
];
