"use client";

import { useState } from "react";
import { ChevronUp } from "lucide-react";

interface NewFolderFormProps {
  onAdd: (name: string, color: string) => void;
  onCancel: () => void;
}

const colors = [
  "#3b82f6",
  "#ef4444",
  "#22c55e",
  "#facc15",
  "#a855f7",
  "#ec4899",
  "#6366f1",
  "#f97316",
  "#003877",
];

export default function NewFolderForm({ onAdd, onCancel }: NewFolderFormProps) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#003877");
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  const handleAdd = () => {
    if (!name.trim()) return;
    onAdd(name.trim(), color);
    setName("");
    setColor("#003877");
  };

  return (
    <div className="space-y-2 relative">
      <div className="flex items-center border rounded px-2 py-1 focus-within:ring-1 focus-within:ring-blue-500">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Title"
          className="flex-1 text-sm focus:outline-none"
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          autoFocus
        />
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsColorPickerOpen(!isColorPickerOpen)}
            className="flex items-center gap-1 px-2 py-1 rounded"
          >
            <span
              className="w-4 h-4 rounded-full border"
              style={{ backgroundColor: color }}
            />
            <ChevronUp size={14} className="text-gray-500" />
          </button>
          {isColorPickerOpen && (
            <div className="absolute right-0 bottom-full mb-2 bg-white shadow-lg rounded p-2 grid grid-cols-1 gap-2 z-20">
              {colors.map((c) => (
                <button
                  key={c}
                  type="button"
                  className="w-6 h-6 rounded-full border"
                  style={{ backgroundColor: c }}
                  onClick={() => {
                    setColor(c);
                    setIsColorPickerOpen(false);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleAdd}
          className="px-3 py-1 text-xs bg-primary text-white rounded"
        >
          Add
        </button>
        <button
          onClick={onCancel}
          className="px-3 py-1 text-xs bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
