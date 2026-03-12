import React from "react";
import { Button } from "antd";
import { CheckCircle, Pin, Share2 } from "lucide-react";
export default function DynamicNoteHeading({
  setActiveTab,
  activeTab,
  content,
  savedToFolder,
  setSaveModalOpen,
  setShareModalOpen,
  setQuizOpen,
}: {
  setActiveTab: (tab: "study" | "notes") => void;
  activeTab: "study" | "notes";
  content?: {
    title: string;
    description: string;
  };
  savedToFolder: boolean;
  setSaveModalOpen: (open: boolean) => void;
  setShareModalOpen: (open: boolean) => void;
  setQuizOpen: (open: boolean) => void;
}) {
  return (
    <div className="mb-6 bg-white p-6 rounded-2xl border-2 border-[#2C5F8D]/20 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex p-1 bg-slate-100 rounded-lg border border-gray-200">
          <button
            onClick={() => setActiveTab("study")}
            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${
              activeTab === "study"
                ? "bg-white text-[#2C5F8D] shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Study Notes
          </button>
          <button
            onClick={() => setActiveTab("notes")}
            className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${
              activeTab === "notes"
                ? "bg-white text-[#2C5F8D] shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            My Notes
          </button>
        </div>

        <div className="h-6 w-px bg-slate-200 mx-2"></div>

        <Button
          variant="outlined"
          size="small"
          className="h-9 gap-1.5 text-[#FE5E7E] border-[#FE5E7E] hover:bg-[#FE5E7E] hover:text-white transition-colors rounded-full px-4"
          onClick={() => setQuizOpen(true)}
        >
          Quick Quiz
        </Button>
      </div>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-black text-[#2C5F8D] uppercase tracking-tight mb-2">
            {content?.title}
          </h1>
          <p className="text-muted-foreground font-medium text-lg">
            {content?.description}
          </p>
        </div>

        <div className="flex gap-3 items-start">
          {savedToFolder && (
            <div className="flex items-center gap-2 text-sm text-green-600 font-bold mr-auto md:mr-0 bg-green-50 px-3 py-1 rounded-full border border-green-200">
              <CheckCircle className="size-4" />
              <span className="hidden sm:inline">Pinned!</span>
            </div>
          )}
          <button
            onClick={() => setSaveModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#2C5F8D] text-white rounded-lg hover:bg-[#234a6d] transition-all hover:shadow-md font-bold"
          >
            <Pin className="size-4" />
            <span className="hidden sm:inline">Pin</span>
          </button>
          <button
            onClick={() => setShareModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border-2 border-[#2C5F8D] text-[#2C5F8D] rounded-lg hover:bg-[#2C5F8D]/5 transition-all font-bold"
          >
            <Share2 className="size-4" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}
