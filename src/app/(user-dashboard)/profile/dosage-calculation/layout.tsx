import DynamicHeader from "@/components/shared/DynamicHeader";
import { DosageSidebar } from "@/components/ui/user-dashboard-pages/dosage-calculation-new/components/DosageSidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative">
      <DynamicHeader
        title="Dosage Calculation"
        topics={16}
        icon="/assets/icons/header/vital.svg"
        mobileTitle="Dosage Calculation"
        basePath="/profile/dosage-calculation"
      />

      <div className="flex ">
        <div className="hidden lg:block pt-6">
          <DosageSidebar />
        </div>
        <div className="flex-1 lg:h-[calc(100vh-64px)] overflow-auto lg:px-5 pt-6">
          {children}
        </div>
      </div>
    </section>
  );
}
