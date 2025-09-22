import { Empty } from "antd";
import DosageCalculation from "./DosageCalculation";

export default function CalculatorMainPanel({ selected }: { selected: string | null }) {
  if (!selected) return <div className="flex justify-center items-center h-[calc(100vh-75px)]">
    <Empty description="Please select a calculator" />
  </div>;

  switch (selected) {
    case "dosage-calculation":
      return <DosageCalculation />;
    case "unit-conversion":
      return <DosageCalculation />;
    case "pediatric-dosage":
      return <DosageCalculation />;
    case "bmi-calculator":
      return <DosageCalculation />;
    default:
      return <div className="flex justify-center items-center  h-[calc(100vh-78px)]">
        <Empty description="Calculator not found" />
      </div>
  }
}
