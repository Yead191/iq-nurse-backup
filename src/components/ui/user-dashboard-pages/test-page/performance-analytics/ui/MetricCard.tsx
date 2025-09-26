type ColorType = "blue" | "green";

interface MetricCardProps {
  value: string;
  label: string;
  color?: any;
}

export default function MetricCard({
  value,
  label,
  color = "blue",
}: MetricCardProps) {
  const colorClasses = {
    blue: "text-blue-600",
    green: "text-green-600",
  };

  return (
    <div className="bg-card rounded-lg  p-6 boxShadow mb-2">
      <div className="text-center space-y-2">
        <div className={`text-3xl font-bold text-primary `}>{value}</div>
        <div className="text-sm text-muted-foreground font-medium">{label}</div>
      </div>
    </div>
  );
}
