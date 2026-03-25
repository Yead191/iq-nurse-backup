"use client";
import { useState } from "react";
import TopicHeader from "./components/TopicHeader";
import { SaveModal } from "./modals/SaveModal";
import { ShareModal } from "./modals/ShareModal";
import { dosageNoteHTML } from "../../../../../public/assets/files/dosageNoteHTML";

interface PracticeAreaProps {
  topic: any;
}

export function PracticeArea({ topic }: PracticeAreaProps) {
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [savedToFolder, setSavedToFolder] = useState<string | null>(null);

  const handleSave = (folderId: string) => {
    setSavedToFolder(folderId);
    // Here you would typically save to a backend or localStorage
    console.log(`Saved "${topic}" to folder ${folderId}`);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto px-4">
      {/* Topic Header */}
      <TopicHeader
        topic={topic}
        setIsSaveModalOpen={setIsSaveModalOpen}
        setIsShareModalOpen={setIsShareModalOpen}
        savedToFolder={savedToFolder}
      />

      <section
        className="study-note-content prose max-w-none overflow-scroll"
        dangerouslySetInnerHTML={{ __html: dosageNoteHTML }}
      />
      {/* Modals */}
      <SaveModal
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        topicName={topic?.title}
        onSave={handleSave}
      />
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        topicName={topic?.title}
      />
    </div>
  );
}
