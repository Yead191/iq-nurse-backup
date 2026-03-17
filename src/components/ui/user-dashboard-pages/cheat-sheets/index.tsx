"use client";
import React from "react";
import { FolderPlus, Download, FileText, Share2, Bookmark } from "lucide-react";
import { toast } from "sonner";

interface Sheet {
  id: string;
  name: string;
  categoryName: string;
  description: string;
  content: string;
}

export default function CheatSheetContent({ sheet }: { sheet: Sheet }) {
  if (!sheet) return null;

  return (
    <div className="pb-10 pt-4 px-4">
      {/* Premium Header Section */}
      <div className="mb-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] border border-slate-700/50 shadow-xl">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none transform translate-x-12 -translate-y-12">
          <FileText className="w-64 h-64 text-blue-400" strokeWidth={1} />
        </div>
        <div className="absolute -left-16 -top-16 opacity-20 pointer-events-none mix-blend-overlay">
          <div className="w-56 h-56 bg-indigo-500 rounded-full blur-[80px]"></div>
        </div>

        <div className="relative p-8 lg:p-10 z-10 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          <div className="flex-1 max-w-3xl">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
              <span>{sheet.categoryName}</span>
            </div>

            {/* Sheet Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
              {sheet.name}
            </h1>

            {/* Sheet Description */}
            <p className="text-slate-300 text-[16px] lg:text-lg leading-relaxed max-w-2xl opacity-90">
              {sheet.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0 mt-4 lg:mt-0">
            <button
              onClick={() => toast.success("Saved to folder!")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium text-sm transition-all shadow-sm backdrop-blur-md group"
            >
              <FolderPlus className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>Save to Folder</span>
            </button>
            <button
              onClick={() => toast.success("Download started...")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg group"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Notes</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sheet Content Area */}
      <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-slate-200/60 p-6 lg:p-10">
        <section
          className="study-note-content prose prose-slate max-w-none
          prose-headings:font-bold prose-headings:text-slate-900 
          prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
          prose-p:text-slate-600 prose-p:leading-relaxed
          prose-li:text-slate-600 prose-strong:text-slate-900
          prose-img:rounded-xl prose-img:shadow-md
          prose-table:border-collapse prose-th:bg-slate-50 prose-th:p-4 prose-td:p-4 prose-td:border-b prose-td:border-slate-100"
          dangerouslySetInnerHTML={{ __html: sheet?.content }}
        />
      </div>
    </div>
  );
}
