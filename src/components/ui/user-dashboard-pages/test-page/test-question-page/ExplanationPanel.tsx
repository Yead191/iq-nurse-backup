"use client";

import { Lightbulb } from "lucide-react";
import Image from "next/image";

interface ExplanationPanelProps {
  explanation: string;
  imageUrl?: string;
  isVisible: boolean;
}

export default function ExplanationPanel({
  explanation,
  imageUrl,
  isVisible,
}: ExplanationPanelProps) {
  if (!isVisible) return null;

  return (
    <div className="pb-4">
      <div className="flex items-center space-x-2 text-orange-600 font-medium mb-3">
        <Lightbulb className="w-5 h-5" />
        <span>Explanation</span>
      </div>

      <div className="p-4 bg-orange-50 rounded-lg space-y-4">
        {imageUrl && (
          <div className="flex justify-center">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt="Explanation illustration"
              width={400}
              height={300}
              className="h-[280px] lg:h-[300px] w-full object-contain"
            />
          </div>
        )}
        <p className="text-gray-700 leading-relaxed">{explanation}</p>
      </div>
    </div>
  );
}
