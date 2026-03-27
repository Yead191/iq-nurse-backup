"use client";
import { Topic } from "@/data/dosage-calculation/topic";
import {
  ClipboardCheck,
  TrendingUp,
  Calculator,
  Droplet,
  Baby,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

const popularTopics = [
  {
    id: "basic-dosage" as Topic,
    title: "Basic Dosage Calculations",
    description: "Master the fundamentals of calculating medication doses",
    icon: Calculator,
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    id: "iv-drip-rates" as Topic,
    title: "IV Drip Rates",
    description: "Calculate accurate intravenous infusion rates",
    icon: Droplet,
    color: "bg-cyan-50 border-cyan-200",
    iconColor: "text-cyan-600",
  },
  {
    id: "pediatric" as Topic,
    title: "Pediatric Dosages",
    description: "Safe medication doses for pediatric patients",
    icon: Baby,
    color: "bg-pink-50 border-pink-200",
    iconColor: "text-pink-600",
  },
];

export function DosageHome() {
  const router = useRouter();

  const onSelectTopic = (topicId: string) => {
    router.push(`/profile/dosage-calculation/${topicId}`);
  };

  return (
    <div className=" space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg shadow-sm border border-gray-200 p-4 py-6 lg:p-8">
        <h1 className="text-[16px] lg:text-3xl font-bold text-gray-900 mb-3">
          Welcome to NCLEX Dosage Calculator
        </h1>
        <p className="text-[10px] lg:text-lg text-gray-600 mb-6">
          Master medication math and prepare for nursing success with
          comprehensive study notes and practice questions.
        </p>
        <div className="flex flex-row gap-2 lg:gap-4">
          <button
            onClick={() => onSelectTopic("practice-test")}
            className="flex items-center gap-2 px-2  py-2 lg:px-6 lg:py-3 bg-[#2C5F8D] text-white rounded-lg hover:bg-[#234a6d] transition-colors font-medium text-[10px] lg:text-sm text-nowrap"
          >
            <ClipboardCheck className="w-5 h-5" />
            Start Practice Test
          </button>
          <button
            onClick={() => onSelectTopic("basic-dosage")}
            className="flex items-center gap-2 px-2 py-2 lg:px-6 lg:py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-[10px] lg:text-sm text-nowrap"
          >
            Browse Study Notes
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Popular Topics Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-[#2C5F8D]" />
          Most Popular Topics
        </h2>
        <div className="flex pb-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-5 lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible lg:pb-0">
          {popularTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <button
                key={topic.id}
                onClick={() => onSelectTopic(topic.id)}
                className={`${topic.color} border rounded-lg p-6 hover:shadow-md transition-all text-left group min-w-[300px] lg:min-w-0 cursor-pointer`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <Icon
                    className={`w-8 h-8 ${topic.iconColor} flex-shrink-0`}
                  />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {topic.title}
                </h3>
                <p className="text-xs text-gray-600 mb-3">
                  {topic.description}
                </p>
                <span className="inline-flex items-center text-xs font-medium text-[#2C5F8D] group-hover:gap-2 transition-all">
                  Study Now
                  <ArrowRight className="w-0 group-hover:w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="flex overflow-x-auto scrollbar-hide pb-4 gap-4 lg:grid lg:grid-cols-3 lg:pb-0">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center min-w-[180px] lg:min-w-0 flex-1">
          <p className="text-2xl lg:text-3xl font-bold text-[#2C5F8D] mb-1">
            8
          </p>
          <p className="text-xs lg:text-sm text-gray-600">Study Topics</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center min-w-[180px] lg:min-w-0 flex-1">
          <p className="text-2xl lg:text-3xl font-bold text-[#2C5F8D] mb-1">
            20
          </p>
          <p className="text-xs lg:text-sm text-gray-600">Practice Questions</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center min-w-[180px] lg:min-w-0 flex-1">
          <p className="text-2xl lg:text-3xl font-bold text-[#2C5F8D] mb-1">
            100+
          </p>
          <p className="text-xs lg:text-sm text-gray-600">Study Tips</p>
        </div>
      </div>

      {/* Study Tip */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-700 mb-2 text-sm">
          💡 Study Tip
        </h3>
        <p className="text-xs text-gray-600">
          Start with the <strong>Basic Dosage Calculations</strong> topic to
          build a strong foundation, then progress to more complex topics like
          IV Drip Rates and Pediatric Dosages. Take the practice test to assess
          your knowledge!
        </p>
      </div>
    </div>
  );
}
