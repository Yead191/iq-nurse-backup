import DynamicHeader from "@/components/shared/DynamicHeader";
import ECGSidebar from "@/components/ui/user-dashboard-pages/ecg-mastery/component/ECGSidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative">
      <DynamicHeader
        title="ECG Mastery"
        subtitle="Guide to Cardiac Rhythm Interpretation & Clinical Management"
        icon="/assets/icons/header/heart-rate.svg"
        mobileTitle="ECG Mastery"
        basePath="/profile/ecg-mastery"
      />

      <div className="flex">
        <ECGSidebar />
        <div className="flex-1 lg:h-[calc(100vh-110px)] overflow-auto lg:px-5">
          {children}
        </div>
      </div>
    </section>
  );
}
