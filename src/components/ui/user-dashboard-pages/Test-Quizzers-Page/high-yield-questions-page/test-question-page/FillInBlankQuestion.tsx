"use client";

interface FillInBlankQuestionProps {
  question: string;
  answer: string;
  onAnswerChange: (answer: string) => void;
}

export default function FillInBlankQuestion({
  question,
  answer,
  onAnswerChange,
}: FillInBlankQuestionProps) {
  return (
    <div className="space-y-6">
      <p className="text-gray-700 leading-relaxed">{question}</p>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Type your answer
        </label>
        <textarea
          value={answer}
          onChange={(e) => onAnswerChange(e.target.value)}
          placeholder="Type your answer here..."
          className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        />
      </div>
    </div>
  );
}
