import React from "react";
import {
  RotateCcw,
  AlertTriangle,
  CheckCircle,
  LucideIcon,
} from "lucide-react";

interface StatCardProps {
  value: number;
  label: string;
}

interface ActionButtonProps {
  onClick: () => void;
  label: string;
  icon: LucideIcon;
  className: string;
}

const StatCard = ({ value, label }: StatCardProps) => (
  <div className="text-center boxShadow h-[140px] bg-[#F8F9FA] rounded-2xl flex flex-col items-center justify-center">
    <div className="text-3xl font-bold text-primary mb-1">{value}</div>
    <div className="text-sm text-gray-500">{label}</div>
  </div>
);

const ActionButton = ({
  onClick,
  label,
  icon: Icon,
  className,
}: ActionButtonProps) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors ${className}`}
  >
    <Icon size={16} />
    {label}
  </button>
);

const FlashcardResult = ({ setShowCompletion }: any) => {
  const stats = [
    { label: "Cards Studied", value: 24 },
    { label: "Marked Easy", value: 7 },
    { label: "Marked Medium", value: 5 },
    { label: "Marked Hard", value: 10 },
  ];

  const actions = [
    {
      label: "Reset Cards",
      icon: RotateCcw,
      onClick: () => console.log("Reset cards clicked"),
      className: "bg-gray-100 hover:bg-gray-200 text-gray-700",
    },
    {
      label: "Review Hard Cards",
      icon: AlertTriangle,
      onClick: () => console.log("Review hard cards clicked"),
      className: "bg-orange-500 hover:bg-orange-600 text-white",
    },
    {
      label: "Back to Topics",
      icon: CheckCircle,
      onClick: () => setShowCompletion(false),
      className: "bg-green-500 hover:bg-green-600 text-white",
    },
  ];

  return (
    <section className="lg:mt-12">
      <div className="p-0 lg:p-6 w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Study Session Complete
          </h2>
          <p className="text-sm text-gray-600">
            Here's how you performed in this flashcard session
          </p>
        </div>

        {/* Stats Grid */}
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          {stats.map((stat, idx) => (
            <StatCard key={idx} value={stat.value} label={stat.label} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {actions.map((action, idx) => (
            <ActionButton key={idx} {...action} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashcardResult;
