import { Grid } from "antd";
import { useRouter } from "next/navigation";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

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
      {/* <div
        style={{
          boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.2)",
        }}
        className="flex items-center gap-4 mb-6  w-fit pl-2 pr-6  py-2 rounded-4xl"
      >
        <div className="w-12 h-12  bg-[#1886EA] rounded-full flex items-center justify-center flex-shrink-0 ">
          <Image
            src={category?.icon}
            alt={category.label}
            width={28}
            height={28}
            className={`relative transition-all duration-200 brightness-50 invert`}
            unoptimized
            priority
          />
        </div>
        <div>
          <h2 className="text-sm 2xl:text-xl font-semibold text-gray-800 mb-2">
            {category.title}
          </h2>
        </div>
      </div> */}

      <div
        className="flex  items-center relative "
        onClick={() => handleClick(category.id)}
      >
        {/* Body Illustration */}
        <img
          src={category?.image}
          alt={`${category?.title} illustration`}
          className="h-[400px] md:h-auto lg:h-[calc(100vh-250px)] 2xl:h-[calc(100vh-300px)] object-contain rounded-xl shadow-md"
        />
        <FaArrowUpRightFromSquare className="absolute text-xl right-2 top-4 md:hidden" /> 
      </div>
    </div>
  );
}
