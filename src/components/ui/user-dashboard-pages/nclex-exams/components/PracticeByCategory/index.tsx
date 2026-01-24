import { useState } from "react";
import { CategoryCard } from "./CategoryCard";
import { PracticeConfigModal } from "./PracticeConfigModal";
import { Category, ExamSession, Subtopic } from "@/data/types";
import { categories } from "@/data/nclex-exam/practiceCategoryData";

interface PracticeByCategorySectionProps {
  onStartExam: (session: ExamSession) => void;
}

export function PracticeByCategorySection({
  onStartExam,
}: PracticeByCategorySectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [selectedSubtopic, setSelectedSubtopic] = useState<Subtopic | null>(
    null,
  );
  const [questionCount, setQuestionCount] = useState<number[]>([20]);
  const [mode, setMode] = useState<"practice" | "test">("practice");

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setSelectedSubtopic(null);
    setQuestionCount([Math.min(20, category.totalQuestions)]);
    setModalOpen(true);
  };

  const handleSubtopicClick = (category: Category, subtopic: Subtopic) => {
    setSelectedCategory(category);
    setSelectedSubtopic(subtopic);
    setQuestionCount([Math.min(20, subtopic.questionCount)]);
    setModalOpen(true);
  };

  const handleStartPractice = () => {
    if (!selectedCategory) return;

    const session: ExamSession = {
      type: "category",
      categoryId: selectedCategory.id,
      subtopicId: selectedSubtopic?.id,
      questionCount: questionCount[0],
      mode,
      title: selectedSubtopic
        ? `${selectedCategory.name} - ${selectedSubtopic.name}`
        : selectedCategory.name,
    };

    setModalOpen(false);
    onStartExam(session);
  };

  const maxQuestions =
    selectedSubtopic?.questionCount ?? selectedCategory?.totalQuestions ?? 100;

  return (
    <div>
      <div className="mb-6">
        <p className="text-gray-500">
          Practice questions organized by NCLEX categories and subtopics. Choose
          to practice entire categories or focus on specific subtopics.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {categories?.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onPracticeAll={handleCategoryClick}
            onSubtopicSelect={handleSubtopicClick}
          />
        ))}
      </div>

      <PracticeConfigModal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onStart={handleStartPractice}
        selectedCategory={selectedCategory}
        selectedSubtopic={selectedSubtopic}
        questionCount={questionCount}
        onQuestionCountChange={setQuestionCount}
        mode={mode}
        onModeChange={(val) => setMode(val)}
        maxQuestions={maxQuestions}
      />
    </div>
  );
}
