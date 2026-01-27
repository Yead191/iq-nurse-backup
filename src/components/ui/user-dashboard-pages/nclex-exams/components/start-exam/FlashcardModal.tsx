// src/components/exam/FlashcardModal.tsx
import { useState } from "react";
import { Button, Card, Input, Alert } from "antd";
import { X, Plus, Folder, Check } from "lucide-react";

interface FlashcardModalProps {
  questionText: string;
  correctAnswer: string | string[];
  rationale: string;
  rationaleImage?: string;
  onClose: () => void;
  onSave: (notes: string, folderName: string) => void;
}

export function FlashcardModal({
  questionText,
  correctAnswer,
  rationale,
  rationaleImage,
  onClose,
  onSave,
}: FlashcardModalProps) {
  const initialNotes = `Correct Answer: ${
    Array.isArray(correctAnswer) ? correctAnswer.join(", ") : correctAnswer
  }\n\nRationale: ${rationale}`;

  const [notes, setNotes] = useState(initialNotes);
  const [selectedFolder, setSelectedFolder] = useState<string>("");
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  // Mock folders – in real app, load from backend / context
  const [folders, setFolders] = useState<string[]>([
    "Pharmacology",
    "Medical-Surgical",
    "Maternal Health",
    "Mental Health",
  ]);

  const handleCreateFolder = () => {
    const trimmed = newFolderName.trim();
    if (trimmed) {
      setFolders((prev) => [...prev, trimmed]);
      setSelectedFolder(trimmed);
      setNewFolderName("");
      setIsCreatingFolder(false);
    }
  };

  const handleSave = () => {
    if (selectedFolder && notes.trim()) {
      onSave(notes, selectedFolder);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">Create Flashcard</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Question Preview */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Question
            </label>
            <Card className="bg-gray-50 border border-gray-200">
              <p className="text-sm text-gray-700">{questionText}</p>
            </Card>
          </div>

          {/* Notes / Rationale */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Notes
            </label>
            <Input.TextArea
              rows={8}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Write your notes, key points, or rationale to remember..."
              className="resize-none"
            />
            <p className="text-xs text-gray-500 mt-2">
              Add key points, memory aids, or important details you want to
              review later
            </p>
          </div>

          {/* Rationale Image */}
          {rationaleImage && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reference Image
              </label>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                {/* <ImageWithFallback
                  src={rationaleImage}
                  alt="Rationale illustration"
                  className="w-full object-contain"
                /> */}
              </div>
            </div>
          )}

          {/* Folder Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Save to Folder
            </label>

            {!isCreatingFolder ? (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  {folders.map((folder) => (
                    <button
                      key={folder}
                      type="button"
                      onClick={() => setSelectedFolder(folder)}
                      className={`flex items-center gap-3 p-3 border rounded-lg transition-all duration-200 ${
                        selectedFolder === folder
                          ? "border-[#2C5F8D] bg-blue-50 text-[#2C5F8D] shadow-sm"
                          : "border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <Folder
                        className={`w-4 h-4 ${
                          selectedFolder === folder
                            ? "text-[#2C5F8D]"
                            : "text-gray-500"
                        }`}
                      />
                      <span className="text-sm font-medium flex-1 text-left truncate">
                        {folder}
                      </span>
                      {selectedFolder === folder && (
                        <Check className="w-4 h-4 text-[#2C5F8D]" />
                      )}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setIsCreatingFolder(true)}
                  className="w-full flex items-center justify-center gap-2 p-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#2C5F8D] hover:bg-blue-50 hover:text-[#2C5F8D] transition-colors text-gray-600"
                >
                  <Plus className="w-4 h-4" />
                  <span className="text-sm font-medium">Create New Folder</span>
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <Input
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  placeholder="Enter folder name..."
                  autoFocus
                  onPressEnter={handleCreateFolder}
                />

                <div className="flex gap-3">
                  <Button
                    type="primary"
                    onClick={handleCreateFolder}
                    disabled={!newFolderName.trim()}
                    block
                  >
                    Create Folder
                  </Button>
                  <Button
                    onClick={() => {
                      setIsCreatingFolder(false);
                      setNewFolderName("");
                    }}
                    block
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Warning */}
          {!selectedFolder && !isCreatingFolder && (
            <Alert
              message="Please select or create a folder to save your flashcard"
              type="warning"
              showIcon
              className="text-xs"
            />
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
          <Button onClick={onClose}>Cancel</Button>
          <Button
            type="primary"
            onClick={handleSave}
            disabled={!selectedFolder || !notes.trim()}
            style={{
              backgroundColor: "#FE5E7E",
              borderColor: "#FE5E7E",
            }}
            className="hover:!bg-[#e5526e] hover:!border-[#e5526e]"
          >
            Save Flashcard
          </Button>
        </div>
      </div>
    </div>
  );
}
