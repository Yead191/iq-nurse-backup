import {
  Hand,
  Heart,
  UserCheck,
  Bed,
  ArrowRightLeft,
  Footprints,
  Move,
  Bath,
  LayoutDashboard,
  Pill,
  Syringe,
  Droplet,
  Wind,
  UtensilsCrossed,
  Droplet as UrineDroplet,
  HeartPulse,
  Bone,
  Brain,
  Baby,
  Users,
  UsersRound,
  AlertTriangle,
  FileText,
  Cross,
} from "lucide-react";
import { BiBandAid } from "react-icons/bi";
import { FaBandAid, FaTooth } from "react-icons/fa";

export interface NavigationItem {
  id: string;
  label: string;
  icon?: any;
  count?: number;
  children?: NavigationItem[];
}

export const practicalSidebarItems: NavigationItem[] = [
  {
    id: "fundamentals",
    label: "Fundamentals / Basic Skills",
    icon: Hand,
    count: 15,
    children: [
      {
        id: "hand-hygiene",
        label: "Hand Hygiene (Medical & Surgical)",
        icon: Hand,
      },
      {
        id: "vital-signs",
        label: "Vital Signs & Pain Assessment",
        icon: HeartPulse,
      },
      {
        id: "head-to-toe",
        label: "Head-to-Toe Physical Assessment",
        icon: UserCheck,
      },
      {
        id: "bed-making",
        label: "Bed Making (Occupied & Unoccupied)",
        icon: Bed,
      },
      {
        id: "transfers",
        label: "Body Mechanics & Transfers",
        icon: ArrowRightLeft,
      },
      {
        id: "ambulation",
        label: "Ambulation with Assistive Devices",
        icon: Footprints,
      },
      { id: "rom", label: "Range of Motion (ROM) Exercises", icon: Move },
      { id: "hygiene", label: "Bed Bath & Perineal Care", icon: Bath },
      {
        id: "oral-care",
        label: "Oral Care (Conscious & Unconscious)",
        icon: FaTooth,
      },
      {
        id: "positioning",
        label: "Positioning (Fowler's, Sims, etc.)",
        icon: LayoutDashboard,
      },
      {
        id: "intake-output",
        label: "Intake & Output (I&O) Measurement",
        icon: Droplet,
      },
      { id: "restraints", label: "Applying Restraints", icon: AlertTriangle },
      {
        id: "fall-prevention",
        label: "Fall Prevention Interventions",
        icon: AlertTriangle,
      },
      { id: "ppe", label: "Donning & Doffing PPE", icon: Hand },
    ],
  },
  {
    id: "medication-administration",
    label: "Medication Administration",
    icon: Pill,
    count: 12,
    children: [
      {
        id: "oral-meds",
        label: "Oral Medications (PO, SL, Buccal)",
        icon: Pill,
      },
      {
        id: "im-injection",
        label: "Intramuscular (IM) Injection",
        icon: Syringe,
      },
      {
        id: "subq-injection",
        label: "Subcutaneous (SubQ) Injection",
        icon: Syringe,
      },
      {
        id: "id-injection",
        label: "Intradermal (ID) Injection",
        icon: Syringe,
      },
      { id: "insulin-admin", label: "Insulin Administration", icon: Pill },
      { id: "iv-push", label: "IV Push Medications", icon: Droplet },
      {
        id: "ivpb",
        label: "IV Piggyback (IVPB) Administration",
        icon: Droplet,
      },
      {
        id: "topical-meds",
        label: "Topical, Ophthalmic, Otic, Nasal",
        icon: BiBandAid,
      },
      {
        id: "suppositories",
        label: "Rectal & Vaginal Suppositories",
        icon: Pill,
      },
      {
        id: "med-rec",
        label: "Medication Reconciliation & Rights",
        icon: FileText,
      },
    ],
  },
  {
    id: "intravenous-therapy",
    label: "Intravenous Therapy",
    icon: Droplet,
    count: 8,
    children: [
      {
        id: "iv-insertion",
        label: "IV Insertion (Peripheral Venipuncture)",
        icon: Droplet,
      },
      {
        id: "iv-fluids",
        label: "IV Fluid Administration & Calculation",
        icon: Droplet,
      },
      {
        id: "iv-site-care",
        label: "IV Site Assessment & Dressing Change",
        icon: BiBandAid,
      },
      {
        id: "lock-flush",
        label: "Saline/Heparin Lock Flushing",
        icon: Droplet,
      },
      {
        id: "blood-transfusion",
        label: "Blood Transfusion Administration",
        icon: Droplet,
      },
      {
        id: "central-line",
        label: "Central Line Dressing Change",
        icon: Droplet,
      },
      { id: "picc-care", label: "PICC Line Care", icon: Droplet },
    ],
  },
  {
    id: "respiratory",
    label: "Respiratory Care",
    icon: Wind,
    count: 10,
    children: [
      { id: "oxygen-admin", label: "Oxygen Administration", icon: Wind },
      { id: "pulse-ox", label: "Pulse Oximetry Monitoring", icon: HeartPulse },
      {
        id: "incentive-spirometry",
        label: "Incentive Spirometry Teaching",
        icon: Wind,
      },
      {
        id: "suctioning",
        label: "Oropharyngeal & Nasopharyngeal Suctioning",
        icon: Wind,
      },
      { id: "trach-care", label: "Tracheostomy Care & Suctioning", icon: Wind },
      { id: "chest-physio", label: "Chest Physiotherapy (CPT)", icon: Wind },
      { id: "peak-flow", label: "Peak Flow Meter Use", icon: Wind },
      {
        id: "nebulizer",
        label: "Nebulizer Treatment Administration",
        icon: Wind,
      },
      {
        id: "ett-suction",
        label: "Endotracheal Tube (ETT) Suctioning",
        icon: Wind,
      },
    ],
  },
  {
    id: "gastrointestinal",
    label: "Gastrointestinal / Nutrition",
    icon: UtensilsCrossed,
    count: 7,
    children: [
      {
        id: "ng-insertion",
        label: "NG Tube Insertion & Removal",
        icon: UtensilsCrossed,
      },
      {
        id: "ng-feeding",
        label: "NG Tube Feeding Administration",
        icon: UtensilsCrossed,
      },
      {
        id: "peg-feeding",
        label: "Gastrostomy/PEG Tube Feeding",
        icon: UtensilsCrossed,
      },
      { id: "ng-meds", label: "NG Tube Medication Administration", icon: Pill },
      {
        id: "gastric-residual",
        label: "Checking Gastric Residual",
        icon: UtensilsCrossed,
      },
      {
        id: "abdominal-assessment",
        label: "Abdominal Assessment",
        icon: UserCheck,
      },
    ],
  },
  {
    id: "urinary",
    label: "Urinary / Elimination",
    icon: UrineDroplet,
    count: 9,
    children: [
      {
        id: "foley",
        label: "Indwelling (Foley) Catheter Insertion",
        icon: UrineDroplet,
      },
      {
        id: "straight-cath",
        label: "Straight Catheterization",
        icon: UrineDroplet,
      },
      { id: "cath-care", label: "Catheter Care & Removal", icon: UrineDroplet },
      {
        id: "bladder-irrigation",
        label: "Bladder Irrigation",
        icon: UrineDroplet,
      },
      {
        id: "urine-specimen",
        label: "Urine Specimen Collection",
        icon: UrineDroplet,
      },
      {
        id: "stool-specimen",
        label: "Stool Specimen Collection",
        icon: UtensilsCrossed,
      },
      { id: "enema", label: "Enema Administration", icon: UtensilsCrossed },
      {
        id: "ostomy-care",
        label: "Ostomy Care & Appliance Change",
        icon: FaBandAid,
      },
      {
        id: "fobt",
        label: "Fecal Occult Blood Testing (Guaiac)",
        icon: FileText,
      },
    ],
  },
  {
    id: "wound-care",
    label: "Wound Care",
    icon: FaBandAid,
    count: 10,
    children: [
      {
        id: "sterile-field",
        label: "Sterile Technique / Field Setup",
        icon: FaBandAid,
      },
      { id: "sterile-gloving", label: "Sterile Gloving", icon: Hand },
      {
        id: "wound-assess",
        label: "Wound Assessment & Documentation",
        icon: FileText,
      },
      {
        id: "wet-to-dry",
        label: "Wet-to-Dry Dressing Change",
        icon: FaBandAid,
      },
      { id: "wound-irrigation", label: "Wound Irrigation", icon: Droplet },
      {
        id: "staple-removal",
        label: "Staple & Suture Removal",
        icon: FaBandAid,
      },
      { id: "dressings", label: "Applying Various Dressings", icon: FaBandAid },
      { id: "wound-vac", label: "Wound VAC Management", icon: FaBandAid },
      { id: "drains", label: "Drain Management (JP, Hemovac)", icon: Droplet },
    ],
  },
  {
    id: "cardiovascular",
    label: "Cardiovascular / Monitoring",
    icon: Heart,
    count: 7,
    children: [
      { id: "ecg", label: "12-Lead ECG Placement", icon: HeartPulse },
      { id: "telemetry", label: "Telemetry Monitoring", icon: HeartPulse },
      {
        id: "peripheral-pulse",
        label: "Peripheral Pulse Assessment (Doppler)",
        icon: Heart,
      },
      { id: "scd", label: "Anti-embolism Stockings / SCDs", icon: Heart },
      { id: "blood-glucose", label: "Blood Glucose Monitoring", icon: Droplet },
      { id: "phlebotomy", label: "Phlebotomy / Venipuncture", icon: Droplet },
    ],
  },
  {
    id: "musculoskeletal",
    label: "Musculoskeletal / Orthopedic",
    icon: Bone,
    count: 5,
    children: [
      { id: "cast-care", label: "Cast Care", icon: Bone },
      { id: "traction", label: "Traction Care", icon: Bone },
      {
        id: "neurovascular",
        label: "Neurovascular Checks (5 P's)",
        icon: Brain,
      },
      {
        id: "crutch-walking",
        label: "Crutch Walking Instruction",
        icon: Footprints,
      },
      { id: "cpm", label: "Continuous Passive Motion (CPM)", icon: Move },
    ],
  },
  {
    id: "neurological",
    label: "Neurological",
    icon: Brain,
    count: 5,
    children: [
      {
        id: "neuro-assess",
        label: "Neurological Assessment (GCS)",
        icon: Brain,
      },
      { id: "perrla", label: "Pupil Assessment (PERRLA)", icon: UserCheck },
      {
        id: "lumbar-puncture",
        label: "Lumbar Puncture Assistance",
        icon: Brain,
      },
      {
        id: "seizure-precautions",
        label: "Seizure Precautions",
        icon: AlertTriangle,
      },
    ],
  },
  {
    id: "maternal-newborn",
    label: "Maternal-Newborn / OB",
    icon: Baby,
    count: 7,
    children: [
      { id: "leopold", label: "Leopold's Maneuvers", icon: Baby },
      { id: "fundal-assess", label: "Fundal Assessment", icon: Heart },
      {
        id: "fetal-heart",
        label: "Fetal Heart Tone Monitoring",
        icon: HeartPulse,
      },
      { id: "newborn-assess", label: "Newborn Assessment (APGAR)", icon: Baby },
      { id: "newborn-bath", label: "Newborn Bath", icon: Bath },
      { id: "breastfeeding", label: "Breastfeeding Assistance", icon: Baby },
    ],
  },
  {
    id: "pediatric",
    label: "Pediatric",
    icon: Users,
    count: 4,
    children: [
      { id: "peds-vitals", label: "Pediatric Vital Signs", icon: HeartPulse },
      {
        id: "peds-meds",
        label: "Pediatric Medication Calculations",
        icon: Pill,
      },
      { id: "peds-assess", label: "Pediatric Head-to-Toe", icon: UsersRound },
      {
        id: "child-safety",
        label: "Child Safety / Car Seat",
        icon: AlertTriangle,
      },
    ],
  },
  {
    id: "mental-health",
    label: "Mental Health",
    icon: Brain,
    count: 4,
    children: [
      {
        id: "therapeutic-comm",
        label: "Therapeutic Communication",
        icon: UsersRound,
      },
      {
        id: "de-escalation",
        label: "De-escalation Techniques",
        icon: AlertTriangle,
      },
      {
        id: "suicide-risk",
        label: "Suicide Risk Assessment",
        icon: AlertTriangle,
      },
      { id: "mental-status", label: "Mental Status Exam", icon: Brain },
    ],
  },
  {
    id: "advanced",
    label: "Advanced / Critical Care",
    icon: HeartPulse,
    count: 7,
    children: [
      { id: "code-bls", label: "Code/BLS/ACLS Skills", icon: AlertTriangle },
      { id: "airway", label: "Airway Insertion (OPA/NPA)", icon: Wind },
      { id: "chest-tube", label: "Chest Tube Management", icon: Wind },
      { id: "abg", label: "ABG Interpretation", icon: Wind },
      { id: "cvp", label: "CVP Monitoring", icon: Heart },
      { id: "pca", label: "PCA Pump Management", icon: Syringe },
    ],
  },
  {
    id: "documentation",
    label: "Documentation & Communication",
    icon: FileText,
    count: 5,
    children: [
      { id: "sbar", label: "SBAR Communication", icon: FileText },
      { id: "charting", label: "Nursing Documentation", icon: FileText },
      { id: "education", label: "Patient Education", icon: UsersRound },
      {
        id: "informed-consent",
        label: "Informed Consent Process",
        icon: FileText,
      },
      {
        id: "incident-report",
        label: "Incident/Occurrence Reporting",
        icon: AlertTriangle,
      },
    ],
  },
  {
    id: "end-of-life",
    label: "End-of-Life Care",
    icon: Cross,
    count: 1,
    children: [{ id: "postmortem", label: "Postmortem Care", icon: Cross }],
  },
];
