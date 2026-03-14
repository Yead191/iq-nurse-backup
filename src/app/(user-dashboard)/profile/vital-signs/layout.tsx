import DynamicHeader from "@/components/shared/DynamicHeader";
import VitalSidebar from "@/components/ui/user-dashboard-pages/vital-signs/components/VitalSidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative">
      <DynamicHeader
        title="Vital Signs"
        icon="/assets/icons/header/vital-sign-icon.svg"
        mobileTitle="Vital Signs"
        basePath="/profile/vital-signs"
      />

      <div className="flex pt-6">
        <VitalSidebar />
        <div className="flex-1 lg:h-[calc(100vh-110px)] overflow-auto lg:px-5">
          {children}
        </div>
      </div>
    </section>
  );
}
