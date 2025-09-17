export interface MedicalCategory {
  id: string
  name: string
  color: string
  topicCount: number
  subcategories?: MedicalSubcategory[]
}

export interface MedicalSubcategory {
  id: string
  name: string
  topicCount: number
  documentId?: string
}

export interface Documentation {
  id: string
  categoryId: string
  subcategoryId?: string
  title: string
  description: string
  createdAt: string
  readTime: number
  isBookmarked: boolean
}

// Updated categories to match the Figma design exactly
export const nclexCategories: MedicalCategory[] = [
  {
    id: "medical-surgical",
    name: "Medical-Surgical",
    color: "bg-red-500",
    topicCount: 24,
    subcategories: [
      {
        id: "hypertension",
        name: "Hypertension",
        topicCount: 8,
        documentId: "1",
      },
      { id: "diabetes", name: "Diabetes", topicCount: 6, documentId: "2" },
      { id: "cardiac", name: "Cardiac", topicCount: 10, documentId: "3" },
    ],
  },
  {
    id: "pharmacology",
    name: "Pharmacology",
    color: "bg-blue-500",
    topicCount: 19,
    subcategories: [
      {
        id: "antibiotics",
        name: "Antibiotics",
        topicCount: 5,
        documentId: "4",
      },
      {
        id: "pain-management",
        name: "Pain Management",
        topicCount: 7,
        documentId: "5",
      },
      {
        id: "cardiac-meds",
        name: "Cardiac Medications",
        topicCount: 7,
        documentId: "6",
      },
    ],
  },
  {
    id: "ob-maternity",
    name: "OB/Maternity",
    color: "bg-pink-500",
    topicCount: 5,
    subcategories: [
      {
        id: "labor-delivery",
        name: "Labor & Delivery",
        topicCount: 3,
        documentId: "7",
      },
      {
        id: "postpartum",
        name: "Postpartum Care",
        topicCount: 2,
        documentId: "8",
      },
    ],
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    color: "bg-green-500",
    topicCount: 8,
    subcategories: [
      {
        id: "growth-development",
        name: "Growth & Development",
        topicCount: 4,
        documentId: "9",
      },
      {
        id: "pediatric-emergency",
        name: "Emergency Care",
        topicCount: 4,
        documentId: "10",
      },
    ],
  },
  {
    id: "fundamentals",
    name: "Fundamentals",
    color: "bg-yellow-600",
    topicCount: 7,
    subcategories: [
      {
        id: "basic-skills",
        name: "Basic Skills",
        topicCount: 4,
        documentId: "11",
      },
      {
        id: "infection-control",
        name: "Infection Control",
        topicCount: 3,
        documentId: "12",
      },
    ],
  },
  {
    id: "mental-health",
    name: "Mental Health",
    color: "bg-purple-500",
    topicCount: 15,
    subcategories: [
      { id: "depression", name: "Depression", topicCount: 6, documentId: "13" },
      {
        id: "anxiety",
        name: "Anxiety Disorders",
        topicCount: 5,
        documentId: "14",
      },
      {
        id: "psychosis",
        name: "Psychotic Disorders",
        topicCount: 4,
        documentId: "15",
      },
    ],
  },
];

// Sample documentation data - you can expand this as needed
export const documentationData: Documentation[] = [
  {
    id: "1",
    categoryId: "medical-surgical",
    subcategoryId: "hypertension",
    title: "Hypertension Management",
    description:
      "Comprehensive guide to managing hypertension in clinical settings",
    createdAt: "2024-01-15",
    readTime: 10,
    isBookmarked: false,
  },
  {
    id: "2",
    categoryId: "medical-surgical",
    subcategoryId: "diabetes",
    title: "Diabetes Care Protocols",
    description: "Evidence-based protocols for diabetes management",
    createdAt: "2024-01-12",
    readTime: 12,
    isBookmarked: true,
  },
  // Add more documentation as needed...
];
