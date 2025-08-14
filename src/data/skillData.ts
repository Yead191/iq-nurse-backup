export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
}

export interface SkillDocumentation {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  createdAt: string;
  readTime: number;
  isBookmarked: boolean;
  image: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "basicskills",
    name: "Basic Skills",
    icon: "❤️",
  },
  {
    id: "neurological",
    name: "Neurological",
    icon: "🧠",
  },
  {
    id: "cardiopulmonary",
    name: "Cardiopulmonary",
    icon: "🫁",
  },
  {
    id: "gastrointestinal",
    name: "Gastrointestinal",
    icon: "🫃",
  },
  {
    id: "genitourinary",
    name: "Genitourinary",
    icon: "⚡",
  },
  {
    id: "infectiousdiseases",
    name: "Infectious Diseases",
    icon: "🦠",
  },
  {
    id: "emergencycare",
    name: "Emergency Care",
    icon: "🚑",
  },
];

export const skillDocumentationData: SkillDocumentation[] = [
  {
    id: "1",
    categoryId: "basicskills",
    image: "/assets/lung.jpg",
    title: "Blood Pressure",
    description: "Guide to measuring and interpreting blood pressure readings.",
    createdAt: "2025-08-01",
    readTime: 5,
    isBookmarked: false,
  },
  {
    id: "2",
    categoryId: "basicskills",
    image: "/assets/lung.jpg",
    title: "Apical and Radial Pulse",
    description: "Techniques for assessing apical and radial pulse rates.",
    createdAt: "2025-08-02",
    readTime: 4,
    isBookmarked: false,
  },
  {
    id: "3",
    categoryId: "basicskills",
    image: "/assets/lung.jpg",
    title: "Respiration",
    description: "Methods for evaluating respiratory rate and patterns.",
    createdAt: "2025-08-03",
    readTime: 3,
    isBookmarked: false,
  },
  {
    id: "4",
    categoryId: "basicskills",
    image: "/assets/lung.jpg",
    title: "Temperature (Oral, Axillary, Rectal)",
    description: "Procedures for taking temperature via different methods.",
    createdAt: "2025-08-04",
    readTime: 4,
    isBookmarked: false,
  },
  {
    id: "5",
    categoryId: "basicskills",
    image: "/assets/lung.jpg",
    title: "Handwashing",
    description: "Proper handwashing techniques to prevent infection.",
    createdAt: "2025-08-05",
    readTime: 3,
    isBookmarked: false,
  },
  {
    id: "6",
    categoryId: "cardiopulmonary",
    image: "/assets/lung.jpg",
    title: "Isolation Procedure",
    description: "Protocols for patient isolation to prevent infection spread.",
    createdAt: "2025-08-06",
    readTime: 6,
    isBookmarked: false,
  },
  {
    id: "7",
    categoryId: "cardiopulmonary",
    image: "/assets/lung.jpg",
    title: "36.1 Lower Respiratory Structures",
    description: "Anatomy and function of the lower respiratory system.",
    createdAt: "2025-08-07",
    readTime: 7,
    isBookmarked: false,
  },
  {
    id: "8",
    categoryId: "cardiopulmonary",
    image: "/assets/lung.jpg",
    title: "36.1 Lower Respiratory Structures",
    description: "Detailed study of lower respiratory structures and diseases.",
    createdAt: "2025-08-08",
    readTime: 8,
    isBookmarked: false,
  },
  {
    id: "9",
    categoryId: "cardiopulmonary",
    image: "/assets/lung.jpg",
    title: "36.1 Lower Respiratory Structures",
    description: "Overview of lower respiratory tract anatomy and pathology.",
    createdAt: "2025-08-09",
    readTime: 6,
    isBookmarked: false,
  },
  {
    id: "10",
    categoryId: "cardiopulmonary",
    image: "/assets/lung.jpg",
    title: "36.1 Lower Respiratory Structures",
    description: "Management of lower respiratory conditions.",
    createdAt: "2025-08-10",
    readTime: 7,
    isBookmarked: false,
  },
  {
    id: "11",
    categoryId: "infectiousdiseases",
    image: "/assets/lung.jpg",
    title: "Antibiotic Therapy",
    description: "Guidelines for selecting and administering antibiotics.",
    createdAt: "2025-08-11",
    readTime: 5,
    isBookmarked: false,
  },
  {
    id: "12",
    categoryId: "infectiousdiseases",
    image: "/assets/lung.jpg",
    title: "COVID-19 Protocols",
    description: "Current protocols for managing and treating COVID-19 cases.",
    createdAt: "2025-08-12",
    readTime: 6,
    isBookmarked: false,
  },
  {
    id: "13",
    categoryId: "emergencycare",
    image: "/assets/lung.jpg",
    title: "CPR Techniques",
    description:
      "Step-by-step guide to performing cardiopulmonary resuscitation.",
    createdAt: "2025-08-13",
    readTime: 4,
    isBookmarked: false,
  },
  {
    id: "14",
    categoryId: "emergencycare",
    image: "/assets/lung.jpg",
    title: "Trauma Assessment",
    description:
      "Primary and secondary assessment techniques for trauma patients.",
    createdAt: "2025-08-13",
    readTime: 5,
    isBookmarked: false,
  },
];
