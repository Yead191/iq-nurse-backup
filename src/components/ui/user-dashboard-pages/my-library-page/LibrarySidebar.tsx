"use client";

import { Search, Plus } from "lucide-react";
import FolderItem from "./FolderItem";
import { LibraryData } from "@/data/types";

interface SidebarProps {
  data: LibraryData;
  selectedFolder: string | null;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onFolderSelect: (folderId: string) => void;
  onCreateFolder: () => void;
  onDeleteFolder: (folderId: string) => void;
  onRenameFolder: (folderId: string, newName: string) => void;
}

export default function LibrarySidebar({
  data,
  selectedFolder,
  searchQuery,
  onSearchChange,
  onFolderSelect,
  onCreateFolder,
  onDeleteFolder,
  onRenameFolder,
}: SidebarProps) {
  const filteredFolders = data.folders.filter((folder) =>
    folder.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-0 pb-4 pr-2 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">Folders</h2>
          <button
            onClick={onCreateFolder}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search folders..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Folders List */}
      <div className="flex-1 overflow-y-auto space-y-2 py-4">
        {filteredFolders.map((folder) => (
          <FolderItem
            key={folder.id}
            folder={folder}
            isSelected={selectedFolder === folder.id}
            onFolderSelect={onFolderSelect}
            onDeleteFolder={onDeleteFolder}
            onRenameFolder={onRenameFolder}
          />
        ))}
      </div>
    </div>
  );
}
