"use client";
import React, { useEffect, useState } from "react";
import EcgHeading from "./components/EcgHeading";
import { SaveDialog } from "./modals/SaveDialog";
import { ShareDialog } from "./modals/ShareDialog";

export default function EcgContentArea({ content }: { content: any }) {
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);

  // Track recently viewed topics
  useEffect(() => {
    const metadata = content;
    if (!metadata) return;

    // Get existing recently viewed
    const stored = localStorage.getItem("ecg-recently-viewed");
    let recentlyViewed = [];
    if (stored) {
      try {
        recentlyViewed = JSON.parse(stored);
      } catch (e) {
        console.error("Failed to parse recently viewed:", e);
      }
    }

    // Remove existing entry for this topic (if any)
    recentlyViewed = recentlyViewed.filter((item: any) => item.id !== content);

    // Add current topic to the front
    recentlyViewed.unshift({
      id: content,
      label: metadata.label,
      category: metadata.category,
      timestamp: Date.now(),
    });

    // Keep only the last 10 items
    recentlyViewed = recentlyViewed.slice(0, 10);

    // Save back to localStorage
    localStorage.setItem("ecg-recently-viewed", JSON.stringify(recentlyViewed));
  }, [content]);

  if (!content) {
    return (
      <div className="flex-1 bg-white p-4 flex items-center justify-center">
        <p className="text-gray-500">
          Select a topic from the sidebar to begin studying.
        </p>
      </div>
    );
  }
  return (
    <div className="max-w-5xl mx-auto px-4  pb-8 lg:pb-12">
      <EcgHeading
        content={content}
        setShowSaveDialog={setShowSaveDialog}
        setShowShareDialog={setShowShareDialog}
      />
      {/* Content */}
      <section
        className="study-note-content prose max-w-none overflow-scroll"
        dangerouslySetInnerHTML={{ __html: content?.content }}
      />
      <SaveDialog
        isOpen={showSaveDialog}
        onClose={() => setShowSaveDialog(false)}
        topicName={content.title}
      />

      <ShareDialog
        isOpen={showShareDialog}
        onClose={() => setShowShareDialog(false)}
        topicName={content.title}
        topicId={content.id}
      />
    </div>
  );
}
