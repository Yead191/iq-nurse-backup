export interface ToolSuggestion {
  name: string;
  iconName: string;
  action: string;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  toolSuggestions?: ToolSuggestion[];
  image?: string;
}

export type ChatAction =
  | { type: "SEND_MESSAGE"; payload: Message }
  | { type: "SET_MESSAGES"; payload: Message[] }
  | { type: "CLEAR_CHAT" }
  | { type: "RECEIVE_RESPONSE"; payload: Message };

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
}
