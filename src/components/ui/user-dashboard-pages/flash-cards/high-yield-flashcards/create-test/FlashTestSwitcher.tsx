import React from "react";

interface Props {
  isFlipped: boolean;
  onShowFront: () => void;
  onShowBack: () => void;
}

const FlashTestSwitcher: React.FC<Props> = ({ isFlipped, onShowFront, onShowBack }) => (
  <div className="flex items-center justify-end gap-x-1 mb-0">
    <div
      onClick={onShowFront}
      className={`text-sm font-medium px-5 py-1 rounded shadow cursor-pointer ${
        !isFlipped ? "text-gray-700 bg-white" : "text-black bg-[#D9D9D9] border border-gray-400"
      }`}
    >
      Front
    </div>
    <div
      onClick={onShowBack}
      className={`text-sm font-medium px-5 py-1 rounded shadow cursor-pointer ${
        isFlipped ? "text-gray-700 bg-white" : "text-black bg-[#D9D9D9] border border-gray-400"
      }`}
    >
      Back
    </div>
  </div>
);

export default FlashTestSwitcher;
