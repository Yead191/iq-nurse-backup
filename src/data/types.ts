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
