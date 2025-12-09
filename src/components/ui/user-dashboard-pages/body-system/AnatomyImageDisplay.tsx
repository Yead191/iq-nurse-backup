"use client";

import { isVideo } from "@/helpers/isVideo";
import Image from "next/image";

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
  const mediaUrl = selectedSystem.images[currentImageIndex];
  const isVideoFile = isVideo(mediaUrl);

  return (
    <div className="relative h-[calc(100vh-395px)] lg:h-[calc(100vh-400px)] flex items-center justify-center">
      {/* VIDEO MODE */}
      {isVideoFile ? (
        <video
          src={mediaUrl}
          controls
          className="w-full h-full object-contain rounded-lg"
        />
      ) : (
        <Image
          src={mediaUrl || "/placeholder.svg"}
          alt={`${selectedSystem.title} anatomy`}
          width={400}
          height={600}
          className="w-full h-full object-contain"
        />
      )}

      {/* Navigation Arrows — only if more than 1 */}
      {/* {selectedSystem.images.length > 1 && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 px-2 py-1 rounded"
            onClick={onPrevImage}
          >
            ◀
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 px-2 py-1 rounded"
            onClick={onNextImage}
          >
            ▶
          </button>
        </>
      )} */}
    </div>
  );
}
