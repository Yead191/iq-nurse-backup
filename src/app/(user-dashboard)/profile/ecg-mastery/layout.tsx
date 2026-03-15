import DynamicHeader from "@/components/shared/DynamicHeader";
import { EcgSidebar } from "@/components/ui/user-dashboard-pages/ecg-mastery-new/components/EcgSidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative">
      <DynamicHeader
        title="ECG Mastery"
        topics={16}
        icon="/assets/icons/header/ecg.svg"
        mobileTitle="ECG Mastery"
        basePath="/profile/ecg-mastery"
      />

      <div className="flex ">
        <div className="hidden lg:block">
          <EcgSidebar />
        </div>
        <div className="flex-1 lg:h-[calc(100vh-64px)] overflow-auto lg:px-5 pt-6">
          {children}
        </div>
      </div>
    </section>
  );
}
