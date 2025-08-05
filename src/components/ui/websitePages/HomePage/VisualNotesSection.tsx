import FeatureBlock from "@/components/shared/home-shared/FeatureBlock";
import SecondaryHeading from "@/components/shared/home-shared/SecondaryHeading";
import Image from "next/image";
import React from "react";

export default function VisualNotesSection() {
  return (
    <div className="container mx-auto p-4 my-12 min-h-screen flex flex-col items-center justify-center">
      <SecondaryHeading title="Visual Notes That Make Sense" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
        {/* left img */}
        <div>
          <Image
            src={"/assets/home-images/visual-img.png"}
            width={550}
            height={527}
            alt="visual notes"
            className="w-auto h-auto object-cover"
          />
        </div>
        <FeatureBlock
          features={[
            "Tired, overwhelmed, or on-the-go? Our illustrated, easy-to-digest notes help you absorb key concepts fast.",
            "Egestas lorem eget",
            "Tellus eget feugiat sit",
          ]}
        />
      </div>
    </div>
  );
}
