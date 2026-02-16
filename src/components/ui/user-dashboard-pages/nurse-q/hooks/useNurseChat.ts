import { useReducer, useEffect, useCallback } from "react";
import { Message } from "../types";
import { chatReducer, INITIAL_STATE } from "../logic/chatLogic";

export function useNurseChat() {
  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE, (initial) => {
    // Lazy initialization from localStorage
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("nursing-chat-history");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return {
            ...initial,
            messages: parsed.map((m: any) => ({
              ...m,
              timestamp: new Date(m.timestamp),
            })),
          };
        } catch (e) {
          console.error("Failed to parse chat history", e);
        }
      }
    }
    return initial;
  });

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem("nursing-chat-history", JSON.stringify(state.messages));
  }, [state.messages]);

  const sendMessage = useCallback((content: string, image?: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: content || "📷 Image uploaded",
      timestamp: new Date(),
      image: image || undefined, // explicit undefined for clean JSON
    };

    dispatch({ type: "SEND_MESSAGE", payload: userMsg });

    // Simulate AI response
    setTimeout(() => {
      const aiMsg: Message = {
        id: `${Date.now()}-ai`,
        role: "assistant",
        content:
          "I can help with NCLEX prep, care plans, dosage calculations, pharmacology, and more. What do you want to work on?",
        timestamp: new Date(),
      };
      dispatch({ type: "RECEIVE_RESPONSE", payload: aiMsg });
    }, 800);
  }, []);

  const clearChat = useCallback(() => {
    dispatch({ type: "CLEAR_CHAT" });
  }, []);

  return {
    messages: state.messages,
    isTyping: state.isTyping,
    sendMessage,
    clearChat,
  };
}
