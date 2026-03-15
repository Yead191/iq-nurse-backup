import React from "react";
import { BookOpen, Bookmark, Share2 } from "lucide-react";
export default function TopicHeader({
  topic,
  setIsSaveModalOpen,
  setIsShareModalOpen,
  savedToFolder,
}: {
  topic: any;
  setIsSaveModalOpen: (open: boolean) => void;
  setIsShareModalOpen: (open: boolean) => void;
  savedToFolder: string | null;
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
        <div className="flex items-start gap-3">
          <BookOpen className="w-8 h-8 text-[#2C5F8D] flex-shrink-0" />
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {topic.title}
            </h2>
            <p className="text-sm text-gray-600">{topic.description}</p>
          </div>
        </div>

        {/* Save and Share Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setIsSaveModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 hover:border-[#2C5F8D] transition-colors"
          >
            <Bookmark className="w-4 h-4" />
            <span className="text-xs font-medium">Save</span>
          </button>
          <button
            onClick={() => setIsShareModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#2C5F8D] text-white rounded-lg hover:bg-[#234a6d] transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span className="text-xs font-medium">Share</span>
          </button>
        </div>
      </div>

      {/* Saved Confirmation */}
      {savedToFolder && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-xs text-green-800">
            ✓ Saved to folder successfully!
          </p>
        </div>
      )}
    </div>
  );
}
