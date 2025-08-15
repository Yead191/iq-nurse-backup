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
      // children: [
      //   {
      //     key: "/profile/study-notes/anatomy",
      //     label: "Anatomy",
      //     icon: <></>,
      //   },
      //   {
      //     key: "/profile/study-notes/pharmacology",
      //     label: "Pharmacology",
      //     icon: <></>,
      //   },
      // ],
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
      key: "/contact",
      label: "Contact Us",
      icon: icon("/assets/sidebar-icons/contact-us-icon.svg", "contact"),
    },
    {
      key: "/about",
      label: "About Us",
      icon: icon("/assets/sidebar-icons/info-icon.svg", "info", 20),
    },
    {
      key: "/faqs",
      label: "FAQs",
      icon: icon("/assets/sidebar-icons/faq-icon.svg", "faq"),
    },
    {
      key: "/terms",
      label: "Terms & Condition",
      icon: icon("/assets/sidebar-icons/terms-icon.svg", "terms", 20),
    },
    {
      key: "/privacy",
      label: "Privacy & Policy",
      icon: icon("/assets/sidebar-icons/privacy-icon.svg", "privacy"),
    },
  ],
};
