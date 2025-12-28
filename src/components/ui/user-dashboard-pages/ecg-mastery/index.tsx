"use client";

import React, { useMemo } from "react";
import { ecgReferenceData } from "@/data/ecg/ecgReferenceData";
import ECGIntroPage from "@/components/ui/user-dashboard-pages/ecg-mastery/pages/foundations/ECGIntro";
import CardiacConductionPage from "@/components/ui/user-dashboard-pages/ecg-mastery/pages/foundations/CardiacConductionPage";
import ECGWaveformsPage from "@/components/ui/user-dashboard-pages/ecg-mastery/pages/foundations/ECGWaveformsPage";
import NsrPage from "@/components/ui/user-dashboard-pages/ecg-mastery/pages/nsr/NsrPage";
import SinusTachyPage from "@/components/ui/user-dashboard-pages/ecg-mastery/pages/nsr/SinusTachyPage";
import SinusBradycardiaPage from "@/components/ui/user-dashboard-pages/ecg-mastery/pages/nsr/SinusBradycardiaPage";
import AtrialFibrillationPage from "@/components/ui/user-dashboard-pages/ecg-mastery/pages/atrial-arrhythmias/AtrialFibrillationPage";
import AtrialFlutter from "@/components/ui/user-dashboard-pages/ecg-mastery/pages/atrial-arrhythmias/AtrialFlutter";
import SupraventricularTachycardiaPage from "@/components/ui/user-dashboard-pages/ecg-mastery/pages/atrial-arrhythmias/SupraventricularTachycardiaPage";
import LeadPlacementPage from "@/components/ui/user-dashboard-pages/ecg-mastery/pages/foundations/LeadPlacementPage";
import FirstDegree from "./pages/heart-blocks/FirstDegree";
import SecondDegree from "./pages/heart-blocks/SecondDegree";
import ThirdDegree from "./pages/heart-blocks/ThirdDegree";
import PacemakerPage from "./pages/advanced-topics/PacemakerPage";
import AcuteCoronaryPage from "./pages/advanced-topics/AcuteCoronaryPage";

type Props = {
  slug: string;
};

export default function EcgContentClient({ slug }: Props) {
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
      case "sinus-brady":
        return <SinusBradycardiaPage />;
      case "afib":
        return <AtrialFibrillationPage />;
      case "aflutter":
        return <AtrialFlutter />;
      case "svt":
        return <SupraventricularTachycardiaPage />;
      case "lead-placement":
        return <LeadPlacementPage />;
      case "first-degree":
        return <FirstDegree />;
      case "second-degree":
        return <SecondDegree />;
      case "third-degree":
        return <ThirdDegree />;
      case "pacemaker":
        return <PacemakerPage />;
      case "acute-coronary":
        return <AcuteCoronaryPage />;
      default:
        return <div>Content coming soon...</div>;
    }
  };

  if (!content) {
    return <div className="p-4">Content not found for {slug}</div>;
  }

  return (
    <div className="px-4 lg:px-0">
      <div className="h-full">{renderContent()}</div>
    </div>
  );
}
