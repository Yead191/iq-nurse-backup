"use client";

import { useState } from "react";
import { Modal, Button } from "antd";

interface CreateFolderModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (name: string, color: string) => void;
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
  open,
  onClose,
  onSubmit,
}: CreateFolderModalProps) {
  const [folderName, setFolderName] = useState("");
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleSubmit = () => {
    if (folderName.trim()) {
      onSubmit(folderName.trim(), selectedColor);
      setFolderName("");
      setSelectedColor(colors[0]);
    }
  };

  const handleClose = () => {
    setFolderName("");
    setSelectedColor(colors[0]);
    onClose();
  };

  return (
    <Modal
      open={open}
      onCancel={handleClose}
      footer={null}
      width={400}
      centered
    >
      <div className="p-6">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 bg-orange-200 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-orange-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name your new folder
          </label>
          <input
            type="text"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Material"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Choose folder color
          </label>
          <div className="flex flex-wrap gap-3 justify-center">
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

        <Button
          type="primary"
          block
          size="large"
          onClick={handleSubmit}
          disabled={!folderName.trim()}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Done
        </Button>
      </div>
    </Modal>
  );
}
