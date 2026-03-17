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
    <div className="space-y-10">
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
              className="group bg-white rounded-xl p-5 shadow-sm md:shadow-sm shadow-gray-200/50 border-2 border-gray-200 hover:border-[#2C5F8D] hover:shadow-lg transition-all duration-200 text-left relative overflow-hidden min-w-[280px] w-[80vw] md:w-auto md:min-w-0 snap-start shrink-0"
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

          <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:mx-0 md:px-0 scrollbar-hide snap-x">
            {recentTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => onTopicClick(topic)}
                className="group bg-gradient-to-br from-white to-blue-50/30 rounded-xl p-4 shadow-sm border-2 border-blue-100 hover:border-[#2C5F8D] hover:shadow-lg transition-all duration-200 text-left min-w-[240px] w-[70vw] md:w-auto md:min-w-0 snap-start shrink-0"
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
          <div className="text-3xl font-bold mb-1">300+</div>
          <div className="text-blue-100">Total Care Plans</div>
        </div>
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 text-white shadow-lg">
          <div className="text-3xl font-bold mb-1">21</div>
          <div className="text-indigo-100">Medical Specialties</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
          <div className="text-3xl font-bold mb-1">100%</div>
          <div className="text-purple-100">Evidence-Based</div>
        </div>
      </div>
    </div>
  );
}
