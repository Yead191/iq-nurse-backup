import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import NclexSidebar from "@/components/ui/user-dashboard-pages/nclex-exams/components/NclexSidebar";

import Image from "next/image";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <PageNavbar
        icon={
          <Image
            src="/assets/sidebar-icons/test-icon.svg"
            alt="NCLEX"
            width={50}
            height={50}
            draggable={false}
            className="w-full h-fit active-icon-filter"
          />
        }
        title="Master the NCLEX with Confidence"
      />

      <div className="flex flex-col lg:flex-row gap-4">
        <NclexSidebar />
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}
