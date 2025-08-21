"use client";

import { PiFolderSimpleThin } from "react-icons/pi";

interface CreateFolderCardProps {
  onClick: () => void;
}

export default function CreateFolderCard({ onClick }: CreateFolderCardProps) {
  return (
    <div
      className=" w-full cursor-pointer transition-transform duration-300 hover:-translate-y-1  px-2 lg:px-12 h-[150px] lg:h-[270px] flex flex-col justify-center items-center  overflow-visible "
      onClick={onClick}
      style={{
        backgroundImage: "url('/assets/icons/folder-icon.svg')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center gap-2">
        <span className="inline-flex w-6 h-6 items-center justify-center rounded-[4px] bg-pink-500 text-white text-[16px] font-bold">
          +
        </span>
        <span className="font-medium">Create Folder</span>
      </div>
    </div>
  );
}
