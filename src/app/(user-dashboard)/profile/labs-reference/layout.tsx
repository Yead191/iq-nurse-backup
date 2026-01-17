import DynamicHeader from "@/components/shared/DynamicHeader";
import LabsSidebar from "@/components/ui/user-dashboard-pages/labs-reference/component/LabsSidebar";

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
        <LabsSidebar />
        <div className="flex-1 lg:h-[calc(100vh-110px)] overflow-auto lg:px-5">
          {children}
        </div>
      </div>
    </section>
  );
}
