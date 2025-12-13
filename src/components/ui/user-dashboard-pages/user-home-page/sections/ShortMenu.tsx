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
    id: "flash-card",
    title: "Flashcards",
    href: "/profile/flash-card",
    image: "/assets/sidebar-icons/flash-cards-icon.svg",
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
    id: "care-plans",
    title: "Care Plans",
    href: "/profile/care-plans",
    image: "/assets/icons/assignment-icon.svg",
  },
  {
    id: "concept-map",
    title: "Concept Map",
    href: "/profile/concept-map",
    image: "/assets/sidebar-icons/content-map-icon.svg",
  },
];

export default function ShortMenu() {
  return (
    <section className="block md:hidden w-full overflow-hidden">
      {/* Scroll container */}
      <div className="flex overflow-x-auto gap-3 pb-4 px-4 items-center scrollbar-hide ">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
            className="flex items-center gap-2 bg-[#FFFFFF] rounded-xl px-4 py-2 whitespace-nowrap min-w-fit active:scale-95 transition-transform"
          >
            <div className="w-6 h-6 shrink-0 relative flex items-center justify-center">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={24}
                  height={24}
                  className="w-full h-[20px] object-contain"
                />
              ) : (
                item.icon
              )}
            </div>
            <span className="text-[#003877] font-medium text-sm">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
