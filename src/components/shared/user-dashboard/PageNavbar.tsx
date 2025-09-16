"use client";

import { ReactNode } from "react";
import { Button } from "antd";

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
  return (
    <div className="flex items-center justify-between w-full py-3">
      {/* Left side */}
      <div className="flex items-center gap-3">
        {icon && <div className="text-lg md:text-xl">{icon}</div>}
        <div>
          <div className="flex items-end gap-2">
            <h2 className="text-base md:text-lg font-semibold text-[#000000]">{title}</h2>
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
            <p className="text-[8px] md:text-xs text-[#00000094]">{subtitle}</p>
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
                ...(action?.style || { height: 40 }),
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
