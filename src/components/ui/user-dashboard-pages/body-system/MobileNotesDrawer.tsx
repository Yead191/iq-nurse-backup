"use client";
import { ChevronDown, FileText } from "lucide-react";

interface BodySystem {
  id: string;
  label: string;
  icon: string;
  title: string;
  description: string[];
}

interface MobileNotesDrawerProps {
  selectedSystem: BodySystem;
  showNotes: boolean;
  onToggleNotes: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function MobileNotesDrawer({
  selectedSystem,
  showNotes,
  onToggleNotes,
  activeTab,
  setActiveTab,
}: MobileNotesDrawerProps) {
  const tabs = ["Overview", "Physiology", "Clinical"];

  const getDemoData = (tab: string, system: string) => {
    if (tab === "Overview") return selectedSystem.description;

    if (tab === "Physiology") {
      return [
        `The physiology of the ${system} involves complex interactions between various cellular and molecular components.`,
        "Key physiological processes include signaling pathways, metabolic regulations, and structural adaptations to maintain homeostasis.",
        `In the context of the ${system}, understanding these processes is crucial for clinical assessment and intervention strategies.`,
      ];
    }

    if (tab === "Clinical") {
      return [
        `Clinical presentation in the ${system} can vary widely depending on the underlying pathology.`,
        "Assessment often involves a combination of physical examination, laboratory tests, and imaging studies.",
        "Management strategies focus on addressing the root cause while alleviating symptoms and preventing future complications.",
      ];
    }

    return [];
  };

  const content = getDemoData(activeTab, selectedSystem.title);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white border-t rounded-t-[2rem] shadow-[0_-8px_30px_rgb(0,0,0,0.12)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] z-[100] ${
        showNotes ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ height: "88vh" }}
    >
      {/* Drawer Header */}
      <div className="px-6 pt-4 pb-2 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
              <FileText className="size-5 text-[#ef4444]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                {selectedSystem.title} Notes
              </h3>
              <p className="text-xs text-gray-400">
                Detailed clinical reference
              </p>
            </div>
          </div>
          <button
            onClick={onToggleNotes}
            className="p-2 rounded-full bg-slate-100 text-gray-600 hover:bg-slate-200"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs Inside Drawer */}
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-3 text-base font-semibold transition-colors ${
                activeTab === tab ? "text-[#ef4444]" : "text-gray-400"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#ef4444] rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Drawer Content */}
      <div className="p-6 h-full overflow-y-auto pb-12 custom-scrollbar">
        <div className="space-y-5">
          {content.map((paragraph, index) => (
            <p key={index} className="text-[15px] text-[#1A1A1A] leading-[1.6]">
              {paragraph}
            </p>
          ))}
          {/* Add some padding at the bottom */}
          <div className="h-20" />
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
