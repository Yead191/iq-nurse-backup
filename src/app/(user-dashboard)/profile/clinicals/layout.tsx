import DynamicHeader from "@/components/shared/DynamicHeader";
import SkillSidebar from "@/components/ui/user-dashboard-pages/clinical-skills/SkillSidebar";
import type React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative">
      <DynamicHeader
        title="Clinical Skill"
        subtitle="Master essential nursing skills with IQ Nurse"
        icon="/assets/icons/header/heart-rate.svg"
        mobileTitle="Clinical Skill"
        basePath="/profile/clinicals"
      />
      <div className="flex flex-col md:flex-row mt-6 lg:mt-0">
        <SkillSidebar />
        <div className="flex-1 lg:h-[calc(100vh-110px)] overflow-auto lg:px-5">
          {children}
        </div>
      </div>
    </section>
  );
}
