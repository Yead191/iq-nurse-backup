import FeatureBlock from "@/components/shared/home-shared/FeatureBlock";
import SecondaryHeading from "@/components/shared/home-shared/SecondaryHeading";
import Image from "next/image";
import React from "react";

export default function SmartFlashcardsSection() {
  return (
    <section className="container mx-auto p-4 my-12 min-h-screen flex flex-col justify-center items-center">
      <SecondaryHeading title="Smart Flashcards with Spaced Repetition" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center  items-center ">
        {/* left img */}
        <div>
          <Image
            src={"/assets/home-images/flashcard-img.png"}
            width={640}
            height={627}
            alt="flashcard-img"
            className="h-auto w-auto"
          />
        </div>
        {/* right content */}
        <FeatureBlock
          features={[
            "Master meds, lab values, procedures, and more with intelligent flashcards that help you remember what matters .",
            "Habitant integer interdum a",
            "Tempus natoque id",
          ]}
        />
      </div>
    </section>
  );
}
