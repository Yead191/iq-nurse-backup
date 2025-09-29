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
    <div className="flex lg:flex-row flex-col items-center gap-4 p-4 bg-gray-50"> 

    <div className="flex  items-center gap-4  bg-gray-50"> 
      {/* Sort Select */}
      <div className="flex items-center gap-2"> 
        <span className="text-sm font-medium text-gray-700">Sort by:</span>
        <Select
          value={sortBy}
          onChange={handleSortChange}
          style={{  height: 54 }}
           className="lg:w-48 w-32"
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
          style={{  height: 54 }}
          className="lg:w-44 w-28"
        >
          {typeOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </div>

    </div>

      {/* Search Input */}
      <div className="flex-1 lg:max-w-lg w-full">
        <Input
          placeholder="Search maps..."
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
          prefix={<RiSearch2Line size={20} className="text-gray-400" />}
          style={{ height: 54 }} 
          className="w-full"
        
          allowClear
        />
      </div>
    </div>
  )
}
