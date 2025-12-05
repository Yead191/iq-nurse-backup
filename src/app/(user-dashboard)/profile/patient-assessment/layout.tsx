import AssessmentSidebar from "@/components/ui/user-dashboard-pages/patient-assessment/AssessmentSidebar";
import AssessmentHeader from "@/components/ui/user-dashboard-pages/patient-assessment/components/AssessmentHeader";

import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative ">
      <AssessmentHeader />
      <div className="flex">
        <AssessmentSidebar />
        <div className="flex-1 lg:h-[calc(100vh-110px)] overflow-auto lg:px-5">
          {children}
        </div>
      </div>
    </section>
  );
}
