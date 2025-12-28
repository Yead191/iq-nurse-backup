import React from "react";
import {
  priorityIntro,
  priorityLevels,
  decisionFramework,
  specialPopulations,
  notificationGuide,
  effectiveCommunication,
  documentation,
  quickReference,
  nclexHighYield,
} from "@/data/ecg/clinicalPriorityData";
import { Phone, FileText } from "lucide-react";
import { InfoBox } from "@/components/shared/InfoBox";

export default function ClinicalPriorityPage() {
  return (
    <main className="">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-[#1e5d8e] mb-4">
          {priorityIntro.title}
        </h1>
        <div className="h-[1px] bg-slate-200 w-full mb-8" />
        <p className="text-[15px] leading-relaxed text-slate-600">
          {priorityIntro.description}
        </p>
      </div>

      <h2 className="text-2xl font-bold text-[#1e5d8e] mb-8">
        Rhythm Prioritization Framework
      </h2>

      {/* Priority Levels */}
      <div className="space-y-12 mb-16">
        {priorityLevels.map((level, index) => {
          const Icon = level.icon;
          return (
            <div key={index}>
              <h3 className="text-lg font-bold text-[#337ab7] mb-4">
                {level.title}
              </h3>
              <div
                className={`${level.boxColor} rounded-xl p-0 overflow-hidden shadow-sm`}
              >
                <div className="p-6">
                  <h4
                    className={`${level.headerColor} font-bold mb-1 text-base flex items-center gap-2`}
                  >
                    <Icon className="w-5 h-5" />
                    {level.boxHeader}
                  </h4>
                  <p className="text-[15px] font-semibold text-slate-700 mb-6 ml-7">
                    {level.subtitle}
                  </p>

                  {/* Level 1 has 'sections', others have 'items' directly */}
                  {level.sections ? (
                    <div className="space-y-6">
                      {level.sections.map((section, sIndex) => (
                        <div key={sIndex}>
                          <h5 className="font-bold text-slate-800 mb-3 ml-7 text-[15px]">
                            {section.title}
                          </h5>
                          <div className="space-y-4 ml-7">
                            {section.items.map((item, iIndex) => (
                              <div key={iIndex}>
                                <div className="flex gap-2 items-start text-sm">
                                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 shrink-0" />
                                  <span className="font-bold text-slate-900">
                                    {item.name}
                                  </span>
                                </div>
                                <ul className="ml-5 mt-1 space-y-1 text-sm text-slate-600">
                                  {item.details.map((detail, dIndex) => (
                                    <li
                                      key={dIndex}
                                      className="flex gap-2 items-start"
                                    >
                                      <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 shrink-0 border border-slate-500" />
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-5 ml-7">
                      {level.items.map((item, iIndex) => (
                        <div key={iIndex}>
                          <div className="flex gap-2 items-start text-sm">
                            <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 shrink-0" />
                            <span className="font-bold text-slate-900">
                              {item.name}
                            </span>
                          </div>
                          <ul className="ml-5 mt-1 space-y-1 text-sm text-slate-600">
                            {item.details.map((detail, dIndex) => (
                              <li
                                key={dIndex}
                                className="flex gap-2 items-start"
                              >
                                <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 shrink-0 border border-slate-500" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Decision Making Framework */}
      <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
        {decisionFramework.title}
      </h2>
      <h3 className="text-lg font-bold text-[#337ab7] mb-4">
        {decisionFramework.subtitle}
      </h3>
      <div className="mb-16">
        <ol className="list-none space-y-6">
          {decisionFramework.questions.map((q, index) => (
            <li key={index}>
              <p className="font-bold text-slate-800 text-[15px] mb-2">
                {q.question}
              </p>
              <ul className="ml-5 space-y-1">
                {q.answers.map((ans, i) => (
                  <li
                    key={i}
                    className="flex gap-2 items-start text-sm text-slate-600"
                  >
                    <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 shrink-0 border border-slate-500" />
                    {ans}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      {/* Special Populations */}
      <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
        Special Populations
      </h2>
      <div className="space-y-8 mb-16">
        {specialPopulations.map((pop, index) => (
          <div key={index}>
            <h3 className="text-lg font-bold text-[#337ab7] mb-4">
              {pop.title}
            </h3>
            <ul className="space-y-2 ml-2">
              {pop.points.map((point, i) => (
                <li
                  key={i}
                  className="text-[15px] text-slate-700 flex gap-2 items-start"
                >
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Communication and Notification */}
      <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
        {notificationGuide.title}
      </h2>
      <h3 className="text-lg font-bold text-[#337ab7] mb-4">
        {notificationGuide.subtitle}
      </h3>
      <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
        <div className="space-y-8">
          {notificationGuide.levels.map((level, index) => {
            const LevelIcon =
              index === 0 ? Phone : index === 1 ? FileText : FileText; // Fallback mapping if icon prop is string
            // Actually I imported icons in data file, so I can use level.icon directly if valid,
            // but for safety in mapping, I'll rely on the data file imports
            const Icon = level.icon;

            return (
              <div key={index}>
                <h4
                  className={`font-bold flex items-center gap-2 text-[15px] mb-3 ${level.color}`}
                >
                  <Icon className="w-4 h-4" />
                  {level.title}
                </h4>
                <ul className="space-y-2 ml-6">
                  {level.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-700 flex gap-2 items-start"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                          index === 0
                            ? "bg-red-500"
                            : index === 1
                            ? "bg-orange-500"
                            : "bg-slate-400"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Effective Communication */}
      <div className="mb-12 mt-16">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          {effectiveCommunication.title}
        </h2>
        <p className="text-slate-600 mb-4">{effectiveCommunication.subtitle}</p>
        <ul className="space-y-4 ml-2">
          {effectiveCommunication.items.map((item, index) => (
            <li
              key={index}
              className="text-[15px] text-slate-700 flex gap-2 items-start"
            >
              <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 shrink-0" />
              <span
                dangerouslySetInnerHTML={{
                  __html: item.replace(
                    /\*\*(.*?)\*\*/g,
                    '<span class="font-bold text-slate-900">$1</span>'
                  ),
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Documentation */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          {documentation.title}
        </h2>
        <ul className="space-y-4 ml-2">
          {documentation.items.map((item, index) => (
            <li
              key={index}
              className="text-[15px] text-slate-700 flex gap-2 items-start"
            >
              <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 shrink-0" />
              <span
                dangerouslySetInnerHTML={{
                  __html: item.replace(
                    /\*\*(.*?)\*\*/g,
                    '<span class="font-bold text-slate-900">$1</span>'
                  ),
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Reference */}
      <div className="mb-12 bg-[#337ab7] text-white rounded-lg p-8 shadow-sm">
        <h2 className="text-xl font-bold mb-4">{quickReference.title}</h2>
        <p className="font-bold mb-6 text-[15px]">{quickReference.subtitle}</p>
        <ul className="space-y-3 mb-6">
          {quickReference.items.map((item, index) => (
            <li key={index} className="flex gap-2 items-start text-[15px]">
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
              <span
                dangerouslySetInnerHTML={{
                  __html: item.replace(
                    /\*\*(.*?)\*\*/g,
                    '<span class="font-bold">$1</span>'
                  ),
                }}
              />
            </li>
          ))}
        </ul>
        <p
          className="font-bold text-[15px]"
          dangerouslySetInnerHTML={{
            __html: quickReference.goldenRule.replace(
              /\*\*(.*?)\*\*/g,
              '<span class="font-bold text-white">$1</span>'
            ),
          }}
        />
      </div>

      {/* NCLEX High Yield */}
      <div className="mb-16">
        <InfoBox data={nclexHighYield} />
      </div>
    </main>
  );
}
