import { useState } from "react";
import { X, Folder, FolderPlus, Check } from "lucide-react";

interface Folder {
  id: string;
  name: string;
  itemCount: number;
}

interface SaveToFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
  topicTitle: string;
  onSave: (folderId: string) => void;
}

export function SaveToFolderModal({
  isOpen,
  onClose,
  topicTitle,
  onSave,
}: SaveToFolderModalProps) {
  const [folders, setFolders] = useState<Folder[]>([
    { id: "1", name: "Cardiovascular Review", itemCount: 5 },
    { id: "2", name: "Respiratory Conditions", itemCount: 3 },
    { id: "3", name: "Exam Week Review", itemCount: 12 },
  ]);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      const newFolder: Folder = {
        id: Date.now().toString(),
        name: newFolderName.trim(),
        itemCount: 0,
      };
      setFolders([...folders, newFolder]);
      setNewFolderName("");
      setIsCreatingNew(false);
      setSelectedFolderId(newFolder.id);
    }
  };

  const handleSave = () => {
    if (selectedFolderId) {
      onSave(selectedFolderId);
      // Update folder count
      setFolders(
        folders.map((f) =>
          f.id === selectedFolderId ? { ...f, itemCount: f.itemCount + 1 } : f,
        ),
      );
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-[#2C5F8D]">
            Save to Folder
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">Saving:</p>
            <p className="font-medium text-gray-900">{topicTitle}</p>
          </div>

          {/* Create New Folder */}
          {isCreatingNew ? (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border-2 border-[#2C5F8D]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Folder Name
              </label>
              <input
                type="text"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                placeholder="Enter folder name..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5F8D] focus:border-transparent mb-3"
                autoFocus
                onKeyPress={(e) => e.key === "Enter" && handleCreateFolder()}
              />
              <div className="flex gap-2">
                <button
                  onClick={handleCreateFolder}
                  disabled={!newFolderName.trim()}
                  className="flex-1 px-4 py-2 bg-[#2C5F8D] text-white rounded-md hover:bg-[#234a6d] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-sm font-medium"
                >
                  Create Folder
                </button>
                <button
                  onClick={() => {
                    setIsCreatingNew(false);
                    setNewFolderName("");
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsCreatingNew(true)}
              className="w-full mb-6 flex items-center gap-2 px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#2C5F8D] hover:bg-gray-50 transition-colors text-gray-600 hover:text-[#2C5F8D] font-medium"
            >
              <FolderPlus className="size-5" />
              Create New Folder
            </button>
          )}

          {/* Existing Folders */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700 mb-3">
              Or select an existing folder:
            </p>
            {folders.map((folder) => (
              <button
                key={folder.id}
                onClick={() => setSelectedFolderId(folder.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border-2 transition-all ${
                  selectedFolderId === folder.id
                    ? "border-[#2C5F8D] bg-[#2C5F8D]/5"
                    : "border-gray-200 hover:border-[#2C5F8D]/50 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Folder
                    className={`size-5 ${
                      selectedFolderId === folder.id
                        ? "text-[#2C5F8D]"
                        : "text-gray-400"
                    }`}
                  />
                  <div className="text-left">
                    <p className="font-medium text-gray-900">{folder.name}</p>
                    <p className="text-xs text-gray-500">
                      {folder.itemCount} items
                    </p>
                  </div>
                </div>
                {selectedFolderId === folder.id && (
                  <Check className="size-5 text-[#2C5F8D]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t bg-gray-50 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!selectedFolderId}
            className="flex-1 px-4 py-2 bg-[#2C5F8D] text-white rounded-md hover:bg-[#234a6d] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
