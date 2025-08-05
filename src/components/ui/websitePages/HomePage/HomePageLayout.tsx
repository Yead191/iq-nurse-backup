import React from "react";
import BannerHome from "./BannerHome";
import WhyJoinUsSection from "./WhyJoinUsSection";
import NCLEXSection from "./NCLEXSection";
import NursingPlannerSection from "./NursingPlannerSection";
import SmartFlashcardsSection from "./SmartFlashcardsSection";
import RapidClinicalSection from "./RapidClinicalSection";
import VisualNotesSection from "./VisualNotesSection";

export default function HomePageLayout() {
  return (
    <div>
      <BannerHome />
      <WhyJoinUsSection />
      <NCLEXSection />
      <NursingPlannerSection />
      <SmartFlashcardsSection />
      <RapidClinicalSection />
      <VisualNotesSection />
    </div>
  );
}
