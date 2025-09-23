"use client";

import { Card } from "antd";

interface BodySystem {
  id: string;
  label: string;
  icon: string;
  title: string;
  description: string[];
}

interface SystemContentPanelProps {
  selectedSystem: BodySystem;
}

export default function SystemContentPanel({
  selectedSystem,
}: SystemContentPanelProps) {
  return (
    <section
      style={{
        boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.25)",
      }}
      className="p-6 bg-white rounded-3xl shadow-2xl max-h-[calc(100vh-116px)] overflow-y-auto"
    >
      <div className="h-[600px] overflow-y-auto">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          {selectedSystem.title}
        </h3>
        <div className="space-y-4">
          {selectedSystem.description.map((paragraph, index) => (
            <p key={index} className="text-sm text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
