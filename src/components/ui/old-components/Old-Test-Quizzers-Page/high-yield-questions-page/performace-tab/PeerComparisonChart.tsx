"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceDot,
  Tooltip,
} from "recharts";


interface PeerComparisonChartProps {
  userPercentile: number;
  data: any;
}

export function PeerComparisonChart({
  userPercentile,
  data,
}: PeerComparisonChartProps) {
  // Generate bell curve style data (normal distribution-like)

  // Find curve y for the given percentile
  const userPoint = data.reduce((prev: any, curr: any) =>
    Math.abs(curr.x - userPercentile) < Math.abs(prev.x - userPercentile)
      ? curr
      : prev
  );

  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="bellCurveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#91caff" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#91caff" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="x"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#666" }}
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            type="number"
          />
          <YAxis hide />

          {/*(bell curve) */}
          <Area
            type="monotone"
            dataKey="y"
            stroke="#1890ff"
            strokeWidth={1}
            fill="url(#bellCurveGradient)"
          />

          {/* Tooltip */}
          <Tooltip
            formatter={(value: number, name: string, props: any) => [
              value.toFixed(4),
              name === "y" ? "Density" : "Percentile",
            ]}
            labelFormatter={(label) => `Percentile: ${label}%`}
          />

          {/* your score position */}
          <ReferenceDot
            x={userPercentile}
            y={userPoint.y}
            r={7}
            fill="#003eb3"
            stroke="white"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
