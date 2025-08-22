import { Card } from "antd";
import { PeerComparisonChart } from "./PeerComparisonChart";

interface BellCurveData {
  x: number;
  y: number;
}

interface PeerComparisonSectionProps {
  userPercentile: number;
  bellCurveData: BellCurveData[];
}

export function PeerComparisonSection({
  userPercentile,
  bellCurveData,
}: PeerComparisonSectionProps) {
  return (
    <Card className="flex-1 p-6">
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Peer Group Comparison
        </h3>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-800 font-medium">
            You're performing better than {userPercentile}% of your peer group.
          </p>
        </div>

        <PeerComparisonChart
          userPercentile={userPercentile}
          data={bellCurveData}
        />
      </div>
    </Card>
  );
}
