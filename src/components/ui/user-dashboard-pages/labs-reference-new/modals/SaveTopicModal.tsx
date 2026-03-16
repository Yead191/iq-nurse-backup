import { useState, useEffect } from "react";
import { X, Plus, Folder, Check } from "lucide-react";
import { Button } from "antd";

interface SaveTopicModalProps {
  isOpen: boolean;
  onClose: () => void;
  topicTitle: string;
}

interface FolderItem {
  id: string;
  name: string;
  topicCount: number;
}

export function SaveTopicModal({
  isOpen,
  onClose,
  topicTitle,
}: SaveTopicModalProps) {
  const [folders, setFolders] = useState<FolderItem[]>([]);
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Load folders from localStorage on mount
  useEffect(() => {
    const savedFolders = localStorage.getItem("studyFolders");
    if (savedFolders) {
      setFolders(JSON.parse(savedFolders));
    } else {
      // Initialize with default folders
      const defaultFolders = [
        { id: "1", name: "My Favorites", topicCount: 0 },
        { id: "2", name: "Study for Exam", topicCount: 0 },
      ];
      setFolders(defaultFolders);
      localStorage.setItem("studyFolders", JSON.stringify(defaultFolders));
    }
  }, []);

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      const newFolder: FolderItem = {
        id: Date.now().toString(),
        name: newFolderName.trim(),
        topicCount: 0,
      };
      const updatedFolders = [...folders, newFolder];
      setFolders(updatedFolders);
      localStorage.setItem("studyFolders", JSON.stringify(updatedFolders));
      setNewFolderName("");
      setIsCreatingFolder(false);
      setSelectedFolderId(newFolder.id);
    }
  };

  const handleSaveToFolder = () => {
    if (selectedFolderId) {
      // Get existing saved topics
      const savedTopicsKey = `folder_${selectedFolderId}_topics`;
      const existingTopics = localStorage.getItem(savedTopicsKey);
      const topicsArray = existingTopics ? JSON.parse(existingTopics) : [];

      // Check if topic is already saved
      if (!topicsArray.includes(topicTitle)) {
        topicsArray.push(topicTitle);
        localStorage.setItem(savedTopicsKey, JSON.stringify(topicsArray));

        // Update folder topic count
        const updatedFolders = folders.map((folder) =>
          folder.id === selectedFolderId
            ? { ...folder, topicCount: topicsArray.length }
            : folder,
        );
        setFolders(updatedFolders);
        localStorage.setItem("studyFolders", JSON.stringify(updatedFolders));
      }

      setSavedSuccess(true);
      setTimeout(() => {
        setSavedSuccess(false);
        onClose();
      }, 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Save Topic</h2>
            <p className="text-sm text-gray-600 mt-1">{topicTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {savedSuccess ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-lg font-medium text-gray-900">Topic Saved!</p>
              <p className="text-sm text-gray-600 mt-1">Added to your folder</p>
            </div>
          ) : (
            <>
              {/* Folder List */}
              <div className="space-y-2 mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Select a folder or create new
                </h3>
                {folders.map((folder) => (
                  <button
                    key={folder.id}
                    onClick={() => setSelectedFolderId(folder.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${
                      selectedFolderId === folder.id
                        ? "border-[#2C5F8D] bg-blue-50"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Folder
                        className={`w-5 h-5 ${
                          selectedFolderId === folder.id
                            ? "text-[#2C5F8D]"
                            : "text-gray-400"
                        }`}
                      />
                      <div className="text-left">
                        <p
                          className={`text-sm font-medium ${
                            selectedFolderId === folder.id
                              ? "text-[#2C5F8D]"
                              : "text-gray-900"
                          }`}
                        >
                          {folder.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {folder.topicCount}{" "}
                          {folder.topicCount === 1 ? "topic" : "topics"}
                        </p>
                      </div>
                    </div>
                    {selectedFolderId === folder.id && (
                      <Check className="w-5 h-5 text-[#2C5F8D]" />
                    )}
                  </button>
                ))}
              </div>

              {/* Create New Folder */}
              {isCreatingFolder ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Folder Name
                  </label>
                  <input
                    type="text"
                    value={newFolderName}
                    onChange={(e) => setNewFolderName(e.target.value)}
                    placeholder="Enter folder name..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2C5F8D] focus:border-transparent"
                    autoFocus
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleCreateFolder();
                      }
                    }}
                  />
                  <div className="flex gap-2 mt-3">
                    <Button
                      onClick={handleCreateFolder}
                      size="small"
                      className="bg-[#2C5F8D] hover:bg-[#234a6d] text-white"
                      disabled={!newFolderName.trim()}
                    >
                      Create
                    </Button>
                    <Button
                      onClick={() => {
                        setIsCreatingFolder(false);
                        setNewFolderName("");
                      }}
                      size="small"
                      variant="outlined"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsCreatingFolder(true)}
                  className="w-full flex items-center justify-center gap-2 p-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#2C5F8D] hover:bg-blue-50 transition-all text-gray-600 hover:text-[#2C5F8D]"
                >
                  <Plus className="w-5 h-5" />
                  <span className="text-sm font-medium">Create New Folder</span>
                </button>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {!savedSuccess && (
          <div className="p-6 border-t border-gray-200 flex gap-3">
            <Button onClick={onClose} variant="outlined" className="flex-1">
              Cancel
            </Button>
            <Button
              onClick={handleSaveToFolder}
              disabled={!selectedFolderId}
              className="flex-1 bg-[#2C5F8D] hover:bg-[#234a6d] text-white"
            >
              Save Topic
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
