import {
  Activity,
  Wind,
  Brain,
  Droplet,
  Heart,
  AlertTriangle,
} from "lucide-react";

export const popularCheatSheets = [
  {
    id: "ecg-guide",
    name: "ECG Interpretation Guide",
    categoryName: "Cardiovascular System",
    categoryIcon: Activity,
    description: "Step-by-step guide to reading and interpreting varying ECG rhythms.",
  },
  {
    id: "lung-anatomy",
    name: "Lung Anatomy & Gas Exchange",
    categoryName: "Respiratory System",
    categoryIcon: Wind,
    description: "Overview of lung structures and principles of gas exchange.",
  },
  {
    id: "neuro-assessment",
    name: "Neurological Assessment",
    categoryName: "Neurological System",
    categoryIcon: Brain,
    description: "Key facts for conducting a comprehensive and rapid neuro exam.",
  },
  {
    id: "fluid-electrolyte",
    name: "Fluid & Electrolyte Balance",
    categoryName: "Renal System",
    categoryIcon: Droplet,
    description: "Quick reference for normal values and signs of imbalance.",
  },
  {
    id: "acls-algorithm",
    name: "ACLS Algorithm",
    categoryName: "Critical Care/Emergency",
    categoryIcon: AlertTriangle,
    description: "High-yield summary of the Advanced Cardiovascular Life Support protocols.",
  },
];
