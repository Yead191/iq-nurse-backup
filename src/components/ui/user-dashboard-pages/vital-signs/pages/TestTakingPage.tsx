import React from "react";
import { testTakingData } from "@/data/vital-signs/testTakingData";
import { InfoBox } from "@/components/shared/InfoBox";
import { GraduationCap } from "lucide-react";

export default function TestTakingPage() {
  return (
    <main>
      <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
        <GraduationCap className="w-8 h-8 text-[#1e5d8e]" />
        <h1 className="text-3xl font-bold text-[#1e5d8e]">
          {testTakingData.title}
        </h1>
      </div>

      {/* Priority Questions InfoBox */}
      <div className="mb-8">
        <InfoBox data={testTakingData.priorityQuestions} />
      </div>

      {/* Common NCLEX Question Patterns */}
      <div className="mb-8 p-6 bg-amber-50/50 border border-amber-100 rounded-lg shadow-sm">
        <h3 className="font-bold text-amber-700 text-lg mb-4">
          {testTakingData.questionPatterns.title}
        </h3>
        <ul className="space-y-3">
          {testTakingData.questionPatterns.items.map((item, index) => {
            const [quote, ...rest] = item.split('" - ');
            return (
              <li
                key={index}
                className="text-[15px] text-slate-700 flex gap-2 items-start"
              >
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 shrink-0" />
                <span>
                  <span className="font-bold text-slate-900">"{quote}"</span>
                  {" - "}
                  {rest.join('" - ')}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* NCLEX Success Tips */}
      <div className="mb-10 p-6 bg-yellow-50 border border-yellow-100 rounded-lg shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <testTakingData.successTips.Icon className="w-5 h-5 text-yellow-600" />
          <h3 className="font-bold text-yellow-700 text-lg">
            {testTakingData.successTips.title}
          </h3>
        </div>
        <ul className="space-y-2.5">
          {testTakingData.successTips.items.map((item, index) => (
            <li
              key={index}
              className="text-[15px] text-slate-700 flex gap-2 items-start"
            >
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
