import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { StudyNotesSidebar } from "@/components/ui/user-dashboard-pages/study-notes-new/components/StudyNotesSidebar";
import Image from "next/image";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <PageNavbar
        icon={
          <Image
            src="/assets/icons/header/study-notes-icon.svg"
            alt="study notes"
            width={50}
            height={50}
            draggable={false}
            className="w-6 h-fit "
          />
        }
        title="Study Notes"
        topics={20}
      />
      <div className="flex lg:-mt-6">
        <div>
          <StudyNotesSidebar />
        </div>
        <div className="flex-1 h-full">{children}</div>
      </div>
    </section>
  );
}
