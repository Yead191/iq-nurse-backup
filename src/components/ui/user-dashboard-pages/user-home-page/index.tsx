import { Card } from "antd";
import React, { Suspense } from "react";
import AsidePanel from "./aside/AsidePanel";
import RecentlyViewed from "./sections/RecentlyViewed";
import StudyInstagramSection from "./sections/StudyInstagramSection";
import TrendingPosts from "./sections/TrendingPosts";
import NCLEXPracticeSection from "./sections/practice-qurestion/NCLEXPracticeSection";
import NurseQButton from "./sections/NurseNia/NurseQButton";
import DashboardBanner from "./sections/DashboardBanner";
import { StatsGrid } from "../../old-components/old-user-home/StatsGrid";
import { weeklyStats } from "@/data/userHome";
import { NCLEXQuestionsSection } from "./sections/NCLEXQuestionsSection/NCLEXQuestionsSection";

export default function UserHomeMain() {
  return (
    <main className=" md:max-h-max overflow-auto relative ">
      <div className="grid grid-cols-1 gap-2 2xl:gap-6  lg:grid-cols-12 ">
        {/* Left/Main Column */}
        <section className="lg:col-span-9 space-y-6 lg:h-[calc(100vh-90px)] overflow-y-auto pt-4 lg:pt-8 ">
          <DashboardBanner />
          {/* <ShortMenu /> */}
          <div className="px-2 lg:px-5">
            <StatsGrid items={weeklyStats} />
            <NCLEXQuestionsSection />
            {/* <RecentlyViewed /> */}
            <NCLEXPracticeSection />
            <StudyInstagramSection />
            {/* <TrendingPosts /> */}
          </div>
        </section>

        {/* Right/Aside Column */}
        <aside className="hidden lg:block lg:col-span-3 lg:pt-8 pr-4 lg:pr-2">
          <Suspense
            fallback={<Card loading className="rounded-xl shadow-sm" />}
          >
            <AsidePanel />
          </Suspense>
        </aside>
      </div>
      {/* nurse q float btn */}
      <NurseQButton />
    </main>
  );
}
