import Link from "next/link";
import Image from "next/image";
import React from "react";
import { MenuItem } from "@/data/home/shortMenuData";
import { Search } from "lucide-react";

// IDs to show on large devices
const LARGE_DEVICE_MENU_IDS = [
  "clinicals",
  "care-plans",
  "concept-map",
  "ai-drug",
];

export default function ShortMenu({
  items,
  isPrimary = false,
}: {
  items: MenuItem[];
  isPrimary?: boolean;
}) {
  const renderItem = (item: MenuItem) => (
    <Link
      key={item.id}
      href={item.href}
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      className={`flex items-center gap-2
        ${isPrimary ? "bg-[#02478D80] lg:bg-[#02478DCC]" : "bg-[#FFFFFF] "}
        rounded-lg px-3 md:px-4 py-2 whitespace-nowrap min-w-fit active:scale-95 transition-transform `}
    >
      <div className=" shrink-0 relative flex items-center justify-center">
        {isPrimary ? (
          <Search size={18} color="#fff" />
        ) : item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            width={32}
            height={32}
            className={`w-full ${
              isPrimary ? "h-[16px] md:h-[20px]" : "!h-[28px]"
            }  object-contain`}
          />
        ) : (
          item.icon
        )}
      </div>
      <span
        className={`font-medium text-xs md:text-sm ${
          isPrimary ? "text-[#FFFFFF]" : "text-[#000000]"
        }`}
      >
        {item.title}
      </span>
    </Link>
  );

  return (
    <>
      {/* Mobile: show all items */}
      <section className="block md:hidden w-full overflow-hidden">
        <div
          className={`flex overflow-x-auto gap-3 ${
            isPrimary ? "py-4" : "pb-4"
          } px-1 items-center scrollbar-hide`}
        >
          {items.map(renderItem)}
        </div>
      </section>

      {/* Large devices: show selected items only */}
      <section className="hidden md:block w-full">
        <div className="flex gap-4 py-4 px-1">
          {items
            .filter((item) => LARGE_DEVICE_MENU_IDS.includes(item.id))
            .map(renderItem)}
        </div>
      </section>
    </>
  );
}
