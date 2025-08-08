export type LangKey = "en" | "de" | "es";
export type Lang = { key: LangKey; label: string; flag: string };

export const LANGUAGES: Lang[] = [
  { key: "en", label: "English (US)", flag: "/assets/flag/us.svg" },
  { key: "de", label: "German", flag: "/assets/flag/de.svg" },
  { key: "es", label: "Spanish", flag: "/assets/flag/es.svg" },
];

export const PROFILE_ITEMS = [
  {
    key: "account",
    iconBg: "#FFF1E6",
    iconColor: "#DC6803",
    label: "Account & Security",
    href: "/settings/account",
  },
  {
    key: "billing",
    iconBg: "#E6F4EE",
    iconColor: "#1D9A6C",
    label: "Billing & Subscription",
    href: "/settings/billing",
  },
  {
    key: "logout",
    iconBg: "#FDECEC",
    iconColor: "#D64545",
    label: "Logout",
    danger: true,
  },
];
