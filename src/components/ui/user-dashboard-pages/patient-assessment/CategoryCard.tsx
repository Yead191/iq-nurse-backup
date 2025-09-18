import { Card } from "antd";
import { Heart, CheckCircle } from "lucide-react";
import Image from "next/image";

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
  return (
    <Card className="rounded-2xl border-0 shadow-lg bg-white overflow-hidden">
      <div
        style={{
          boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.2)",
        }}
        className="flex items-center gap-4 mb-6  w-fit pl-2 pr-6  py-2 rounded-4xl"
      >
        <div className="w-12 h-12 bg-[#1886EA] rounded-full flex items-center justify-center flex-shrink-0 ">
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
      </div>

      {/* Body Illustration */}
      <div className="flex  items-center">
        <img
          src={category?.image}
          alt={`${category.title} illustration`}
          className="h-[calc(100vh-415px)] object-contain rounded-xl"
        />
      </div>
    </Card>
  );
}
