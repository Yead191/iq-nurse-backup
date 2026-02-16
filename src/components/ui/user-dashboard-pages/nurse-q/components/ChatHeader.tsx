import { Bot, Minimize2, X } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
  onClear: () => void;
}

export function ChatHeader({ onClose, onClear }: ChatHeaderProps) {
  return (
    <div className="px-3 py-2.5 lg:px-4 lg:py-3 flex justify-between items-center bg-[#2C5F8D] text-white shadow-sm shrink-0">
      <div className="flex items-center gap-3">
        <div className="p-1.5 bg-white/10 rounded-lg">
          <Bot className="w-5 h-5 lg:w-[22px] lg:h-[22px] text-white" />
        </div>
        <div className="flex flex-col leading-tight">
          <p className="font-semibold text-sm lg:text-[15px]">IQ Nurse</p>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] lg:text-[11px] text-emerald-50/80 font-medium tracking-wide">
              Online
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <div
          onClick={onClose}
          className="flex items-center justify-center text-white border-none h-8 w-8 cursor-pointer hover:bg-white/10 rounded transition-colors"
        >
          <Minimize2 className="w-4 h-4 lg:w-[18px] lg:h-[18px] text-white" />
        </div>
        <div
          onClick={onClear}
          className="flex items-center justify-center text-white border-none h-8 w-8 cursor-pointer hover:bg-white/10 rounded transition-colors"
        >
          <X className="w-4 h-4 lg:w-[18px] lg:h-[18px] text-white" />
        </div>
      </div>
    </div>
  );
}
