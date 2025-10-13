"use client";
import React from "react";
import { colors } from "./constant";

interface ColorPickerProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
  label?: string;
  required?: boolean;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  selectedColor,
  onColorChange,
  label = "Color",
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => onColorChange(color)}
            className={`
              w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110
              ${
                selectedColor === color
                  ? "border-gray-400 shadow-md"
                  : "border-gray-200 hover:border-gray-300"
              }
            `}
            style={{ backgroundColor: color }}
            title={color}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
