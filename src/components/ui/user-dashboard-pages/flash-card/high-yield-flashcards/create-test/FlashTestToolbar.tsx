import React from "react";
import { TbArrowsShuffle } from "react-icons/tb";
import { BsStar, BsStarFill } from "react-icons/bs";

interface Props {
  title: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const FlashTestToolbar: React.FC<Props> = ({ title, isFavorite, onToggleFavorite }) => (
  <div className="flex justify-between items-center py-2">
    <p className="text-[16px] font-medium text-black">{title}</p>
    <div className="flex items-center gap-1">
      <TbArrowsShuffle size={18} color="#000" />
      <button onClick={onToggleFavorite} className="text-[#FFDA47]">
        {isFavorite ? <BsStar size={18} /> : <BsStarFill size={18} />}
      </button>
    </div>
  </div>
);

export default FlashTestToolbar;