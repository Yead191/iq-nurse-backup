"use client";

import { Card } from "antd";
import {
  type LucideIcon,
  Stethoscope,
  Pill,
  Microscope,
  BookOpenCheck,
  Brain,
  HeartPulse,
  Baby,
  FlaskConical,
  BookText,
} from "lucide-react";

type CategoryItem = {
  key: string;
  title: string;
  lessons: number;
  icon?: LucideIcon;
};

const defaultIcons: Record<string, LucideIcon> = {
  "critical-care": HeartPulse,
  "anatomy-physiology": Brain,
  pharmacology: Pill,
  "medication-calculation": BookOpenCheck,
  pathophysiology: Microscope,
  "mental-health": Stethoscope,
  fundamentals: BookText,
  "ob-maternity": Baby,
  pediatrics: FlaskConical,
};

export function CategoryGrid({ items = [] as CategoryItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {items.map((cat) => {
        const Icon = cat.icon || defaultIcons[cat.key] || Stethoscope;
        return (
          <div
            style={{
              padding: "10px 12px",
            }}
            key={cat.key}
            className="rounded-lg border border-[#F6F7F8] shadow-sm hover:shadow-md transition-shadow "
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50">
                <Icon className="h-5 w-5 text-sky-600" />
              </div>
              <div className="truncate">
                <div className="text-sm font-semibold text-[#110D0D] truncate">
                  {cat.title}
                </div>
                <div className="text-xs text-neutral-500">
                  {cat.lessons} topics
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
