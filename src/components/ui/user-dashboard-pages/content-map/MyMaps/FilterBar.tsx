"use client"

import { useState } from "react"
import { Select, Input } from "antd"
import { RiSearch2Line } from "react-icons/ri"
import { sortOptions, typeOptions } from "@/data/contentMap"

const { Option } = Select

interface FilterBarProps {
  onSortChange?: (value: string) => void
  onTypeChange?: (value: string) => void
  onSearch?: (value: string) => void
}



export default function FilterBar({ onSortChange, onTypeChange, onSearch }: FilterBarProps) {
  const [sortBy, setSortBy] = useState("recently-modified")
  const [type, setType] = useState("all-types")
  const [searchValue, setSearchValue] = useState("")

  const handleSortChange = (value: string) => {
    setSortBy(value)
    onSortChange?.(value)
  }

  const handleTypeChange = (value: string) => {
    setType(value)
    onTypeChange?.(value)
  }

  const handleSearch = (value: string) => {
    setSearchValue(value)
    onSearch?.(value)
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50">
      {/* Sort Select */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700">Sort by:</span>
        <Select
          value={sortBy}
          onChange={handleSortChange}
          style={{ width: 160, height: 54 }}
          size="middle"
        >
          {sortOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </div>

      {/* Type Select */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700">Type:</span>
        <Select
          value={type}
          onChange={handleTypeChange}
          style={{ width: 120, height: 54 }}
          size="middle"
        >
          {typeOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </div>

      {/* Search Input */}
      <div className="flex-1 max-w-xs">
        <Input
          placeholder="Search maps..."
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
          prefix={<RiSearch2Line size={20} className="text-gray-400" />}
          style={{ height: 54 }}
          size="middle"
          allowClear
        />
      </div>
    </div>
  )
}
