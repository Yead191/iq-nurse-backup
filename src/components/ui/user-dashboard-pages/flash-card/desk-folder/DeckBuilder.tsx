"use client";

import React, { useState } from "react";
import { FlashcardItem } from "@/data/types";
import {
  Plus,
  Trash2,
  Edit,
  Save,
  ArrowLeft,
  Image as ImageIcon,
} from "lucide-react";
import { Input, Button, Modal } from "antd";

const { TextArea } = Input;

interface DeckBuilderProps {
  cards: FlashcardItem[];
  onSave: (cards: FlashcardItem[]) => void;
  onCancel: () => void;
  title: string;
}

export default function DeckBuilder({
  cards,
  onSave,
  onCancel,
  title,
}: DeckBuilderProps) {
  const [localCards, setLocalCards] = useState<FlashcardItem[]>(cards || []);
  const [editingCardId, setEditingCardId] = useState<string | null>(null);

  // New card form state
  const [frontText, setFrontText] = useState("");
  const [backText, setBackText] = useState("");
  const [backImage, setBackImage] = useState("");

  const handleAddCard = () => {
    if (!frontText.trim()) return;

    const newCard: FlashcardItem = {
      id: Date.now().toString(),
      title: `Card ${localCards.length + 1}`,
      frontContent: { text: frontText },
      backContent: { text: backText, image: backImage },
    };

    setLocalCards([...localCards, newCard]);
    setFrontText("");
    setBackText("");
    setBackImage("");
  };

  const handleDeleteCard = (id: string) => {
    setLocalCards(localCards.filter((c) => c.id !== id));
  };

  // Simple inline edit could be complex, for now assume delete and re-add or edit in place if we add that UI.
  // Let's rely on deleting and re-adding for simplicity in MVP, or just editing the form before adding.
  // But user asked for edit. Let's add basic edit mode.

  const startEdit = (card: FlashcardItem) => {
    setFrontText(card.frontContent.text || "");
    setBackText(card.backContent.text || "");
    setBackImage(card.backContent.image || "");
    setEditingCardId(card.id);
  };

  const saveEdit = () => {
    if (editingCardId) {
      setLocalCards((prev) =>
        prev.map((c) => {
          if (c.id === editingCardId) {
            return {
              ...c,
              frontContent: { text: frontText },
              backContent: { text: backText, image: backImage },
            };
          }
          return c;
        }),
      );
      setEditingCardId(null);
      setFrontText("");
      setBackText("");
      setBackImage("");
    }
  };

  const cancelEdit = () => {
    setEditingCardId(null);
    setFrontText("");
    setBackText("");
    setBackImage("");
  };

  return (
    <div className="h-full flex flex-col bg-gray-50 rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200 rounded-t-xl lg:sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              Editing: {title}
            </h2>
            <p className="text-sm text-gray-500">{localCards.length} cards</p>
          </div>
        </div>
        <Button
          type="primary"
          onClick={() => onSave(localCards)}
          className="bg-blue-900 hover:bg-blue-800 flex items-center gap-2"
        >
          <Save size={16} />
          Save Deck
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row h-full lg:overflow-hidden gap-2">
        {/* Card Form - Sidebar or Top on mobile */}
        <div className="w-full lg:w-1/3 p-4 bg-white border-r border-gray-200 lg:overflow-y-auto">
          <h3 className="text-md font-semibold text-gray-700 mb-4">
            {editingCardId ? "Edit Flashcard" : "Add New Flashcard"}
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Front (Question/Term)
              </label>
              <TextArea
                rows={3}
                placeholder="Enter term or question..."
                value={frontText}
                onChange={(e) => setFrontText(e.target.value)}
                className="resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Back (Answer/Definition)
              </label>
              <TextArea
                rows={4}
                placeholder="Enter answer or definition..."
                value={backText}
                onChange={(e) => setBackText(e.target.value)}
                className="resize-none"
              />
            </div>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image (Optional)
            </label>

            <div className="flex items-center gap-2">
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setBackImage(reader.result as string);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="hidden"
              />
              <label
                htmlFor="imageUpload"
                className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors text-sm text-gray-600 bg-white"
              >
                <ImageIcon size={16} />
                {backImage ? "Change Image" : "Upload Image"}
              </label>
              {backImage && (
                <div className="relative w-10 h-10 rounded border border-gray-200 overflow-hidden">
                  <img
                    src={backImage}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => {
                      setBackImage("");
                      // Reset file input
                      const fileInput = document.getElementById(
                        "imageUpload",
                      ) as HTMLInputElement;
                      if (fileInput) fileInput.value = "";
                    }}
                    className="absolute inset-0 bg-black/50 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              )}
            </div>

            <div className="pt-2 flex gap-2">
              {editingCardId ? (
                <>
                  <Button
                    onClick={saveEdit}
                    disabled={!frontText.trim()}
                    className="flex-1 bg-blue-600 text-white hover:bg-blue-700 border-none"
                  >
                    Update Card
                  </Button>
                  <Button onClick={cancelEdit} className="flex-1">
                    Cancel
                  </Button>
                </>
              ) : (
                <Button
                  onClick={handleAddCard}
                  disabled={!frontText.trim()}
                  className={`w-full h-10 ${
                    frontText.trim()
                      ? "bg-blue-900 text-white hover:bg-blue-800"
                      : "bg-gray-100 text-gray-400"
                  } border-none font-medium flex items-center justify-center gap-2 transition-all`}
                >
                  <Plus size={16} />
                  Add to Deck
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Card List - Right side */}
        <div className="flex-1 p-4 lg:p-6 lg:overflow-y-auto bg-gray-50">
          <h3 className="text-md font-semibold text-gray-700 mb-4">
            Current Cards ({localCards.length})
          </h3>

          {localCards.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Plus className="w-8 h-8 text-gray-300" />
              </div>
              <p className="font-medium">No cards yet</p>
              <p className="text-sm">Add your first card using the form.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {localCards.map((card, index) => (
                <div
                  key={card.id}
                  className={`bg-white rounded-lg p-4 shadow-sm border border-gray-100 group transition-all ${
                    editingCardId === card.id ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <div className="flex justify-between items-start mb-3 border-b border-gray-50 pb-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Card {index + 1}
                    </span>
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => startEdit(card)}
                        className="p-1.5 hover:bg-blue-50 text-blue-600 rounded"
                        title="Edit"
                      >
                        <Edit size={14} />
                      </button>
                      <button
                        onClick={() => handleDeleteCard(card.id)}
                        className="p-1.5 hover:bg-red-50 text-red-500 rounded"
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded text-sm min-h-[60px]">
                      <span className="block text-xs text-gray-400 mb-1 font-medium">
                        FRONT
                      </span>
                      <p className="text-gray-800 whitespace-pre-wrap">
                        {card.frontContent.text}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-sm min-h-[60px]">
                      <span className="block text-xs text-gray-400 mb-1 font-medium">
                        BACK
                      </span>
                      <p className="text-gray-800 whitespace-pre-wrap mb-2">
                        {card.backContent.text}
                      </p>
                      {card.backContent.image && (
                        <div className="mt-2 rounded overflow-hidden border border-gray-200 h-20 w-fit relative bg-black/5">
                          <img
                            src={card.backContent.image}
                            alt="Back content"
                            className="h-full w-auto object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
