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
  ],
  master: [
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
  ],
  studyMaterial: [
    {
      key: "/profile/study-notes?category=rn",
      label: "Study Notes",
      icon: icon("/assets/sidebar-icons/study-notes-icon.svg", "study-notes"),
    },

    {
      key: "/profile/body-system",
      label: "Body System",
      icon: icon("/assets/sidebar-icons/body-system-icon.svg", "body-system"),
    },
    {
      key: "/profile/dosage-calculation",
      label: "Dosage Calculation",
      icon: icon("/assets/sidebar-icons/dosage-icon.svg", "dosage-calculation"),
    },
    {
      key: "/profile/ecg-mastery",
      label: "ECG Mastery",
      icon: icon("/assets/sidebar-icons/ecg-icon.svg", "ecg-mastery"),
    },
    {
      key: "/profile/vital-signs",
      label: "Vital Signs",
      icon: icon("/assets/sidebar-icons/vital-icon.svg", "vital-signs"),
    },
    {
      key: "/profile/labs-reference",
      label: "Diagnostic Tests & Labs",
      icon: icon("/assets/sidebar-icons/labs-icon.svg", "labs-reference"),
    },
    {
      key: "/profile/clinicals",
      label: "Practical Skills",
      icon: icon("/assets/sidebar-icons/skill-icon.svg", "practical"),
    },
    {
      key: "/profile/patient-assessment",
      label: "Nursing Assessment",
      icon: icon("/assets/sidebar-icons/nursing.svg", "patient"),
    },
    {
      key: "/profile/care-plans",
      label: "Care Plans",
      icon: icon("/assets/sidebar-icons/care-icons.svg", "care-plans", 20),
      tag: "New",
    },
    {
      key: "/profile/templates",
      label: "Cheat Sheets",
      icon: icon("/assets/sidebar-icons/cheat-icon.svg", "template"),
    },
    {
      key: "/profile/ai-drug",
      label: "Drug Cards",
      icon: icon("/assets/sidebar-icons/drug-icon.svg", "map"),
      tag: "drug-cards",
    },
  ],
  studyTools: [
    {
      key: "/profile/calendar",
      label: "Calendar/Planner",
      icon: icon("/assets/sidebar-icons/calendar-icon.svg", "calendar"),
      tag: "New",
      className: "hidden lg:flex",
    },
    {
      key: "/profile/my-library",
      label: "My Library",
      icon: icon("/assets/sidebar-icons/library-icon.svg", "library"),
      className: "hidden lg:flex",
    },
    {
      key: "/profile/concept-map",
      label: "Concept Map",
      icon: icon("/assets/sidebar-icons/concept-map-icon.svg", "map"),
      tag: "Coming Soon",
    },
    {
      key: "/profile/my-notepad",
      label: "My Notepad",
      icon: icon("/assets/sidebar-icons/notepad-icon.svg", "notepad"),
    },
    // {
    //   key: "/profile/clinical-calculator",
    //   label: "Clinical Calculator",
    //   icon: icon("/assets/sidebar-icons/calculator.svg", "calculator"),
    // },
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
      label: "F.A.Q.s",
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
