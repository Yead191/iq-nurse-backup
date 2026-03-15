import { ArrowRight, Bookmark, Share2 } from "lucide-react";
import React from "react";

export default function EcgHeading({
  content,
  setShowSaveDialog,
  setShowShareDialog,
}: {
  content: any;
  setShowSaveDialog: (show: boolean) => void;
  setShowShareDialog: (show: boolean) => void;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 border-b border-gray-100 pb-6">
      <div>
        <h1 className=" text-[28px] lg:text-3xl font-bold text-gray-900">
          Welcome to {content.title}
        </h1>
        <p className="section-subtitle pt-2">{content.description}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setShowSaveDialog(true)}
          className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors border border-gray-200"
        >
          <Bookmark className="size-4" />
          Save
        </button>
        <button
          onClick={() => setShowShareDialog(true)}
          className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors border border-gray-200"
        >
          <Share2 className="size-4" />
          Share
        </button>
      </div>
    </div>
  );
}
