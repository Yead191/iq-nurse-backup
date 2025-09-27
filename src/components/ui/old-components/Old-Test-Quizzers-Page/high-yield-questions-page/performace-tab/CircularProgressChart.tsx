"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface PerformanceData {
  name: string;
  value: number;
  color: string;
   [key: string]: string | number;
}

interface CircularProgressChartProps {
  data: PerformanceData[];
  overallScore: number;
}

export function CircularProgressChart({
  data,
  overallScore,
}: CircularProgressChartProps) {
  return (
    <div className="relative w-48 h-48">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data as any}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            startAngle={90}
            endAngle={450}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-bold text-gray-800">
            {overallScore}%
          </div>
        </div>
      </div>
    </div>
  );
}
