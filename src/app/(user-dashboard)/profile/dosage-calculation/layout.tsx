import DynamicHeader from "@/components/shared/DynamicHeader";
import DosageSidebar from "@/components/ui/user-dashboard-pages/dosage-calculation/component/DosageSidebar";

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

      <div className="flex">
        <DosageSidebar />
        <div className="flex-1 lg:h-[calc(100vh-110px)] overflow-auto lg:px-5">
          {children}
        </div>
      </div>
    </section>
  );
}
