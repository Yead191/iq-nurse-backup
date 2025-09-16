export default function PracticeCard({ practice }: any) {
  // Define colors based on status
  const statusColors: any = {
    ongoing: "#667EEA",
    completed: "#28A745",
    not_started: "#FFFFFF",
  };

  const textColors: any = {
    ongoing: "#fff",
    completed: "#fff",
    not_started: "#666",
  };

  const borderColors: any = {
    ongoing: "#667EEA",
    completed: "#28A745",
    not_started: "#ccc",
  };

  // Decide button(s) based on status
  const renderButtons = () => {
    if (practice.status === "ongoing") {
      return (
        <>
          <button
            className="px-4 py-2 rounded-md text-sm font-medium flex-1 cursor-pointer"
            style={{ backgroundColor: statusColors.ongoing, color: "#fff" }}
          >
            Continue
          </button>
          <button
            className="px-4 py-2 rounded-md text-sm font-medium flex-1"
            style={{
              backgroundColor: "#fff",
              color: "#666",
              border: "1px solid #ccc",
            }}
          >
            Take Break
          </button>
        </>
      );
    }
    if (practice.status === "completed") {
      return (
        <>
          <button
            className="px-4 py-2 rounded-md text-sm font-medium flex-1 cursor-pointer"
            style={{ backgroundColor: statusColors.completed, color: "#fff" }}
          >
            ✓ Completed
          </button>
          <button
            className="px-4 py-2 rounded-md text-sm font-medium flex-1 cursor-pointer"
            style={{
              backgroundColor: "#fff",
              color: "#666",
              border: "1px solid #ccc",
            }}
          >
            Review
          </button>
        </>
      );
    }
    if (practice.status === "not_started") {
      return (
        <button
          className="px-4 py-2 rounded-md text-sm font-medium flex-1 cursor-pointer"
          style={{
            backgroundColor: "#fff",
            color: "#666",
            border: "1px solid #ccc",
          }}
        >
          Start Marathon
        </button>
      );
    }
  };

  return (
    <div
      className="rounded-lg p-4 border h-full  flex flex-col"
      style={{
        borderColor: borderColors[practice.status],
        backgroundColor:
          practice.status === "not_started"
            ? "#fff"
            : practice.status === "completed"
            ? "#F6FFF8"
            : "#F5F7FF",
      }}
    >
      {/* Header */}
      <div className="flex items-center mb-3 gap-3">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
          style={{
            backgroundColor:
              practice.status === "completed" ? "#28A745" : "#667EEA",
          }}
        >
          {practice?.id}
        </div>
        <div>
          <h3 className="font-semibold text-black">{practice?.title}</h3>
          <p className="text-sm text-gray-600">{practice?.subtitle}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex items-center space-x-2 mb-3 flex-grow">
        <div className="w-full h-2 rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full"
            style={{
              width: `${(practice?.completed / practice?.total) * 100}%`,
              backgroundColor: statusColors[practice.status],
            }}
          ></div>
        </div>
        <span className="text-sm text-gray-600">
          {practice?.completed}/{practice?.total}
        </span>
      </div>

      {/* Buttons */}
      <div className="flex space-x-2">{renderButtons()}</div>
    </div>
  );
}
