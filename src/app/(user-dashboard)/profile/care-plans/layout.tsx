import CarePlanHeader from "@/components/ui/user-dashboard-pages/care-plans-new/components/CarePlanHeader";
import CarePlansSidebar from "@/components/ui/user-dashboard-pages/care-plans-new/components/CarePlansSidebar";
import type React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative">
      <CarePlanHeader />
      <div className="flex">
        <div className="hidden md:block">
          <CarePlansSidebar />
        </div>
        <div className="flex-1 lg:h-[calc(100vh-64px)] overflow-auto lg:px-5">
          {children}
        </div>
      </div>
    </section>
  );
}
