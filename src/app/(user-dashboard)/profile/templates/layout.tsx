import TemplateHeader from "@/components/ui/user-dashboard-pages/template/component/TemplateHeader";
import TemplateSidebar from "@/components/ui/user-dashboard-pages/template/component/TemplateSidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative">
      <TemplateHeader />

      <div className="flex">
        <TemplateSidebar basePath="/profile/templates" />

        <div className="flex-1 lg:h-[calc(100vh-110px)] overflow-auto lg:px-5">
          {children}
        </div>
      </div>
    </section>
  );
}
