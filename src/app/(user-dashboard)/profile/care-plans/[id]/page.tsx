import CarePlansContent from "@/components/ui/user-dashboard-pages/care-plans-new";
import { demoCarePlanContent } from "@/data/care-plans/demoCarePlanContent";
import { Empty } from "antd";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function page({ params }: PageProps) {
  const { id } = await params;

  const carePlanContent = {
    id,
    name: "Hypertension (HTN)",
    description: "Management of chronic high blood pressure",
    categoryName: "Cardiovascular System",
    content: demoCarePlanContent,
  };

  if (!carePlanContent) {
    return (
      <div className="flex items-center justify-center h-full p-6">
        <Empty description="No data available" />
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-5 py-6">
      <CarePlansContent content={carePlanContent} />
    </div>
  );
}
