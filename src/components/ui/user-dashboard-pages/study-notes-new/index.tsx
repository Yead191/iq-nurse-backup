"use client";

import React, { useEffect, useState } from "react";
import NoteTab from "../study-notes-page/surgical-details-page/NoteTab";
import { SaveToFolderModal } from "./modals/SaveToFolderModal";
import { ShareModal } from "./modals/ShareModal";
import { QuizModal } from "./modals/QuizModal";
import DynamicNoteHeading from "./components/DynamicNoteHeading";

export default function StudyNotesNew({
  content,
}: {
  content: {
    _id: string;
    title: string;
    description: string;
    content: string;
  };
}) {
  // STATES
  const [activeTab, setActiveTab] = useState<"study" | "notes">("study");

  const [isQuizOpen, setQuizOpen] = useState(false);
  const [savedToFolder, setSaveModalOpen] = useState(false);
  const [isShareModalOpen, setShareModalOpen] = useState(false);
  const [html, setHtml] = useState("");

  // FUNCTIONS
  const handleSave = (folderId: string) => {
    console.log(`Saved to folder: ${folderId}`);
    setSaveModalOpen(true);
    setTimeout(() => setSaveModalOpen(false), 3000);
  };
  useEffect(() => {
    fetch(content.content)
      .then((res) => res.text())
      .then((data) => setHtml(data));
  }, [content.content]);
  return (
    <div className="container pt-4">
      <DynamicNoteHeading
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        content={content}
        savedToFolder={savedToFolder}
        setSaveModalOpen={setSaveModalOpen}
        setShareModalOpen={setShareModalOpen}
        setQuizOpen={setQuizOpen}
      />
      {activeTab === "notes" ? (
        <NoteTab topicId={content?._id} />
      ) : (
        // <section
        //   className="study-note-content prose max-w-none"
        //   dangerouslySetInnerHTML={{ __html: html }}
        // />
        <section className="w-full">
          <iframe
            src={content.content}
            className="w-full h-[calc(100vh-300px)] rounded-lg"
          />
        </section>
      )}

      {/* Modals */}
      <SaveToFolderModal
        isOpen={savedToFolder}
        onClose={() => setSaveModalOpen(false)}
        topicTitle={content?.title}
        onSave={handleSave}
      />
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setShareModalOpen(false)}
        topicTitle={content?.title}
      />
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setQuizOpen(false)}
        topicTitle={content?.title}
        topicId={content?._id}
      />
    </div>
  );
}
