"use client";

interface Question {
  id: number;
  type: "mcq" | "text";
  question: string;
  options?: string[];
  correctAnswer?: number;
  answer?: string;
}

interface Quiz {
  name: string;
  questions: Question[];
  createdAt: string;
  color: string;
}

interface QuizCardProps {
  quiz: Quiz;
}

export default function QuizCard({ quiz }: QuizCardProps) {
  const mcqCount = quiz.questions.filter((q) => q.type === "mcq").length;
  const textCount = quiz.questions.filter((q) => q.type === "text").length;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{quiz.name}</h3>
            <p className="text-sm text-gray-600">
              {quiz.questions.length} questions • {mcqCount} MCQ • {textCount}{" "}
              Text
            </p>
          </div>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
          Start Quiz
        </button>
      </div>

      <div className="space-y-3">
        <h4 className="font-medium text-gray-800 text-sm">Sample Questions:</h4>
        {quiz.questions.slice(0, 2).map((question, index) => (
          <div key={question.id} className="bg-gray-50 rounded-lg p-3">
            <p className="text-sm text-gray-700 font-medium mb-2">
              {index + 1}. {question.question}
            </p>
            {question.type === "mcq" && question.options && (
              <div className="space-y-1">
                {question.options.slice(0, 2).map((option, optIndex) => (
                  <div
                    key={optIndex}
                    className="text-xs text-gray-600 flex items-center gap-2"
                  >
                    <div className="w-4 h-4 border border-gray-300 rounded-full flex-shrink-0"></div>
                    {option}
                  </div>
                ))}
                {question.options.length > 2 && (
                  <p className="text-xs text-gray-500 italic">
                    ...and {question.options.length - 2} more options
                  </p>
                )}
              </div>
            )}
            {question.type === "text" && (
              <div className="text-xs text-gray-600">
                <div className="border border-gray-300 rounded p-2 bg-white">
                  <span className="text-gray-400">
                    Answer: {question.answer?.substring(0, 50)}...
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
        {quiz.questions.length > 2 && (
          <p className="text-xs text-gray-500 italic text-center">
            ...and {quiz.questions.length - 2} more questions
          </p>
        )}
      </div>
    </div>
  );
}
