interface PerformanceData {
  name: string
  value: number
  color: string
}

interface PerformanceLegendProps {
  data: PerformanceData[]
}

export function PerformanceLegend({ data }: PerformanceLegendProps) {
  return (
    <div className="grid lg:grid-cols-1 grid-cols-2 gap-4 w-full max-w-lg">
      {data.map((item, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-sm text-gray-600">{item.name}</span>
          </div>
          <span className="text-sm font-medium text-gray-800">{item.value}%</span>
        </div>
      ))}
    </div>
  )
}
