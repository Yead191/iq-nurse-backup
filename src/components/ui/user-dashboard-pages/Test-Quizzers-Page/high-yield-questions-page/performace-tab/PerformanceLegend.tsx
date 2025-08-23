interface PerformanceData {
  name: string;
  value: number;
  color: string;
}

interface PerformanceLegendProps {
  data: PerformanceData[];
}

export function PerformanceLegend({ data }: PerformanceLegendProps) {
  return (
    <div className="grid grid-cols-1 md:gap-2 w-full max-w-sm">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-between py-2 ${
            index === 0 ? "" : "border-t border-[#E1E1E1] md:border-none"
          }`}
        >
          <div className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-gray-600">{item.name}</span>
          </div>
          <span className="text-sm font-medium text-gray-800">
            {item.value}%
          </span>
        </div>
      ))}
    </div>
  );
}
