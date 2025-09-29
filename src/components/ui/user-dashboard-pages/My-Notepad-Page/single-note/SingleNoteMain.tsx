"use client";

import DetailsHeader from "@/components/shared/DetailsHeader";
import { Bookmark, Printer, Share2 } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import NoteContentArea from "../NoteContentArea";

export default function SingleNoteMain({ id }: any) {
  const note = {
    title: "",
    content: "",
    preview: "New Note",
    folder: "New Note",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const handleTitleChange = (title: string) => console.log(title);
  const handleContentChange = (content: string) => console.log(content);
  return (
    <section>
      <DetailsHeader
        title="My Notes"
        back="/profile/my-notepad"
        primaryBg={false}
        actions={[
          {
            icon: Bookmark,
            label: "Bookmark",
            hoverColor: "text-blue-600",
            onClick: () => toast.success("Bookmarked!"),
          },
          {
            icon: Share2,
            label: "Share",
            hoverColor: "text-green-600",
            onClick: () => console.log("Shared!"),
          },
          {
            icon: Printer,
            label: "Print",
            hoverColor: "text-green-600",
            onClick: () => console.log("Print!"),
          },
        ]}
      />
      <div>
        <NoteContentArea
          noteId={id}
          initialTitle={note?.title || ""}
          initialContent={note?.content || ""}
          onTitleChange={handleTitleChange}
          onContentChange={handleContentChange}
        />
      </div>
    </section>
  );
}
