"use client";

import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Palette,
  Type,
  Minus,
  Plus,
} from "lucide-react";

export default function WordRibbonToolbar() {
  return (
    <div className="bg-blue-600 text-white">
      {/* Tab Navigation */}
      <div className="flex items-center px-4 py-1 border-b border-blue-500">
        <div className="flex space-x-6">
          <button className="px-3 py-1 bg-blue-700 rounded-sm text-sm font-medium">
            Home
          </button>
          <button className="px-3 py-1 hover:bg-blue-700 rounded-sm text-sm">
            Insert
          </button>
          <button className="px-3 py-1 hover:bg-blue-700 rounded-sm text-sm">
            Draw
          </button>
        </div>
      </div>

      {/* Toolbar Content */}
      <div className="flex items-center px-4 py-2 space-x-4">
        {/* Font Group */}
        <div className="flex items-center space-x-2">
          <select className="bg-white text-black px-2 py-1 rounded text-sm min-w-[120px]">
            <option>Aptos (Body)</option>
            <option>Arial</option>
            <option>Times New Roman</option>
          </select>
          <select className="bg-white text-black px-2 py-1 rounded text-sm w-12">
            <option>12</option>
            <option>14</option>
            <option>16</option>
            <option>18</option>
          </select>
        </div>

        <div className="w-px h-6 bg-blue-400"></div>

        {/* Font Style Group */}
        <div className="flex items-center space-x-1">
          <button className="text-white hover:bg-blue-700 p-1 rounded">
            <Bold size={16} />
          </button>
          <button className="text-white hover:bg-blue-700 p-1 rounded">
            <Italic size={16} />
          </button>
          <button className="text-white hover:bg-blue-700 p-1 rounded">
            <Underline size={16} />
          </button>
          <button className="text-white hover:bg-blue-700 p-1 rounded">
            <Type size={16} />
          </button>
        </div>

        <div className="w-px h-6 bg-blue-400"></div>

        {/* Alignment Group */}
        <div className="flex items-center space-x-1">
          <button className="text-white hover:bg-blue-700 p-1 rounded">
            <AlignLeft size={16} />
          </button>
          <button className="text-white hover:bg-blue-700 p-1 rounded">
            <AlignCenter size={16} />
          </button>
          <button className="text-white hover:bg-blue-700 p-1 rounded">
            <AlignRight size={16} />
          </button>
          <button className="text-white hover:bg-blue-700 p-1 rounded">
            <AlignJustify size={16} />
          </button>
        </div>

        <div className="w-px h-6 bg-blue-400"></div>

        {/* List Group */}
        <div className="flex items-center space-x-1">
          <button className="text-white hover:bg-blue-700 p-1 rounded">
            <List size={16} />
          </button>
          <button className="text-white hover:bg-blue-700 p-1 rounded">
            <ListOrdered size={16} />
          </button>
        </div>

        <div className="w-px h-6 bg-blue-400"></div>

        {/* Color Group */}
        <div className="flex items-center space-x-1">
          <button className="text-white hover:bg-blue-700 p-1 rounded">
            <Palette size={16} />
          </button>
          <button className="text-white hover:bg-blue-700 p-1 rounded">
            <div className="w-4 h-4 bg-yellow-400 border"></div>
          </button>
        </div>

        <div className="w-px h-6 bg-blue-400"></div>

        {/* Additional Tools */}
        <div className="flex items-center space-x-1">
          <button className="text-white hover:bg-blue-700 p-1 rounded">
            <Minus size={16} />
          </button>
          <button className="text-white hover:bg-blue-700 p-1 rounded">
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
