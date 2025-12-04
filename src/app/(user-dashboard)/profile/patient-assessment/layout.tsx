import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import AssessmentSidebar from "@/components/ui/user-dashboard-pages/patient-assessment/AssessmentSidebar";
import { File } from "lucide-react";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="">
      <PageNavbar
        icon={<File />}
        title="Comprehensive Nursing Assessment Guide"
        subtitle="Create,organize,and enhance your study notes with AI assistance"
        isAiEnhanced={false}
      />
      <div className="flex gap-6">
        <AssessmentSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </section>
  );
}
