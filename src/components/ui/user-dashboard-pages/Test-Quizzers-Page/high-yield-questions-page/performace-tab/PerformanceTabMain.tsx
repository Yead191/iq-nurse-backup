"use client";

import { Card } from "antd";
import { CircularProgressChart } from "./CircularProgressChart";
import { PerformanceLegend } from "./PerformanceLegend";
import { PeerComparisonSection } from "./PeerComparisonSection";
import MobileTabHeader from "@/components/shared/MobileTabHeader";

const generatePerformanceData = () => [
  { name: "Correct", value: 43, color: "#52c41a" },
  { name: "Wrong", value: 27, color: "#ff7875" },
  { name: "For Review", value: 18, color: "#1890ff" },
  { name: "Not Attempted", value: 33, color: "#ff4d4f" },
];

const generateBellCurveData = () =>
  Array.from({ length: 100 }, (_, i) => {
    const x = i;
    const mean = 50;
    const stdDev = 15;
    const y =
      Math.exp(-0.5 * Math.pow((x - mean) / stdDev, 2)) /
      (stdDev * Math.sqrt(2 * Math.PI));
    return { x, y: y * 1000 };
  });

const OVERALL_SCORE = 90;
const USER_PERCENTILE = 70;

export function PerformanceTabMain() {
  const performanceData = generatePerformanceData();
  const bellCurveData = generateBellCurveData();

  return (
    <div className="flex flex-col md:flex-row gap-8 ">
      <MobileTabHeader title="Performance" />
      <Card className="flex-1 p-8">
        <div className="flex flex-col items-center  space-y-8">
          <CircularProgressChart
            data={performanceData}
            overallScore={OVERALL_SCORE}
          />
          <PerformanceLegend data={performanceData} />
        </div>
      </Card>

      <PeerComparisonSection
        userPercentile={USER_PERCENTILE}
        bellCurveData={bellCurveData}
      />
    </div>
  );
}
