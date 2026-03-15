import { useState } from "react";
import { X, Folder, Plus, Check } from "lucide-react";

interface SaveModalProps {
  isOpen: boolean;
  onClose: () => void;
  topicName: string;
  onSave: (folderId: string) => void;
}

interface FolderItem {
  id: string;
  name: string;
  itemCount: number;
}

export function SaveModal({
  isOpen,
  onClose,
  topicName,
  onSave,
}: SaveModalProps) {
  const [folders, setFolders] = useState<FolderItem[]>([
    { id: "1", name: "NCLEX Study Materials", itemCount: 12 },
    { id: "2", name: "Medication Calculations", itemCount: 5 },
    { id: "3", name: "Clinical Skills", itemCount: 8 },
  ]);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  if (!isOpen) return null;

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      const newFolder: FolderItem = {
        id: Date.now().toString(),
        name: newFolderName.trim(),
        itemCount: 0,
      };
      setFolders([...folders, newFolder]);
      setSelectedFolder(newFolder.id);
      setNewFolderName("");
      setIsCreatingFolder(false);
    }
  };

  const handleSave = () => {
    if (selectedFolder) {
      onSave(selectedFolder);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">
              Save to Folder
            </h2>
            <p className="text-xs text-gray-600 mt-1">"{topicName}"</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Create New Folder Section */}
          {!isCreatingFolder ? (
            <button
              onClick={() => setIsCreatingFolder(true)}
              className="w-full flex items-center gap-3 p-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#2C5F8D] hover:bg-gray-50 transition-colors mb-4"
            >
              <Plus className="w-5 h-5 text-[#2C5F8D]" />
              <span className="text-sm font-medium text-gray-700">
                Create New Folder
              </span>
            </button>
          ) : (
            <div className="mb-4 p-3 border-2 border-[#2C5F8D] rounded-lg bg-blue-50">
              <input
                type="text"
                placeholder="Enter folder name..."
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleCreateFolder()}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2C5F8D] mb-2"
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  onClick={handleCreateFolder}
                  disabled={!newFolderName.trim()}
                  className="flex-1 px-3 py-1.5 bg-[#2C5F8D] text-white text-xs rounded-md hover:bg-[#234a6d] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Create
                </button>
                <button
                  onClick={() => {
                    setIsCreatingFolder(false);
                    setNewFolderName("");
                  }}
                  className="flex-1 px-3 py-1.5 bg-white border border-gray-300 text-gray-600 text-xs rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Existing Folders List */}
          <div className="space-y-2 max-h-64 overflow-y-auto">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Select Folder
            </p>
            {folders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => setSelectedFolder(folder.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border-2 transition-colors ${
                  selectedFolder === folder.id
                    ? "border-[#2C5F8D] bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <Folder
                  className={`w-5 h-5 flex-shrink-0 ${
                    selectedFolder === folder.id
                      ? "text-[#2C5F8D]"
                      : "text-gray-400"
                  }`}
                />
                <div className="flex-1 text-left">
                  <p
                    className={`text-sm font-medium ${
                      selectedFolder === folder.id
                        ? "text-blue-700"
                        : "text-gray-700"
                    }`}
                  >
                    {folder.name}
                  </p>
                  <p className="text-[10px] text-gray-500">
                    {folder.itemCount}{" "}
                    {folder.itemCount === 1 ? "item" : "items"}
                  </p>
                </div>
                {selectedFolder === folder.id && (
                  <Check className="w-5 h-5 text-[#2C5F8D]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-white border border-gray-300 text-gray-600 text-sm rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!selectedFolder}
            className="flex-1 px-4 py-2 bg-[#2C5F8D] text-white text-sm rounded-lg hover:bg-[#234a6d] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Save to Folder
          </button>
        </div>
      </div>
    </div>
  );
}
