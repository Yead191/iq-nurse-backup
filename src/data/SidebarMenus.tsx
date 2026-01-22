import Image from "next/image";
export interface MenuItem {
  key: string;
  label: string;
  icon: React.ReactNode;
  children?: MenuItem[];
  tag?: string;
  subtitle?: string;
  className?: string;
}
export const icon = (src: string, alt: string, size = 25) => (
  <Image
    height={30}
    width={30}
    src={src}
    alt={alt}
    className={`h-[20px] w-[20px] 2xl:h-[22px] 2xl:w-fit overflow-hidden  object-cover`}
  />
);

export const menus: Record<string, MenuItem[]> = {
  main: [
    {
      key: "/profile/home",
      label: "Home",
      icon: icon("/assets/sidebar-icons/home-icon.svg", "home"),
    },
    // {
    //   key: "/profile/community-home",
    //   label: "Community",
    //   icon: icon("/assets/sidebar-icons/community-icon.svg", "community"),
    // },
  ],
  studyMaterial: [
    {
      key: "/profile/study-notes?category=rn",
      label: "RN Study Notes",
      icon: icon("/assets/sidebar-icons/study-notes-icon.svg", "study-notes"),
    },

    {
      key: "/profile/nclex-exams",
      label: "NCLEX Exams",
      icon: icon("/assets/sidebar-icons/test-icon.svg", "test"),
      subtitle: "NCLEX Tests / Next Gen",
    },
    {
      key: "/profile/flash-card",
      label: "Flashcards",
      icon: icon("/assets/sidebar-icons/flash-cards-icon.svg", "flashcards"),
    },
    {
      key: "/profile/body-system",
      label: "Body System",
      icon: icon("/assets/icons/anatomy-icon.svg", "body-system"),
    },
    {
      key: "/profile/dosage-calculation",
      label: "Dosage Calculation",
      icon: icon("/assets/sidebar-icons/dosage-icon.png", "dosage-calculation"),
    },
    {
      key: "/profile/ecg-mastery",
      label: "ECG Mastery",
      icon: icon("/assets/sidebar-icons/ecg-icon.png", "ecg-mastery"),
    },
    {
      key: "/profile/vital-signs",
      label: "Vital Signs",
      icon: icon("/assets/sidebar-icons/vital-icon.png", "vital-signs"),
    },
    {
      key: "/profile/labs-reference",
      label: "Labs Reference",
      icon: icon("/assets/sidebar-icons/labs-icon.png", "labs-reference"),
    },
    {
      key: "/profile/clinicals",
      label: "Practical Skills",
      icon: icon("/assets/icons/header/skill.svg", "practical"),
    },
    {
      key: "/profile/patient-assessment",
      label: "Nursing Assessment",
      icon: icon("/assets/icons/header/nursing.svg", "patient"),
    },
    {
      key: "/profile/care-plans",
      label: "Care Plans",
      icon: icon("/assets/icons/header/care.svg", "care-plans", 20),
      tag: "New",
    },
    {
      key: "/profile/templates",
      label: "Cheat Sheets",
      icon: icon("/assets/icons/header/cheat-sheets.svg", "template"),
    },
  ],
  studyTools: [
    {
      key: "/profile/my-notepad",
      label: "My Notepad",
      icon: icon("/assets/icons/note-icon.svg", "notepad"),
    },

    {
      key: "/profile/clinical-calculator",
      label: "Clinical Calculator",
      icon: icon("/assets/sidebar-icons/calculator.svg", "calculator"),
    },
    {
      key: "/profile/ai-drug",
      label: "Drug Cards",
      icon: icon("/assets/icons/header/drug.svg", "map"),
      tag: "drug-cards",
    },
    {
      key: "/profile/concept-map",
      label: "Concept Map",
      icon: icon("/assets/sidebar-icons/content-map-icon.svg", "map"),
      tag: "Coming Soon",
    },
    {
      key: "/profile/my-library",
      label: "My Library",
      icon: icon("/assets/sidebar-icons/my-library-icon.svg", "library"),
      className: "hidden lg:flex",
    },
    {
      key: "/profile/calendar",
      label: "Calendar/Planner",
      icon: icon("/assets/sidebar-icons/calendar-icon.svg", "calendar"),
      tag: "New",
      className: "hidden lg:flex",
    },
  ],
  supportLegal: [
    {
      key: "/profile/contact-us",
      label: "Contact Us",
      icon: icon("/assets/icons/support/contact.svg", "contact"),
    },
    {
      key: "/profile/about-us",
      label: "About Us",
      icon: icon("/assets/icons/support/about.svg", "info", 20),
    },
    {
      key: "/profile/faqs",
      label: "FAQs",
      icon: icon("/assets/icons/support/faq.svg", "faq"),
    },
    {
      key: "/profile/terms-service",
      label: "Terms & Condition",
      icon: icon("/assets/icons/support/terms.svg", "terms", 20),
    },
    {
      key: "/profile/privacy-policy",
      label: "Privacy & Policy",
      icon: icon("/assets/icons/support/privacy.svg", "privacy"),
    },
  ],
};

export const studyNotesChildren = [
  "/profile/study-notes?category=critical-care",
  "/profile/study-notes?category=anatomy-physiology",
  "/profile/study-notes?category=pharmacology",
  "/profile/study-notes?category=medication-calculation",
  "/profile/study-notes?category=pathophysiology",
  "/profile/study-notes?category=mental-health",
  "/profile/study-notes?category=fundamentals",
  "/profile/study-notes?category=medical-surgical",
  "/profile/study-notes?category=ob-maternity",
  "/profile/study-notes?category=pediatrics",
];
