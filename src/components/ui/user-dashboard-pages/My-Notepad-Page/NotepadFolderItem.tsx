"use client";

import { useState } from "react";
import { MoreHorizontal } from "lucide-react";

interface Folder {
  name: string;
  color: string;
}

interface FolderItemProps {
  folder: Folder;
  isActive: boolean;
  onSelect: (name: string) => void;
  onStartRename: (name: string) => void;
  onOpenContext: (e: React.MouseEvent, name: string) => void;
  renamingFolder: string | null;
  renamingValue: string;
  onRenameChange: (value: string) => void;
  onRenameSubmit: () => void;
  onRenameCancel: () => void;
}

export default function NotepadFolderItem({
  folder,
  isActive,
  onSelect,
  onStartRename,
  onOpenContext,
  renamingFolder,
  renamingValue,
  onRenameChange,
  onRenameSubmit,
  onRenameCancel,
}: FolderItemProps) {
  return (
    <div
      className={`flex items-center gap-4 px-3 py-4 cursor-pointer group justify-between rounded-md ${
        isActive ? "bg-blue-50" : "hover:bg-gray-100"
      }`}
      style={{ borderLeft: `5px solid ${folder.color}` }}
    >
      {renamingFolder === folder.name ? (
        <input
          type="text"
          value={renamingValue}
          onChange={(e) => onRenameChange(e.target.value)}
          onBlur={onRenameSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") onRenameSubmit();
            if (e.key === "Escape") onRenameCancel();
          }}
          className="w-full px-2 py-1 text-sm border border-blue-500 rounded focus:outline-none"
          autoFocus
        />
      ) : (
        <div
          className="flex justify-between items-center w-full"
          onClick={() => onSelect(folder.name)}
        >
          <p className="flex flex-col">
            <span className="text-sm text-gray-700 truncate">
              {folder.name}
            </span>
            <span className="text-xs text-gray-500">3 notes</span>
          </p>
          <button
            onClick={(e) => onOpenContext(e, folder.name)}
            className="p-1 hover:bg-gray-200 rounded opacity-0 group-hover:opacity-100"
          >
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      )}
    </div>
  );
}
