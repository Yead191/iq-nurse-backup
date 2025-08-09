import { FileText, BookMarked, Eye } from "lucide-react";

export const tabData = [
  {
    id: "continue",
    label: "Continue Reading",
    icon: <FileText className="w-4 h-4" />,
    color: "bg-blue-100 text-blue-600",
    items: [
      {
        id: "1",
        title: "Airway and lungs",
        description:
          "The airways are a network of tubes that carry air in and out of the lungs, including the nose.",
      },
      {
        id: "2",
        title: "Respiratory system basics",
        description:
          "Learn how the respiratory system functions to provide oxygen and remove carbon dioxide.",
      },
      {
        id: "3",
        title: "Airway and lungs",
        description:
          "The airways are a network of tubes that carry air in and out of the lungs, including the nose.",
      },
      {
        id: "4",
        title: "Respiratory system basics",
        description:
          "Learn how the respiratory system functions to provide oxygen and remove carbon dioxide.",
      },
      {
        id: "5",
        title: "Airway and lungs",
        description:
          "The airways are a network of tubes that carry air in and out of the lungs, including the nose.",
      },
      {
        id: "6",
        title: "Respiratory system basics",
        description:
          "Learn how the respiratory system functions to provide oxygen and remove carbon dioxide.",
      },
    ],
  },
  {
    id: "library",
    label: "My Library",
    icon: <BookMarked className="w-4 h-4" />,
    color: "bg-yellow-100 text-yellow-600",
    items: [
      {
        id: "3",
        title: "Cardiovascular system",
        description:
          "A detailed look into the heart and blood vessels that supply the body.",
      },
      {
        id: "4",
        title: "Digestive anatomy",
        description:
          "Explore how the digestive tract processes food into energy.",
      },
    ],
  },
  {
    id: "recent",
    label: "Recently Viewed",
    icon: <Eye className="w-4 h-4" />,
    color: "bg-sky-100 text-sky-600",
    items: [
      {
        id: "5",
        title: "Brain and nerves",
        description: "Understand the central nervous system and its functions.",
      },
      {
        id: "6",
        title: "Musculoskeletal structure",
        description:
          "An overview of bones, muscles, and joints working together.",
      },
    ],
  },
];
