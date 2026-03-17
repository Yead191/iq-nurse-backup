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
  Users,
  Syringe,
  Thermometer,
  Smile,
  Frown,
  Activity,
} from "lucide-react";

import { BiBandAid } from "react-icons/bi";

export interface NavigationItem {
  id: string;
  label: string;
  icon: any;
  count?: number;
  children?: NavigationItem[];
}

export const carePlanSidebarItems: NavigationItem[] = [
  {
    id: "cardiovascular",
    label: "Cardiovascular System",
    icon: Heart,
    count: 29,
    children: [
      {
        id: "chronic-cardiac",
        label: "Chronic Cardiac Conditions",
        icon: Heart,
      },
      { id: "arrhythmias", label: "Arrhythmias", icon: Activity },
      {
        id: "acute-cardiac",
        label: "Acute Cardiac Conditions",
        icon: AlertTriangle,
      },
      { id: "post-cardiac", label: "Post-Cardiac Procedures", icon: Heart },
    ],
  },
  {
    id: "respiratory",
    label: "Respiratory System",
    icon: Wind,
    count: 26,
    children: [
      {
        id: "chronic-resp",
        label: "Chronic Respiratory Conditions",
        icon: Wind,
      },
      {
        id: "acute-resp",
        label: "Acute Respiratory Conditions",
        icon: AlertTriangle,
      },
      { id: "airway-mgmt", label: "Airway Management", icon: Wind },
      {
        id: "infectious-resp",
        label: "Infectious Respiratory Conditions",
        icon: Shield,
      },
    ],
  },
  {
    id: "neurological",
    label: "Neurological System",
    icon: Brain,
    count: 23,
    children: [
      {
        id: "acute-neuro",
        label: "Acute Neurological Conditions",
        icon: AlertTriangle,
      },
      {
        id: "chronic-neuro",
        label: "Chronic Neurological Conditions",
        icon: Brain,
      },
      { id: "neurosurgical", label: "Neurosurgical Conditions", icon: Bone },
    ],
  },
  {
    id: "gastrointestinal",
    label: "GI System",
    icon: Utensils,
    count: 28,
    children: [
      { id: "upper-gi", label: "Upper GI Conditions", icon: Utensils },
      { id: "lower-gi", label: "Lower GI Conditions", icon: Utensils },
      { id: "hepatobiliary", label: "Hepatobiliary Conditions", icon: Droplet },
      { id: "gi-procedures", label: "GI Procedures", icon: Syringe },
    ],
  },
  {
    id: "renal",
    label: "Renal/Genitourinary System",
    icon: Droplet,
    count: 20,
    children: [
      {
        id: "acute-renal",
        label: "Acute Renal Conditions",
        icon: AlertTriangle,
      },
      { id: "chronic-renal", label: "Chronic Renal Conditions", icon: Droplet },
      { id: "dialysis", label: "Dialysis", icon: Droplet },
      { id: "urological", label: "Urological Conditions", icon: Droplet },
    ],
  },
  {
    id: "endocrine",
    label: "Endocrine System",
    icon: Zap,
    count: 22,
    children: [
      { id: "diabetes", label: "Diabetes", icon: Activity },
      { id: "thyroid", label: "Thyroid Disorders", icon: Thermometer },
      { id: "adrenal", label: "Adrenal Disorders", icon: AlertTriangle },
      { id: "pituitary", label: "Pituitary Disorders", icon: Brain },
      { id: "other-endocrine", label: "Other Endocrine", icon: Zap },
    ],
  },
  {
    id: "musculoskeletal",
    label: "Musculoskeletal System",
    icon: Bone,
    count: 28,
    children: [
      { id: "fractures", label: "Fractures", icon: Bone },
      { id: "joint", label: "Joint Conditions", icon: Bone },
      { id: "bone", label: "Bone Conditions", icon: Bone },
      { id: "soft-tissue", label: "Soft Tissue/Muscle", icon: Bone },
      { id: "spinal", label: "Spinal Conditions", icon: Bone },
    ],
  },
  {
    id: "integumentary",
    label: "Integumentary System",
    icon: BiBandAid,
    count: 18,
    children: [
      { id: "wounds", label: "Wounds", icon: BiBandAid },
      { id: "burns", label: "Burns", icon: AlertTriangle },
      { id: "skin-conditions", label: "Skin Conditions", icon: Smile },
    ],
  },
  {
    id: "hematologic",
    label: "Hematologic/Oncologic",
    icon: Shield,
    count: 30,
    children: [
      { id: "anemia", label: "Anemia", icon: Droplet },
      {
        id: "bleeding-clotting",
        label: "Bleeding/Clotting Disorders",
        icon: AlertTriangle,
      },
      {
        id: "heme-malignancies",
        label: "Hematologic Malignancies",
        icon: Shield,
      },
      { id: "solid-tumors", label: "Solid Tumor Cancers", icon: Shield },
      {
        id: "cancer-treatment",
        label: "Cancer Treatment-Related",
        icon: Syringe,
      },
      { id: "transfusion", label: "Transfusion", icon: Droplet },
    ],
  },
  {
    id: "immune",
    label: "Immune System",
    icon: Shield,
    count: 10,
    children: [
      { id: "autoimmune", label: "Autoimmune Disorders", icon: Shield },
      { id: "immunodeficiency", label: "Immunodeficiency", icon: Shield },
      { id: "allergic", label: "Allergic Reactions", icon: AlertTriangle },
    ],
  },
  {
    id: "infectious",
    label: "Infectious Disease",
    icon: Shield,
    count: 12,
    children: [
      {
        id: "systemic-infections",
        label: "Systemic Infections",
        icon: AlertTriangle,
      },
      { id: "specific-infections", label: "Specific Infections", icon: Shield },
    ],
  },
  {
    id: "mental-health",
    label: "Mental Health/Psychiatric",
    icon: Brain,
    count: 22,
    children: [
      { id: "mood-disorders", label: "Mood Disorders", icon: Frown },
      { id: "anxiety-disorders", label: "Anxiety Disorders", icon: Frown },
      { id: "psychotic", label: "Psychotic Disorders", icon: Brain },
      {
        id: "substance",
        label: "Substance Use Disorders",
        icon: AlertTriangle,
      },
      { id: "other-psych", label: "Other Psychiatric Conditions", icon: Brain },
    ],
  },
  {
    id: "ob-maternity",
    label: "OB/Maternity",
    icon: Baby,
    count: 62,
    children: [
      { id: "normal-pregnancy", label: "Normal Pregnancy Care", icon: Baby },
      {
        id: "high-risk-pregnancy",
        label: "High-Risk Pregnancy Conditions",
        icon: AlertTriangle,
      },
      {
        id: "preexisting-pregnancy",
        label: "Pre-existing Conditions in Pregnancy",
        icon: Heart,
      },
      { id: "normal-labor", label: "Normal Labor & Delivery", icon: Baby },
      {
        id: "labor-complications",
        label: "Labor Complications",
        icon: AlertTriangle,
      },
      { id: "delivery-methods", label: "Delivery Methods", icon: Baby },
      {
        id: "labor-interventions",
        label: "Labor Interventions",
        icon: Syringe,
      },
      { id: "normal-postpartum", label: "Normal Postpartum Care", icon: Baby },
      {
        id: "pp-complications",
        label: "Postpartum Complications",
        icon: AlertTriangle,
      },
    ],
  },
  {
    id: "neonatal-pediatric",
    label: "Neonatal/Pediatric",
    icon: Baby,
    count: 66,
    children: [
      { id: "normal-newborn", label: "Normal Newborn Care", icon: Baby },
      {
        id: "neonatal-complications",
        label: "Neonatal Complications",
        icon: AlertTriangle,
      },
      { id: "preterm", label: "Preterm Infant", icon: Baby },
      { id: "congenital", label: "Congenital Conditions", icon: Baby },
      { id: "pediatric-resp", label: "Pediatric Respiratory", icon: Wind },
      {
        id: "pediatric-gi",
        label: "Pediatric Gastrointestinal",
        icon: Utensils,
      },
      {
        id: "pediatric-infectious",
        label: "Pediatric Infectious Diseases",
        icon: Shield,
      },
      { id: "pediatric-heme", label: "Pediatric Hematologic", icon: Droplet },
      { id: "pediatric-neuro", label: "Pediatric Neurological", icon: Brain },
      { id: "pediatric-endocrine", label: "Pediatric Endocrine", icon: Zap },
      {
        id: "pediatric-trauma",
        label: "Pediatric Trauma/Injury",
        icon: AlertTriangle,
      },
    ],
  },
  {
    id: "perioperative",
    label: "Perioperative Care",
    icon: Syringe,
    count: 27,
    children: [
      { id: "preoperative", label: "Preoperative", icon: Syringe },
      { id: "intraoperative", label: "Intraoperative", icon: Syringe },
      {
        id: "postoperative-general",
        label: "Postoperative (General)",
        icon: Syringe,
      },
      {
        id: "specific-surgical",
        label: "Specific Surgical Procedures",
        icon: Syringe,
      },
    ],
  },
  {
    id: "critical-care",
    label: "Critical Care/Emergency",
    icon: AlertTriangle,
    count: 31,
    children: [
      { id: "shock-states", label: "Shock States", icon: AlertTriangle },
      { id: "trauma", label: "Trauma", icon: AlertTriangle },
      {
        id: "life-threatening",
        label: "Life-Threatening Emergencies",
        icon: AlertTriangle,
      },
      { id: "poisoning", label: "Poisoning/Overdose", icon: AlertTriangle },
    ],
  },
  {
    id: "geriatric",
    label: "Geriatric Care",
    icon: Users,
    count: 18,
    children: [
      { id: "geriatric-syndromes", label: "Geriatric Syndromes", icon: Users },
      { id: "age-related", label: "Age-Related Conditions", icon: Users },
    ],
  },
  {
    id: "pain",
    label: "Pain Management",
    icon: Frown,
    count: 16,
    children: [
      { id: "acute-pain", label: "Acute Pain", icon: Frown },
      { id: "chronic-pain", label: "Chronic Pain", icon: Frown },
      {
        id: "pain-modalities",
        label: "Pain Management Modalities",
        icon: Frown,
      },
    ],
  },
  {
    id: "palliative",
    label: "Palliative Care/End-of-Life",
    icon: Heart,
    count: 14,
    children: [
      { id: "symptom-mgmt", label: "Symptom Management", icon: Heart },
      { id: "eol-care", label: "End-of-Life Care", icon: Heart },
      { id: "hospice", label: "Hospice Care", icon: Heart },
    ],
  },
  {
    id: "special-populations",
    label: "Special Populations",
    icon: Users,
    count: 12,
    children: [
      { id: "bariatric", label: "Bariatric Patients", icon: Users },
      {
        id: "immunocompromised",
        label: "Immunocompromised Patients",
        icon: Shield,
      },
      {
        id: "vulnerable",
        label: "Homeless/Vulnerable Populations",
        icon: Users,
      },
      { id: "cultural", label: "Cultural Considerations", icon: Smile },
    ],
  },
  {
    id: "rehabilitation",
    label: "Rehabilitation",
    icon: Bone,
    count: 7,
    children: [
      { id: "stroke-rehab", label: "Stroke Rehabilitation", icon: Bone },
      { id: "cardiac-rehab", label: "Cardiac Rehabilitation", icon: Heart },
      { id: "pulmonary-rehab", label: "Pulmonary Rehabilitation", icon: Wind },
      {
        id: "orthopedic-rehab",
        label: "Orthopedic Rehabilitation",
        icon: Bone,
      },
      {
        id: "sci-rehab",
        label: "Spinal Cord Injury Rehabilitation",
        icon: Bone,
      },
      {
        id: "tbi-rehab",
        label: "Traumatic Brain Injury Rehabilitation",
        icon: Brain,
      },
      {
        id: "amputation-rehab",
        label: "Amputation Rehabilitation",
        icon: Bone,
      },
    ],
  },
];
