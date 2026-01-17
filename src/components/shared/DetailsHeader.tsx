"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface ActionButtonConfig {
  icon: React.ElementType;
  label: string;
  hoverColor: string;
  onClick?: () => void;
  className?: string;
}

export default function DetailsHeader({
  title,
  back,
  actions = [],
  primaryBg = false,
}: {
  title?: string;
  back?: string;
  actions?: ActionButtonConfig[];
  primaryBg?: boolean;
}) {
  const router = useRouter();
  return (
    <div
      className={`flex md:hidden items-center justify-between py-3 sticky top-0 z-50 ${
        primaryBg ? "bg-[#02478D]" : " bg-[#FFFFFF] "
      } px-4 `}
    >
      {/* Back Button */}
      <div className="flex items-center space-x-3">
        {back ? (
          <Link href={back} className="mt-1.5">
            <button
              className={`hover:bg-gray-100 text-[#c5c6c6] font-semibold rounded border ${
                primaryBg ? "border-white/70" : "border-[#2C5F8D]"
              } `}
            >
              <ChevronLeft size={24} color={primaryBg ? "#fff" : "#2C5F8D"} />
            </button>
          </Link>
        ) : (
          <button
            onClick={() => router.back()}
            className={`hover:bg-gray-100 text-[#c5c6c6] font-semibold rounded border ${
              primaryBg ? "border-white/70" : "border-[#2C5F8D]"
            } `}
          >
            <ChevronLeft size={24} color={primaryBg ? "#fff" : "#2C5F8D"} />
          </button>
        )}
        <span
          className={`text-sm border ${
            primaryBg ? "text-white border-white/70" : ""
          }   border-[#2C5F8D]    bg-transparent px-3 py-1 rounded capitalize`}
        >
          {title}
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-3">
        {actions?.map((action, idx) => (
          <ActionButton key={idx} {...action} />
        ))}
      </div>
    </div>
  );
}

function ActionButton({
  icon: Icon,
  label,
  hoverColor,
  onClick,
  className,
}: ActionButtonConfig) {
  return (
    <div className="flex flex-col items-center group gap-2 cursor-pointer">
      <button
        onClick={onClick}
        className="flex flex-col items-center justify-center w-10 h-8 lg:w-11 lg:h-[38px] rounded-lg hover:bg-white transition-colors cursor-pointer group border border-[#2C5F8D]  bg-[#F6F7F8] "
      >
        <Icon
          className={`w-4 h-4 text-[#02478D] group-hover:${hoverColor} ${className}`}
        />
      </button>
      <span
        className={`text-[8px] hidden lg:block lg:text-xs text-[#02478D] group-hover:${hoverColor}`}
      >
        {label}
      </span>
    </div>
  );
}
