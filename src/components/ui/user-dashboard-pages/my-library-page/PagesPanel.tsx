"use client";

import { Folder } from "@/data/types";
import { Bookmark } from "lucide-react";

interface PagesPanelProps {
  selectedFolder?: Folder | null;
  selectedPage: string | null;
  onPageSelect: (pageId: string) => void;
  onToggleBookmark: (folderId: string, pageId: string) => void;
}

export default function PagesPanel({
  selectedFolder,
  selectedPage,
  onPageSelect,
  onToggleBookmark,
}: PagesPanelProps) {
  // Empty state when no folder is selected
  if (!selectedFolder) {
    return (
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 pt-10.5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mt-4">
            Select a folder
          </h2>
        </div>
        <div className="flex-1 flex items-center justify-center text-gray-500">
          <p className="text-sm">Choose a folder to view its pages</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 pt-10.5 border-b border-gray-200">
        <div className="flex items-center justify-between mt-4">
          <h2 className="text-lg font-medium text-gray-900">
            {selectedFolder.name}
          </h2>
        </div>
      </div>

      {/* Pages List */}
      <div className="flex-1 overflow-y-auto pt-2">
        {selectedFolder.pages.length === 0 ? (
          <div className="flex items-center justify-center h-32 text-gray-500">
            <p className="text-sm">No pages in this folder</p>
          </div>
        ) : (
          selectedFolder.pages.map((page) => (
            <div
              key={page.id}
              onClick={() => onPageSelect(page.id)}
              className={`flex items-center justify-between m-2 px-4 py-2 rounded-xl cursor-pointer border-b border-gray-100 ${
                selectedPage === page.id
                  ? "bg-[#D8ECFE] border-[#D8ECFE]"
                  : "border border-[#C5D0D0] hover:bg-gray-50"
              }`}
            >
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 mb-1">
                  {page.title}
                </div>
                <div className="text-xs text-gray-500 line-clamp-2">
                  {page.subtitle}
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark(selectedFolder.id, page.id);
                }}
                className="p-1 hover:bg-gray-200 rounded ml-2 flex-shrink-0"
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
          ))
        )}
      </div>
    </div>
  );
}
