"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface QuestionNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  mode: "practice" | "test";
}

export default function QuestionNavigation({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  mode,
}: QuestionNavigationProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between px-4 md:px-0">
      <div className="flex space-x-3">
        <button
          className="px-4 py-2 bg-[#003877] text-white rounded transition-colors cursor-pointer hover:bg-[#003877]/90"
          onClick={() =>
            router.push(`/profile/tests/analyzing-results?mode=${mode}`)
          }
        >
          End
        </button>
        <button className="px-4 py-2 bg-[#003877] text-white rounded transition-colors cursor-pointer hover:bg-[#003877]/90">
          Suspend
        </button>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className={`p-2 rounded transition-colors ${
            canGoPrevious
              ? "bg-[#003877] text-white hover:bg-[#003877]/90 cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={onNext}
          disabled={!canGoNext}
          className={`p-2 rounded transition-colors ${
            canGoNext
              ? "bg-[#003877] text-white hover:bg-[#003877]/90 cursor-pointer"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
