import { useEffect, useRef } from "react";
import { Message } from "../types"; 
import { Sparkles, BookOpen, Calendar, FileText, Brain, Pill, Activity, ClipboardList } from 'lucide-react';

interface MessageListProps {
  messages: Message[];
  isTyping: boolean;
  onQuickAction: (query: string) => void;
} 

const QUICK_ACTIONS = [
  { label: 'NCLEX Study Tips', icon: BookOpen, query: 'Give me NCLEX study tips' },
  { label: 'NCLEX Exam Practice', icon: ClipboardList, query: 'I want to practice NCLEX questions' },
  { label: 'Dosage Calculations', icon: Activity, query: 'Help me with dosage calculations' },
  { label: 'Flashcards', icon: Sparkles, query: 'I want to study with flashcards' },
  { label: 'Create Care Plan', icon: FileText, query: 'Help me create a care plan' },
  { label: 'Concept Map Guide', icon: Brain, query: 'How do I create a concept map?' },
  { label: 'Study Schedule', icon: Calendar, query: 'Help me plan my study schedule' },
  { label: 'Drug Information', icon: Pill, query: 'I need help with drug cards' },
  { label: 'Clinical Skills', icon: Activity, query: 'Show me clinical skills practice' },
]; 


export function MessageList({ messages, isTyping, onQuickAction }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-slate-50/50 space-y-4">
      {messages.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center ">
          <h3 className="text-slate-600 text-sm font-medium mb-3 text-center">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
            {QUICK_ACTIONS.map((action, index) => (
              <button
                key={index}
                onClick={() => onQuickAction(action.query)}
                className="flex items-center gap-2 p-2 lg:p-2.5 bg-white border border-slate-200 rounded-lg hover:border-primary hover:shadow-sm transition-all text-left group"
              >
                <div className=" text-primary">
                  <action.icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                </div>
                <span className="text-[11px] lg:text-xs font-medium text-slate-700 group-hover:text-primary">
                  {action.label}
                </span>
              </button>
            ))}
          </div>
          
          {/* Welcome Message */}
          <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm mt-8 max-w-[85%] mr-auto">
             <p className="text-slate-600 text-xs lg:text-sm">
               👋 Hi! I'm your nursing study assistant. How can I help you today?
             </p>
             <div className="text-[9px] lg:text-[10px] text-slate-400 mt-2">
               {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
             </div>
          </div>
        </div>
      ) : (
        <>
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} pt-1`}
        >
          <div
            className={`max-w-[90%] md:max-w-[85%] rounded-2xl px-3 py-2.5 lg:px-4 lg:py-3 shadow-sm text-xs lg:text-sm relative transition-all duration-200 ${
              msg.role === "user"
                ? "bg-[#2C5F8D]/90 text-white rounded-tr-none"
                : "bg-white border border-slate-100 text-slate-800 rounded-tl-none"
            }`}
          >
            {msg.image && (
              <div className="mb-2 overflow-hidden rounded-lg">
                <img
                  src={msg.image}
                  className="w-full h-auto object-cover max-h-60"
                  alt="Uploaded content"
                />
              </div>
            )}
            <p className="whitespace-pre-line leading-relaxed break-words overflow-hidden">
              {msg.content}
            </p>
            <div
              className={`text-[9px] lg:text-[10px] mt-1.5 flex items-center gap-1 ${
                msg.role === "user" ? "text-blue-100/70" : "text-slate-400"
              }`}
            >
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
      </>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}
