"use client";

import { useState, useEffect } from "react";
import { ArrowDownUp, ArrowRightLeft, X } from "lucide-react";
import { Button, ConfigProvider, Grid, Modal } from "antd";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

interface CreateFlashcardModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (front: string, back: string, tags: string[]) => void;
}

export default function CreateFlashcardModal({
  open,
  onClose,
  onSave,
}: CreateFlashcardModalProps) {
  const { lg } = Grid.useBreakpoint();
  const [activeSide, setActiveSide] = useState<"front" | "back">("back");

  const [backContent, setBackContent] = useState("");
  const [frontContent, setFrontContent] = useState("");
  const [tags, setTags] = useState("");

  const { quill, quillRef } = useQuill({
    theme: "snow",
    modules: {
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        [{ list: "bullet" }, { list: "ordered" }],
        ["link", "image"],
        ["blockquote", "code-block"],
        [{ align: [] }],
        ["clean"],
      ],
    },
  });

  useEffect(() => {
    if (!quill) return;

    // Load initial content
    if (open && backContent) {
      quill.clipboard.dangerouslyPasteHTML(backContent);
    }

    // Listen for text changes
    const handleTextChange = () => {
      setBackContent(quill.root.innerHTML);
    };

    quill.on("text-change", handleTextChange);

    return () => {
      quill.off("text-change", handleTextChange);
    };
  }, [quill, open]);

  const handleSave = () => {
    const tagArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    const finalBackContent = quill ? quill.root.innerHTML : backContent;
    onSave(frontContent, finalBackContent, tagArray);

    // Reset form
    setFrontContent("");
    setBackContent("");
    setTags("");
    if (quill) {
      quill.setText("");
    }
  };

  const handleCancel = () => {
    setFrontContent("");
    setBackContent("");
    setTags("");
    if (quill) {
      quill.setText("");
    }
    onClose();
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "rgb(243,243,244)",
          },
        },
      }}
    >
      <Modal
        open={open}
        onCancel={handleCancel}
        footer={null}
        width={900}
        centered
        title={
          <div className="flex items-center justify-between bg-[#003877] text-white px-4 py-2 -mx-6 -mt-5 mb-4">
            <span className="font-semibold">Flashcards</span>
            <div className="flex items-center space-x-2">
              <Button
                type="text"
                icon={<X className="w-4 h-4 text-white" />}
                onClick={handleCancel}
              />
            </div>
          </div>
        }
        closeIcon={null}
      >
        <div className="space-y-4 bg-[#F3F3F4]">
          {/* Split Layout */}
          <div className="flex flex-col md:flex-row justify-between gap-2">
            {/* Left Side - Back (Definition/Content) */}
            <div
              onClick={() => setActiveSide("back")}
              className="space-y-3 flex-1"
            >
              <div className="flex items-center justify-end ">
                <h3
                  className={`text-base font-medium  h-[40px] px-6 inline-flex items-center rounded-lg
                  ${
                    activeSide === "back"
                      ? "bg-white text-gray-700"
                      : "bg-[#D9D9D9] text-gray-500"
                  }
                  `}
                >
                  Back
                </h3>
              </div>

              {/* Quill Editor */}
              <div className="nodrag border border-gray-300 rounded-lg overflow-hidden">
                <div
                  ref={quillRef}
                  style={{ height: 300, overflow: "auto" }}
                  className="bg-white"
                />
              </div>

              {/* Character Count */}
              <div className="text-xs text-gray-500">
                Max 2000 characters allowed
              </div>
            </div>
            {/* Swap Arrow - Between Back and Front */}
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-6 h-6 flex items-center justify-center">
                  {lg ? <ArrowRightLeft /> : <ArrowDownUp />}
                </div>
              </div>
            </div>
            {/* Right Side - Front (Term) */}
            <div
              onClick={() => setActiveSide("front")}
              className="space-y-3 flex-1"
            >
              <div className="flex items-center justify-end">
                <h3
                  className={`text-base font-medium   h-[40px] px-6 inline-flex items-center rounded-lg
                    ${
                      activeSide === "front"
                        ? "bg-white text-gray-700"
                        : "bg-[#D9D9D9] text-gray-500"
                    }
                  `}
                >
                  Front
                </h3>
              </div>

              {/* Front Term Input */}
              <div className="border border-gray-300 rounded-lg p-4 h-[380px] flex items-center justify-center bg-gray-50">
                <input
                  type="text"
                  value={frontContent}
                  onChange={(e) => setFrontContent(e.target.value)}
                  placeholder="Enter term..."
                  className="w-full text-center text-lg font-medium bg-transparent focus:outline-none"
                  maxLength={200}
                />
              </div>
            </div>
          </div>

          {/* Tags Input */}
          <div className="pt-2">
            <input
              type="text"
              placeholder="Tag name,comma separated"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between pt-4">
            <Button onClick={handleCancel} size="large">
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              size="large"
              className="!bg-primary !text-white"
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </ConfigProvider>
  );
}
