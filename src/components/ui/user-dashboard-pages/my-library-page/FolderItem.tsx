"use client";

import type React from "react";
import { useState } from "react";
import { MoreHorizontal, Edit2, Trash2 } from "lucide-react";
import { Folder } from "@/data/types";
import ContextMenu from "./ContextMenu";

interface FolderItemProps {
  folder: Folder;
  isSelected: boolean;
  onFolderSelect: (folderId: string) => void;
  onDeleteFolder: (folderId: string) => void;
  onRenameFolder: (folderId: string, newName: string) => void;
}

export default function FolderItem({
  folder,
  isSelected,
  onFolderSelect,
  onDeleteFolder,
  onRenameFolder,
}: FolderItemProps) {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isRenaming, setIsRenaming] = useState(false);
  const [renamingValue, setRenamingValue] = useState(folder.name);

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "border-l-blue-500",
      orange: "border-l-orange-500",
      red: "border-l-red-500",
      green: "border-l-green-500",
      purple: "border-l-purple-500",
      cyan: "border-l-cyan-500",
      teal: "border-l-teal-500",
      sky: "border-l-sky-500",
      emerald: "border-l-emerald-500",
    };
    return colorMap[color] || "border-l-gray-500";
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setContextMenuPosition({ x: e.clientX, y: e.clientY });
    setShowContextMenu(true);
  };

  const handleRename = () => {
    setIsRenaming(true);
    setShowContextMenu(false);
  };

  const handleRenameSubmit = () => {
    if (renamingValue.trim()) {
      onRenameFolder(folder.id, renamingValue.trim());
    }
    setIsRenaming(false);
  };

  const handleRenameKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleRenameSubmit();
    } else if (e.key === "Escape") {
      setIsRenaming(false);
      setRenamingValue(folder.name);
    }
  };

  return (
    <div
      className={`border-l-5 ${getColorClass(
        folder.color
      )} bg-white rounded-md group`}
    >
      <div
        className={`flex items-center justify-between p-3 cursor-pointer ${
          isSelected ? "bg-blue-50" : "hover:bg-gray-50 "
        }`}
        onClick={() => onFolderSelect(folder.id)}
        onContextMenu={handleContextMenu}
      >
        <div className="flex-1 min-w-0">
          {isRenaming ? (
            <input
              type="text"
              value={renamingValue}
              onChange={(e) => setRenamingValue(e.target.value)}
              onBlur={handleRenameSubmit}
              onKeyDown={handleRenameKeyDown}
              className="w-full px-2 py-1 text-sm border border-blue-500 rounded focus:outline-none"
              autoFocus
            />
          ) : (
            <div>
              <div className="font-medium text-gray-900 truncate text-sm">
                {folder.name}
              </div>
              <div className="text-xs text-gray-500">
                {folder.topicCount} topics
              </div>
            </div>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleContextMenu(e);
          }}
          className="p-1 hover:bg-gray-200 rounded opacity-0 group-hover:opacity-100"
        >
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Context Menu */}
      {showContextMenu && (
        <ContextMenu
          position={contextMenuPosition}
          onClose={() => setShowContextMenu(false)}
          items={[
            { icon: Edit2, label: "Rename", onClick: handleRename },
            {
              icon: Trash2,
              label: "Delete Study Set",
              onClick: () => {
                onDeleteFolder(folder.id);
                setShowContextMenu(false);
              },
              destructive: true,
            },
          ]}
        />
      )}
    </div>
  );
}
