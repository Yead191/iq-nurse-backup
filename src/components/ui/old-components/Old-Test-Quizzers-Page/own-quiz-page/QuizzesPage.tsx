"use client";

import { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import QuizCard from "./QuizCard";
import FolderCard from "./FolderCard";

import { PageBreadcrumb } from "@/components/shared/user-dashboard/PageBreadcrumb";
import CreateFolderCard from "./CreateFolderCard";
import CreateFolderModal from "../../../user-dashboard-pages/my-library-page/CreateFolderModal";
import { initialFolders, QuizFolder } from "@/data/quizFolder";

export default function QuizzesPage() {
  const [folders, setFolders] = useState<QuizFolder[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFolder, setSelectedFolder] = useState<QuizFolder | null>(null);
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [renameValue, setRenameValue] = useState("");
  const [viewingFolder, setViewingFolder] = useState<QuizFolder | null>(null);

  useEffect(() => {
    const savedFolders = localStorage.getItem("quizFolders");
    if (savedFolders) {
      setFolders(JSON.parse(savedFolders));
    } else {
      setFolders(initialFolders);
      localStorage.setItem("quizFolders", JSON.stringify(initialFolders));
    }
  }, []);

  const foldersPerPage = 6;
  const totalFolders = folders.length;
  const startIndex = (currentPage - 1) * foldersPerPage;
  const endIndex = startIndex + foldersPerPage;
  const currentFolders = folders.slice(startIndex, endIndex);

  const handleCreateFolder = (name: string, color: string) => {
    const newFolder: QuizFolder = {
      id: Date.now().toString(),
      name,
      color,
      quizCount: 0,
      createdAt: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      quizzes: [],
    };
    const updatedFolders = [...folders, newFolder];
    setFolders(updatedFolders);
    localStorage.setItem("quizFolders", JSON.stringify(updatedFolders));
    setIsCreateModalOpen(false);
  };

  const handleDeleteFolder = (folderId: string) => {
    Modal.confirm({
      title: "Delete Folder",
      content:
        "Are you sure you want to delete this folder? This action cannot be undone.",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: () => {
        const updatedFolders = folders.filter(
          (folder) => folder.id !== folderId
        );
        setFolders(updatedFolders);
        localStorage.setItem("quizFolders", JSON.stringify(updatedFolders));
      },
    });
  };

  const handleRenameFolder = (folder: QuizFolder) => {
    setSelectedFolder(folder);
    setRenameValue(folder.name);
    setIsRenameModalOpen(true);
  };

  const confirmRename = () => {
    if (selectedFolder && renameValue.trim()) {
      const updatedFolders = folders.map((folder) =>
        folder.id === selectedFolder.id
          ? { ...folder, name: renameValue.trim() }
          : folder
      );
      setFolders(updatedFolders);
      localStorage.setItem("quizFolders", JSON.stringify(updatedFolders));
      setIsRenameModalOpen(false);
      setSelectedFolder(null);
      setRenameValue("");
    }
  };

  const handleFolderClick = (folder: QuizFolder) => {
    setViewingFolder(folder);
  };

  const handleBackToFolders = () => {
    setViewingFolder(null);
  };

  return (
    <>
      <PageBreadcrumb
        itemImg={"/assets/sidebar-icons/test-icon.svg"}
        itemLabel={"Exams & Quizzers"}
      />
      {viewingFolder ? (
        <div className=" my-8 lg:my-12">
          <div className="mb-8 flex items-center gap-4">
            <Button
              onClick={handleBackToFolders}
              className="flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Folders
            </Button>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                {viewingFolder.name}
              </h1>
              <p className="text-gray-600">
                {viewingFolder.quizzes.length} quiz(s) available
              </p>
            </div>
          </div>

          {viewingFolder.quizzes.length > 0 ? (
            <div className="space-y-4">
              {viewingFolder.quizzes.map((quiz, index) => (
                <QuizCard key={index} quiz={quiz} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No quizzes in this folder yet.</p>
            </div>
          )}
        </div>
      ) : (
        <div className="my-8 lg:my-12 ">
          <div className="mb-12">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Your Quizzes Folder
            </h1>
            <p className="text-gray-600">Access your practice quizzes</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4   mb-8 overflow-visible">
            <CreateFolderCard onClick={() => setIsCreateModalOpen(true)} />

            {currentFolders.map((folder) => (
              <FolderCard
                key={folder.id}
                folder={folder}
                onRename={() => handleRenameFolder(folder)}
                onDelete={() => handleDeleteFolder(folder.id)}
                onClick={() => handleFolderClick(folder)}
                label={"Quizzes"}
              />
            ))}
          </div>

          {totalFolders > foldersPerPage && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                Showing {startIndex + 1}-{Math.min(endIndex, totalFolders)} of{" "}
                {totalFolders}
              </span>
              <div className="flex gap-2">
                <Button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </Button>
                <Button
                  disabled={endIndex >= totalFolders}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          <CreateFolderModal
            isOpen={isCreateModalOpen}
            onClose={() => setIsCreateModalOpen(false)}
            onConfirm={handleCreateFolder}
          />

          <Modal
            title="Rename Folder"
            open={isRenameModalOpen}
            onOk={confirmRename}
            onCancel={() => {
              setIsRenameModalOpen(false);
              setSelectedFolder(null);
              setRenameValue("");
            }}
            okText="Rename"
          >
            <input
              type="text"
              value={renameValue}
              onChange={(e) => setRenameValue(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter folder name"
            />
          </Modal>
        </div>
      )}
    </>
  );
}
