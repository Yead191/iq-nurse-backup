"use client";
import { useState, useEffect } from "react";
import {
  Clock,
  TrendingUp,
  BookOpen,
  ChevronRight,
  LayoutGrid,
  Menu,
} from "lucide-react";
import { useRouter } from "next/navigation";
import OverviewBanner from "@/components/shared/OverviewBanner";
import Image from "next/image";
import { StudyNotesSidebar } from "./StudyNotesSidebar";

interface RecentlyViewedTopic {
  id: string;
  title: string;
  timestamp: number;
  category: string;
}

export default function StudyNoteOverview() {
  const router = useRouter();
  const [recentTopics, setRecentTopics] = useState<RecentlyViewedTopic[]>([]);
  const [activeTab, setActiveTab] = useState<"overview" | "notes">("overview");
  useEffect(() => {
    // Load recently viewed topics from localStorage
    const stored = localStorage.getItem("recentlyViewedTopics");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setRecentTopics(parsed.slice(0, 6)); // Show only last 6
      } catch (e) {
        console.error("Error parsing recently viewed topics:", e);
      }
    }
  }, []);

  const popularTopics = [
    {
      id: "copd",
      title: "COPD",
      category: "Respiratory System",
      color: "#2C5F8D",
    },
    {
      id: "heart-failure",
      title: "Heart Failure",
      category: "Cardiovascular System",
      color: "#2C5F8D",
    },
    {
      id: "diabetes-mellitus",
      title: "Diabetes Mellitus",
      category: "Endocrine System",
      color: "#2C5F8D",
    },
    {
      id: "stroke",
      title: "Stroke",
      category: "Neurological System",
      color: "#2C5F8D",
    },
    {
      id: "pneumonia",
      title: "Pneumonia",
      category: "Respiratory System",
      color: "#2C5F8D",
    },
    {
      id: "aki",
      title: "Acute Kidney Injury (AKI)",
      category: "Genitourinary System",
      color: "#2C5F8D",
    },
    {
      id: "preeclampsia-eclampsia",
      title: "Preeclampsia and Eclampsia",
      category: "Maternal-Newborn",
      color: "#2C5F8D",
    },
    {
      id: "insulin",
      title: "Insulin",
      category: "Pharmacology",
      color: "#2C5F8D",
    },
  ];

  return (
    <div className=" lg:max-h-[calc(100vh-64px)] overflow-y-auto pt-6 lg:pt-14 container mx-auto px-4 lg:px-5 pb-8 w-full">
      {/* Mobile Tabs Wrapper */}
      <div className="flex items-center gap-3 lg:hidden mb-6">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg font-medium transition-colors text-xs  border text-nowrap ${
            activeTab === "overview"
              ? "bg-[#2f557c] text-white border-[#2f557c]"
              : "bg-white text-[#2f557c] border-[#2f557c]"
          }`}
        >
          <LayoutGrid className="w-5 h-5" />
          <span>Overview</span>
        </button>
        <button
          onClick={() => setActiveTab("notes")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg font-medium transition-colors text-xs  border text-nowrap ${
            activeTab === "notes"
              ? "bg-[#2f557c] text-white border-[#2f557c]"
              : "bg-white text-[#2f557c] border-[#2f557c]"
          }`}
        >
          <Menu className="w-5 h-5" />
          <span>Study Notes</span>
        </button>
      </div>
      {/* Overview Content */}
      <div className={activeTab === "overview" ? "block" : "hidden lg:block"}>
        <div className="w-full">
          {/* Popular Topics Section */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="size-6 text-[#FE5E7E]" />
              <h2 className="text-2xl font-bold text-gray-800">
                Most Popular Topics
              </h2>
            </div>
            <div className="overflow-x-auto scrollbar-hide hide-scrollbar snap-x  px-4 md:mx-0 md:px-0 w-[90vw]  md:w-full">
              <div className="grid grid-flow-col grid-rows-2 md:grid-rows-none md:grid-flow-row md:grid-cols-2 lg:grid-cols-4 gap-4 pb-4 md:pb-0  md:w-full">
                {popularTopics?.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() =>
                      router.push(`/profile/study-notes/${topic.id}`)
                    }
                    className="flex-shrink-0 w-[260px] md:w-full bg-white p-5 rounded-lg border border-gray-200 hover:border-[#2C5F8D] hover:shadow-md transition-all group text-left snap-start"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <BookOpen className="size-5 text-[#2C5F8D]" />
                      <ChevronRight className="size-4 text-gray-400 group-hover:text-[#2C5F8D] group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-gray-500">{topic.category}</p>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Recently Viewed Section */}
          {recentTopics.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="size-6 text-[#FE5E7E]" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Recently Viewed
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentTopics.map((topic) => (
                  <button
                    key={`${topic.id}-${topic.timestamp}`}
                    onClick={() =>
                      router.push(`/profile/study-notes/${topic.id}`)
                    }
                    className="bg-white p-5 rounded-lg border border-gray-200 hover:border-[#2C5F8D] hover:shadow-md transition-all group text-left"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <Clock className="size-4 text-gray-400" />
                      <ChevronRight className="size-4 text-gray-400 group-hover:text-[#2C5F8D] group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-gray-500">{topic.category}</p>
                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(topic.timestamp).toLocaleDateString()}
                    </p>
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Quick Stats */}
          <section className="mb-8 bg-gradient-to-r from-[#2C5F8D] to-[#3d7ab8] rounded-xl p-4 py-8 md:p-8 text-white">
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold mb-2">675+</div>
                <div className="text-[10px] md:text-sm opacity-90">
                  Study Topics
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold mb-2">7</div>
                <div className="text-[10px] md:text-sm opacity-90">
                  Major Nursing Areas
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-bold mb-2">100%</div>
                <div className="text-[10px] md:text-sm opacity-90">
                  NCLEX Aligned
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* study notes Sidebar (Mobile Only) */}
      <div
        className={` ${activeTab === "notes" ? "block lg:hidden" : "hidden"}`}
      >
        <StudyNotesSidebar />
      </div>
    </div>
  );
}
