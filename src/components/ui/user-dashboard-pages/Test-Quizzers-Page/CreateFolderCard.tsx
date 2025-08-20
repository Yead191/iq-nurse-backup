"use client";

import { PiFolderSimpleThin } from "react-icons/pi";

export default function CreateFolderCard() {
  return (
    <div className="relative w-[360px] h-[300px] flex items-center justify-center text-gray-700">
      {/* Folder icon as background */}
      <PiFolderSimpleThin className="w-full h-full text-gray-400" />

      {/* Content inside folder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <span className="inline-flex w-6 h-6 items-center justify-center rounded-[4px] bg-pink-400 text-white text-[16px] font-bold">
            +
          </span>
          <span className="font-medium">Create Folder</span>
        </div>
      </div>
    </div>
  );
}
