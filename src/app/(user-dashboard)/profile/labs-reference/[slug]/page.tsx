"use client";

import React, { useMemo } from "react";
import { LabsReferenceData } from "@/data/labsReferenceData";
import Introduction from "@/components/ui/user-dashboard-pages/labs-reference/component/Introduction";
import Temperature from "@/components/ui/user-dashboard-pages/labs-reference/component/Temperature";

export default function LabsContentPage({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = params;

    const content = useMemo(() => {
        return LabsReferenceData.find((item) => item.id === slug);
    }, [slug]);

    const renderContent = () => {
        switch (slug) {
            case "introduction":
                return <Introduction />;
            case "temperature":
                return <Temperature />;
            case "pulse":
                return <div>Pulse Section Content</div>;
            case "respiration":
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
        <div className="p-6">
            <div className=" h-full">
                {renderContent()}
            </div>
        </div>
    );
}
