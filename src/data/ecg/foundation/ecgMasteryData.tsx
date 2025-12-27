import {
  Layers,
  Target,
  Lightbulb,
  Zap,
  Stethoscope,
  Star,
} from "lucide-react";

export const ECGMasteryData = [
  {
    id: "foundations",
    title: "Foundations",
    items: [
      { id: "intro", name: "Introduction" },
      { id: "cardiac-conduction", name: "Cardiac Conduction System" },
      { id: "ecg-waveforms", name: "ECG Waveforms & Intervals" },
      { id: "lead-placement", name: "Lead Placement" },
    ],
  },
  {
    id: "normal-rhythms",
    title: "Normal & Sinus Rhythms",
    items: [
      { id: "nsr", name: "Normal Sinus Rhythm" },
      { id: "sinus-tachy", name: "Sinus Tachycardia" },
      { id: "sinus-brady", name: "Sinus Bradycardia" },
    ],
  },
  {
    id: "atrial-arrhythmias",
    title: "Atrial Arrhythmias",
    items: [
      { id: "afib", name: "Atrial Fibrillation" },
      { id: "aflutter", name: "Atrial Flutter" },
      { id: "svt", name: "Supraventricular Tachycardia" },
    ],
  },
  {
    id: "heart-blocks",
    title: "Heart Blocks",
    items: [
      { id: "first-degree", name: "First-Degree AV Block" },
      { id: "second-degree", name: "Second-Degree AV Block" },
      { id: "third-degree", name: "Third-Degree AV Block" },
    ],
  },
  {
    id: "advanced-topics",
    title: "Advanced Topics",
    items: [
      { id: "pacemaker", name: "Pacemaker Rhythms" },
      { id: "acute-coronary", name: "Acute Coronary Syndromes" },
      { id: "artifact", name: "Artifact & Troubleshooting" },
      { id: "clinical-priority", name: "Clinical Prioritization" },
    ],
  },
];

const featureCards = [
  {
    title: "Comprehensive Coverage",
    description:
      "From basic conduction principles to complex arrhythmias and acute coronary syndromes.",
    icon: Layers,
    color: "bg-[#e0f2fe]",
    iconColor: "#3b82f6",
    iconBg: "#bae6fd",
    customIcon: (
      <div className="flex gap-0.5">
        <div className="w-3 h-4 bg-green-400 rounded-sm transform -rotate-12" />
        <div className="w-3 h-4 bg-blue-400 rounded-sm" />
        <div className="w-3 h-4 bg-purple-400 rounded-sm transform rotate-12" />
      </div>
    ),
  },
  {
    title: "Clinical Focus",
    description:
      "Nursing-specific interventions and prioritization strategies for each rhythm.",
    icon: Target,
    color: "bg-[#fff1f2]",
    iconColor: "#f43f5e",
    iconBg: "#fecdd3",
  },
  {
    title: "Visual Learning",
    description:
      "Clear ECG tracings and visual representations to enhance understanding.",
    icon: Lightbulb,
    color: "bg-[#fffbeb]",
    iconColor: "#f59e0b",
    iconBg: "#fef3c7",
  },
  {
    title: "Quick Reference",
    description:
      "Easy-to-navigate sections for rapid review and clinical application.",
    icon: Zap,
    color: "bg-[#fff7ed]",
    iconColor: "#f97316",
    iconBg: "#ffedd5",
  },
];

const learningObjectives = [
  "Identify the components of normal cardiac conduction and ECG waveforms",
  "Recognize common cardiac rhythms and arrhythmias",
  "Differentiate between life-threatening and stable rhythms",
  "Implement appropriate nursing interventions for each rhythm type",
  "Understand ECG changes associated with acute coronary syndromes",
  "Troubleshoot common ECG artifacts and equipment issues",
  "Prioritize patient care based on rhythm interpretation",
];

const howToUseFeatures = [
  "ECG Characteristics: Key features to identify the rhythm",
  "Clinical Significance: What the rhythm means for patient care",
  "Nursing Interventions: Specific actions to take",
  "Priority Level: How urgently the rhythm requires intervention",
];

const highYield = {
  title: "NCLEX-RN High-Yield Points",
  defaultColor: "#9333ea",
  Icon: Star,
  features: [
    "Priority Assessment: Always assess airway, breathing, and circulation (ABCs) before interpreting ECG rhythms",
    "Treat the Patient, Not the Monitor: Clinical assessment takes precedence over ECG findings",
    "Life-Threatening Rhythms: Memorize VF, pulseless VT, asystole, and PEA - these require immediate CPR",
    "Unstable vs Stable: Unstable patients with tachycardia or bradycardia need immediate intervention",
    "ACLS Algorithms: Know the basic steps for cardiac arrest, bradycardia, and tachycardia protocols",
    "Medication Knowledge: Understand adenosine (SVT), atropine (bradycardia), and amiodarone (VT/VF)",
    '"What is the priority nursing action?" - Address life-threatening vital sign abnormalities first',
  ],
};

const howToUse = {
  title: "How to Use This Guide",
  defaultColor: "#3b82f6",
  Icon: Stethoscope,
  description:
    "Navigate through the sections using the sidebar menu. Each rhythm includes:",
  features: howToUseFeatures,
};

export { featureCards, learningObjectives, highYield, howToUse };
