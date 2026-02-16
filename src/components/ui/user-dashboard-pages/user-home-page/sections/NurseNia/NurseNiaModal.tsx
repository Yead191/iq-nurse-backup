import React from "react";
import NurseChat from "../../../nurse-q/NurseChat";

export default function NurseNiaModal({ open, onClose }: any) {
  return (
    <div className="fixed bottom-6 right-6 z-50 w-[420px] h-[650px] bg-[#f8fafc] rounded-lg shadow-2xl">
      <NurseChat open={open} onClose={onClose} />
    </div>
  );
}
