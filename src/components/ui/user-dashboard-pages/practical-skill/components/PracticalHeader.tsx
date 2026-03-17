"use client";
import { Bookmark, Share2 } from "lucide-react";
import React, { useState } from "react";
import { SaveSkillModal } from "../modals/SaveSkillModal";
import { ShareSkillModal } from "../modals/ShareSkillModal";
import {
  createFolder,
  Folder,
  saveSkillToFolder,
} from "@/data/practicalSkill/folder-data";

export default function PracticalHeader({ skill }: { skill: any }) {
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [folders, setFolders] = useState<Folder[]>([]);
  const handleCreateFolder = (folderName: string) => {
    const updatedFolders = createFolder(folderName, folders);
    setFolders(updatedFolders);
  };

  const handleSaveToFolder = (skillId: string, folderId: string) => {
    const updatedFolders = saveSkillToFolder(skillId, folderId, folders);
    setFolders(updatedFolders);
  };
  return (
    <div className="mb-8">
      <div className="flex items-start justify-between mb-3">
        <div className="inline-block px-3 py-1 bg-[#2C5F8D]/10 rounded-full">
          <p className="text-xs font-medium text-[#2C5F8D]">{skill.category}</p>
        </div>

        {/* Save and Share Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setIsSaveModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#2C5F8D] text-[#2C5F8D] rounded-lg hover:bg-blue-50 transition-colors font-medium shadow-sm"
          >
            <Bookmark className="size-4" />
            <span className="text-sm">Save</span>
          </button>

          <button
            onClick={() => setIsShareModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#2C5F8D] text-white rounded-lg hover:bg-[#234a6d] transition-colors font-medium shadow-sm"
          >
            <Share2 className="size-4" />
            <span className="text-sm">Share</span>
          </button>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">{skill?.title}</h1>
      <p className="text-sm text-gray-600">
        Master this essential nursing skill with step-by-step guidance
      </p>
      {/* Modals */}
      <SaveSkillModal
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        onSave={handleSaveToFolder}
        onCreateFolder={handleCreateFolder}
        folders={folders}
        skillId={skill.id}
        skillName={skill.name}
      />

      <ShareSkillModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        skillName={skill.name}
        skillId={skill.id}
      />
    </div>
  );
}
