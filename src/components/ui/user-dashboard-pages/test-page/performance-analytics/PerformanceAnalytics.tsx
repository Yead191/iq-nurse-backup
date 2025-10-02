"use client";

import { Grid, Tabs } from "antd";
import TopicsPerformance from "./tabs/TopicsPerformance";
import PeerComparison from "./tabs/PeerComparison";
import Recommendations from "./tabs/Recommendations";
import MetricCard from "./ui/MetricCard";

const { TabPane } = Tabs;
// Demo data
const metrics = [
  { value: "85%", label: "Overall Score", color: "blue" },
  { value: "92%", label: "NCLEX Pass Prediction", color: "green" },
  { value: "1,245", label: "Questions Answered", color: "blue" },
  { value: "37", label: "Study Hours", color: "blue" },
];
export default function PerformanceAnalytics() {
  const { lg } = Grid.useBreakpoint();
  return (
    <div className="max-w-6xl mx-auto md:p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Your Performance Analytics
        </h1>
        <p className="text-muted-foreground text-balance">
          Track your progress, identify strengths and weaknesses, and optimize
          your NCLEX preparation
        </p>
      </div>
      {/* Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics?.map((metric, index) => (
          <MetricCard
            key={index}
            value={metric.value}
            label={metric.label}
            color={metric.color}
          />
        ))}
      </div>

      {/* Tabs */}
      <Tabs
        defaultActiveKey="topics"
        size={lg ? "large" : "small"}
        className="performance-tabs"
        items={[
          {
            key: "topics",
            label: "Topics Performance",
            children: <TopicsPerformance />,
          },
          {
            key: "peer",
            label: "Peer Comparison",
            children: <PeerComparison />,
          },
          {
            key: "recommendations",
            label: "Recommendations",
            children: <Recommendations />,
          },
        ]}
      />

      <style jsx global>{`
        .performance-tabs .ant-tabs-nav {
          margin-bottom: 32px;
          margin-top: 18px;
        }

        .performance-tabs .ant-tabs-tab {
          font-size: 16px;
          font-weight: 500;
          color: rgb(100 116 139);
          border-bottom: 2px solid transparent;
        }

        .performance-tabs .ant-tabs-tab-active {
          color: rgb(59 130 246);
          border-bottom-color: rgb(59 130 246);
        }

        .performance-tabs .ant-tabs-tab:hover {
          color: rgb(59 130 246);
        }

        .performance-tabs .ant-tabs-ink-bar {
          background: rgb(59 130 246);
        }

        .performance-tabs .ant-tabs-content-holder {
          border: none;
        }
      `}</style>
    </div>
  );
}
