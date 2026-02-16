import { useState } from "react";
import { useNurseChat } from "./hooks/useNurseChat";
import { ChatHeader } from "./components/ChatHeader";
import { MessageList } from "./components/MessageList";
import { ChatInput } from "./components/ChatInput";

interface NurseChatProps {
  open: boolean;
  onClose: () => void;
}

export default function NurseChat({ open, onClose }: NurseChatProps) {
  const { messages, isTyping, sendMessage, clearChat } = useNurseChat();
  const [inputValue, setInputValue] = useState("");

  const handleQuickAction = (query: string) => {
    setInputValue(query);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-24 right-4 lg:bottom-6 lg:right-6 z-50 w-[340px] md:w-[380px] lg:w-[420px] h-[500px] md:h-[580px] lg:h-[650px] bg-[#f8fafc] rounded-lg shadow-2xl">
      <div className="h-full w-full bg-[#f8fafc] flex flex-col overflow-hidden rounded-lg">
        <ChatHeader onClose={onClose} onClear={clearChat} />
        <MessageList 
          messages={messages} 
          isTyping={isTyping} 
          onQuickAction={handleQuickAction}
        />
        <ChatInput 
          onSend={sendMessage} 
          value={inputValue} 
          onChange={setInputValue}
        />
      </div>
    </div>
  );
}
