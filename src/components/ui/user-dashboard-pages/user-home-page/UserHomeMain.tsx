import { Button, Card } from "antd";
import React, { Suspense } from "react";
import AsidePanel from "./aside/AsidePanel";
import { StatsGrid } from "../../old-components/old-user-home/StatsGrid";
import { weeklyStats } from "@/data/userHome";
import RecentlyViewed from "./RecentlyViewed";
import StudyInstagramSection from "./StudyInstagramSection";
import TrendingPosts from "./TrendingPosts";
import NCLEXPracticeSection from "./practice-qurestion/NCLEXPracticeSection";
import NurseQButton from "./NurseNia/NurseQButton";

export default function UserHomeMain() {
  return (
    <main className=" md:max-h-max overflow-auto relative ">
      <div className="grid grid-cols-1 gap-4 2xl:gap-6  lg:grid-cols-12 ">
        {/* Left/Main Column */}
        <section className="lg:col-span-9 space-y-6 lg:h-[calc(100vh-90px)] overflow-y-auto pt-4 lg:pt-8 px-2 lg:px-5">
          {/* This Week Events */}
          <StatsGrid items={weeklyStats} />
          {/* recently viewed */}
          <RecentlyViewed />
          <NCLEXPracticeSection />
          <StudyInstagramSection />
          <TrendingPosts />
        </section>

        {/* Right/Aside Column */}
        <aside className="hidden lg:block lg:col-span-3 lg:pt-8 pr-4 lg:pr-5">
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
