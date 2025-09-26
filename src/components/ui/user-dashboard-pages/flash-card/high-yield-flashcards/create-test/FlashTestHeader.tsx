"use client";

import React from "react";
import { IoMdClose } from "react-icons/io";

interface FlashTestHeaderProps {
  handleClose: () => void; 
}

const FlashTestHeader: React.FC<FlashTestHeaderProps> = ({ handleClose }) => {
  return (
    <div className="bg-[#003877] py-2 flex items-center justify-between px-6">
      <h1 className="text-[16px] md:text-sm font-normal text-white">Flashcard</h1>
      <button onClick={handleClose} className="text-white cursor-pointer">
        <IoMdClose size={14} />
      </button>
    </div>
  );
};

export default FlashTestHeader;
