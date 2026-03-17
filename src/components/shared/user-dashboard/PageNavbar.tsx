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
  sideBtn?: boolean;
};

export default function PageNavbar({
  icon,
  title,
  topics,
  actions = [],
  sideBtn = false,
}: PageNavbarProps) {
  const pathname = usePathname();
  const { lg } = Grid.useBreakpoint();
  return (
    <nav
      style={{
        display: pathname.includes("start-exam") ? "none" : "block",
      }}
      className=" h-[64px]"
    >
      <div
        style={{
          boxShadow: "4px 4px 35px rgba(0, 0, 0, 0.13)",
        }}
        className={`flex items-center justify-between w-full py-3 bg-white gap-10  px-4 md:px-6  fixed! top-0 z-30 ${sideBtn ? "pl-16 lg:pl-4" : ""}`}
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
                        background:
                          "linear-gradient(to right, #0068DD, #2C5F8D)",
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
    </nav>
  );
}
