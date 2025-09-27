import React from "react";
import BannerHome from "./BannerHome";
import WhyJoinUsSection from "./why-join-us-section/WhyJoinUsSection";
import NCLEXSection from "./NCLEXSection";
import NursingPlannerSection from "./NursingPlannerSection";
import SmartFlashcardsSection from "./SmartFlashcardsSection";
import RapidClinicalSection from "./RapidClinicalSection";
import VisualNotesSection from "./VisualNotesSection";
import FeaturesSection from "./FeaturesSection";
import Footer from "@/components/shared/Footer";

export default function HomePageLayout() {
  return (
    <main>
      <BannerHome />
      <WhyJoinUsSection />
      <NCLEXSection />
      <NursingPlannerSection />
      <SmartFlashcardsSection />
      <RapidClinicalSection />
      <VisualNotesSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
