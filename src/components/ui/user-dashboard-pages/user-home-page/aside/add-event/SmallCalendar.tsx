"use client";

import React from "react";
import { Calendar as AntCalendar, theme } from "antd";
import type { CalendarProps as AntCalendarProps } from "antd";
import type { Dayjs } from "dayjs";

interface SmallCalendarProps extends AntCalendarProps<Dayjs> {
  datesWithEvents?: Map<string, string[]>;
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
  className,
  value,
  defaultValue,
  ...props
}) => {
  const { token } = theme.useToken();

  const dateCellRender = (value: Dayjs) => {
    const dateKey = value.format("YYYY-MM-DD");
    const colors = datesWithEvents?.get(dateKey) || [];
    const uniqueColors = [...new Set(colors)].slice(0, 3); // Max 3 dots

    if (uniqueColors.length === 0) return null;

    return (
      <div className="flex justify-center gap-0.5 mt-auto pb-1 absolute -bottom-0.5 left-1/2 transform -translate-x-1/2">
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

  return (
    <div className={`small-calendar ${className || ""}`}>
      <AntCalendar
        fullscreen={false}
        cellRender={dateCellRender}
        value={value}
        defaultValue={defaultValue}
        {...props}
        // className={[
        //   "[&_.ant-picker-calendar-header]:mb-2",
        //   "[&_.ant-picker-calendar-header_.ant-picker-calendar-year-select]:text-sm",
        //   "[&_.ant-picker-calendar-header_.ant-picker-calendar-month-select]:text-sm",
        //   "[&_.ant-picker-calendar-date]:h-12 !important",
        //   "[&_.ant-picker-calendar-date]:p-0",
        //   "[&_.ant-picker-calendar-date]:flex",
        //   "[&_.ant-picker-calendar-date]:flex-col",
        //   "[&_.ant-picker-calendar-date]:items-center",
        //   "[&_.ant-picker-calendar-date-content]:w-full",
        //   "[&_.ant-picker-calendar-date-content]:mt-auto",
        //   "[&_.ant-picker-cell-inner]:h-7 !important",
        //   "[&_.ant-picker-cell-inner]:w-full",
        //   "[&_.ant-picker-cell-inner]:rounded-lg",
        //   "[&_.ant-picker-cell-selected_.ant-picker-cell-inner]:bg-[#003877]  !important ",
        //   "[&_.ant-picker-cell-selected_.ant-picker-cell-inner]:text-white h-fit !important",
        //   "[&_.ant-picker-cell-today_.ant-picker-cell-inner]:border-none",
        //   "[&_.ant-picker-cell-today_.ant-picker-cell-inner]:bg-blue-100  !important",
        //   "[&_.ant-picker-calendar-header_.ant-picker-calendar-mode-switch]:hidden",
        //   className,
        // ]
        //   .filter(Boolean)
        //   .join(" ")}
      />
    </div>
  );
};

export default SmallCalendar;
