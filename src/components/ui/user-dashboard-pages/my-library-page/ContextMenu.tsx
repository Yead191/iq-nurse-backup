"use client";

import { useEffect, useRef } from "react";
import type { LucideIcon } from "lucide-react";

interface ContextMenuItem {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  destructive?: boolean;
}

interface ContextMenuProps {
  position: { x: number; y: number };
  onClose: () => void;
  items: ContextMenuItem[];
}

export default function ContextMenu({
  position,
  onClose,
  items,
}: ContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className="fixed z-50 bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-[160px]"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      {items.map((item, index) => (
        <button
          key={index}
          onClick={item.onClick}
          className={`w-full flex items-center px-3 py-2 text-sm hover:bg-gray-50 ${
            item.destructive ? "text-red-600" : "text-gray-700"
          }`}
        >
          <item.icon className="w-4 h-4 mr-3" />
          {item.label}
        </button>
      ))}
    </div>
  );
}
