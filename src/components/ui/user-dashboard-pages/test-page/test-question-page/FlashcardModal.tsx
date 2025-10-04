"use client";

import { useState } from "react";
import { X, Search, Plus, Minimize2, Maximize2 } from "lucide-react";
import { Button, Modal } from "antd";
import CreateFlashcardModal from "./CreateFlashcardModal";

interface Flashcard {
  id: number;
  front: string;
  back: string;
  tags: string[];
  createdAt: Date;
}

interface FlashcardModalProps {
  open: boolean;
  onClose: () => void;
  questionId: number;
}

export default function FlashcardModal({
  open,
  onClose,
  questionId,
}: FlashcardModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [isMinimized, setIsMinimized] = useState(false);

  const filteredFlashcards = flashcards.filter(
    (card) =>
      card.front.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.back.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const handleCreateFlashcard = (
    front: string,
    back: string,
    tags: string[]
  ) => {
    const newFlashcard: Flashcard = {
      id: Date.now(),
      front,
      back,
      tags,
      createdAt: new Date(),
    };
    setFlashcards([...flashcards, newFlashcard]);
    setShowCreateModal(false);
  };

  return (
    <>
      <Modal
        open={open}
        onCancel={onClose}
        footer={null}
        width={600}
        centered
        title={
          <div className="flex items-center justify-between bg-[#003877] text-white px-4 py-2 -mx-6 -mt-5 mb-4">
            <span className="font-semibold">Flashcards</span>
            <div className="flex items-center space-x-2">
              {/* <Button
                type="text"
                icon={<Minimize2 className="w-4 h-4 text-white" />}
                onClick={() => setIsMinimized(!isMinimized)}
              />
              <Button
                type="text"
                icon={<Maximize2 className="w-4 h-4 text-white" />}
              /> */}
              <Button
                type="text"
                icon={<X className="w-4 h-4 text-white" />}
                onClick={onClose}
              />
            </div>
          </div>
        }
        closeIcon={null}
      >
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* This Question Section */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              This Question
            </h3>

            {filteredFlashcards.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 bg-gray-50 rounded-lg">
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    <Plus className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium">New Card</span>
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredFlashcards.map((card) => (
                  <div
                    key={card.id}
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors cursor-pointer"
                  >
                    <div className="text-sm text-gray-700 mb-2">
                      <div dangerouslySetInnerHTML={{ __html: card.front }} />
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {card.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Plus className="w-5 h-5" />
                  <span className="font-medium">Add New Card</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </Modal>

      <CreateFlashcardModal
        open={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSave={handleCreateFlashcard}
      />
    </>
  );
}
