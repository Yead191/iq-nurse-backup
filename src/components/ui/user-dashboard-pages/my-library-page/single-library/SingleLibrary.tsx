"use client";
import DetailsHeader from "@/components/shared/DetailsHeader";
import React, { useState } from "react";
import ContentArea from "../ContentArea";
import { libraryData } from "@/data/libraryData";
import CreateFolderModal from "../CreateFolderModal";

export default function SingleLibrary({ id }: any) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const selectedFolderData =
    libraryData.folders.find((f) => f.id === "1") || null;
  const selectedPageData =
    selectedFolderData?.pages.find((p) => p.id === id) || null;

  const handleCreateFolder = (name: string, color: string) => {};
  return (
    <section>
      <DetailsHeader
        title="Airway & Lungs"
        back="/profile/my-library"
        primaryBg={false}
      />
      <ContentArea
        selectedFolder={selectedFolderData}
        selectedPage={selectedPageData}
        onCreateFolder={() => setIsCreateModalOpen(true)}
      />
      <CreateFolderModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onConfirm={handleCreateFolder}
      />
    </section>
  );
}
