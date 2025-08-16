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

export interface Page {
  id: string;
  title: string;
  subtitle: string;
  isBookmarked: boolean;
  content?: {
    title: string;
    subtitle: string;
    description: string;
    details: string[];
    sections: {
      title: string;
      subtitle: string;
      content: string;
    }[];
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
