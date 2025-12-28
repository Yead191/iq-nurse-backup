"use client";

import React, { useMemo, use } from "react";
import { LabsReferenceData } from "@/data/labsReferenceData";
import Introduction from "@/components/ui/user-dashboard-pages/labs-reference/component/Introduction";
import SpecimenCollection from "@/components/ui/user-dashboard-pages/labs-reference/component/SpecimenCollection";
import BloodTubes from "@/components/ui/user-dashboard-pages/labs-reference/component/BloodTubes";
import Hematology from "@/components/ui/user-dashboard-pages/labs-reference/component/Hematology";
import Coagulation from "@/components/ui/user-dashboard-pages/labs-reference/component/Coagulation";
import BMP from "@/components/ui/user-dashboard-pages/labs-reference/component/BMP";
import Electrolytes from "@/components/ui/user-dashboard-pages/labs-reference/component/Electrolytes";
import CMP from "@/components/ui/user-dashboard-pages/labs-reference/component/CMP";
import CardiacMarkers from "@/components/ui/user-dashboard-pages/labs-reference/component/CardiacMarkers";
import LiverFunction from "@/components/ui/user-dashboard-pages/labs-reference/component/LiverFunction";
import RenalFunction from "@/components/ui/user-dashboard-pages/labs-reference/component/RenalFunction";
import Endocrine from "@/components/ui/user-dashboard-pages/labs-reference/component/Endocrine";
import ABGAnalysis from "@/components/ui/user-dashboard-pages/labs-reference/component/ABGAnalysis";
import TherapeuticLevels from "@/components/ui/user-dashboard-pages/labs-reference/component/TherapeuticLevels";
import OtherLabs from "@/components/ui/user-dashboard-pages/labs-reference/component/OtherLabs";
import StudyTips from "@/components/ui/user-dashboard-pages/labs-reference/component/StudyTips";


export default function LabsContentPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);

    const content = useMemo(() => {
        return LabsReferenceData.find((item) => item.id === slug);
    }, [slug]);

    const renderContent = () => {
        switch (slug) {
            case "introduction":
                return <Introduction />;
            case "specimen-collection":
                return <SpecimenCollection />;
            case "blood-tubes":
                return <BloodTubes />;
            case "hematology-cbc":
                return <Hematology />;
            case "coagulation":
                return <Coagulation />;
            case "bmp":
                return <BMP />;
            case "cmp":
                return <CMP />;
            case "electrolytes":
                return <Electrolytes />;
            case "cardiac-markers":
                return <CardiacMarkers />;
            case "liver-function":
                return <LiverFunction />;
            case "renal-function":
                return <RenalFunction />;
            case "endocrine":
                return <Endocrine />;
            case "abg-analysis":
                return <ABGAnalysis />;
            case "therapeutic-levels":
                return <TherapeuticLevels />;
            case "other-labs":
                return <OtherLabs />;
            case "study-tips":
                return <StudyTips />;
            default:
                return <div>Content coming soon...</div>;
        }
    };

    if (!content) {
        return <div className="p-4">Content not found for {slug}</div>;
    }

    return (
        <div className="p-6">
            <div className=" h-full">
                {renderContent()}
            </div>
        </div>
    );
}
