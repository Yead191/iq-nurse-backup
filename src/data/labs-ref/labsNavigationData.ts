import {
  Beaker,
  Droplet,
  TestTube,
  FileCheck,
  Heart,
  Activity,
  HeartPulse,
  Clock,
  Shield,
  CircleDot,
  FlaskConical,
  Zap,
  Atom,
  Bone,
  Filter,
  Dna,
  Wind,
  Bug,
  Pill,
  AlertTriangle,
  Microscope,
} from "lucide-react";
import { TestTubes, FileQuestion } from "lucide-react";
export interface NavigationItem {
  id: string;
  label: string;
  icon?: any;
  count?: number;
  children?: NavigationItem[];
}

export const labsNavigationData: NavigationItem[] = [
  {
    id: "foundations",
    label: "Foundations of Laboratory Testing",
    icon: Beaker,
    count: 3,
    children: [
      {
        id: "specimen-collection",
        label: "Specimen Collection",
        icon: TestTube,
      },
      {
        id: "blood-tubes",
        label: "Blood Tubes & Order of Draw",
        icon: TestTubes,
      },
      {
        id: "pre-analytical",
        label: "Pre-Analytical Considerations",
        icon: FileCheck,
      },
    ],
  },
  {
    id: "cardiac-biomarkers",
    label: "Cardiac Biomarkers",
    icon: Heart,
    count: 3,
    children: [
      { id: "troponin", label: "Troponin", icon: HeartPulse },
      { id: "ck-mb", label: "Creatine Kinase (CK-MB)", icon: Activity },
      { id: "bnp", label: "B-type Natriuretic Peptide (BNP)", icon: Heart },
    ],
  },
  {
    id: "coagulation",
    label: "Coagulation Studies",
    icon: FileQuestion,
    count: 3,
    children: [
      { id: "pt-inr", label: "Prothrombin Time (PT) & INR", icon: Clock },
      { id: "ptt", label: "Partial Thromboplastin Time (PTT)", icon: Clock },
      { id: "d-dimer", label: "D-Dimer & Other Tests", icon: Droplet },
    ],
  },
  {
    id: "cbc",
    label: "Complete Blood Count (CBC)",
    icon: Droplet,
    count: 4,
    children: [
      { id: "rbc-indices", label: "Hemoglobin & Hematocrit", icon: CircleDot },
      { id: "rbc-detailed", label: "Red Blood Cells (RBC)", icon: CircleDot },
      {
        id: "wbc",
        label: "White Blood Cells (WBC) & Differential",
        icon: Shield,
      },
      { id: "platelets", label: "Platelets", icon: CircleDot },
    ],
  },
  {
    id: "cmp",
    label: "Complete Metabolic Panel (CMP)",
    icon: FlaskConical,
    count: 9,
    children: [
      { id: "glucose", label: "Glucose", icon: Zap },
      { id: "sodium", label: "Sodium", icon: Atom },
      { id: "potassium", label: "Potassium", icon: Zap },
      { id: "chloride", label: "Chloride", icon: Atom },
      { id: "calcium", label: "Calcium", icon: Bone },
      { id: "bun-creatinine", label: "BUN & Creatinine", icon: Filter },
      { id: "egfr", label: "eGFR", icon: Filter },
      { id: "lft", label: "Liver Function Tests (LFT)", icon: Activity },
      { id: "total-protein", label: "Total Protein & Albumin", icon: Dna },
    ],
  },
  {
    id: "renal-function",
    label: "Renal Function Tests",
    icon: Filter,
    count: 3,
    children: [
      { id: "bun", label: "Blood Urea Nitrogen (BUN)", icon: Filter },
      { id: "creatinine", label: "Creatinine", icon: Filter },
      {
        id: "egfr-renal",
        label: "eGFR & Kidney Disease Staging",
        icon: Filter,
      },
    ],
  },
  {
    id: "abg",
    label: "Arterial Blood Gas (ABG)",
    icon: Wind,
    count: 5,
    children: [
      { id: "abg-overview", label: "ABG Overview", icon: Wind },
      { id: "resp-acidosis", label: "Respiratory Acidosis", icon: Wind },
      { id: "resp-alkalosis", label: "Respiratory Alkalosis", icon: Wind },
      { id: "metab-acidosis", label: "Metabolic Acidosis", icon: Zap },
      { id: "metab-alkalosis", label: "Metabolic Alkalosis", icon: Zap },
    ],
  },
  {
    id: "other-tests",
    label: "Other Diagnostic Tests",
    icon: Microscope,
    count: 5,
    children: [
      { id: "blood-cultures", label: "Blood Cultures", icon: Bug },
      { id: "ecg", label: "Electrocardiogram (ECG)", icon: Activity },
      { id: "lipid-panel", label: "Lipid Panel", icon: Droplet },
      { id: "endocrine", label: "Endocrine Tests", icon: Pill },
      { id: "therapeutic-drugs", label: "Therapeutic Drug Levels", icon: Pill },
    ],
  },
  {
    id: "critical-values",
    label: "Critical Values & Nursing Actions",
    icon: AlertTriangle,
  },
];
