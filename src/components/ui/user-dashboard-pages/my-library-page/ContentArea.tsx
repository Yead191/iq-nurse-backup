"use client";

import { Folder, Page } from "@/data/types";
import CreateFolder from "./CreateFolder";
import Image from "next/image";

interface ContentAreaProps {
  selectedFolder?: Folder | null;
  selectedPage?: Page | null;
  onCreateFolder: () => void;
  isMobile?: boolean;
}

export default function ContentArea({
  selectedFolder,
  selectedPage,
  onCreateFolder,
  isMobile = false,
}: ContentAreaProps) {
  console.log(selectedFolder, selectedPage, isMobile);
  return (
    <>
      {!selectedFolder && !selectedPage ? (
        // Display a message when no folder or page is selected
        <CreateFolder isMobile={isMobile} onCreateFolder={onCreateFolder} />
      ) : selectedPage?.content ? (
        <div className="flex-1 bg-white overflow-y-auto  ">
          <div className={`max-w-4xl mx-auto ${isMobile ? "p-4" : "p-8"}`}>
            <img
              src={selectedPage?.content.image}
              alt="page image"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      ) : (
        // Fallback content when no page is selected
        <div className="flex-1 flex items-center justify-center lg:min-h-[calc(100vh-195px)] ">
          <div className="text-center px-4">
            <h3
              className={`${
                isMobile ? "text-xl" : "text-xl"
              } font-medium text-gray-900 mb-2`}
            >
              Select a page to view content
            </h3>
            <p
              className={`text-gray-500 ${isMobile ? "text-base" : "text-sm"}`}
            >
              Choose a page from the {selectedFolder?.name} folder to see its
              content.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
