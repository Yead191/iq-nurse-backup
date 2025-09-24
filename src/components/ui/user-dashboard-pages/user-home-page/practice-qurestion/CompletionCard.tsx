"use client";

interface CompletionCardProps {
  score: number;
  totalQuestions: number;
  category: string;
  onRetry: () => void;
}

export default function CompletionCard({
  score,
  totalQuestions,
  category,
  onRetry,
}: CompletionCardProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isGoodScore = percentage >= 70;

  const getEncouragementMessage = () => {
    if (percentage === 100) {
      return "Perfect score! You have excellent understanding of this topic.";
    } else if (percentage >= 80) {
      return `Great job! You have a good understanding of ${category.toLowerCase()}.`;
    } else if (percentage >= 60) {
      return "Good effort! Review the materials and try again to improve your score.";
    } else {
      return "Keep studying! Review the materials and try again.";
    }
  };

  return (
    <div className="mt-8">
      <div
        className={`rounded-lg p-6 text-center ${
          isGoodScore ? "bg-green-100" : "bg-pink-100"
        }`}
      >
        <h2
          className={`text-xl font-semibold mb-2 ${
            isGoodScore ? "text-green-800" : "text-pink-800"
          }`}
        >
          Test Complete!
        </h2>
        <p
          className={`text-lg mb-2 ${
            isGoodScore ? "text-green-700" : "text-pink-700"
          }`}
        >
          You scored {score} out of {totalQuestions} ({percentage}%)
        </p>
        <p
          className={`text-sm ${
            isGoodScore ? "text-green-600" : "text-pink-600"
          }`}
        >
          {getEncouragementMessage()}
        </p>

        <button
          onClick={onRetry}
          className={`mt-4 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            isGoodScore
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-pink-600 text-white hover:bg-pink-700"
          }`}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
