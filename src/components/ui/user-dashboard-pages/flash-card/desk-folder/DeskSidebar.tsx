"use client";

import React, { useState } from "react";
import {
  FolderClosed,
  MoreVertical,
  Search,
  Plus,
  Edit,
  Trash2,
  FolderOpen,
} from "lucide-react";
import { LibraryData, Folder, Page } from "@/data/types";
import { Input, Dropdown, MenuProps } from "antd";

interface DeskSidebarProps {
  data: LibraryData;
  expandedFolders: Set<string>;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onFolderToggle: (folderId: string) => void;
  onPageSelect: (folderId: string, pageId: string) => void;
  onCreateFolder: () => void;
  onCreateFlashcard: () => void;
  onDeleteFolder: (folderId: string) => void;
  onRenameFolder: (folderId: string, newName: string) => void;
  selectedFolder?: string | null;
  selectedPage?: string | null;
}

export default function DeskSidebar({
  data,
  expandedFolders,
  searchQuery,
  onSearchChange,
  onFolderToggle,
  onPageSelect,
  onCreateFolder,
  onCreateFlashcard,
  onDeleteFolder,
  onRenameFolder,
  selectedFolder,
  selectedPage,
}: DeskSidebarProps) {
  const [renamingFolder, setRenamingFolder] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");

  const filteredFolders = data.folders.filter((folder: Folder) =>
    folder.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRenameSubmit = (folderId: string) => {
    if (renameValue.trim()) {
      onRenameFolder(folderId, renameValue.trim());
    }
    setRenamingFolder(null);
    setRenameValue("");
  };

  const menuItems = (folderId: string): MenuProps["items"] => [
    {
      key: "rename",
      label: "Rename",
      icon: <Edit size={14} />,
      onClick: ({ domEvent }) => {
        domEvent.stopPropagation();
        const folder = data.folders.find((f: Folder) => f.id === folderId);
        if (folder) {
          setRenamingFolder(folderId);
          setRenameValue(folder.name);
        }
      },
    },
    {
      key: "delete",
      label: "Delete",
      icon: <Trash2 size={14} />,
      danger: true,
      onClick: ({ domEvent }) => {
        domEvent.stopPropagation();
        onDeleteFolder(folderId);
      },
    },
  ];

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
      {/* Header Section */}
      <div className="p-4 border-b border-gray-100 bg-gray-50/50">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Study Desk</h2>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-2 mb-4">
          <button
            onClick={onCreateFolder}
            className="flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm text-sm font-medium"
          >
            <FolderClosed size={16} />
            New Folder
          </button>
          <button
            onClick={onCreateFlashcard}
            className="flex items-center justify-center gap-2 px-3 py-2 bg-primary! text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm text-sm font-medium"
          >
            <Plus size={16} />
            New Deck
          </button>
        </div>

        {/* Search */}
        <Input
          placeholder="Search folders..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          prefix={<Search className="text-gray-400 w-4 h-4" />}
          className="rounded-lg border-gray-200"
        />
      </div>

      {/* Folders List */}
      <div className="flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-gray-200">
        {filteredFolders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-gray-400">
            <FolderClosed size={48} className="mb-2 opacity-20" />
            <p className="text-sm">No folders found</p>
          </div>
        ) : (
          <div className="space-y-1">
            {filteredFolders.map((folder: Folder) => (
              <div key={folder.id} className="select-none">
                {/* Folder Item */}
                <div
                  className={`group flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                    selectedFolder === folder.id
                      ? "bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => onFolderToggle(folder.id)}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div
                      className={`shrink-0 transition-transform duration-200 ${
                        expandedFolders.has(folder.id) ? "rotate-90" : ""
                      }`}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-400"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>

                    <FolderClosed
                      className={`shrink-0 w-5 h-5 ${
                        selectedFolder === folder.id
                          ? "fill-blue-200 text-blue-600"
                          : "text-gray-500"
                      }`}
                      style={
                        selectedFolder !== folder.id
                          ? { color: folder.color }
                          : {}
                      }
                    />

                    <div className="flex-1 truncate">
                      {renamingFolder === folder.id ? (
                        <input
                          type="text"
                          value={renameValue}
                          onChange={(e) => setRenameValue(e.target.value)}
                          onBlur={() => handleRenameSubmit(folder.id)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter")
                              handleRenameSubmit(folder.id);
                            if (e.key === "Escape") setRenamingFolder(null);
                          }}
                          autoFocus
                          className="w-full bg-white border border-blue-400 rounded px-1 text-sm focus:outline-none"
                          onClick={(e) => e.stopPropagation()}
                        />
                      ) : (
                        <div className="flex flex-col">
                          <span
                            className={`text-sm font-medium truncate ${
                              selectedFolder === folder.id
                                ? "text-blue-900"
                                : "text-gray-700"
                            }`}
                          >
                            {folder.name}
                          </span>
                          <span className="text-[10px] text-gray-400">
                            {folder.topicCount || folder.pages.length} decks
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <Dropdown
                    menu={{ items: menuItems(folder.id) }}
                    trigger={["click"]}
                  >
                    <button
                      className={`p-1 rounded-full hover:bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MoreVertical size={14} className="text-gray-500" />
                    </button>
                  </Dropdown>
                </div>

                {/* Pages (Decks) List */}
                {expandedFolders.has(folder.id) && (
                  <div className="mt-1 ml-4 pl-3 border-l border-gray-100 space-y-0.5">
                    {folder.pages.map((page: Page) => (
                      <div
                        key={page.id}
                        onClick={() => onPageSelect(folder.id, page.id)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer text-sm transition-colors ${
                          selectedPage === page.id
                            ? "bg-blue-100 text-blue-700 font-medium"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            selectedPage === page.id
                              ? "bg-blue-500"
                              : "bg-gray-400"
                          }`}
                        />
                        <span className="truncate flex-1">{page.title}</span>
                      </div>
                    ))}
                    {folder.pages.length === 0 && (
                      <div className="px-3 py-2 text-xs text-gray-400 italic">
                        No decks yet
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
