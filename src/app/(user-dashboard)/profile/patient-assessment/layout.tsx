import AssessmentHeader from "@/components/ui/user-dashboard-pages/nursing-assessment/components/AssessmentHeader";
import NursingSidebar from "@/components/ui/user-dashboard-pages/nursing-assessment/components/NursingSidebar";

import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative ">
      <AssessmentHeader />
      <div className="flex">
        <div className="hidden lg:block">
          <NursingSidebar />
        </div>
        <div className="flex-1 lg:h-[calc(100vh-64px)] overflow-auto py-4 lg:py-0 pt-6">
          {children}
        </div>
      </div>
    </section>
  );
}
