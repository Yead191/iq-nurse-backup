"use client";

import React, { useMemo, use } from "react";
import { LabsReferenceData } from "@/data/labsReferenceData";
import Introduction from "@/components/ui/user-dashboard-pages/labs-reference/component/Introduction";
import SpecimenCollection from "@/components/ui/user-dashboard-pages/labs-reference/component/SpecimenCollection";
import BloodTubes from "@/components/ui/user-dashboard-pages/labs-reference/component/BloodTubes";
import Hematology from "@/components/ui/user-dashboard-pages/labs-reference/component/Hematology";


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
                return <div>Coagulation Content</div>;
            case "bmp":
                return <div>BMP Content</div>;
            case "cmp":
                return <div>CMP Content</div>;
            case "electrolytes":
                return <div>Electrolytes Content</div>;
            case "cardiac-markers":
                return <div>Cardiac Markers Content</div>;
            case "liver-function":
                return <div>Liver Function Content</div>;
            case "renal-function":
                return <div>Renal Function Content</div>;
            case "endocrine":
                return <div>Endocrine Content</div>;
            case "abg-analysis":
                return <div>ABG Analysis Content</div>;
            case "therapeutic-levels":
                return <div>Therapeutic levels Content</div>;
            case "other-labs":
                return <div>Other Labs Content</div>;
            case "study-tips":
                return <div>Study Tips Content</div>;
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
