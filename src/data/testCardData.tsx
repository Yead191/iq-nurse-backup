import { Upload } from "antd";

export const TestCardsData = [
  {
    id: 1,
    title: "Our High Yield NCLEX Questions",
    description: "Practice With Our High yield Exams",
    img: "/assets/sidebar-icons/test-icon.svg",
    link: "/profile/tests/practice-quiz",
  },
  {
    id: 2,
    title: "Your Own Quizzes",
    description: "Generate Practice Test from Your Study Materials",
    img: "/assets/icons/own-quiz-icon.svg",
    link: "/profile/flash-cards/create-test",
  },
];

export interface ImportCardProps {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string; // For Quizlet / Anki icons
  options?: string[]; // For extra buttons like PowerPoint, PDF etc.
}

export const ImportCard: ImportCardProps[] = [
  {
    id: "upload",
    title: "Upload any files from class",
    description: "Click to upload or drag and drop files",
    image: "/assets/icons/file-icon.svg",
    options: [
      "Powerpoint",
      "PDF Documents",
      "Audio Files",
      "Video Files",
      "Import Quizlet",
    ],
  },
  {
    id: "quizlet",
    title: "Import from Quizlet",
    description: "Import your material from Quizlet",
    image: "/assets/icons/quizlet-icon.svg",
  },
  {
    id: "anki",
    title: "Import from Anki",
    description: "Import your material from Anki",
    image: "/assets/icons/anki-icon.svg",
  },
];
