import { LangKey, LANGUAGES } from "@/data/headerConstants";
import React from "react";

export default function LanguagePanel({
  selected,
  onSelect,
}: {
  selected: LangKey;
  onSelect: (key: LangKey) => void;
}) {
  return (
    <div
      className="w-72 rounded-2xl bg-white p-3 shadow-xl"
      style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
    >
      <div className="flex flex-col gap-3">
        {LANGUAGES.map((lang: any) => {
          const active = selected === lang.key;
          return (
            <button
              key={lang.key}
              onClick={() => onSelect(lang.key)}
              className="flex items-center justify-between rounded-xl bg-[#F6F8FB] px-3 py-3 hover:bg-[#eef2f7]"
            >
              <span className="flex items-center gap-3">
                <span className="inline-flex h-6 w-10 items-center justify-center overflow-hidden rounded-md bg-white ring-1 ring-gray-200">
                  <img
                    src={lang.flag}
                    alt={`${lang.label} flag`}
                    className="h-6 w-10 object-cover"
                  />
                </span>
                <span className="text-[14px] font-medium text-[#121212]">
                  {lang.label}
                </span>
              </span>
              <span
                className={`grid h-6 w-6 place-items-center rounded-md ${
                  active ? "bg-[#0B66E4]" : ""
                }`}
              >
                <span
                  className={`h-5 w-5 rounded-md border grid place-items-center ${
                    active
                      ? "bg-[#0B66E4] border-transparent"
                      : "border-[#C9D2DC]"
                  }`}
                >
                  {active && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
