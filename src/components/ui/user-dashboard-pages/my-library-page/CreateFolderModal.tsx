"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { folderColors } from "@/data/types";

interface CreateFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (name: string, color: string) => void;
}

export default function CreateFolderModal({
  isOpen,
  onClose,
  onConfirm,
}: CreateFolderModalProps) {
  const [folderName, setFolderName] = useState("Medical");
  const [selectedColor, setSelectedColor] = useState("cyan");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (folderName.trim()) {
      onConfirm(folderName.trim(), selectedColor);
      setFolderName("Medical");
      setSelectedColor("cyan");
    }
  };

  const getColorClass = (colorName: string) => {
    const colorMap: Record<string, string> = {
      cyan: "bg-cyan-400",
      blue: "bg-blue-900",
      sky: "bg-sky-500",
      teal: "bg-teal-400",
      green: "bg-green-400",
      red: "bg-red-400",
      orange: "bg-orange-400",
      purple: "bg-purple-400",
      emerald: "bg-emerald-400",
    };
    return colorMap[colorName] || "bg-gray-400";
  };

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
              <div className="w-6 h-4 bg-orange-400 rounded-sm"></div>
            </div>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Name your new folder
        </h2>

        {/* Folder Name Input */}
        <div className="mb-6">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <div className="w-4 h-4 bg-gray-400 rounded mr-3"></div>
            <input
              type="text"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              className="flex-1 outline-none text-gray-900"
              placeholder="Folder name"
            />
            <div className="w-4 h-4 text-gray-400">▼</div>
          </div>
        </div>

        {/* Color Selection */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Choose folder color
          </h3>
          <div className="flex gap-2 flex-wrap">
            {folderColors.map((color: any) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`w-8 h-8 rounded-full ${getColorClass(color.name)} ${
                  selectedColor === color.name
                    ? "ring-2 ring-blue-500 ring-offset-2"
                    : "hover:scale-110"
                } transition-all`}
              />
            ))}
          </div>
        </div>

        {/* Done Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium"
        >
          Done
        </button>
      </div>
    </div>
  );
}
