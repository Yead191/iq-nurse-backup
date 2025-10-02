import {
  Activity,
  Brain,
  Pill,
  Calculator,
  HeartPulse,
  Smile,
  BookOpen,
  Stethoscope,
  Baby,
  BabyIcon,
} from "lucide-react";
export interface MenuItem {
  key: string;
  label: string;
  icon: React.ReactNode;
  children?: MenuItem[];
  tag?: string;
  subtitle?: string;
}
export const icon = (src: string, alt: string, size = 25) => (
  <img
    src={src}
    alt={alt}
    className={`h-[${size}px] overflow-hidden  object-cover`}
  />
);

export const menus: Record<string, MenuItem[]> = {
  main: [
    {
      key: "/profile/home",
      label: "Home",
      icon: icon("/assets/sidebar-icons/home-icon.svg", "home"),
    },
    {
      key: "/profile/community-home",
      label: "Community",
      icon: icon("/assets/sidebar-icons/community-icon.svg", "community"),
    },
  ],
  studyMaterial: [
    {
      key: "/profile/study-notes",
      label: "Study Notes",
      icon: icon("/assets/sidebar-icons/study-notes-icon.svg", "study-notes"),
      children: [
        {
          key: "/profile/study-notes?category=critical-care",
          label: "Critical Care",
          icon: <Activity size={18} />,
        },
        {
          key: "/profile/study-notes?category=anatomy-physiology",
          label: "Anatomy & Physiology",
          icon: <Brain size={18} />,
        },
        {
          key: "/profile/study-notes?category=pharmacology",
          label: "Pharmacology",
          icon: <Pill size={18} />,
        },
        {
          key: "/profile/study-notes?category=medication-calculation",
          label: "Medication Calculation",
          icon: <Calculator size={18} />,
        },
        {
          key: "/profile/study-notes?category=pathophysiology",
          label: "Pathophysiology",
          icon: <HeartPulse size={18} />,
        },
        {
          key: "/profile/study-notes?category=mental-health",
          label: "Mental Health",
          icon: <Smile size={18} />,
        },
        {
          key: "/profile/study-notes?category=fundamentals",
          label: "Fundamentals",
          icon: <BookOpen size={18} />,
        },
        {
          key: "/profile/study-notes?category=medical-surgical",
          label: "Medical Surgical",
          icon: <Stethoscope size={18} />,
        },
        {
          key: "/profile/study-notes?category=ob-maternity",
          label: "OB- Maternity",
          icon: <Baby size={18} />,
        },
        {
          key: "/profile/study-notes?category=pediatrics",
          label: "Pediatrics",
          icon: <BabyIcon size={18} />,
        },
      ],
    },
    {
      key: "/profile/body-system",
      label: "Body System",
      icon: icon("/assets/sidebar-icons/body-system-icon.svg", "body-system"),
    },
    {
      key: "/profile/clinicals",
      label: "Clinical Skills",
      icon: icon("/assets/sidebar-icons/clinicals-icon.svg", "clinicals"),
    },
    {
      key: "/profile/patient-assessment",
      label: "Patient Assessment",
      icon: icon(
        "/assets/sidebar-icons/patient-assessment-icon.svg",
        "patient"
      ),
    },
    {
      key: "/profile/care-plans",
      label: "Care Plans",
      icon: icon("/assets/sidebar-icons/care-plans-icon.svg", "care-plans", 20),
      tag: "New",
    },
    {
      key: "/profile/templates",
      label: "Download & Templates",
      icon: icon("/assets/sidebar-icons/template-icon.svg", "template"),
    },
    {
      key: "/profile/tests",
      label: "Exams",
      icon: icon("/assets/sidebar-icons/test-icon.svg", "test"),
      subtitle: "NCLEX Tests / Next Gen",
    },
    {
      key: "/profile/flash-card",
      label: "Flashcards",
      icon: icon("/assets/sidebar-icons/flash-cards-icon.svg", "flashcards"),
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
      label: "Drug Generator",
      icon: icon("/assets/drug-ai/drug.svg", "map"),
      tag: "drug-generator",
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
    },
    {
      key: "/profile/calendar",
      label: "Calendar/Planner",
      icon: icon("/assets/sidebar-icons/calendar-icon.svg", "calendar"),
      tag: "New",
    },
  ],
  supportLegal: [
    {
      key: "/profile/contact-us",
      label: "Contact Us",
      icon: icon("/assets/sidebar-icons/contact-us-icon.svg", "contact"),
    },
    {
      key: "/profile/about-us",
      label: "About Us",
      icon: icon("/assets/sidebar-icons/info-icon.svg", "info", 20),
    },
    {
      key: "/profile/faqs",
      label: "FAQs",
      icon: icon("/assets/sidebar-icons/faq-icon.svg", "faq"),
    },
    {
      key: "/profile/terms-service",
      label: "Terms & Condition",
      icon: icon("/assets/sidebar-icons/terms-icon.svg", "terms", 20),
    },
    {
      key: "/profile/privacy-policy",
      label: "Privacy & Policy",
      icon: icon("/assets/sidebar-icons/privacy-icon.svg", "privacy"),
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
