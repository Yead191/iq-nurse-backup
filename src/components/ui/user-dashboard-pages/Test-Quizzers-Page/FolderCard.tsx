"use client"

import type React from "react"

import { Dropdown } from "antd"
import { MoreOutlined } from "@ant-design/icons"

interface QuizFolder {
  id: string
  name: string
  color: string
  quizCount: number
  createdAt: string
  quizzes: any[]
}

interface FolderCardProps {
  folder: QuizFolder
  onRename: () => void
  onDelete: () => void
  onClick?: () => void // Added onClick prop for folder navigation
}

export default function FolderCard({ folder, onRename, onDelete, onClick }: FolderCardProps) {
  const menuItems = [
    {
      key: "rename",
      label: (
        <div className="flex items-center gap-2 px-2 py-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Rename
        </div>
      ),
      onClick: onRename,
    },
    {
      key: "delete",
      label: (
        <div className="flex items-center gap-2 px-2 py-1 text-red-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Delete Study Set
        </div>
      ),
      onClick: onDelete,
    },
  ]

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow min-h-[200px] flex flex-col cursor-pointer"
      onClick={onClick} // Added onClick handler for folder navigation
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-6 h-6 rounded-full flex-shrink-0" style={{ backgroundColor: folder.color }} />
        <div onClick={handleDropdownClick}>
          {" "}
          {/* Prevent event bubbling for dropdown */}
          <Dropdown menu={{ items: menuItems }} trigger={["click"]} placement="bottomRight">
            <button className="p-1 hover:bg-gray-100 rounded">
              <MoreOutlined className="text-gray-400" />
            </button>
          </Dropdown>
        </div>
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 mb-2">{folder.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{folder.quizzes.length} Quizzes</p>{" "}
        {/* Show actual quiz count from quizzes array */}
      </div>

      <div className="text-xs text-gray-500">{folder.createdAt}</div>
    </div>
  )
}
