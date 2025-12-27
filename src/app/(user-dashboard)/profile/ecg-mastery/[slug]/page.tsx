"use client";

import React, { useMemo } from "react";
import { ecgReferenceData } from "@/data/ecg/ecgReferenceData";
import ECGIntroPage from "@/components/ui/user-dashboard-pages/ecg-mastery/pages/foundations/ECGIntro";
import CardiacConductionPage from "@/components/ui/user-dashboard-pages/ecg-mastery/pages/foundations/CardiacConductionPage";
import ECGWaveformsPage from "@/components/ui/user-dashboard-pages/ecg-mastery/pages/foundations/ECGWaveformsPage";
import NsrPage from "@/components/ui/user-dashboard-pages/ecg-mastery/pages/nsr/NsrPage";
import SinusTachyPage from "@/components/ui/user-dashboard-pages/ecg-mastery/pages/nsr/SinusTachyPage";
import LeadPlacementPage from "@/components/ui/user-dashboard-pages/ecg-mastery/pages/foundations/LeadPlacementPage";

export default function EcgContentPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const content = useMemo(() => {
    return ecgReferenceData.find((item) => item.id === slug);
  }, [slug]);

  const renderContent = () => {
    switch (slug) {
      case "intro":
        return <ECGIntroPage />;
      case "cardiac-conduction":
        return <CardiacConductionPage />;
      case "ecg-waveforms":
        return <ECGWaveformsPage />;
      case "nsr":
        return <NsrPage />;
      case "sinus-tachy":
        return <SinusTachyPage />;
      case "lead-placement":
        return <LeadPlacementPage />;
      case "second-degree":
        return <div>Respiration Section Content</div>;
      case "blood-pressure":
        return <div>Blood Pressure Section Content</div>;
      case "pain-assessment":
        return <div>Pain Assessment Section Content</div>;
      case "documentation-guidelines":
        return <div>Documentation Guidelines Section Content</div>;
      case "factors-affecting":
        return <div>Factors Affecting Section Content</div>;
      case "reference-guide":
        return <div>Reference Guide Section Content</div>;
      default:
        return <div>Content coming soon...</div>;
    }
  };

  if (!content) {
    return <div className="p-4">Content not found for {slug}</div>;
  }

  return (
    <div className="px-4 lg:px-0">
      <div className=" h-full">{renderContent()}</div>
    </div>
  );
}
