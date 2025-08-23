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
  <img src={src} alt={alt} className={`h-[${size}px]`} />
);

export const menus: Record<string, MenuItem[]> = {
  main: [
    {
      key: "/profile/home",
      label: "Home",
      icon: icon("/assets/sidebar-icons/home-icon.svg", "home"),
    },
    {
      key: "/profile/nurse-q",
      label: "Nurse Q",
      icon: icon("/assets/sidebar-icons/chatbot-icon.svg", "chatbot"),
    },
  ],
  studyTools: [
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
      key: "/profile/my-notepad",
      label: "My Notepad",
      icon: icon("/assets/icons/note-icon.svg", "notepad"),
    },
    {
      key: "/profile/clinicals",
      label: "Clinicals",
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
      key: "/profile/templates",
      label: "Templates",
      icon: icon("/assets/sidebar-icons/template-icon.svg", "template"),
    },
    {
      key: "/profile/content-map",
      label: "Content Map",
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
      label: "Calendar",
      icon: icon("/assets/sidebar-icons/calendar-icon.svg", "calendar"),
      tag: "New",
    },
    {
      key: "/profile/tests",
      label: "Test & Quizzers",
      icon: icon("/assets/sidebar-icons/test-icon.svg", "test"),
      subtitle: "NCLEX Tests / Next Gen",
    },
    {
      key: "/profile/flash-cards",
      label: "Flash Cards",
      icon: icon("/assets/sidebar-icons/flash-cards-icon.svg", "flashcards"),
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

export const studyToolsRoutes = [
  "/profile/study-notes",
  "/profile/my-notepad",
  "/profile/clinicals",
  "/profile/patient-assessment",
  "/profile/templates",
  "/profile/content-map",
  "/profile/my-library",
  "/profile/calendar",
  "/profile/tests",
  "/profile/flash-cards",
];
