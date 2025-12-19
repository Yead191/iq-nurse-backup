import CalculatorCategoryList from "@/components/ui/user-dashboard-pages/clinical-calculator/CalculatorCategoryList";
import ClinicalCalculatorHeader from "@/components/ui/user-dashboard-pages/clinical-calculator/ClinicalCalculatorHeader";
import type React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative">
      <ClinicalCalculatorHeader />

      <div className="flex">
        <CalculatorCategoryList />

        <div className="flex-1 lg:h-[calc(100vh-110px)] overflow-auto lg:px-5">
          {children}
        </div>
      </div>
    </section>
  );
}
