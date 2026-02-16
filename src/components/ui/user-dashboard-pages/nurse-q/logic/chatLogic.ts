import { ChatState, ChatAction } from "../types";

export const INITIAL_STATE: ChatState = {
  messages: [],
  isTyping: false,
};

export function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case "SEND_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
        isTyping: true, // User sent a message, now waiting for response
      };
    case "RECEIVE_RESPONSE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
        isTyping: false,
      };
    case "SET_MESSAGES":
      return {
        ...state,
        messages: action.payload,
      };
    case "CLEAR_CHAT":
      return INITIAL_STATE;
    default:
      return state;
  }
}
