"use client";

import { useState } from "react";
import Image from "next/image";
import { StickyNote, Bookmark, ChevronUp, Share2 } from "lucide-react";
import { BodySystem, bodySystems } from "@/data/bodySystemData";
import SystemContentPanel from "./SystemContentPanel";
import BodySilhouetteCard from "./BodySilhouetteCard";
import { Button, Grid } from "antd";
import MobileNotesDrawer from "./MobileNotesDrawer";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import DetailsHeader from "@/components/shared/DetailsHeader";
import { toast } from "sonner";
import CategoryButtons from "@/components/shared/CategoryButtons ";

export default function BodySystemMain() {
  const { lg } = Grid.useBreakpoint();
  const [selectedSystem, setSelectedSystem] = useState<BodySystem>(
    bodySystems[0],
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  const handleSystemSelect = (system: BodySystem) => {
    setSelectedSystem(system);
    setCurrentImageIndex(0);
    setShowNotes(false);
  };

  const handleImageSelect = (index: number) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedSystem.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedSystem.images.length - 1 : prev - 1,
    );
  };

  const toggleNotes = () => {
    setShowNotes(!showNotes);
  };

  return (
    <div className="lg:min-h-screen bg-[#F4F4F4] pt-6">
      {lg ? (
        <PageNavbar
          icon={
            <Image
              src="/assets/icons/header/body-icon.svg"
              alt="NCLEX"
              width={50}
              height={50}
              draggable={false}
              className="w-fit h-[40px] object-contain"
            />
          }
          title="Body Systems"
          topics={12}
        />
      ) : (
        <DetailsHeader
          title={selectedSystem?.title}
          primaryBg={false}
          actions={[
            {
              icon: Bookmark,
              label: "Bookmark",
              hoverColor: "text-blue-600",
              onClick: () => toast.success("Bookmarked!"),
            },
            {
              icon: Share2,
              label: "Share",
              hoverColor: "text-green-600",
              className: "text-[#02478D] fill-current",
              onClick: () => toast.success("Shared!"),
            },
          ]}
        />
      )}
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="px-4 lg:px-5 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 2xl:gap-6">
            {/* Left Column */}
            <div className="space-y-6 lg:col-span-6 ">
              <BodySilhouetteCard
                selectedSystem={selectedSystem}
                currentImageIndex={currentImageIndex}
                onImageSelect={handleImageSelect}
                onPrevImage={prevImage}
                onNextImage={nextImage}
              />

              <CategoryButtons
                categories={bodySystems}
                selectedCategory={selectedSystem}
                onCategorySelect={handleSystemSelect}
              />
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6 ">
              <div className="grid grid-cols-1  gap-6 h-full">
                <SystemContentPanel selectedSystem={selectedSystem} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden min-h-[calc(100vh-56px)]  ">
        <div className="relative  flex flex-col h-full">
          {/* Main Content Area */}
          <div className="flex-1 relative overflow-hidden h-full">
            <BodySilhouetteCard
              selectedSystem={selectedSystem}
              currentImageIndex={currentImageIndex}
              onImageSelect={handleImageSelect}
              onPrevImage={prevImage}
              onNextImage={nextImage}
            />
          </div>

          <div className="">
            <div
              onClick={toggleNotes}
              className="flex items-center justify-between mb-2  p-4"
            >
              <Button
                // variant={showNotes ? "default" : "outline"}
                size="small"
                className="!flex !items-center gap-2 !justify-between !w-full !h-[40px] bg-white"
              >
                <span className="flex items-center gap-2">
                  <StickyNote className="w-4 h-4" />
                  {selectedSystem.title} Notes
                </span>
                <ChevronUp className="w-4 h-4" />
              </Button>
            </div>

            <div className="overflow-x-auto ">
              <div className="flex gap-3 pb-4">
                {bodySystems?.map((system) => (
                  <button
                    key={system.id}
                    className={`flex-shrink-0 w-12 h-12 rounded-full border-2 transition-all ${
                      selectedSystem.id === system.id
                        ? "border-[#000000] bg-[#374A68] scale-105"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                    onClick={() => handleSystemSelect(system)}
                  >
                    <Image
                      src={system.icon || "/placeholder.svg"}
                      alt={system.label}
                      width={32}
                      height={32}
                      className={`w-full h-full object-cover rounded-full p-2 ${selectedSystem.id === system.id ? "white-icon-filter" : ""}`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <MobileNotesDrawer
            selectedSystem={selectedSystem}
            showNotes={showNotes}
            onToggleNotes={toggleNotes}
          />
        </div>
      </div>
    </div>
  );
}
