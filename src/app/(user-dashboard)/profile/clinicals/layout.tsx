import DynamicHeader from "@/components/shared/DynamicHeader";
import PracticalSidebar from "@/components/ui/user-dashboard-pages/practical-skill/components/PracticalSidebar";
import type React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative">
      <DynamicHeader
        title="Practical Skill"
        icon="/assets/icons/header/skill.svg"
        mobileTitle="Practical Skill"
        basePath="/profile/clinicals"
      />
      <div className="flex flex-col md:flex-row ">
        <div className="hidden lg:block">
          <PracticalSidebar />
        </div>
        <div className="flex-1 lg:h-[calc(100vh-64px)] overflow-auto lg:px-5">
          {children}
        </div>
      </div>
    </section>
  );
}
