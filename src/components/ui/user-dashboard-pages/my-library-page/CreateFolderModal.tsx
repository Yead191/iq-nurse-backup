"use client";
import { useState } from "react";
import { Modal } from "antd";
import { X } from "lucide-react";
import { folderColors } from "@/data/types";

interface CreateFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (name: string, color: string) => void;
}

const colors = [
  "#06b6d4", // cyan
  "#3b82f6", // blue
  "#1d4ed8", // blue-700
  "#10b981", // emerald
  "#22c55e", // green
  "#84cc16", // lime
  "#f59e0b", // amber
  "#f97316", // orange
  "#ec4899", // pink
  "#a855f7", // purple
];
export default function CreateFolderModal({
  isOpen,
  onClose,
  onConfirm,
}: CreateFolderModalProps) {
  const [folderName, setFolderName] = useState("");
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleSubmit = () => {
    if (folderName.trim()) {
      onConfirm(folderName.trim(), selectedColor);
      setFolderName("");
      setSelectedColor(colors[0]);
      onClose();
    }
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      closable={false}
      centered
      width={380}
      className="custom-folder-modal"
    >
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
        </div>
      </div>

      {/* Color Selection */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Choose folder color
        </h3>
        <div className="flex gap-2 flex-wrap">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                selectedColor === color
                  ? "border-gray-400 scale-110"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              style={{ backgroundColor: color }}
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
    </Modal>
  );
}
