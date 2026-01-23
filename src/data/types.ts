// types.ts
export type EventItem = {
  id: string;
  title: string;
  course?: string;
  description?: string;
  start: string;
  end: string;
  location: string;
  mode: "Online" | "In Person";
  color: string;
  avatarUrl?: string;
};

export interface FlashcardContent {
  text?: string;
  image?: string;
}

export interface FlashcardItem {
  id: string;
  title?: string;
  frontContent: FlashcardContent;
  backContent: FlashcardContent;
}

export interface Page {
  id: string;
  title: string;
  subtitle: string;
  isBookmarked: boolean;
  cards?: FlashcardItem[];
  content?: {
    image: string;
  };
}

export interface Folder {
  id: string;
  name: string;
  color: string;
  topicCount: number;
  pages: Page[];
}

export interface LibraryData {
  folders: Folder[];
}

export const folderColors = [
  { name: "cyan", value: "bg-cyan-400" },
  { name: "blue", value: "bg-blue-900" },
  { name: "sky", value: "bg-sky-500" },
  { name: "teal", value: "bg-teal-400" },
  { name: "green", value: "bg-green-400" },
  { name: "red", value: "bg-red-400" },
  { name: "orange", value: "bg-orange-400" },
  { name: "purple", value: "bg-purple-400" },
  { name: "emerald", value: "bg-emerald-400" },
];

export interface Subtopic {
  id: string;
  name: string;
  questionCount: number;
  completed: number;
}

export interface Category {
  id: string;
  name: string;
  icon: any;
  color: string;
  totalQuestions: number;
  completed: number;
  subtopics: Subtopic[];
}
export interface ExamSession {
  type: "category" | "full-exam";
  categoryId?: string;
  subtopicId?: string;
  examId?: string;
  questionCount: number;
  mode: "practice" | "test";
  title: string;
}
