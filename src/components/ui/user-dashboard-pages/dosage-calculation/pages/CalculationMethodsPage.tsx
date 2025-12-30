import React from "react";
import {
  calculationMethodsHeader,
  methodsListData,
  nclexHighlightMethods,
  clinicalPearlMethods,
} from "@/data/dosage-calculation/calculationMethodsData";
import { InfoBox } from "@/components/shared/InfoBox";
import SecondaryHeader from "@/components/shared/SecondaryHeader";

export default function CalculationMethodsPage() {
  return (
    <main>
      {/* Page Header */}
      <SecondaryHeader title={calculationMethodsHeader.title} />
      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10 max-w-5xl">
        {calculationMethodsHeader.description}
      </p>

      {/* Methods Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {methodsListData.map((method) => (
          <div
            key={method.id}
            className="bg-white border border-blue-200 rounded-2xl p-6 shadow-sm flex flex-col"
          >
            <h3 className="text-xl font-bold text-[#4a90e2] mb-4 h-14 flex items-center">
              {method.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 h-20 overflow-hidden">
              {method.description}
            </p>

            {/* Formula Box */}
            <div className="bg-gradient-to-r from-[#E3F2FD] to-[#BBDEFB] order border-[#aed3f2] rounded-xl p-6 mb-6 flex flex-col items-center justify-center text-center min-h-[140px]">
              <span className="text-[#1565c0] text-sm uppercase tracking-widest mb-3 opacity-80 font-bold">
                {method.formula.label}
              </span>
              <span className="text-[#1565c0] font-bold text-lg leading-tight">
                {method.formula.content}
              </span>
            </div>

            {/* Example Box */}
            <div className="flex flex-col flex-1">
              {/* other content */}

              <div className="bg-[#E8F5E9] border-0 rounded-xl p-6 mt-auto flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <method.example.icon className="w-5 h-5 text-[#2e7d32]" />
                  <h4 className="font-bold text-[#2e7d32] text-sm md:text-base">
                    {method.example.title}
                  </h4>
                </div>

                <ul className="space-y-2">
                  {method.example.lines.map((line, idx) => (
                    <li
                      key={idx}
                      className="text-slate-700 text-sm leading-relaxed"
                    >
                      {line.includes(":") ? (
                        <>
                          <span className="font-bold">
                            {line.split(":")[0]}:
                          </span>
                          {line.split(":")[1]}
                        </>
                      ) : (
                        line
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Highlights & Pearls */}
      <div className="space-y-6">
        <InfoBox data={nclexHighlightMethods} />
        <InfoBox data={clinicalPearlMethods} />
      </div>
    </main>
  );
}
