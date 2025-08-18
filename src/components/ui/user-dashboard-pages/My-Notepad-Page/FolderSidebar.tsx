"use client";

import { useState } from "react";
import { Plus, Folder, ChevronRight } from "lucide-react";

interface FolderSidebarProps {
  folders: string[];
  activeFolder: string;
  onFolderSelect: (folder: string) => void;
  onAddFolder: (name: string) => void;
}

export default function FolderSidebar({
  folders,
  activeFolder,
  onFolderSelect,
  onAddFolder,
}: FolderSidebarProps) {
  const [newFolderName, setNewFolderName] = useState("");
  const [showNewFolderInput, setShowNewFolderInput] = useState(false);

  const handleAddFolder = () => {
    if (newFolderName.trim()) {
      onAddFolder(newFolderName.trim());
      setNewFolderName("");
      setShowNewFolderInput(false);
    }
  };

  return (
    <div className="w-64  border-r border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-3 border-b border-gray-200">
        <h2 className="text-sm lg:text-2xl font-semibold text-gray-700">
          My Notes
        </h2>
      </div>

      {/* Folders List */}
      <div className="flex-1 overflow-y-auto py-2 space-y-2">
        {folders.map((folder) => (
          <div
            key={folder}
            className={`flex items-center gap-4 px-3 py-4 cursor-pointer hover:bg-gray-100 border-l-5 border-blue-500 rounded-md ${
              activeFolder === folder
                ? "bg-blue-50 "
                : ""
            }`}
            onClick={() => onFolderSelect(folder)}
          >
            {/* <Folder size={16} className="text-blue-500" /> */}
            <p className="flex flex-col">
              <span className="text-sm text-gray-700 truncate">{folder}</span>
              <span className="text-xs text-gray-500">3 notes</span>
            </p>
          </div>
        ))}
      </div>

      {/* New Folder Button */}
      <div className="p-3 border-t border-gray-200">
        {showNewFolderInput ? (
          <div className="space-y-2">
            <input
              type="text"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              placeholder="Folder name"
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              onKeyPress={(e) => e.key === "Enter" && handleAddFolder()}
              autoFocus
            />
            <div className="flex gap-2">
              <button
                onClick={handleAddFolder}
                className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add
              </button>
              <button
                onClick={() => {
                  setShowNewFolderInput(false);
                  setNewFolderName("");
                }}
                className="px-3 py-1 text-xs bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowNewFolderInput(true)}
            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            <Plus size={16} />
            New Folder
          </button>
        )}
      </div>
    </div>
  );
}
