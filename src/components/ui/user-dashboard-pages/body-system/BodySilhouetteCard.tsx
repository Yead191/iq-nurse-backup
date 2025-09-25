"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button, Card } from "antd";
import AnatomyImageDisplay from "./AnatomyImageDisplay";

interface BodySystem {
  id: string;
  label: string;
  icon: string;
  title: string;
  images: string[];
}

interface BodySilhouetteCardProps {
  selectedSystem: BodySystem;
  currentImageIndex: number;
  onImageSelect: (index: number) => void;
  onPrevImage: () => void;
  onNextImage: () => void;
}

export default function BodySilhouetteCard({
  selectedSystem,
  currentImageIndex,
  onImageSelect,
  onPrevImage,
  onNextImage,
}: BodySilhouetteCardProps) {
  return (
    <div className="p-4 2xl:p-6 bg-white rounded-xl">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-[90px] bg-gray-100 rounded-lg flex items-center justify-center">
          <Image
            src="/assets/body-icons/organ-img.svg"
            alt="Body silhouette"
            width={44}
            height={77}
            className="opacity-80"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {selectedSystem.title}
          </h2>
          {/* <p className="text-xs text-gray-500">System</p> */}
          <div className="flex items-center gap-2 mb-4 mt-1">
            <Button size="small" onClick={onPrevImage}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex gap-2 overflow-x-auto">
              {selectedSystem.images.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-8 h-8 2xl:w-12 2xl:h-12 rounded-lg border-2 cursor-pointer transition-all ${
                    currentImageIndex === index
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                  onClick={() => onImageSelect(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${selectedSystem.label} view ${index + 1}`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
            <Button size="small" onClick={onNextImage}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <AnatomyImageDisplay
        selectedSystem={selectedSystem}
        currentImageIndex={currentImageIndex}
        onPrevImage={onPrevImage}
        onNextImage={onNextImage}
      />
    </div>
  );
}
