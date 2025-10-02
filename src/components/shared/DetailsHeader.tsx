"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface ActionButtonConfig {
  icon: React.ElementType;
  label: string;
  hoverColor: string;
  onClick?: () => void;
}

export default function DetailsHeader({
  title,
  back,
  actions = [],
  primaryBg = true,
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
        primaryBg ? "bg-[#02478D]" : " bg-white"
      } px-4 `}
    >
      {/* Back Button */}
      <div className="flex items-center space-x-3">
        {back ? (
          <Link href={back} className="mt-1.5">
            <button className="hover:bg-gray-100 text-[#c5c6c6] font-semibold rounded border">
              <ChevronLeft size={24} />
            </button>
          </Link>
        ) : (
          <button
            onClick={() => router.back()}
            className="hover:bg-gray-100 text-[#c5c6c6] font-semibold rounded border"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        <span
          className={`text-sm ${
            primaryBg ? "text-white border-[#003877]" : ""
          }  border    bg-transparent px-3 py-1 rounded capitalize`}
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
}: ActionButtonConfig) {
  return (
    <div className="flex flex-col items-center group gap-2 cursor-pointer">
      <button
        onClick={onClick}
        className="flex flex-col items-center justify-center w-8 h-8 lg:w-11 lg:h-[38px] rounded-lg hover:bg-white transition-colors cursor-pointer group border border-[#003877] bg-[#F6F7F8]"
      >
        <Icon className={`w-4 h-4 text-gray-600 group-hover:${hoverColor}`} />
      </button>
      <span
        className={`text-[8px] hidden lg:block lg:text-xs text-gray-500 group-hover:${hoverColor}`}
      >
        {label}
      </span>
    </div>
  );
}
