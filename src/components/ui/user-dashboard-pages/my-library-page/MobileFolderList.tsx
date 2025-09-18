"use client";

import type React from "react";

import { useState } from "react";
import {
  Plus,
  MoreVertical,
  Bookmark,
  Edit,
  Trash2,
  Search,
} from "lucide-react";
import ContextMenu from "./ContextMenu";
import { LibraryData } from "@/data/types";
import Input from "antd/es/input/Input";

interface MobileFolderListProps {
  data: LibraryData;
  expandedFolders: Set<string>;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onFolderToggle: (folderId: string) => void;
  onPageSelect: any;
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
    <div className="flex flex-col h-full ">
      {/* Search Header */}
      <div className="pb-4 px-0.5 border-b border-gray-200">
        <Input
          placeholder="Search folders..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          prefix={<Search className="text-gray-400" />}
          style={{ height: "40px", borderRadius: "8px" }}
        />
      </div>

      {/* Folder List */}
      <div className="flex-1 overflow-y-auto max-h-[calc(100vh-245px)]">
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
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create Folder
            </button>
          </div>
        ) : (
          <div className="py-2 space-y-4">
            {filteredFolders.map((folder: any) => (
              <div
                key={folder.id}
                className="border-b border-gray-100 last:border-b-0"
              >
                {/* Folder Header */}
                <div
                  className={`flex items-center justify-between p-4 py-1.5 hover:bg-gray-50 cursor-pointer border-l-5 rounded-t-md rounded-b-md  ${getColorClasses(
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
                  <div className="">
                    {folder.pages.map((page: any) => (
                      <div
                        key={page.id}
                        className="flex items-center justify-between m-2 px-4 py-2 rounded-xl cursor-pointer border-b  border border-[#C5D0D0] hover:bg-gray-50"
                        onClick={() => onPageSelect(folder.id, page.id)}
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
                                ? "text-black fill-current"
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
            className="w-full bg-primary text-white py-3 rounded-lg  transition-colors flex items-center justify-center gap-2"
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
