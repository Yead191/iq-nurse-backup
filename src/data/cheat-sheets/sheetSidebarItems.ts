import {
  Heart,
  Wind,
  Brain,
  Utensils,
  Droplet,
  Bone,
  Baby,
  Shield,
  Zap,
  AlertTriangle,
  Activity,
  Thermometer,
  Smile,
  Frown,
  Stethoscope,
  Syringe,
  MessageCircle,
} from "lucide-react";
import { BiBandAid } from "react-icons/bi";

export interface NavigationItem {
  id: string;
  label: string;
  icon: any;
  count?: number;
  children?: NavigationItem[];
}

export const sheetSidebarItems: NavigationItem[] = [
  {
    id: "cardiovascular",
    label: "Cardiovascular System",
    icon: Heart,
    count: 25,
    children: [
      { id: "heart-anatomy", label: "Heart Anatomy & Physiology", icon: Heart },
      { id: "ecg-guide", label: "ECG Interpretation Guide", icon: Activity },
      { id: "cardiac-meds", label: "Cardiac Medications", icon: Syringe },
      { id: "heart-failure", label: "Heart Failure Management", icon: Heart },
      {
        id: "arrhythmias-overview",
        label: "Arrhythmias Overview",
        icon: Activity,
      },
    ],
  },
  {
    id: "respiratory",
    label: "Respiratory System",
    icon: Wind,
    count: 25,
    children: [
      { id: "lung-anatomy", label: "Lung Anatomy & Gas Exchange", icon: Wind },
      { id: "asthma-management", label: "Asthma Management", icon: Wind },
      { id: "copd-care", label: "COPD Care Plan", icon: Wind },
      {
        id: "oxygen-therapy",
        label: "Oxygen Therapy Guidelines",
        icon: Activity,
      },
      {
        id: "respiratory-assessment",
        label: "Respiratory Assessment",
        icon: Stethoscope,
      },
    ],
  },
  {
    id: "neurological",
    label: "Neurological System",
    icon: Brain,
    count: 25,
    children: [
      { id: "neuro-assessment", label: "Neurological Assessment", icon: Brain },
      {
        id: "stroke-care",
        label: "Stroke Recognition & Care",
        icon: AlertTriangle,
      },
      { id: "seizure-management", label: "Seizure Management", icon: Brain },
      { id: "head-injury", label: "Head Injury Protocol", icon: AlertTriangle },
      { id: "cranial-nerves", label: "Cranial Nerves Guide", icon: Brain },
    ],
  },
  {
    id: "gi",
    label: "GI System",
    icon: Utensils,
    count: 25,
    children: [
      { id: "gi-anatomy", label: "GI Anatomy Overview", icon: Utensils },
      {
        id: "bowel-obstruction",
        label: "Bowel Obstruction Signs",
        icon: Utensils,
      },
      {
        id: "liver-function",
        label: "Liver Function & Disease",
        icon: Droplet,
      },
      { id: "nutrition-feeding", label: "Nutrition & Feeding", icon: Utensils },
      {
        id: "gi-bleeding",
        label: "GI Bleeding Management",
        icon: AlertTriangle,
      },
    ],
  },
  {
    id: "renal",
    label: "Renal System",
    icon: Droplet,
    count: 25,
    children: [
      {
        id: "kidney-anatomy",
        label: "Kidney Function & Anatomy",
        icon: Droplet,
      },
      {
        id: "fluid-electrolyte",
        label: "Fluid & Electrolyte Balance",
        icon: Droplet,
      },
      {
        id: "acute-kidney-injury",
        label: "Acute Kidney Injury",
        icon: AlertTriangle,
      },
      { id: "dialysis-care", label: "Dialysis Care", icon: Droplet },
      { id: "uti-prevention", label: "UTI Prevention & Care", icon: Droplet },
    ],
  },
  {
    id: "endocrine",
    label: "Endocrine System",
    icon: Zap,
    count: 25,
    children: [
      {
        id: "diabetes-management",
        label: "Diabetes Management",
        icon: Activity,
      },
      {
        id: "insulin-administration",
        label: "Insulin Administration",
        icon: Syringe,
      },
      {
        id: "thyroid-disorders",
        label: "Thyroid Disorders",
        icon: Thermometer,
      },
      { id: "adrenal-function", label: "Adrenal Function", icon: Zap },
      {
        id: "hypoglycemia-protocol",
        label: "Hypoglycemia Protocol",
        icon: AlertTriangle,
      },
    ],
  },
  {
    id: "musculoskeletal",
    label: "Musculoskeletal System",
    icon: Bone,
    count: 25,
    children: [
      { id: "fracture-care", label: "Fracture Care", icon: Bone },
      { id: "mobility-assessment", label: "Mobility Assessment", icon: Bone },
      { id: "arthritis-management", label: "Arthritis Management", icon: Bone },
      { id: "cast-splint-care", label: "Cast & Splint Care", icon: BiBandAid },
      { id: "post-op-ortho", label: "Post-Op Orthopedic Care", icon: Bone },
    ],
  },
  {
    id: "integumentary",
    label: "Integumentary System",
    icon: BiBandAid,
    count: 25,
    children: [
      { id: "wound-assessment", label: "Wound Assessment", icon: BiBandAid },
      {
        id: "pressure-injury-prevention",
        label: "Pressure Injury Prevention",
        icon: BiBandAid,
      },
      { id: "burn-care", label: "Burn Care Protocol", icon: AlertTriangle },
      { id: "wound-dressing", label: "Wound Dressing Guide", icon: BiBandAid },
      { id: "skin-conditions", label: "Skin Conditions Overview", icon: Smile },
    ],
  },
  {
    id: "hematologic",
    label: "Hematologic/Oncologic",
    icon: Droplet,
    count: 25,
    children: [
      { id: "blood-components", label: "Blood Components", icon: Droplet },
      { id: "anemia-types", label: "Anemia Types & Treatment", icon: Droplet },
      {
        id: "transfusion-safety",
        label: "Blood Transfusion Safety",
        icon: Droplet,
      },
      {
        id: "chemo-side-effects",
        label: "Chemotherapy Side Effects",
        icon: Syringe,
      },
      {
        id: "bleeding-precautions",
        label: "Bleeding Precautions",
        icon: AlertTriangle,
      },
    ],
  },
  {
    id: "immune",
    label: "Immune System",
    icon: Shield,
    count: 25,
    children: [
      {
        id: "immunization-schedule",
        label: "Immunization Schedule",
        icon: Shield,
      },
      { id: "hiv-aids-care", label: "HIV/AIDS Care", icon: Shield },
      {
        id: "autoimmune-disorders",
        label: "Autoimmune Disorders",
        icon: Shield,
      },
      {
        id: "allergy-management",
        label: "Allergy Management",
        icon: AlertTriangle,
      },
      {
        id: "immunosuppression-care",
        label: "Immunosuppression Care",
        icon: Shield,
      },
    ],
  },
  {
    id: "infectious",
    label: "Infectious Disease",
    icon: Shield,
    count: 25,
    children: [
      {
        id: "infection-control",
        label: "Infection Control Basics",
        icon: Shield,
      },
      { id: "ppe-guidelines", label: "PPE Guidelines", icon: Shield },
      { id: "antibiotic-therapy", label: "Antibiotic Therapy", icon: Syringe },
      {
        id: "sepsis-recognition",
        label: "Sepsis Recognition",
        icon: AlertTriangle,
      },
      { id: "common-infections", label: "Common Infections", icon: Shield },
    ],
  },
  {
    id: "mental-health",
    label: "Mental Health/Psych",
    icon: Brain,
    count: 25,
    children: [
      { id: "mental-status-exam", label: "Mental Status Exam", icon: Brain },
      { id: "depression-anxiety", label: "Depression & Anxiety", icon: Frown },
      {
        id: "suicide-risk",
        label: "Suicide Risk Assessment",
        icon: AlertTriangle,
      },
      { id: "psych-meds", label: "Psychiatric Medications", icon: Syringe },
      {
        id: "de-escalation",
        label: "De-escalation Techniques",
        icon: MessageCircle,
      },
    ],
  },
  {
    id: "ob-maternity",
    label: "OB/Maternity",
    icon: Baby,
    count: 25,
    children: [
      { id: "prenatal-care", label: "Prenatal Care Guidelines", icon: Baby },
      { id: "labor-delivery", label: "Labor & Delivery Stages", icon: Baby },
      {
        id: "postpartum-assessment",
        label: "Postpartum Assessment",
        icon: Baby,
      },
      { id: "breastfeeding", label: "Breastfeeding Support", icon: Baby },
      {
        id: "pregnancy-complications",
        label: "Pregnancy Complications",
        icon: AlertTriangle,
      },
    ],
  },
  {
    id: "neonatal-pediatric",
    label: "Neonatal/Pediatric",
    icon: Baby,
    count: 25,
    children: [
      { id: "peds-vitals", label: "Pediatric Vital Signs", icon: Thermometer },
      { id: "growth-development", label: "Growth & Development", icon: Baby },
      { id: "peds-dosing", label: "Pediatric Dosing Guide", icon: Syringe },
      { id: "newborn-assessment", label: "Newborn Assessment", icon: Baby },
      {
        id: "peds-emergency",
        label: "Pediatric Emergency Care",
        icon: AlertTriangle,
      },
    ],
  },
  {
    id: "critical-care",
    label: "Critical Care/Emergency",
    icon: AlertTriangle,
    count: 25,
    children: [
      { id: "acls-algorithm", label: "ACLS Algorithm", icon: AlertTriangle },
      {
        id: "ventilator-management",
        label: "Ventilator Management",
        icon: Wind,
      },
      {
        id: "shock-recognition",
        label: "Shock Recognition",
        icon: AlertTriangle,
      },
      {
        id: "trauma-assessment",
        label: "Trauma Assessment",
        icon: AlertTriangle,
      },
      { id: "code-blue", label: "Code Blue Protocol", icon: AlertTriangle },
    ],
  },
];
