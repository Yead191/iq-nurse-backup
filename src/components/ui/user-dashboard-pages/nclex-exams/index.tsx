import React from "react";
import ProgressSection from "./components/progress";

export default function NclexContent({ id }: { id: string }) {
  const renderContent = () => {
    switch (id) {
      case "progress":
        return <ProgressSection />;

      default:
        return <div>Content coming soon...</div>;
    }
  };

  return (
    <div className="px-4 lg:px-0 py-6">
      <div className="h-full">{renderContent()}</div>
    </div>
  );
}
