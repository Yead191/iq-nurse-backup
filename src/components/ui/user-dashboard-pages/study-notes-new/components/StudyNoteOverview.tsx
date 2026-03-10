"use client";
import { useState, useEffect } from "react";
import {
  Clock,
  TrendingUp,
  BookOpen,
  ChevronRight,
  BookOpenCheck,
} from "lucide-react";
import { useRouter } from "next/navigation";
import OverviewBanner from "@/components/shared/OverviewBanner";

interface RecentlyViewedTopic {
  id: string;
  title: string;
  timestamp: number;
  category: string;
}

export default function StudyNoteOverview() {
  const router = useRouter();
  const [recentTopics, setRecentTopics] = useState<RecentlyViewedTopic[]>([]);

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
    <div className=" lg:max-h-[calc(100vh-80px)] overflow-y-auto pt-12 container mx-auto px-4 lg:px-5">
      {/* banner */}
      <OverviewBanner
        title="Study Notes"
        description="Get More Knowledge."
        image="/assets/images/overview-images/study-notes.png"
      />

      <div className="">
        {/* Popular Topics Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="size-6 text-[#FE5E7E]" />
            <h2 className="text-2xl font-bold text-gray-800">
              Most Popular Topics
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => router.push(`/profile/study-notes/${topic.id}`)}
                className="bg-white p-5 rounded-lg border border-gray-200 hover:border-[#2C5F8D] hover:shadow-md transition-all group text-left"
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
        <section className="mb-8 bg-gradient-to-r from-[#2C5F8D] to-[#3d7ab8] rounded-xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">675+</div>
              <div className="text-sm opacity-90">Study Topics</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">7</div>
              <div className="text-sm opacity-90">Major Nursing Areas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">NCLEX Aligned</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
