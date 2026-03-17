import React from "react";
import { Bookmark, Share2, HeartPulse } from "lucide-react";

interface CarePlansContentProps {
  content: {
    id: string;
    name: string;
    description: string;
    categoryName: string;
    content: string;
  };
}

export default function CarePlansContent({ content }: CarePlansContentProps) {
  if (!content) return null;

  return (
    <div className="pb-10">
      {/* Header Section */}
      <div className="mb-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a2f4c] via-[#2a4563] to-[#122238] border border-slate-700/50 shadow-xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none transform translate-x-10 -translate-y-10">
          <HeartPulse className="w-64 h-64 text-blue-400" strokeWidth={1} />
        </div>
        <div className="absolute -left-20 -top-20 opacity-20 pointer-events-none mix-blend-overlay border-none">
          <div className="w-60 h-60 bg-blue-500 rounded-full blur-[80px]"></div>
        </div>
        <div className="absolute top-20 right-20 opacity-20 pointer-events-none mix-blend-overlay border-none">
          <div className="w-60 h-60 bg-indigo-500 rounded-full blur-[80px]"></div>
        </div>

        <div className="relative p-8 lg:p-10 z-10 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          <div className="flex-1 max-w-3xl">
            {/* Category */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm backdrop-blur-md">
              <span>{content.categoryName}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
              {content.name}
            </h1>

            {/* Description */}
            <p className="text-white/70 text-[16px] lg:text-lg leading-relaxed max-w-2xl">
              {content.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 shrink-0 mt-4 lg:mt-0">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium text-sm transition-all shadow-sm backdrop-blur-md group">
              <Bookmark className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Save</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium text-sm transition-all shadow-sm backdrop-blur-md group">
              <Share2 className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section
        className="study-note-content prose prose-slate max-w-none overflow-x-auto
          prose-headings:font-bold prose-headings:text-slate-900 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
          prose-a:text-blue-600 hover:prose-a:text-blue-500
          prose-p:text-slate-600 prose-li:text-slate-600
          prose-table:border-collapse prose-th:bg-slate-50 prose-th:p-3 prose-td:p-3 prose-td:border-b prose-td:border-slate-100"
        dangerouslySetInnerHTML={{ __html: content?.content }}
      />
    </div>
  );
}
