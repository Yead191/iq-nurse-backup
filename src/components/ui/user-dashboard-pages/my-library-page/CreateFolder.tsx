import React from "react";
interface CreateFolderProps {
  isMobile?: boolean;
  onCreateFolder: () => void;
}
export default function CreateFolder({
  isMobile,
  onCreateFolder,
}: CreateFolderProps) {
  return (
    <div className="flex-1 flex items-center justify-center ">
      <div className="text-center px-4">
        <div
          className={`${
            isMobile ? "w-32 h-32" : "w-24 h-24"
          } mx-auto mb-6 bg-pink-100 rounded-full flex items-center justify-center`}
        >
          <div
            className={`${
              isMobile ? "w-16 h-16" : "w-12 h-12"
            } bg-yellow-400 rounded-lg flex items-center justify-center`}
          >
            <div
              className={`${
                isMobile ? "w-10 h-8" : "w-8 h-6"
              } bg-orange-400 rounded-sm`}
            ></div>
          </div>
        </div>
        <h3
          className={`${
            isMobile ? "text-2xl" : "text-xl"
          } font-medium text-gray-900 mb-2`}
        >
          No Bookmarks Yet
        </h3>
        <p
          className={`text-gray-500 mb-6 ${isMobile ? "text-base" : "text-sm"}`}
        >
          Start saving your favorite items to access them quickly anytime.
        </p>
        <button
          onClick={onCreateFolder}
          className={`bg-blue-900 text-white ${
            isMobile ? "px-8 py-4 text-base" : "px-6 py-3"
          } rounded-lg hover:bg-blue-800 transition-colors`}
        >
          + Create Folder
        </button>
      </div>
    </div>
  );
}
