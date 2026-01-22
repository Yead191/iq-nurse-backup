import { Card } from "antd";
import type { FC } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface Props {
  data: Array<{ type: string; value: number; color: string }>;
}

const OverallPerformancePie: FC<Props> = ({ data }) => {
  return (
    <Card
      title="Overall Performance"
      extra={<p className="text-sm text-gray-500">Total questions attempted</p>}
    >
      <div style={{ height: 250, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="type"
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              paddingAngle={5}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              label={(props: any) =>
                `${props.name}: ${props.value} (${(props.percent * 100).toFixed(0)}%)`
              }
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color || "#888"} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default OverallPerformancePie;
