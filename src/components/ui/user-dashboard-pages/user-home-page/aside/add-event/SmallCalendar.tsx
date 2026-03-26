"use client";

import React from "react";
import { Calendar as AntCalendar, theme } from "antd";
import type { CalendarProps as AntCalendarProps } from "antd";
import type { Dayjs } from "dayjs";

interface SmallCalendarProps extends AntCalendarProps<Dayjs> {
  datesWithEvents?: Map<string, string[]>;
  activeDate?: Dayjs;
}

const colorMap: Record<string, string> = {
  orange: "#f97316",
  red: "#ef4444",
  purple: "#a855f7",
  teal: "#14b8a6",
  green: "#16a34a",
  indigo: "#6366f1",
  pink: "#ec4899",
  gray: "#6b7280",
};

export const SmallCalendar: React.FC<SmallCalendarProps> = ({
  datesWithEvents,
  activeDate,
  className,
  value,
  defaultValue,
  ...props
}) => {
  const dateCellRender = (value: Dayjs) => {
    const dateKey = value.format("YYYY-MM-DD");
    const colors = datesWithEvents?.get(dateKey) || [];
    const uniqueColors = [...new Set(colors)].slice(0, 3); // Max 3 dots

    if (uniqueColors.length === 0) return null;

    return (
      <div className="flex justify-center gap-0.5 mt-auto pb-1 absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 overflow-visible">
        {uniqueColors.map((color, idx) => (
          <div
            key={idx}
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: colorMap[color] || color }}
          />
        ))}
      </div>
    );
  };

  const fullCellRender = (date: Dayjs, info: any) => {
    if (info.type !== "date") return info.originNode;

    const isActive = activeDate
      ? date.isSame(activeDate, "day")
      : value && date.isSame(value, "day");

    return (
      <div
        className={`ant-picker-cell-inner flex items-center justify-center relative !h-8 !w-8 !rounded-lg mx-auto overflow-visible ${
          isActive
            ? "!bg-[#2C5F8D] !text-white"
            : "hover:!bg-blue-50 transition-colors"
        }`}
      >
        {date.date()}
        {dateCellRender(date)}
      </div>
    );
  };

  return (
    <div className={`small-calendar ${className || ""}`}>
      <AntCalendar
        fullscreen={false}
        fullCellRender={fullCellRender}
        value={value}
        defaultValue={defaultValue}
        {...props}
      />
    </div>
  );
};

export default SmallCalendar;
