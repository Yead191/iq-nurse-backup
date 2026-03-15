"use client";
import { useState, useEffect } from "react";
import { Heart, Clock, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { popularTopics } from "@/data/ecg-new/popularTopics";

// Mock data for most popular topics

const PracticeTestButton = () => {
  return (
    <Link
      href={"/profile/ecg-mastery/practice-test"}
      className="inline-flex items-center gap-2 px-6 py-3 bg-[#2C5F8D] text-white font-semibold rounded-lg hover:bg-[#244b6f] transition-colors"
    >
      Start Practice Test
      <ArrowRight className="size-4" />
    </Link>
  );
};

export function EcgHome() {
  const router = useRouter();
  const [recentlyViewed, setRecentlyViewed] = useState<
    Array<{ id: string; label: string; category: string; timestamp: number }>
  >([]);

  useEffect(() => {
    // Load recently viewed from localStorage
    const stored = localStorage.getItem("ecg-recently-viewed");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setRecentlyViewed(parsed.slice(0, 6)); // Show only 6 most recent
      } catch (e) {
        console.error("Failed to parse recently viewed:", e);
      }
    }
  }, []);

  const formatTimeAgo = (timestamp: number) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return "Just now";
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  const onTopicSelect = (topicId: string) => {
    console.log(topicId);
    router.push(`/profile/ecg-mastery/${topicId}`);
  };
  return (
    <div className="h-full overflow-y-auto bg-white space-y-12">
      {/* Practice Strips Exam Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Heart className="size-5 text-[#2C5F8D]" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Practice Strips Exam
          </h2>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-[#2C5F8D]">
              Test Your ECG Knowledge
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Comprehensive practice test with Next Gen NCLEX-style questions
              including multiple choice, select-all-that-apply (SATA), drag &
              drop, and matrix questions. Get detailed rationales for every
              answer to reinforce your learning.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-[#2C5F8D] rounded-full"></div>
              <span>20 Questions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 bg-[#2C5F8D] rounded-full"></div>
              <span>Multiple Question Types</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-2 bg-[#2C5F8D] rounded-full"></div>
              <span>Detailed Rationales</span>
            </div>
          </div>

          <PracticeTestButton />
        </div>
      </section>

      {/* Most Popular Topics */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
          <div className="p-2 bg-orange-50 rounded-lg">
            <TrendingUp className="size-5 text-orange-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Most Popular Topics
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {popularTopics?.map((topic) => (
            <button
              key={topic.id}
              onClick={() => onTopicSelect(topic.id)}
              className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-[#2C5F8D] hover:shadow-md transition-all text-left"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#2C5F8D] transition-colors">
                      {topic.label}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {topic.category}
                    </p>
                  </div>
                  <ArrowRight className="size-4 text-gray-400 group-hover:text-[#2C5F8D] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <TrendingUp className="size-3" />
                  <span>{topic.views.toLocaleString()} views</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Recently Viewed */}
      {recentlyViewed.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Clock className="size-5 text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">
              Recently Viewed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recentlyViewed.map((topic) => (
              <button
                key={`${topic.id}-${topic.timestamp}`}
                onClick={() => onTopicSelect(topic.id)}
                className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-[#2C5F8D] hover:shadow-md transition-all text-left"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#2C5F8D] transition-colors">
                        {topic.label}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {topic.category}
                      </p>
                    </div>
                    <ArrowRight className="size-4 text-gray-400 group-hover:text-[#2C5F8D] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock className="size-3" />
                    <span>{formatTimeAgo(topic.timestamp)}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Empty State for Recently Viewed */}
      {recentlyViewed.length === 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Clock className="size-5 text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">
              Recently Viewed
            </h2>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
            <Clock className="size-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600">No recently viewed topics yet</p>
            <p className="text-sm text-gray-500 mt-1">
              Start exploring ECG topics to see them here
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
