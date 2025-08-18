"use client";
import { usePathname, useRouter } from "next/navigation";

interface CardProps {
  className?: string;
  items: { title: string; description: string; img: string; id: number };
  selectOption?: number;
  setSelectOption?: (id: number) => void;
}

const Card = ({ className, items, selectOption, setSelectOption }: CardProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const lastSegment = pathname.split("/").filter(Boolean).pop();

  const handleClick = () => {
    setSelectOption?.(items.id);

    if (items.title === "Your Own Flashcards" && lastSegment === "flash-cards") {
      router.push("/profile/flash-cards/create-flash");
    }
  };

  const isSelected = selectOption === items.id;

  return (
    <div
      className={`
        ${className || ""} 
        border rounded-2xl w-full h-full flex flex-col items-center justify-center gap-6 p-6 lg:p-8 
        transition-transform duration-300 hover:shadow hover:-translate-y-1 bg-white
        ${isSelected ? "border-[#003877]" : "border-[#F0F0F0]"}
        cursor-pointer
      `}
      onClick={handleClick}
    >
      {/* Image Wrapper */}
      <div className="lg:w-24 w-16 h-16 lg:h-24 bg-[#F5F6F8] rounded-full flex items-center justify-center shadow-sm">
        <img
          src={items.img}
          alt={items.title}
          className="lg:w-14 lg:h-14 w-10 h-10 object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
          {items.title}
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
          {items.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
