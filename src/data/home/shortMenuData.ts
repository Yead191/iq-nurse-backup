export interface MenuItem {
  id: string;
  title: string;
  href: string;
  icon?: React.ReactNode;
  image?: string;
}

const BannerItems: MenuItem[] = [
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

const studyItems: MenuItem[] = [
  {
    id: "medical-surgical",
    title: "Medical Surgical",
    href: "/profile/study-notes?category=medical-surgical",
    image: "/assets/icons/user-home/short-menu/icon1.svg",
  },
  {
    id: "nursing-leadership",
    title: "Nursing Leadership",
    href: "/profile/study-notes?category=nursing-leadership",
    image: "/assets/icons/user-home/short-menu/icon2.svg",
  },
  {
    id: "pharmacology",
    title: "Pharmacology",
    href: "/profile/study-notes?category=pharmacology",
    image: "/assets/icons/user-home/short-menu/icon3.svg",
  },
  {
    id: "behavioral-health",
    title: "Behavioral Health",
    href: "/profile/study-notes?category=behavioral-health",
    image: "/assets/icons/user-home/short-menu/icon4.svg",
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    href: "/profile/study-notes?category=pediatrics",
    image: "/assets/icons/user-home/short-menu/icon5.svg",
  },
  {
    id: "maternity",
    title: "OB/Maternity",
    href: "/profile/study-notes?category=maternity",
    image: "/assets/icons/user-home/short-menu/icon6.svg",
  },
  {
    id: "mental-health",
    title: "Mental Health",
    href: "/profile/study-notes?category=mental-health",
    image: "/assets/icons/user-home/short-menu/icon9.svg",
  },
  {
    id: "critical-care",
    title: "Critical Care",
    href: "/profile/study-notes?category=critical-care",
    image: "/assets/icons/user-home/short-menu/icon7.svg",
  },
  {
    id: "fundamentals",
    title: "Fundamentals",
    href: "/profile/study-notes?category=fundamentals",
    image: "/assets/icons/user-home/short-menu/icon8.svg",
  },
];

export { BannerItems, studyItems };
