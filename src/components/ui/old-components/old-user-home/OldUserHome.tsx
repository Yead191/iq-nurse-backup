import { Suspense } from "react";

import { Card } from "antd";

import { weeklyStats, studyCategories } from "@/data/userHome";
import { HomeBreadcrumbs } from "./HomeBreadcrumbs";
import { SectionHeader } from "../../user-dashboard-pages/user-home-page/SectionHeader";
import { StatsGrid } from "./StatsGrid";
import { CategoryGrid } from "./CategoryGrid";
import Image from "next/image";
import ReadingTabs from "./ReadingTabs";
import AsidePanel from "../../user-dashboard-pages/user-home-page/aside/AsidePanel";
import MarathonSection from "./MarathonSection/MarathonSection";
import CommunityDiscussionsSection from "./CommunityDiscussions/CommunityDiscussionsSection";

export default function OldUserHome() {
  return (
    <main className=" max-h-[calc(100vh-233px)] md:max-h-max overflow-auto   ">
      <div
        className="grid grid-cols-1 gap-6 lg:gap-x-8 lg:grid-cols-12 
      "
      >
        {/* Left/Main Column */}
        <div className="lg:col-span-9 space-y-6 lg:h-[calc(100vh-120px)] overflow-y-auto ">
          {/* Breadcrumb */}
          <div className="mb-4 mt-4 lg:mt-0">
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
          {/*Community Discussion */}
          <section className="mb-0 lg:mb-8">
            <CommunityDiscussionsSection />
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
