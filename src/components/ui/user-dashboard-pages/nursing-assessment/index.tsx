import React from "react";
import { Activity, BookOpen, Clock } from "lucide-react";

export default function NursingAssessment({ assessment }: any) {
  if (!assessment) return null;

  return (
    <div className="container pb-10">
      {/* Header Section */}
      <div className="mb-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 border border-slate-700/50 shadow-xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-[-5%] p-8 opacity-10 pointer-events-none transform rotate-12">
          <Activity className="w-64 h-64 text-blue-400" strokeWidth={1} />
        </div>
        <div className="absolute -left-20 -top-20 opacity-20 pointer-events-none mix-blend-overlay border-none">
          <div className="w-60 h-60 bg-blue-500 rounded-full blur-[80px]"></div>
        </div>
        <div className="absolute -right-20 -bottom-20 opacity-20 pointer-events-none mix-blend-overlay border-none">
          <div className="w-60 h-60 bg-indigo-500 rounded-full blur-[80px]"></div>
        </div>

        <div className="relative p-8 lg:p-10 z-10 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          <div className="flex-1 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm backdrop-blur-md">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Assessment Guide</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
              {assessment.title}
            </h1>

            <p className="text-white/70 text-[16px] lg:text-[18px] leading-relaxed">
              {assessment.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section
        className="study-note-content prose max-w-none overflow-scroll"
        dangerouslySetInnerHTML={{ __html: assessment?.content }}
      />
    </div>
  );
}
