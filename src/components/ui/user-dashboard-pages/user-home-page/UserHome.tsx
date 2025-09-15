import { Suspense } from "react";

import { Card } from "antd";

import { weeklyStats, studyCategories } from "@/data/userHome";
import { HomeBreadcrumbs } from "./HomeBreadcrumbs";
import { SectionHeader } from "./SectionHeader";
import { StatsGrid } from "./StatsGrid";
import { CategoryGrid } from "./CategoryGrid";
import Image from "next/image";
import ReadingTabs from "./ReadingTabs";
import AsidePanel from "./aside/AsidePanel";
import MarathonSection from "./MarathonSection/MarathonSection";

export default function UserHome() {
  return (
    <main className=" ">
      <div
        className="grid grid-cols-1 gap-6 lg:gap-x-8 lg:grid-cols-12 
      "
      >
        {/* Left/Main Column */}
        <div className="lg:col-span-9 space-y-6 lg:h-[calc(100vh-120px)] overflow-y-auto ">
          {/* Breadcrumb */}
          <div className="mb-4">
            <HomeBreadcrumbs />
          </div>
          {/* This Week Events */}
          <section>
            <StatsGrid items={weeklyStats} />
          </section>
          {/*Marathon Section */}
          <section>
            <MarathonSection />
          </section>
        </div>

        {/* Right/Aside Column */}
        <aside className="hidden lg:block lg:col-span-3 ">
          <Suspense
            fallback={<Card loading className="rounded-xl shadow-sm" />}
          >
            <AsidePanel />
          </Suspense>
        </aside>
      </div>
    </main>
  );
}
