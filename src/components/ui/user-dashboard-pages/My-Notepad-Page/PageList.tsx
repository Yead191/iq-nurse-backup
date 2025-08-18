"use client"

import { useState } from "react"
import { Plus, FileText } from "lucide-react"

interface PageListProps {
  pages: string[]
  activePage: string
  onPageSelect: (page: string) => void
  onAddPage: (name: string) => void
}

export default function PageList({ pages, activePage, onPageSelect, onAddPage }: PageListProps) {
  const [newPage, setNewPage] = useState("")

  return (
    <div className="w-64 bg-gray-50 border-r flex flex-col  h-full">
      <div className="flex-1 overflow-y-auto">
        {pages.map((page) => (
          <div
            key={page}
            className={`flex items-center gap-2 px-4 py-2 cursor-pointer ${
              activePage === page ? "bg-gray-200 font-medium" : "hover:bg-gray-100"
            }`}
            onClick={() => onPageSelect(page)}
          >
            <FileText size={16} className="text-gray-500" />
            {page}
          </div>
        ))}
      </div>

      {/* Add Page */}
      <div className="p-3 border-t">
        <div className="flex">
          <input
            value={newPage}
            onChange={(e) => setNewPage(e.target.value)}
            placeholder="New page..."
            className="flex-1 px-2 py-1 border rounded text-sm"
          />
          <button
            onClick={() => {
              onAddPage(newPage)
              setNewPage("")
            }}
            className="ml-2 bg-blue-600 text-white px-2 rounded"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}
