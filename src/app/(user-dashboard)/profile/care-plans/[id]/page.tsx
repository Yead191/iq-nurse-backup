import CarePlanContent from "@/components/ui/user-dashboard-pages/care-plans";
import { carePlansCategories } from "@/data/carePlansCategories";
import { Empty } from "antd";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function page({ params }: PageProps) {
  const { id } = await params;

  // Find the care plan content by ID
  let carePlanContent = null;

  for (const category of carePlansCategories) {
    const subcategory = category.subcategories.find((sub) => sub.id === id);
    if (subcategory) {
      carePlanContent = subcategory.content;
      break;
    }
  }

  if (!carePlanContent) {
    return (
      <div className="flex items-center justify-center h-full p-6">
        <Empty description="No data available" />
      </div>
    );
  }

  return (
    <div className="px-4 lg:px-5 py-6">
      <CarePlanContent content={carePlanContent} />
    </div>
  );
}
