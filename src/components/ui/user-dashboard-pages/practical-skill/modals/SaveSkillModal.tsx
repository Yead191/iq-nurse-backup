import { useState } from "react";
import { X, FolderPlus, Folder, Check } from "lucide-react";
import { Folder as FolderType } from "@/data/practicalSkill/folder-data";

interface SaveSkillModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (skillId: string, folderId: string) => void;
  onCreateFolder: (folderName: string) => void;
  folders: FolderType[];
  skillId: string;
  skillName: string;
}

export function SaveSkillModal({
  isOpen,
  onClose,
  onSave,
  onCreateFolder,
  folders,
  skillId,
  skillName,
}: SaveSkillModalProps) {
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");

  if (!isOpen) return null;

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      onCreateFolder(newFolderName.trim());
      setNewFolderName("");
      setIsCreatingFolder(false);
    }
  };

  const handleSaveToFolder = (folderId: string) => {
    onSave(skillId, folderId);
    onClose();
  };

  const isSkillInFolder = (folderId: string) => {
    const folder = folders.find((f) => f.id === folderId);
    return folder ? folder.skillIds.includes(skillId) : false;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Save Skill</h2>
              <p className="text-sm text-gray-600 mt-1">"{skillName}"</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="size-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Create New Folder Section */}
          {!isCreatingFolder ? (
            <button
              onClick={() => setIsCreatingFolder(true)}
              className="w-full flex items-center gap-3 p-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#2C5F8D] hover:bg-blue-50 transition-colors mb-4"
            >
              <FolderPlus className="size-5 text-[#2C5F8D]" />
              <span className="font-medium text-gray-700">
                Create New Folder
              </span>
            </button>
          ) : (
            <div className="mb-4 p-4 border-2 border-[#2C5F8D] rounded-lg bg-blue-50">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Folder Name
              </label>
              <div className="flex gap-2">
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
                  placeholder="Enter folder name..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2C5F8D]/20"
                  autoFocus
                />
                <button
                  onClick={handleCreateFolder}
                  disabled={!newFolderName.trim()}
                  className="px-4 py-2 bg-[#2C5F8D] text-white rounded-md hover:bg-[#234a6d] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-sm font-medium"
                >
                  Create
                </button>
                <button
                  onClick={() => {
                    setIsCreatingFolder(false);
                    setNewFolderName("");
                  }}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Existing Folders */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700 mb-3">
              {folders.length === 0 ? "No folders yet" : "Save to folder:"}
            </p>
            {folders.map((folder) => {
              const isSaved = isSkillInFolder(folder.id);
              return (
                <button
                  key={folder.id}
                  onClick={() => handleSaveToFolder(folder.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-colors ${
                    isSaved
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 hover:border-[#2C5F8D] hover:bg-blue-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Folder
                      className={`size-5 ${isSaved ? "text-green-600" : "text-[#2C5F8D]"}`}
                      fill={isSaved ? "#16a34a" : "#2C5F8D"}
                    />
                    <div className="text-left">
                      <p className="font-medium text-gray-900">{folder.name}</p>
                      <p className="text-xs text-gray-500">
                        {folder.skillIds.length}{" "}
                        {folder.skillIds.length === 1 ? "skill" : "skills"}
                      </p>
                    </div>
                  </div>
                  {isSaved && (
                    <div className="flex items-center gap-1 text-green-600">
                      <Check className="size-5" />
                      <span className="text-xs font-medium">Saved</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
