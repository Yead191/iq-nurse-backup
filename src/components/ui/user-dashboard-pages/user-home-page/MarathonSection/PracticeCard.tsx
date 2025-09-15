export default function PracticeCard({ practice }: any) {
  return (
    <div
      className={`rounded-lg p-4 border h-full `}
      style={{
        borderColor: practice?.borderColor,
        backgroundColor: practice?.bgColor,
      }}
    >
      {/* Header */}
      <div className="flex items-center mb-3 gap-3">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold "
          style={{ backgroundColor: practice?.circleColor }}
        >
          {practice?.id}
        </div>
        <div>
          <h3 className="font-semibold text-black">{practice?.title}</h3>
          <p className="text-sm text-gray-600">{practice?.subtitle}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex items-center space-x-2 mb-3">
        <div className="w-full h-2 rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full"
            style={{
              width: `${(practice?.completed / practice?.total) * 100}%`,
              backgroundColor: practice?.progressColor,
            }}
          ></div>
        </div>
        <span className="text-sm text-gray-600">
          {practice?.completed}/{practice?.total}
        </span>
      </div>

      {/* Buttons */}
      <div className="flex space-x-2">
        {practice?.primaryBtn && (
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium flex-1`}
            style={{
              backgroundColor: practice?.primaryBtn.bg,
              color: practice?.primaryBtn.text,
              border: practice?.primaryBtn.border
                ? `1px solid ${practice?.primaryBtn.border}`
                : "none",
            }}
          >
            {practice?.primaryBtn?.label}
          </button>
        )}

        {practice?.secondaryBtn && (
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium flex-1 `}
            style={{
              backgroundColor: practice?.secondaryBtn.bg,
              color: practice?.secondaryBtn.text,
              border: practice?.secondaryBtn.border
                ? `1px solid ${practice.secondaryBtn.border}`
                : "none",
            }}
          >
            {practice?.secondaryBtn?.label}
          </button>
        )}
      </div>
    </div>
  );
}
