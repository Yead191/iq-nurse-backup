"use client";
import { useState, useEffect } from "react";
import { Button, Card, Progress, Tag, Modal, Radio, Grid } from "antd";
import {
  Calculator,
  Flag,
  Clock,
  X,
  ChevronLeft,
  ChevronRight,
  BookmarkPlus,
} from "lucide-react";
import { ExamSession } from "@/data/types";
import {
  formatTime,
  generateMockQuestions,
  Question,
} from "@/helpers/examUtils";
import { ExamResults } from "./ExamResults/ExamResults";
import { MultipleChoiceOption } from "./MultipleChoiceOption";
import { SelectAllOption } from "./SelectAllOption";
import { CalculatorTool } from "./CalculatorTool";
import { FlashcardModal } from "./FlashcardModal";
import { ImageWithFallback } from "./ImageWithFallback";
import RationableSidebar from "./RationableSidebar";
import { useRouter } from "next/navigation";

interface QuestionInterfaceProps {
  session: ExamSession;
}

export function QuestionInterface({ session }: QuestionInterfaceProps) {
  const [questions] = useState<Question[]>(
    generateMockQuestions(session.count),
  );
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(
    new Set(),
  );
  const [showCalculator, setShowCalculator] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(
    session.type === "full-exam" ? 9000 : null,
  );
  const [showRationale, setShowRationale] = useState(false);
  const [strikethroughOptions, setStrikethroughOptions] = useState<Set<string>>(
    new Set(),
  );
  const [submittedQuestions, setSubmittedQuestions] = useState<Set<string>>(
    new Set(),
  );
  const [showFlashcardModal, setShowFlashcardModal] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const currentAnswer = answers[currentQuestion.id];
  const isFlagged = flaggedQuestions.has(currentQuestion.id);
  const isSubmitted = submittedQuestions.has(currentQuestion.id);
  const { lg } = Grid.useBreakpoint();
  useEffect(() => {
    if (timeRemaining === null) return;
    const timer = setInterval(() => {
      setTimeRemaining((prev) => (prev && prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeRemaining]);

  const handleAnswer = (answer: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: answer }));
  };

  const handleSubmitAnswer = () => {
    if (!currentAnswer) return;
    setSubmittedQuestions((prev) => new Set([...prev, currentQuestion.id]));
    setShowRationale(true);
  };

  const handleNext = () => {
    setShowRationale(false);
    setStrikethroughOptions(new Set());
    if (currentQuestionIndex < questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      if (submittedQuestions.has(questions[nextIndex].id)) {
        setShowRationale(true);
      }
    }
  };

  const handlePrevious = () => {
    setShowRationale(false);
    setStrikethroughOptions(new Set());
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIndex);
      if (submittedQuestions.has(questions[prevIndex].id)) {
        setShowRationale(true);
      }
    }
  };

  const handleToggleFlag = () => {
    setFlaggedQuestions((prev) => {
      const next = new Set(prev);
      if (isFlagged) next.delete(currentQuestion.id);
      else next.add(currentQuestion.id);
      return next;
    });
  };

  const handleToggleStrikethrough = (option: string) => {
    setStrikethroughOptions((prev) => {
      const next = new Set(prev);
      if (next.has(option)) next.delete(option);
      else next.add(option);
      return next;
    });
  };

  const handleSubmit = () => setShowResults(true);

  const handleSaveFlashcard = (notes: string, folderName: string) => {
    console.log("Saving flashcard:", {
      question: currentQuestion.question,
      notes,
      folderName,
    });
    setShowFlashcardModal(false);
  };

  const onExit = () => {
    router.push(
      `/profile/nclex-exams/${session.type === "category" ? "category" : "full-nclex"}`,
    );
  };
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / questions.length) * 100;

  if (showResults) {
    return (
      <ExamResults
        questions={questions}
        answers={answers}
        session={session}
        onReview={() => {
          setShowResults(false);
          setCurrentQuestionIndex(0);
        }}
      />
    );
  }

  return (
    <div className="flex flex-col  min-h-screen  ">
      {/* Header */}
      <header className="bg-[#2C5F8D] text-white px-6 py-4 flex flex-col lg:flex-row gap-2 lg:items-center justify-between border-b border-[#234a6d] ">
        <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4">
          <h1 className="text-xl font-semibold">Fundamentals of Nursing</h1>
          <Tag
            color="#FE5E7E"
            className="text-white !text-xs !py-0.5 !rounded-md w-fit"
          >
            {session.mode === "practice" ? "Practice Mode" : "Test Mode"}
          </Tag>
        </div>

        <div className="flex items-center gap-1.5 lg:gap-3">
          {timeRemaining !== null && (
            <div className="flex items-center gap-2 bg-[#234a6d] px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5" />
              <span className="font-mono font-semibold">
                {formatTime(timeRemaining)}
              </span>
            </div>
          )}

          <Button
            type="text"
            size={lg ? "middle" : "small"}
            onClick={handleToggleFlag}
            className={`!text-white hover:bg-[#234a6d] ${isFlagged ? "bg-[#234a6d]" : ""}`}
            icon={
              <Flag className={`w-4 h-4 ${isFlagged ? "fill-current" : ""}`} />
            }
          >
            <span className="hidden lg:block">
              {isFlagged ? "Flagged" : "Flag"}
            </span>
          </Button>

          <Button
            type="text"
            size={lg ? "middle" : "small"}
            onClick={() => setShowCalculator(true)}
            className="!text-white hover:bg-[#234a6d]"
            icon={<Calculator className="w-4 h-4" />}
          >
            <span className="hidden lg:block">Calculator</span>
          </Button>

          {session.type !== "full-exam" && (
            <Button
              type="text"
              size={lg ? "middle" : "small"}
              onClick={() => setShowFlashcardModal(true)}
              disabled={
                session.mode !== "practice" || !currentAnswer || !showRationale
              }
              className={`!text-white hover:bg-[#234a6d] ${
                session.mode !== "practice" || !currentAnswer || !showRationale
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              icon={<BookmarkPlus className="w-4 h-4" />}
            >
              <span className="hidden lg:block">Flashcards</span>
            </Button>
          )}

          <Button
            type="text"
            size={lg ? "middle" : "small"}
            onClick={onExit}
            className="!text-white hover:bg-[#234a6d] !inline-flex !items-center !justify-center gap-0.5"
          >
            <X className="h-4 w-4 mt-0.5" />
            <span className="hidden lg:block">Exit</span>
          </Button>
        </div>
      </header>

      {/* Progress */}
      <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span className="text-sm text-gray-600">
            {answeredCount} answered • {flaggedQuestions.size} flagged
          </span>
        </div>
        <Progress percent={progress} strokeColor="#2C5F8D" showInfo={false} />
      </div>

      {/* Main content */}
      <div className="flex-1">
        <div
          className={`h-full ${session.mode === "practice" && showRationale && currentAnswer ? "flex flex-col lg:flex-row gap-6 p-6" : ""}`}
        >
          <div
            className={
              session.mode === "practice" && showRationale && currentAnswer
                ? "flex-1 lg:overflow-auto"
                : "max-w-4xl mx-auto p-6"
            }
          >
            {/* Context, Question, Image, Type Badge ... */}
            {currentQuestion.context && (
              <Card className="mb-4 bg-blue-50 border-blue-200">
                <p className="text-sm text-gray-700">
                  {currentQuestion.context}
                </p>
              </Card>
            )}

            <div className="mb-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900 flex-1">
                  {currentQuestion.question}
                </h2>
                <Button
                  type="text"
                  size="small"
                  onClick={handleToggleFlag}
                  className={isFlagged ? "text-red-600" : "text-gray-400"}
                  icon={
                    <Flag
                      className={`w-5 h-5 ${isFlagged ? "fill-current" : ""}`}
                    />
                  }
                />
              </div>

              {currentQuestion.imageUrl && (
                <div className="mb-4">
                  <ImageWithFallback
                    src={currentQuestion.imageUrl}
                    alt="Question illustration"
                    className="max-w-md rounded-lg border border-gray-200"
                  />
                </div>
              )}

              <Tag className="mb-4">
                {currentQuestion.type === "multiple-choice" &&
                  "Multiple Choice"}
                {currentQuestion.type === "select-all" &&
                  "Select All That Apply"}
                {/* ... other types */}
              </Tag>
            </div>

            {/* Options rendering */}
            {currentQuestion.type === "multiple-choice" && (
              <Radio.Group
                onChange={(e) => handleAnswer(e.target.value)}
                value={currentAnswer as string | undefined}
                className="w-full space-y-3"
              >
                {currentQuestion.options?.map((option, idx) => (
                  <MultipleChoiceOption
                    key={idx}
                    option={option}
                    index={idx}
                    isSelected={currentAnswer === option}
                    isCorrect={option === currentQuestion.correctAnswer}
                    showFeedback={
                      session.mode === "practice" &&
                      showRationale &&
                      !!currentAnswer
                    }
                    strikethrough={strikethroughOptions.has(option)}
                    onToggleStrikethrough={handleToggleStrikethrough}
                  />
                ))}
              </Radio.Group>
            )}

            {currentQuestion.type === "select-all" && (
              <div className="space-y-3">
                <p className="text-sm font-medium text-blue-600 mb-3">
                  Select all that apply
                </p>
                {currentQuestion.options?.map((option, idx) => {
                  const selected = (currentAnswer as string[]) || [];
                  const isChecked = selected.includes(option);
                  const correctAnswers =
                    currentQuestion.correctAnswer as string[];
                  return (
                    <SelectAllOption
                      key={idx}
                      option={option}
                      index={idx}
                      isChecked={isChecked}
                      isCorrect={correctAnswers.includes(option)}
                      showFeedback={
                        session.mode === "practice" &&
                        showRationale &&
                        !!currentAnswer
                      }
                      strikethrough={strikethroughOptions.has(option)}
                      onToggleStrikethrough={handleToggleStrikethrough}
                      onChange={(checked) => {
                        const newAnswers = checked
                          ? [...selected, option]
                          : selected.filter((a) => a !== option);
                        handleAnswer(newAnswers);
                      }}
                    />
                  );
                })}
              </div>
            )}
          </div>

          {/* Rationale Sidebar */}
          {session.mode === "practice" && showRationale && currentAnswer && (
            <div className="w-full lg:w-96 flex-shrink-0 overflow-auto">
              <RationableSidebar
                currentQuestion={currentQuestion}
                currentAnswer={currentAnswer}
              />
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-4 bg-white">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div />
          <div className="flex gap-3">
            {session.mode === "practice" && !isSubmitted && currentAnswer && (
              <Button type="primary" onClick={handleSubmitAnswer}>
                Submit Answer
              </Button>
            )}
            <Button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              icon={<ChevronLeft className="w-4 h-4 mt-1.5" />}
            >
              {lg ? "Previous" : "Prev."}
            </Button>
            {currentQuestionIndex === questions.length - 1 ? (
              <Button type="primary" onClick={handleSubmit}>
                Submit Exam
              </Button>
            ) : (
              <Button type="primary" onClick={handleNext}>
                Next
                <ChevronRight className="w-4 h-4  mt-1" />
              </Button>
            )}
          </div>
        </div>
      </footer>

      <Modal
        title="Calculator"
        open={showCalculator}
        onCancel={() => setShowCalculator(false)}
        footer={null}
        centered
        width={400}
      >
        <CalculatorTool />
      </Modal>

      <FlashcardModal
        open={showFlashcardModal}
        questionText={currentQuestion.question}
        correctAnswer={currentQuestion.correctAnswer || ""}
        rationale={currentQuestion.rationale}
        rationaleImage={currentQuestion.rationaleImage}
        onClose={() => setShowFlashcardModal(false)}
        onSave={handleSaveFlashcard}
      />
    </div>
  );
}
