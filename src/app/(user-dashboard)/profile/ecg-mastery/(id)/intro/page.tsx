import { InfoBox } from "@/components/shared/InfoBox";
import {
  Layers,
  Target,
  Lightbulb,
  Zap,
  Stethoscope,
  Star,
} from "lucide-react";

export default function IntroductionPage() {
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

  return (
    <main className="">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[#1e5d8e] mb-4">
          Welcome to ECG Mastery for Nursing Students
        </h1>
        <div className="h-[1px] bg-slate-200 w-full mb-8" />

        <div className="space-y-4 text-[15px] leading-relaxed text-slate-600">
          <p>
            Electrocardiogram (ECG) interpretation is a critical skill for
            nursing professionals. This comprehensive guide will help you
            understand cardiac rhythms, recognize life-threatening arrhythmias,
            and implement appropriate nursing interventions. Whether you're
            preparing for your NCLEX exam or advancing your clinical practice,
            this resource provides the foundational knowledge and practical
            application you need.
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {featureCards.map((card, idx) => (
          <div
            key={idx}
            className="border border-slate-200 rounded-xl p-6 flex flex-col items-start gap-4 h-full"
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: card.iconBg }}
            >
              {card.customIcon ? (
                card.customIcon
              ) : (
                <card.icon
                  className="w-6 h-6"
                  style={{ color: card.iconColor }}
                />
              )}
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-2 leading-tight">
                {card.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* How to Use Section */}
      <InfoBox data={howToUse} className="mb-12" />

      {/* Learning Objectives Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          Learning Objectives
        </h2>
        <p className="text-sm text-slate-600 mb-6 font-medium">
          By the end of this guide, you will be able to:
        </p>
        <ul className="space-y-3">
          {learningObjectives.map((obj, idx) => (
            <li key={idx} className="text-sm text-slate-600 flex gap-3">
              <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300" />
              {obj}
            </li>
          ))}
        </ul>
      </div>

      {/* NCLEX High Yield Section */}
      <InfoBox data={highYield} />
    </main>
  );
}
