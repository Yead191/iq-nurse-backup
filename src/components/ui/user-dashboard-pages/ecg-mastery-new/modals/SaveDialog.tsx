import { useState } from "react";
import { X, FolderPlus, Folder, Check } from "lucide-react";

interface Folder {
  id: string;
  name: string;
  itemCount: number;
  createdAt: Date;
}

interface SaveDialogProps {
  isOpen: boolean;
  onClose: () => void;
  topicName: string;
}

export function SaveDialog({ isOpen, onClose, topicName }: SaveDialogProps) {
  const [folders, setFolders] = useState<Folder[]>([
    {
      id: "1",
      name: "ECG Rhythms",
      itemCount: 5,
      createdAt: new Date("2025-01-10"),
    },
    {
      id: "2",
      name: "Cardiac Review",
      itemCount: 3,
      createdAt: new Date("2025-01-15"),
    },
    {
      id: "3",
      name: "NCLEX Prep",
      itemCount: 12,
      createdAt: new Date("2025-01-08"),
    },
  ]);
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      const newFolder: Folder = {
        id: Date.now().toString(),
        name: newFolderName.trim(),
        itemCount: 0,
        createdAt: new Date(),
      };
      setFolders([newFolder, ...folders]);
      setNewFolderName("");
      setIsCreatingFolder(false);
      setSelectedFolder(newFolder.id);
    }
  };

  const handleSave = () => {
    if (selectedFolder) {
      // Update folder item count
      setFolders(
        folders.map((f) =>
          f.id === selectedFolder ? { ...f, itemCount: f.itemCount + 1 } : f,
        ),
      );

      //   onSave(selectedFolder);
      setSavedSuccess(true);

      // Close after showing success
      setTimeout(() => {
        setSavedSuccess(false);
        onClose();
        setSelectedFolder(null);
      }, 1500);
    }
  };

  const handleClose = () => {
    setIsCreatingFolder(false);
    setNewFolderName("");
    setSelectedFolder(null);
    setSavedSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Save to Folder
            </h2>
            <p className="text-sm text-gray-600 mt-1">"{topicName}"</p>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Success Message */}
        {savedSuccess && (
          <div className="mx-6 mt-4 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
            <Check className="size-5 text-green-600" />
            <p className="text-green-900 font-medium">Saved successfully!</p>
          </div>
        )}

        {/* Create New Folder Button */}
        {!isCreatingFolder && !savedSuccess && (
          <div className="p-6 border-b border-gray-200">
            <button
              onClick={() => setIsCreatingFolder(true)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              <FolderPlus className="size-5" />
              <span className="font-medium">Create New Folder</span>
            </button>
          </div>
        )}

        {/* Create Folder Form */}
        {isCreatingFolder && !savedSuccess && (
          <div className="p-6 border-b border-gray-200 bg-blue-50">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Folder Name
            </label>
            <input
              type="text"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCreateFolder();
                if (e.key === "Escape") {
                  setIsCreatingFolder(false);
                  setNewFolderName("");
                }
              }}
              placeholder="e.g., Arrhythmias Study"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-3"
              autoFocus
            />
            <div className="flex gap-2">
              <button
                onClick={handleCreateFolder}
                disabled={!newFolderName.trim()}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Create
              </button>
              <button
                onClick={() => {
                  setIsCreatingFolder(false);
                  setNewFolderName("");
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Folders List */}
        {!savedSuccess && (
          <div className="flex-1 overflow-y-auto p-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Select a folder
            </h3>
            <div className="space-y-2">
              {folders.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p className="text-sm">No folders yet.</p>
                  <p className="text-xs mt-1">Create one to get started!</p>
                </div>
              ) : (
                folders.map((folder) => (
                  <button
                    key={folder.id}
                    onClick={() => setSelectedFolder(folder.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg border-2 transition-colors ${
                      selectedFolder === folder.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                    }`}
                  >
                    <div
                      className={`${
                        selectedFolder === folder.id
                          ? "text-blue-600"
                          : "text-gray-400"
                      }`}
                    >
                      <Folder className="size-5" />
                    </div>
                    <div className="flex-1 text-left">
                      <p
                        className={`font-medium ${
                          selectedFolder === folder.id
                            ? "text-blue-700"
                            : "text-gray-900"
                        }`}
                      >
                        {folder.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {folder.itemCount}{" "}
                        {folder.itemCount === 1 ? "item" : "items"}
                      </p>
                    </div>
                    {selectedFolder === folder.id && (
                      <Check className="size-5 text-blue-600" />
                    )}
                  </button>
                ))
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        {!savedSuccess && (
          <div className="p-6 border-t border-gray-200 flex gap-3">
            <button
              onClick={handleClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={!selectedFolder}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Save to Folder
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
