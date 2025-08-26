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

          {/* Study by Category */}
          <section>
            <div className="my-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={"/assets/icons/reading.svg"}
                  height={44}
                  width={44}
                  alt="Reading "
                />
                <SectionHeader title="Study by Category" />
              </div>
              <button className="text-xs font-medium text-neutral-500 hover:text-neutral-800">
                See All
              </button>
            </div>
            <CategoryGrid items={studyCategories} />
          </section>

          {/* Bottom Tabs  */}
          <section className="mt-8 mb-4 flex items-center justify-between">
            <ReadingTabs />
          </section>
        </div>

        {/* Right/Aside Column */}
        <aside className="lg:col-span-3 ">
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
