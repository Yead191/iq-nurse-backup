import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import NclexSidebar from "@/components/ui/user-dashboard-pages/nclex-exams/components/NclexSidebar";

import Image from "next/image";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <nav className="hidden lg:block">
        <PageNavbar
          icon={
            <Image
              src="/assets/icons/header/grade.png"
              alt="NCLEX"
              width={50}
              height={50}
              draggable={false}
              className="w-full h-fit "
            />
          }
          title="Master the NCLEX with Confidence"
        />
      </nav>
      <div className="lg:-mt-6 flex flex-col lg:flex-row gap-4 ">
        <NclexSidebar />
        <div className="w-full ">{children}</div>
      </div>
    </section>
  );
}
