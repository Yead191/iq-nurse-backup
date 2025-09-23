"use client";

import { Button } from "antd";
import { ChevronUp } from "lucide-react";

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
}

export default function MobileNotesDrawer({
  selectedSystem,
  showNotes,
  onToggleNotes,
}: MobileNotesDrawerProps) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white border-t rounded-t-2xl transition-transform duration-300 ease-in-out ${
        showNotes ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ height: "90vh" }}
    >
      <div className="p-4 border-b flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          {selectedSystem.title} Notes
        </h3>
        <Button size="small" onClick={onToggleNotes}>
          <ChevronUp className="w-4 h-4" />
        </Button>
      </div>
      <div className="p-4 h-full overflow-y-auto pb-32">
        <div className="space-y-4">
          {selectedSystem.description.map((paragraph, index) => (
            <p key={index} className="text-sm text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
