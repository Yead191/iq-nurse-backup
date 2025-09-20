"use client";

import { ReactNode } from "react";
import { Button, Grid } from "antd";

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
  subtitle?: string;
  isAiEnhanced?: boolean;
  actions?: ActionBtn[];
};

export default function PageNavbar({
  icon,
  title,
  subtitle,
  isAiEnhanced,
  actions = [],
}: PageNavbarProps) {
  const { lg } = Grid.useBreakpoint();
  return (
    <div
      style={{
        boxShadow: "4px 4px 35px rgba(0, 0, 0, 0.13)",
      }}
      className="flex items-center justify-between w-full py-3 sticky top-0 bg-white z-100  gap-10 shadow-sm px-4 md:px-6 mb-6"
    >
      {/* Left side */}
      <div className="flex items-center gap-3">
        {icon && <div className="text-lg md:text-xl">{icon}</div>}
        <div>
          <div className="flex items-end gap-2">
            <h2 className="text-base md:text-lg font-semibold text-[#000000]">
              {title}
            </h2>
            <div className="hidden md:block">
              {isAiEnhanced && (
                <Button
                  size="middle"
                  disabled
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#fff",
                    height: "34",
                    border: "none",
                    borderRadius: 8,
                    background: "linear-gradient(to right, #0068DD, #003877)",
                  }}
                >
                  AI-Enhanced
                </Button>
              )}
            </div>
          </div>
          {subtitle && (
            <p className="text-[10px] md:text-xs text-[#00000094] lg:mt-1">
              {subtitle}
            </p>
          )}
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
                      background: "linear-gradient(to right, #0068DD, #003877)",
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
