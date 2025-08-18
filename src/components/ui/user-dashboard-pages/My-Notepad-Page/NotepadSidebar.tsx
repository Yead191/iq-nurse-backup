"use client";

import { useState } from "react";
import { Plus, Notebook } from "lucide-react";

interface SidebarProps {
  sections: string[];
  activeSection: string;
  onSectionSelect: (section: string) => void;
  onAddSection: (name: string) => void;
}

export default function NotepadSidebar({
  sections,
  activeSection,
  onSectionSelect,
  onAddSection,
}: SidebarProps) {
  const [newSection, setNewSection] = useState("");

  return (
    <div className="w-60 bg-white border-r flex flex-col h-full">
      {/* Notebook Header */}
      <div className="p-4 flex items-center gap-2 border-b font-semibold">
        <Notebook size={18} className="text-purple-600" />
        <span>My Notebook</span>
      </div>

      {/* Sections */}
      <div className="flex-1 overflow-y-auto">
        {sections.map((section) => (
          <div
            key={section}
            className={`px-4 py-2 cursor-pointer ${
              activeSection === section
                ? "bg-purple-100 text-purple-800 font-medium"
                : "hover:bg-gray-100"
            }`}
            onClick={() => onSectionSelect(section)}
          >
            {section}
          </div>
        ))}
      </div>

      {/* Add Section */}
      <div className="p-3 border-t">
        <div className="flex">
          <input
            value={newSection}
            onChange={(e) => setNewSection(e.target.value)}
            placeholder="New section..."
            className="flex-1 px-2 py-1 border rounded text-sm"
          />
          <button
            onClick={() => {
              onAddSection(newSection);
              setNewSection("");
            }}
            className="ml-2 bg-purple-600 text-white px-2 rounded"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
