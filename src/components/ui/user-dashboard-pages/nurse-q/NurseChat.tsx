"use client";

import { useState, useRef, useEffect } from "react";
import {
  Send,
  Bot,
  X,
  Minimize2,
  Paperclip,
} from "lucide-react";
import { Button, Input } from "antd";
const { TextArea } = Input;
interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  toolSuggestions?: ToolSuggestion[];
  image?: string;
}

interface ToolSuggestion {
  name: string;
  iconName: string;
  action: string;
}

export default function NurseChat({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem("nursing-chat-history");
    return saved
      ? JSON.parse(saved).map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) }))
      : [
          {
            id: "init",
            role: "assistant",
            content: "👋 Hi! I'm your nursing study assistant. How can I help you today?",
            timestamp: new Date(),
          },
        ];
  });

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.setItem("nursing-chat-history", JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  const handleSend = () => {
    if (!input.trim() && !uploadedImage) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input || "📷 Image uploaded",
      timestamp: new Date(),
      image: uploadedImage || undefined,
    };

    setMessages((p) => [...p, userMsg]);
    setInput("");
    setUploadedImage(null);
    setIsTyping(true);

    setTimeout(() => {
      setMessages((p) => [
        ...p,
        {
          id: `${Date.now()}-ai`,
          role: "assistant",
          content:
            "I can help with NCLEX prep, care plans, dosage calculations, pharmacology, and more. What do you want to work on?",
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }, 800);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onloadend = () => setUploadedImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const clearChat = () => {
    setMessages([
      {
        id: "reset",
        role: "assistant",
        content: "👋 Hi! I'm your nursing study assistant. How can I help you today?",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[420px] h-[650px] bg-[#f8fafc] rounded-lg shadow-2xl">
    <div className="h-full w-full bg-[#f8fafc] flex flex-col overflow-hidden rounded-lg">
      {/* Header */}
      <div className="px-4 py-3 flex justify-between items-center bg-[#2C5F8D] text-white shadow-sm shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-white/10 rounded-lg">
            <Bot size={22} className="text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <p className="font-semibold text-[15px]">IQ Nurse</p>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] text-emerald-50/80 font-medium tracking-wide">Online</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <div 
            onClick={onClose}
            className="flex items-center justify-center text-white border-none h-8 w-8 cursor-pointer "
          >
            <Minimize2 size={18} className="text-white" />
          </div>
          <div 
            onClick={clearChat}
            className="flex items-center justify-center text-white border-none h-8 w-8 cursor-pointer "
          >
            <X size={18} className="text-white" />
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-slate-50/50 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm text-sm relative transition-all duration-200 ${
                msg.role === "user"
                  ? "bg-[#2C5F8D] text-white rounded-tr-none"
                  : "bg-white border border-slate-100 text-slate-800 rounded-tl-none"
              }`}
            >
              {msg.image && (
                <div className="mb-2 overflow-hidden rounded-lg">
                  <img src={msg.image} className="w-full h-auto object-cover max-h-60" alt="Uploaded content" />
                </div>
              )}
              <p className="whitespace-pre-line leading-relaxed break-words overflow-hidden">{msg.content}</p>
              <div className={`text-[10px] mt-1.5 flex items-center gap-1 ${
                msg.role === "user" ? "text-blue-100/70" : "text-slate-400"
              }`}>
                {msg.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-100 shrink-0">
        {/* Attachment Preview */}
        {uploadedImage && (
          <div className="mb-3 relative inline-block group">
            <img src={uploadedImage} className="h-20 w-20 object-cover rounded-xl border-2 border-slate-100" />
            <button 
              onClick={() => setUploadedImage(null)}
              className="absolute -top-2 -right-2 bg-slate-800 text-white rounded-full p-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={12} />
            </button>
          </div>
        )}

        <div className="flex items-center justify-between gap-2 ">
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />

          <div 
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center justify-center h-10 w-10  text-[#2C5F8D] border-none"
          >
            <Paperclip size={20} />
          </div>

          <TextArea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onPressEnter={(e) => {
              if (!e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Type your message..."
            autoSize={{ minRows: 1.5, maxRows: 4 }}
            className="bg-transparent border-none focus:ring-0 text-sm py-2.5 resize-none shadow-none"
            style={{ boxShadow: 'none' }}
          />

          <Button
            type="primary"
            onClick={handleSend}
            disabled={!input.trim() && !uploadedImage}
            className={`flex items-center justify-center  shadow-md border-none `}
          >
            <Send size={18} className={`${!input.trim() && !uploadedImage ? 'text-[#2C5F8D]/50' : 'text-white'}`} />
          </Button>
        </div>
        <p className="text-[10px] text-slate-400 mt-2 text-center font-medium">
          Powered by IQ Nurse AI Assistant
        </p>
      </div>
    </div>
    </div>
  );
}
