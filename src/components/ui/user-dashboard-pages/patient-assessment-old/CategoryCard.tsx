import { Button, Grid } from "antd";
import { ChevronUp, StickyNote } from "lucide-react";
import { useRouter } from "next/navigation";

interface Category {
  id: string;
  label: string;
  icon: string;
  title: string;
  description: string[];
  image: string;
}

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const { lg } = Grid.useBreakpoint() || {};
  const router = useRouter();
  const handleClick = (id: string) => {
    // Handle click event if needed
    console.log("Category clicked:", id);
    if (!lg) {
      return router.push(
        `/profile/patient-assessment/assessment-details/${id}`
      );
    }
  };
  return (
    <div className="rounded-2xl ">
      <div
        className="flex  items-center relative "
        onClick={() => handleClick(category.id)}
      >
        {/* Body Illustration */}
        <img
          src={category?.image}
          alt={`${category?.title} illustration`}
          className="h-[400px] md:h-auto lg:h-[calc(100vh-250px)] 2xl:h-[calc(100vh-280px)] object-contain rounded-xl shadow-md"
        />
      </div>
      <div
        onClick={() => handleClick(category.id)}
        className="flex items-center justify-between mt-4 lg:hidden"
      >
        <Button
          // variant={showNotes ? "default" : "outline"}
          size="small"
          className="!flex !items-center gap-2 !justify-between !w-full !h-[40px] bg-white"
        >
          <span className="flex items-center gap-2">
            <StickyNote className="w-4 h-4" />
            {category.title} Notes
          </span>
          <ChevronUp className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
