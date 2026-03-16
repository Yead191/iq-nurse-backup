import DynamicHeader from "@/components/shared/DynamicHeader";
import { LabsSidebar } from "@/components/ui/user-dashboard-pages/labs-reference-new/components/LabsSidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative">
      <DynamicHeader
        title="Labs Reference"
        icon="/assets/icons/header/labs.svg"
        topics={26}
        mobileTitle="Labs Reference"
        basePath="/profile/labs-reference"
      />

      <div className="flex">
        <div className="hidden lg:block">
          <LabsSidebar />
        </div>
        <div className="flex-1 lg:h-[calc(100vh-64px)] overflow-auto px-4 lg:px-5">
          {children}
        </div>
      </div>
    </section>
  );
}
