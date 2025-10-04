"use client";

import { useState } from "react";
import {
  X,
  Minimize2,
  Maximize2,
  Bold,
  Italic,
  Underline,
  List,
  ImageIcon,
  Link,
} from "lucide-react";
import { Button, Modal } from "antd";

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
  const [activeTab, setActiveTab] = useState<"front" | "back">("front");
  const [frontContent, setFrontContent] = useState("");
  const [backContent, setBackContent] = useState("");
  const [tags, setTags] = useState("");

  const maxChars = 2000;

  const handleSave = () => {
    const tagArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);
    onSave(frontContent, backContent, tagArray);
    // Reset form
    setFrontContent("");
    setBackContent("");
    setTags("");
    setActiveTab("front");
  };

  const handleCancel = () => {
    setFrontContent("");
    setBackContent("");
    setTags("");
    setActiveTab("front");
    onClose();
  };

  const currentContent = activeTab === "front" ? frontContent : backContent;
  const setCurrentContent =
    activeTab === "front" ? setFrontContent : setBackContent;

  const applyFormatting = (format: string) => {
    const textarea = document.querySelector(
      `textarea[data-tab="${activeTab}"]`
    ) as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = currentContent.substring(start, end);

    let formattedText = selectedText;

    switch (format) {
      case "bold":
        formattedText = `**${selectedText || "bold text"}**`;
        break;
      case "italic":
        formattedText = `*${selectedText || "italic text"}*`;
        break;
      case "underline":
        formattedText = `__${selectedText || "underline text"}__`;
        break;
      case "list":
        formattedText =
          selectedText
            .split("\n")
            .map((line) => (line.trim() ? `- ${line}` : ""))
            .join("\n") || "-  ";
        break;
      case "link":
        formattedText = `[${selectedText || "link text"}](https://example.com)`;
        break;
      case "image":
        formattedText = `![${
          selectedText || "alt text"
        }](https://example.com/image.png)`;
        break;
    }

    const newContent =
      currentContent.substring(0, start) +
      formattedText +
      currentContent.substring(end);

    setCurrentContent(newContent);

    // restore cursor after inserted formatting
    requestAnimationFrame(() => {
      textarea.selectionStart = start;
      textarea.selectionEnd = start + formattedText.length;
      textarea.focus();
    });
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      footer={null}
      width={700}
      centered
      title={
        <div className="flex items-center justify-between bg-[#003877] text-white px-4 py-2 -mx-6 -mt-5 mb-4">
          <span className="font-semibold">Flashcards</span>
          <div className="flex items-center space-x-2">
            {/* <Button
              type="text"
              icon={<Minimize2 className="w-4 h-4 text-white" />}
            />
            <Button
              type="text"
              icon={<Maximize2 className="w-4 h-4 text-white" />}
            /> */}
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
      <div className="space-y-4">
        {/* Tab Navigation */}
        <div className="flex items-center space-x-4 border-b">
          <button
            onClick={() => setActiveTab("back")}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === "back"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Back
          </button>
          <button
            onClick={() => setActiveTab("front")}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === "front"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Front
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg border">
          <button
            onClick={() => applyFormatting("bold")}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Bold"
          >
            <Bold className="w-4 h-4" />
          </button>
          <button
            onClick={() => applyFormatting("italic")}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Italic"
          >
            <Italic className="w-4 h-4" />
          </button>
          <button
            onClick={() => applyFormatting("underline")}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Underline"
          >
            <Underline className="w-4 h-4" />
          </button>
          <div className="w-px h-6 bg-gray-300" />
          <button
            onClick={() => applyFormatting("list")}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="List"
          >
            <List className="w-4 h-4" />
          </button>

          <button
            onClick={() => applyFormatting("image")}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Image"
          >
            <ImageIcon className="w-4 h-4" />
          </button>

          <button
            onClick={() => applyFormatting("link")}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Link"
          >
            <Link className="w-4 h-4" />
          </button>
        </div>

        {/* Editor */}
        <div className="min-h-[300px]">
          <textarea
            data-tab={activeTab}
            value={currentContent}
            onChange={(e) => setCurrentContent(e.target.value)}
            placeholder={`Enter ${activeTab} content...`}
            className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            maxLength={maxChars}
          />
        </div>

        {/* Character Count */}
        <div className="text-sm text-gray-600">
          {currentContent.length} / {maxChars} characters
        </div>

        {/* Tags Input */}
        <div>
          <input
            type="text"
            placeholder="Tag name,comma separated"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between pt-4">
          <Button onClick={handleCancel} size="large">
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={handleSave}
            size="large"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
}
