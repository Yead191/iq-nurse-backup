import {
  Clock,
  TrendingUp,
  ArrowRight,
  BookOpen,
  FileText,
} from "lucide-react";

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

export function QuickAccessSheets({
  popularTopics,
  recentTopics,
  onTopicClick,
}: QuickAccessProps) {
  return (
    <div className="space-y-6 lg:space-y-10">
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="">
            <TrendingUp className="size-6 text-[#2C5F8D]" />
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
              Most Popular Cheat Sheets
            </h2>
            <p className="text-sm text-gray-600">
              Frequently studied by nursing students
            </p>
          </div>
        </div>

        <div className="grid grid-rows-2 grid-flow-col overflow-x-auto scrollbar-hide pb-4 gap-4 px-4 md:grid-rows-none md:grid-flow-row md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:mx-0 md:px-0 snap-x">
          {popularTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => onTopicClick(topic)}
              className="group bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-[#2C5F8D] hover:shadow-md transition-all duration-200 text-left min-w-[280px] w-[80vw] md:w-auto md:min-w-0 snap-start shrink-0 flex gap-2.5"
            >
              {/* Icon Circle */}
              <div className="w-10 h-10 rounded-full bg-[#2C5F8D]/10 flex items-center justify-center">
                <FileText className="size-5 text-primary" />
              </div>

              <div>
                {/* Topic Name */}
                <h3 className="text-base font-semibold text-gray-900 mb-1 leading-snug">
                  {topic.name}
                </h3>

                {/* Subtitle / Category */}
                <p className="text-sm text-gray-400 mb-4">
                  {topic.categoryName}
                </p>

                {/* Popular Badge */}
                <span className="inline-block text-xs font-medium text-green-600 bg-green-50 border border-green-100 px-3 py-1 rounded-full">
                  Popular
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Recently Visited */}
      {recentTopics.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Clock className="size-6 text-primary" />

            <h2 className="text-2xl font-bold text-[#1A1A1A]">
              Recently Viewed
            </h2>
          </div>

          <div className="flex overflow-x-auto gap-4 pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:overflow-visible md:mx-0 md:px-0 scrollbar-hide snap-x">
            {recentTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => onTopicClick(topic)}
                className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#2C5F8D] hover:shadow-md transition-all duration-200 text-left 
        min-w-[280px] w-[80vw] 
        md:min-w-0 md:w-full md:shrink 
        snap-start shrink-0"
              >
                {/* Icon + Text Row */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <FileText className="size-5 text-slate-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 leading-snug mb-1">
                      {topic.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {topic.categoryName}
                    </p>
                  </div>
                </div>

                {/* Recently Viewed Badge */}
                <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Recently Viewed
                </span>
              </button>
            ))}
          </div>
        </section>
      )}
      {/* Quick Tips */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg text-gray-900 mb-4 flex items-center gap-2">
          <BookOpen size={20} className="text-[#2c5f8d]" />
          Quick Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-[#2c5f8d] mt-0.5 font-bold">•</span>
              <span>
                Browse 15 different body systems with 25 cheat sheets each
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2c5f8d] mt-0.5 font-bold">•</span>
              <span>Save cheat sheets to custom folders for easy access</span>
            </li>
          </ul>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-[#2c5f8d] mt-0.5 font-bold">•</span>
              <span>Download notes for offline study</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2c5f8d] mt-0.5 font-bold">•</span>
              <span>Use search to quickly find what you need</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Browse All Systems */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">
          Browse all systems from the left sidebar to explore our complete
          collection
        </p>
        <div className="inline-flex items-center gap-2 text-[#2c5f8d] text-sm">
          <span className="font-medium">
            375+ Nursing Cheat Sheets Available
          </span>
        </div>
      </div>
    </div>
  );
}
