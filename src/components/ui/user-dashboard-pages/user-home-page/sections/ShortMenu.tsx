import Link from "next/link";
import Image from "next/image";
import React from "react";

interface MenuItem {
  id: string;
  title: string;
  href: string;
  icon?: React.ReactNode;
  image?: string;
}

const items: MenuItem[] = [
  {
    id: "body-systems",
    title: "Body Systems",
    href: "/profile/body-system",
    image: "/assets/icons/anatomy-icon.svg",
  },
  {
    id: "clinicals",
    title: "Clinical Skills",
    href: "/profile/clinicals",
    image: "/assets/sidebar-icons/clinicals-icon.svg",
  },
  {
    id: "patient-assessment",
    title: "Patient Assessment",
    href: "/profile/patient-assessment",
    image: "/assets/sidebar-icons/patient-assessment-icon.svg",
  },
  {
    id: "care-plans",
    title: "Care Plans",
    href: "/profile/care-plans",
    image: "/assets/sidebar-icons/care-plans-icon.svg",
  },
  {
    id: "templates",
    title: "Download & Templates",
    href: "/profile/templates",
    image: "/assets/sidebar-icons/template-icon.svg",
  },
  {
    id: "tests",
    title: "Exams",
    href: "/profile/tests",
    image: "/assets/sidebar-icons/test-icon.svg",
  },
  {
    id: "ai-drug",
    title: "Drug Cards",
    href: "/profile/ai-drug",
    image: "/assets/drug-ai/drug.svg",
  },
  {
    id: "maternity",
    title: "OB/Maternity",
    href: "/profile/study-notes?category=lpn-maternal-newborn",
    image: "/assets/icons/maternity-icon.svg",
  },
  {
    id: "clinical-calculator",
    title: "Clinical Calculator",
    href: "/profile/clinical-calculator",
    image: "/assets/sidebar-icons/calculator.svg",
  },
  {
    id: "concept-map",
    title: "Concept Map",
    href: "/profile/concept-map",
    image: "/assets/sidebar-icons/content-map-icon.svg",
  },
];

// IDs to show on large devices
const LARGE_DEVICE_MENU_IDS = [
  "clinicals",
  "care-plans",
  "concept-map",
  "ai-drug",
];

export default function ShortMenu() {
  const renderItem = (item: MenuItem) => (
    <Link
      key={item.id}
      href={item.href}
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
      className="flex items-center gap-2 bg-[#02478D80] lg:bg-[#02478DCC] rounded-lg px-3 md:px-4 py-2 whitespace-nowrap min-w-fit active:scale-95 transition-transform"
    >
      <div className="w-5 h-5 md:w-6 md:h-6 shrink-0 relative flex items-center justify-center">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            width={24}
            height={24}
            className="w-full h-[16px] md:h-[20px] object-contain"
          />
        ) : (
          item.icon
        )}
      </div>
      <span className="text-white font-medium text-xs md:text-sm">
        {item.title}
      </span>
    </Link>
  );

  return (
    <>
      {/* Mobile: show all items */}
      <section className="block md:hidden w-full overflow-hidden">
        <div className="flex overflow-x-auto gap-3 py-4 px-1 items-center scrollbar-hide">
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
