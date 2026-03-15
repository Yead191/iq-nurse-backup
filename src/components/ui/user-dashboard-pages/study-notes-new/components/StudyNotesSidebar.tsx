"use client";
import { useState } from "react";
import { ChevronRight, Menu, X, Search, LayoutDashboard } from "lucide-react";

import { Button } from "antd";
import { Category } from "@/data/study-notes/studyNoteTopics";
import Image from "next/image";
import { medSurgCategories } from "@/data/study-notes/medSurgCategories";
import { fundamentalsCategories } from "@/data/study-notes/fundamentalsCategories";
import { maternalNewbornCategories } from "@/data/study-notes/maternalNewbornCategories";
import { useParams, useRouter } from "next/navigation";

interface MainTopic {
  id: string;
  title: string;
  icon: React.ReactNode;
  categories: Category[];
  color: string;
}

export function StudyNotesSidebar() {
  const router = useRouter();
  const { slug } = useParams();
  console.log(slug);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(),
  );
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [selectedMainTopic, setSelectedMainTopic] = useState<string | null>(
    null,
  );
  const [searchQuery, setSearchQuery] = useState("");

  const mainTopics: MainTopic[] = [
    {
      id: "medsurg",
      title: "Medical-Surgical Nursing",
      icon: (
        <div className="size-5">
          <Image
            src={"/assets/icons/study-notes/icon1.svg"}
            alt="icon"
            height={24}
            width={24}
            className="h-[24px] w-fit object-contain"
          />
        </div>
      ),
      categories: medSurgCategories,
      color: "#2C5F8D",
    },
    {
      id: "fundamentals",
      title: "Fundamentals of Nursing",
      icon: (
        <div className="size-5">
          <Image
            src={"/assets/icons/study-notes/icon2.svg"}
            alt="icon"
            height={24}
            width={24}
            className="h-[24px] w-fit object-contain"
          />
        </div>
      ),
      categories: fundamentalsCategories,
      color: "#2C5F8D",
    },
    {
      id: "maternal",
      title: "Maternal-Newborn Nursing",
      icon: (
        <div className="size-5">
          <Image
            src={"/assets/icons/study-notes/icon3.svg"}
            alt="icon"
            height={24}
            width={24}
            className="h-[24px] w-fit object-contain"
          />
        </div>
      ),
      categories: maternalNewbornCategories,
      color: "#2C5F8D",
    },
  ];

  const getTopicCount = (categoryList: Category[]) => {
    return categoryList.reduce((total, category) => {
      const topicCount =
        category.topics?.reduce((topicTotal, topic) => {
          return topicTotal + (topic.subtopics?.length || 0);
        }, 0) || 0;
      const subtopicCount = category.subtopics?.length || 0;
      return total + topicCount + subtopicCount;
    }, 0);
  };

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const toggleTopic = (topicId: string) => {
    const newExpanded = new Set(expandedTopics);
    if (newExpanded.has(topicId)) {
      newExpanded.delete(topicId);
    } else {
      newExpanded.add(topicId);
    }
    setExpandedTopics(newExpanded);
  };

  const handleTopicClick = (topicId: string) => {
    router.push(`/profile/study-notes/${topicId}`);
    setIsMobileOpen(false);
  };

  const handleMainTopicClick = (topicId: string) => {
    if (selectedMainTopic === topicId) {
      setSelectedMainTopic(null);
      setExpandedCategories(new Set());
      setExpandedTopics(new Set());
    } else {
      setSelectedMainTopic(topicId);
      setExpandedCategories(new Set());
      setExpandedTopics(new Set());
    }
  };

  const filterCategories = (categoryList: Category[]) => {
    if (!searchQuery.trim()) return categoryList;

    const query = searchQuery.toLowerCase();
    return categoryList
      .filter((category) => {
        if (category.title.toLowerCase().includes(query)) return true;
        const hasMatchingTopic = category.topics?.some((topic) => {
          if (topic.title.toLowerCase().includes(query)) return true;
          return topic.subtopics.some((subtopic) =>
            subtopic.title.toLowerCase().includes(query),
          );
        });
        const hasMatchingSubtopic = category.subtopics?.some((subtopic) =>
          subtopic.title.toLowerCase().includes(query),
        );
        return hasMatchingTopic || hasMatchingSubtopic;
      })
      .map((category) => ({
        ...category,
        topics: category.topics
          ?.filter((topic) => {
            if (topic.title.toLowerCase().includes(query)) return true;
            return topic.subtopics.some((subtopic) =>
              subtopic.title.toLowerCase().includes(query),
            );
          })
          .map((topic) => ({
            ...topic,
            subtopics: topic.subtopics.filter((subtopic) =>
              subtopic.title.toLowerCase().includes(query),
            ),
          })),
        subtopics: category.subtopics?.filter((subtopic) =>
          subtopic.title.toLowerCase().includes(query),
        ),
      }));
  };

  const toNormalCase = (str: string) => {
    // Convert UPPERCASE to normal case with proper capitalization
    if (str === str.toUpperCase()) {
      return str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    }
    return str;
  };

  const renderCategoryList = (categoryList: Category[]) => {
    const filteredCategories = filterCategories(categoryList);
    return filteredCategories.map((category) => (
      <div key={category.id} className="mb-1">
        {/* Category Level - 32px indent (pl-8) */}
        <button
          onClick={() => toggleCategory(category.id)}
          className="w-full flex items-center gap-2 px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded transition-colors"
        >
          <ChevronRight
            className={`size-3 text-gray-400 transition-transform flex-shrink-0 ${
              expandedCategories.has(category.id) ? "rotate-90" : "rotate-0"
            }`}
          />
          {category.icon && (
            <div className="flex-shrink-0">{category.icon}</div>
          )}
          <span className="text-left flex-1">
            {toNormalCase(category.title)}
          </span>
        </button>

        {expandedCategories.has(category.id) && (
          <div className="pl-8 mt-1">
            {/* Direct Subtopics - Rendered at Topic Level indent */}
            {category.subtopics?.map((subtopic) => (
              <div key={subtopic.id} className="mb-1">
                <button
                  onClick={() => handleTopicClick(subtopic.id)}
                  className={`w-full flex items-center gap-2 px-2 py-1 text-xs rounded transition-colors ${
                    slug === subtopic.id
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="size-3 flex-shrink-0" />{" "}
                  {/* Spacer for alignment */}
                  <span className="text-left flex-1">
                    {toNormalCase(subtopic.title)}
                  </span>
                </button>
              </div>
            ))}

            {/* Topic Level - 52px total indent (32px + 20px) */}
            {category.topics?.map((topic) => {
              const hasSubtopics =
                topic.subtopics && topic.subtopics.length > 0;
              return (
                <div key={topic.id} className="mb-1">
                  <button
                    onClick={() =>
                      hasSubtopics
                        ? toggleTopic(topic.id)
                        : handleTopicClick(topic.id)
                    }
                    className={`w-full flex items-center gap-2 px-2 py-1 text-xs rounded transition-colors ${
                      !hasSubtopics && slug === topic.id
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {hasSubtopics ? (
                      <ChevronRight
                        className={`size-3 text-gray-400 transition-transform flex-shrink-0 ${
                          expandedTopics.has(topic.id)
                            ? "rotate-90"
                            : "rotate-0"
                        }`}
                      />
                    ) : (
                      /* Spacer to keep alignment with topics that have chevrons */
                      <span className="size-3 flex-shrink-0" />
                    )}
                    <span className="text-left flex-1">
                      {toNormalCase(topic.title)}
                    </span>
                  </button>

                  {hasSubtopics && expandedTopics.has(topic.id) && (
                    <div className="pl-5 mt-1">
                      {/* Subtopic Level - 72px total indent (52px + 20px) */}
                      {topic.subtopics.map((subtopic) => (
                        <button
                          key={subtopic.id}
                          onClick={() => handleTopicClick(subtopic.id)}
                          className={`w-full text-left px-2 py-1.5 text-xs rounded transition-colors ${
                            slug === subtopic.id
                              ? "bg-blue-50 text-blue-700 font-medium"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          {toNormalCase(subtopic.title)}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    ));
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full ">
      <div className="p-4 border-b border-gray-200">
        {/* Overview Button */}
        <button
          onClick={() => {
            handleTopicClick("overview");
            setIsMobileOpen(false);
          }}
          className={`flex items-center gap-2 w-full px-3 py-2 mb-3 text-sm font-medium rounded-md transition-colors ${
            slug === "overview"
              ? "bg-[#2C5F8D]/10 text-[#2C5F8D]"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <LayoutDashboard className="size-4" />
          <span>Overview</span>
        </button>

        {/* Search Box */}
        <div className="relative h-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <input
            type="text"
            placeholder="search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-full pl-10 pr-3 text-xs bg-white border border-[#8a8a8a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5F8D] focus:border-transparent placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="p-4 flex-1 h-full overflow-auto">
        {selectedMainTopic === null ? (
          <div className="flex flex-col gap-1">
            {mainTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => handleMainTopicClick(topic.id)}
                className="w-full flex items-center gap-3 p-1 hover:bg-gray-50 rounded transition-colors"
              >
                <div className="flex-shrink-0">{topic.icon}</div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-semibold text-[#2C5F8D] mb-0.5 capitalize">
                    {topic.title}
                  </p>
                  <p className="text-[9px] font-normal text-[#7f8c8d] leading-[14px]">
                    {getTopicCount(topic.categories)} Topics
                  </p>
                </div>
                <ChevronRight className="size-4 text-gray-400 transition-transform rotate-0 flex-shrink-0" />
              </button>
            ))}
          </div>
        ) : (
          <>
            <button
              onClick={() => handleMainTopicClick(selectedMainTopic)}
              className="flex items-center gap-2 mb-4 p-1 hover:bg-gray-50 rounded transition-colors w-full"
            >
              <ChevronRight className="size-4 text-gray-400 rotate-180" />
              <span className="text-sm font-semibold text-[#2C5F8D]">
                Back to Main Topics
              </span>
            </button>
            {renderCategoryList(
              mainTopics.find((t) => t.id === selectedMainTopic)?.categories ||
                [],
            )}
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="outlined"
        size="small"
        className="fixed! top-5 left-4 z-50 md:hidden!"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
      </Button>

      {/* Desktop sidebar */}
      <aside className="hidden md:block lg:w-[260px] 2xl:w-[280px] border-r border-gray-200  lg:h-[calc(100vh-64px)] overflow-scroll sticky top-0">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar */}
      {isMobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
          <aside className="fixed left-0 top-0 bottom-0 w-[280px] bg-white border-r border-gray-200 z-50 md:hidden shadow-xl">
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  );
}
