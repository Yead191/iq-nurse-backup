import {
  Heart,
  Zap,
  Wind,
  Brain,
  Droplet,
  Baby,
  AlertTriangle,
} from "lucide-react";
import { BiBandAid } from "react-icons/bi";

// Popular topics - most commonly studied care plans
export const popularTopics = [
  {
    id: "htn",
    name: "Hypertension (HTN)",
    categoryName: "Cardiovascular System",
    categoryIcon: Heart,
    description: "Management of chronic high blood pressure",
  },
  {
    id: "t2dm",
    name: "Type 2 Diabetes Mellitus",
    categoryName: "Endocrine System",
    categoryIcon: Zap,
    description: "Care plans for Type 2 diabetes management",
  },
  {
    id: "copd",
    name: "Chronic Obstructive Pulmonary Disease (COPD)",
    categoryName: "Respiratory System",
    categoryIcon: Wind,
    description: "Management of COPD patients",
  },
  {
    id: "pneumonia",
    name: "Pneumonia",
    categoryName: "Respiratory System",
    categoryIcon: Wind,
    description: "Care plans for pneumonia patients",
  },
  {
    id: "stroke",
    name: "Stroke (Ischemic, Hemorrhagic)",
    categoryName: "Neurological System",
    categoryIcon: Brain,
    description: "Stroke care and rehabilitation",
  },
  {
    id: "hf",
    name: "Heart Failure (HF)",
    categoryName: "Cardiovascular System",
    categoryIcon: Heart,
    description: "Care plans for heart failure patients",
  },
  {
    id: "aki",
    name: "Acute Kidney Injury (AKI)",
    categoryName: "Renal/Genitourinary System",
    categoryIcon: Droplet,
    description: "AKI management and monitoring",
  },
  {
    id: "postpartum",
    name: "Normal Postpartum Care",
    categoryName: "OB/Maternity",
    categoryIcon: Baby,
    description: "Comprehensive postpartum nursing care",
  },
  {
    id: "pressure-injuries",
    name: "Pressure Injuries (Stage 1-4)",
    categoryName: "Integumentary System",
    categoryIcon: BiBandAid,
    description: "Comprehensive wound care and pressure injury management",
  },
  {
    id: "sepsis",
    name: "Sepsis/Septic Shock",
    categoryName: "Critical Care/Emergency",
    categoryIcon: AlertTriangle,
    description: "Sepsis protocols and management",
  },
];
