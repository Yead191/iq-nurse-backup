"use client";

import type React from "react";

import { useState } from "react";
import {
  Search,
  Plus,
  MoreVertical,
  Bookmark,
  Edit,
  Trash2,
} from "lucide-react";
import ContextMenu from "./ContextMenu";
import { LibraryData } from "@/data/types";

interface MobileFolderListProps {
  data: LibraryData;
  expandedFolders: Set<string>;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onFolderToggle: (folderId: string) => void;
  onPageSelect: (pageId: string) => void;
  onToggleBookmark: (folderId: string, pageId: string) => void;
  onCreateFolder: () => void;
  onDeleteFolder: (folderId: string) => void;
  onRenameFolder: (folderId: string, newName: string) => void;
}

export default function MobileFolderList({
  data,
  expandedFolders,
  searchQuery,
  onSearchChange,
  onFolderToggle,
  onPageSelect,
  onToggleBookmark,
  onCreateFolder,
  onDeleteFolder,
  onRenameFolder,
}: MobileFolderListProps) {
  const [contextMenu, setContextMenu] = useState<{
    isOpen: boolean;
    position: { x: number; y: number };
    folderId: string;
  }>({ isOpen: false, position: { x: 0, y: 0 }, folderId: "" });

  const [renamingFolder, setRenamingFolder] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");

  const filteredFolders = data.folders.filter((folder: any) =>
    folder.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContextMenu = (e: React.MouseEvent, folderId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setContextMenu({
      isOpen: true,
      position: { x: e.clientX, y: e.clientY },
      folderId,
    });
  };

  const handleCloseContextMenu = () => {
    setContextMenu({ isOpen: false, position: { x: 0, y: 0 }, folderId: "" });
  };

  const handleRename = () => {
    const folder = data.folders.find((f: any) => f.id === contextMenu.folderId);
    if (folder) {
      setRenamingFolder(contextMenu.folderId);
      setRenameValue(folder.name);
    }
    handleCloseContextMenu();
  };

  const handleRenameSubmit = (folderId: string) => {
    if (renameValue.trim()) {
      onRenameFolder(folderId, renameValue.trim());
    }
    setRenamingFolder(null);
    setRenameValue("");
  };

  const handleRenameCancel = () => {
    setRenamingFolder(null);
    setRenameValue("");
  };

  const handleDelete = () => {
    onDeleteFolder(contextMenu.folderId);
    handleCloseContextMenu();
  };

  const contextMenuItems = [
    {
      icon: Edit,
      label: "Rename",
      onClick: handleRename,
    },
    {
      icon: Trash2,
      label: "Delete Study Set",
      onClick: handleDelete,
      destructive: true,
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-l-blue-500",
      orange: "border-l-orange-500",
      red: "border-l-red-500",
      green: "border-l-green-500",
      purple: "border-l-purple-500",
      pink: "border-l-pink-500",
      yellow: "border-l-yellow-500",
      teal: "border-l-teal-500",
      cyan: "border-l-cyan-500",
    };
    return colorMap[color as keyof typeof colorMap] || "border-l-gray-500";
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Search Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search folders..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Folder List */}
      <div className="flex-1 overflow-y-auto">
        {filteredFolders.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              📁
            </div>
            <p className="text-lg font-medium mb-2">No Folders Yet</p>
            <p className="text-sm text-center mb-6 px-4">
              Start saving your favorite items to access them quickly anytime.
            </p>
            <button
              onClick={onCreateFolder}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create Folder
            </button>
          </div>
        ) : (
          <div className="py-2">
            {filteredFolders.map((folder: any) => (
              <div
                key={folder.id}
                className="border-b border-gray-100 last:border-b-0"
              >
                {/* Folder Header */}
                <div
                  className={`flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer border-l-4 ${getColorClasses(
                    folder.color
                  )}`}
                  onClick={() => onFolderToggle(folder.id)}
                >
                  <div className="flex-1">
                    {renamingFolder === folder.id ? (
                      <input
                        type="text"
                        value={renameValue}
                        onChange={(e) => setRenameValue(e.target.value)}
                        onBlur={() => handleRenameSubmit(folder.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleRenameSubmit(folder.id);
                          } else if (e.key === "Escape") {
                            handleRenameCancel();
                          }
                        }}
                        className="font-medium text-gray-900 text-base bg-white border border-blue-500 rounded px-2 py-1 w-full"
                        autoFocus
                        onClick={(e) => e.stopPropagation()}
                      />
                    ) : (
                      <h3 className="font-medium text-gray-900 text-base">
                        {folder.name}
                      </h3>
                    )}
                    <p className="text-sm text-gray-500">
                      {folder.topicCount} topics
                    </p>
                  </div>
                  <button
                    onClick={(e) => handleContextMenu(e, folder.id)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </button>
                </div>

                {/* Expanded Pages */}
                {expandedFolders.has(folder.id) && folder.pages.length > 0 && (
                  <div className="bg-gray-50">
                    {folder.pages.map((page: any) => (
                      <div
                        key={page.id}
                        className="flex items-center justify-between p-4 pl-8 hover:bg-gray-100 cursor-pointer border-l-4 border-l-transparent"
                        onClick={() => onPageSelect(page.id)}
                      >
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-base">
                            {page.title}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {page.subtitle}
                          </p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleBookmark(folder.id, page.id);
                          }}
                          className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                        >
                          <Bookmark
                            className={`w-4 h-4 ${
                              page.isBookmarked
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-400"
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Empty State for Expanded Folder */}
                {expandedFolders.has(folder.id) &&
                  folder.pages.length === 0 && (
                    <div className="bg-gray-50 p-4 pl-8">
                      <p className="text-sm text-gray-500 italic">
                        No pages in this folder yet
                      </p>
                    </div>
                  )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Create Folder Button */}
      {filteredFolders.length > 0 && (
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={onCreateFolder}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Create Folder
          </button>
        </div>
      )}

      {/* Context Menu */}
      {contextMenu.isOpen && (
        <ContextMenu
          position={contextMenu.position}
          onClose={handleCloseContextMenu}
          items={contextMenuItems}
        />
      )}
    </div>
  );
}
