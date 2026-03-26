import { Clock, TrendingUp, ArrowRight } from "lucide-react";

interface QuickAccessTopic {
  id: string;
  name: string;
  categoryName: string;
  categoryIcon: any;
  description?: string;
  subCategoryName?: string;
}

interface QuickAccessProps {
  popularTopics: QuickAccessTopic[];
  recentTopics: QuickAccessTopic[];
  onTopicClick: (topic: QuickAccessTopic) => void;
}

export function QuickAccess({
  popularTopics,
  recentTopics,
  onTopicClick,
}: QuickAccessProps) {
  return (
    <div className="space-y-6 lg:space-y-10">
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg">
            <TrendingUp className="size-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Most Popular Care Plans
            </h2>
            <p className="text-sm text-gray-600">
              Frequently studied by nursing students
            </p>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-4 pb-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:mx-0 md:px-0 scrollbar-hide snap-x">
          {popularTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => onTopicClick(topic)}
              className="group bg-white rounded-xl p-5 shadow-sm md:shadow-sm shadow-gray-200/50 border-2 border-gray-200 hover:border-[#2C5F8D] hover:shadow-lg transition-all duration-200 text-left relative overflow-hidden min-w-[240px] w-[40vw] md:w-auto md:min-w-0 snap-start shrink-0"
            >
              {/* Gradient Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              <div className="relative z-10">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-3">
                  {topic.categoryIcon && (
                    <topic.categoryIcon className="size-5 text-[#2C5F8D]" />
                  )}
                  <span className="text-xs font-medium text-[#2C5F8D] bg-blue-50 px-2 py-1 rounded-full">
                    {topic.categoryName}
                  </span>
                </div>

                {/* Topic Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#2C5F8D] transition-colors">
                  {topic.name}
                </h3>

                {/* Description */}
                {topic.description && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {topic.description}
                  </p>
                )}

                {/* Arrow Icon */}
                <div className="flex items-center justify-end">
                  <ArrowRight className="size-5 text-gray-400 group-hover:text-[#2C5F8D] group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Recently Visited */}
      {recentTopics.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
              <Clock className="size-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Recently Visited
              </h2>
              <p className="text-sm text-gray-600">
                Continue where you left off
              </p>
            </div>
          </div>

          <div className="flex overflow-x-auto gap-4 pb-4  md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:mx-0 md:px-0 scrollbar-hide snap-x">
            {recentTopics?.map((topic) => (
              <button
                key={topic.id}
                onClick={() => onTopicClick(topic)}
                className="group bg-gradient-to-br from-white to-blue-50/30 rounded-xl p-4 shadow-sm border-2 border-blue-100 hover:border-[#2C5F8D] hover:shadow-lg transition-all duration-200 text-left min-w-[200px] w-[45vw] md:w-auto md:min-w-0 snap-start shrink-0"
              >
                {/* Category Icon */}
                <div className="mb-3">
                  <div className="inline-flex p-2 bg-white rounded-lg shadow-sm border border-gray-200 group-hover:border-[#2C5F8D] transition-colors">
                    {topic.categoryIcon && (
                      <topic.categoryIcon className="size-5 text-[#2C5F8D]" />
                    )}
                  </div>
                </div>

                {/* Topic Name */}
                <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#2C5F8D] transition-colors">
                  {topic.name}
                </h3>

                {/* Category Name */}
                <p className="text-xs text-gray-500">{topic.categoryName}</p>

                {/* Arrow Icon */}
                <div className="flex items-center justify-end mt-2">
                  <ArrowRight className="size-4 text-gray-400 group-hover:text-[#2C5F8D] group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-2 sm:gap-6">
        <div
          className="rounded-2xl p-2.5 py-4 sm:p-6 text-white shadow-lg"
          style={{
            background: "linear-gradient(135deg, #4F8EF7 0%, #5B7FEF 100%)",
            boxShadow:
              "inset 0 1px 1px rgba(255,255,255,0.25), 0 8px 24px rgba(79,142,247,0.35)",
          }}
        >
          <div className="text-2xl sm:text-3xl font-bold mb-0.5 sm:mb-1">
            300+
          </div>
          <div
            className="text-[10px] text-nowrap sm:text-sm"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Total Care Plans
          </div>
        </div>

        <div
          className="rounded-2xl p-2.5 py-4 sm:p-6 text-white shadow-lg"
          style={{
            background: "linear-gradient(135deg, #6B6EF9 0%, #7B5EEF 100%)",
            boxShadow:
              "inset 0 1px 1px rgba(255,255,255,0.2), 0 8px 24px rgba(107,110,249,0.35)",
          }}
        >
          <div className="text-2xl sm:text-3xl font-bold mb-0.5 sm:mb-1">
            21
          </div>
          <div
            className="text-[10px] text-nowrap sm:text-sm"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Medical Specialties
          </div>
        </div>

        <div
          className="rounded-2xl p-2.5 py-4 sm:p-6 text-white shadow-lg"
          style={{
            background: "linear-gradient(135deg, #A855F7 0%, #C026D3 100%)",
            boxShadow:
              "inset 0 1px 1px rgba(255,255,255,0.2), 0 8px 24px rgba(168,85,247,0.35)",
          }}
        >
          <div className="text-2xl sm:text-3xl font-bold mb-0.5 sm:mb-1">
            100%
          </div>
          <div
            className="text-[10px] text-nowrap sm:text-sm"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Evidence-Based
          </div>
        </div>
      </div>
    </div>
  );
}
