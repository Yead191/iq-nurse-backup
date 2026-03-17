import TemplateHeader from "@/components/ui/user-dashboard-pages/template/component/TemplateHeader";
import SheetsSidebar from "@/components/ui/user-dashboard-pages/cheat-sheets/components/SheetsSidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative">
      <TemplateHeader />
      <div className="flex">
        <div className="hidden md:block">
          <SheetsSidebar />
        </div>

        <div className="flex-1 lg:h-[calc(100vh-64px)] overflow-auto lg:px-5">
          {children}
        </div>
      </div>
    </section>
  );
}
