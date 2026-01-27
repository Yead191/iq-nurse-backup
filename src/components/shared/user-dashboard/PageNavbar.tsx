"use client";

import { ReactNode } from "react";
import { Button, Grid } from "antd";
import { usePathname } from "next/navigation";

type ActionBtn = {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  isPrimary?: boolean;
  style?: React.CSSProperties;
};

type PageNavbarProps = {
  icon?: ReactNode;
  title: string;
  topics?: number | string;
  actions?: ActionBtn[];
};

export default function PageNavbar({
  icon,
  title,
  topics,
  actions = [],
}: PageNavbarProps) {
  const pathname = usePathname();
  const { lg } = Grid.useBreakpoint();
  return (
    <div
      style={{
        boxShadow: "4px 4px 35px rgba(0, 0, 0, 0.13)",
        display: pathname.includes("start-exam") ? "none" : "block",
      }}
      className="flex items-center justify-between w-full py-3 sticky top-0 bg-white z-10  gap-10 shadow-sm px-4 md:px-6 lg:h-[76px]  mb-6"
    >
      {/* Left side */}
      <div className="flex items-center gap-3">
        {icon && (
          <div className="w-7 h-fit flex items-center justify-center">
            {icon}
          </div>
        )}
        <div className="h-10 w-[3px] bg-[#2C5F8D]" />
        <div>
          <div className="flex items-end gap-3">
            <h2 className="text-base md:text-lg lg:text-xl font-semibold text-[#495057] tracking-wide">
              {title}
            </h2>
            {topics && (
              <p className="text-xs md:text-sm lg:text-[16px] text-[#979797] ">
                {topics} Topics
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Right side buttons */}
      <div className="flex items-center gap-2">
        {actions.map((action, idx) => {
          return (
            <Button
              key={idx}
              icon={action.icon}
              onClick={action.onClick}
              size={lg ? "middle" : "small"}
              style={{
                ...(action?.isPrimary
                  ? {
                      color: "#fff",
                      border: "none",
                      background: "linear-gradient(to right, #0068DD, #2C5F8D)",
                    }
                  : {
                      color: "black",
                      backgroundColor: "#02478D30",
                      border: "none",
                    }),
                ...(action?.style || { height: lg ? 40 : 32 }),
              }}
            >
              <span className="hidden sm:inline">{action.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
