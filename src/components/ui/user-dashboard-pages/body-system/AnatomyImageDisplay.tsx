"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button, Card } from "antd";

interface BodySystem {
  id: string;
  label: string;
  icon: string;
  title: string;
  images: string[];
}

interface AnatomyImageDisplayProps {
  selectedSystem: BodySystem;
  currentImageIndex: number;
  onPrevImage: () => void;
  onNextImage: () => void;
}

export default function AnatomyImageDisplay({
  selectedSystem,
  currentImageIndex,
  onPrevImage,
  onNextImage,
}: AnatomyImageDisplayProps) {
  return (
    <div className="relative h-[calc(100vh-400px)] flex items-center justify-center">
      <Image
        src={selectedSystem.images[currentImageIndex] || "/placeholder.svg"}
        alt={`${selectedSystem.title} anatomy`}
        width={400}
        height={600}
        className="w-full h-full object-contain"
      />

      {/* {selectedSystem.images.length > 1 && (
        <>
          <Button
            size="small"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={onPrevImage}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            size="small"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={onNextImage}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </>
      )} */}
    </div>
  );
}
