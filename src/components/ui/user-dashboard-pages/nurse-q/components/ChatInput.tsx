import { useState, useRef } from "react";
import { Send, Paperclip, X } from "lucide-react";
import { Button, Input } from "antd";
import { HiOutlineMicrophone } from "react-icons/hi";

const { TextArea } = Input;

interface ChatInputProps {
  onSend: (content: string, image?: string) => void;
  value: string;
  onChange: (value: string) => void;
}

export function ChatInput({ onSend, value, onChange }: ChatInputProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (!value.trim() && !uploadedImage) return;
    onSend(value, uploadedImage || undefined);
    onChange("");
    setUploadedImage(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onloadend = () => setUploadedImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div className="p-3 lg:p-4 bg-white border-t border-slate-100 shrink-0">
      {/* Attachment Preview */}
      {uploadedImage && (
        <div className="mb-3 relative inline-block group">
          <img
            src={uploadedImage}
            className="h-20 w-20 object-cover rounded-xl border-2 border-slate-100"
            alt="Upload preview"
          />
          <button
            onClick={() => setUploadedImage(null)}
            className="absolute -top-2 -right-2 bg-slate-800 text-white rounded-full p-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X size={12} />
          </button>
        </div>
      )}

      <div className="flex items-center justify-between gap-2">
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          hidden
          onChange={handleImageUpload}
        />

        <div
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center justify-center text-primary border-none cursor-pointer"
        >
          <Paperclip className="w-4 h-4 lg:w-[18px] lg:h-[18px]" />
        </div> 

        <div
        //   onClick={() => fileInputRef.current?.click()} 
         className="flex items-center justify-center text-primary font-medium border-none cursor-pointer"
        >
          <HiOutlineMicrophone className="w-4 h-4 lg:w-[18px] lg:h-[18px]" />
        </div>

        <TextArea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onPressEnter={(e) => {
            if (!e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Type your message..."
          autoSize={{ minRows: 1.5, maxRows: 4 }}
          className="bg-transparent border-none focus:ring-0 text-xs lg:text-sm py-2.5 resize-none shadow-none"
          style={{ boxShadow: "none" }}
        />

        <Button
          type="primary"
          onClick={handleSend}
          disabled={!value.trim() && !uploadedImage}
          className={`flex items-center justify-center shadow-md border-none ${
            !value.trim() && !uploadedImage ? "bg-slate-200" : "bg-[#2C5F8D]"
          }`}
        >
          <Send
            className={`w-4 h-4 lg:w-[18px] lg:h-[18px] ${
              !value.trim() && !uploadedImage ? "text-[#2C5F8D]/50" : "text-white"
            }`}
          />
        </Button>
      </div>
      <p className="text-[9px] lg:text-[10px] text-slate-400 mt-2 text-center font-medium">
        Powered by IQ Nurse AI Assistant
      </p>
    </div>
  );
}
