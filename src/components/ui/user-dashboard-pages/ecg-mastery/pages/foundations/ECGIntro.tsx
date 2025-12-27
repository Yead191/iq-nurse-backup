import { InfoBox } from "@/components/shared/InfoBox";
import {
  featureCards,
  highYield,
  howToUse,
  learningObjectives,
} from "@/data/ecg/foundation/ecgMasteryData";

export default function ECGIntroPage() {
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
