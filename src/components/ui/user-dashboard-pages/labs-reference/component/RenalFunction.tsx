import React from "react";
import { Activity } from "lucide-react";
import { renalFunctionData } from "@/data/labsReferenceData";

const RenalFunction = () => {
    const { bun, creatinine, bunCreatinineRatio, gfr } = renalFunctionData;

    return (
        <div className="w-full mx-auto bg-white font-sans space-y-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 border-b pb-2 border-gray-200">
                <Activity className="w-8 h-8 text-[#8B4513]" />
                <h2 className="text-2xl font-bold text-[#2c5f8d]">
                    Renal Function Tests
                </h2>
                <span className="bg-[#FFA500] text-white text-xs font-bold px-2 py-1 rounded">
                    HIGH YIELD
                </span>
            </div>

            {/* ==================== BUN SECTION ==================== */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#2c5f8d]">{bun.name}</h3>
                    <span className="bg-[#FFA500] text-white text-xs font-bold px-2 py-1 rounded">
                        HIGH YIELD
                    </span>
                </div>

                <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-[#E8F5E9] border border-[#4CAF50] rounded-md p-3">
                        <p className="text-sm font-bold text-[#2E7D32]">Normal:</p>
                        <p className="text-lg font-bold text-[#1B5E20]">{bun.normalRange}</p>
                    </div>
                    <div className="flex-1 bg-[#FFEBEE] border border-[#F44336] rounded-md p-3">
                        <p className="text-sm font-bold text-[#C62828]">Critical:</p>
                        <p className="text-lg font-bold text-[#B71C1C]">{bun.criticalRange}</p>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-[#2c5f8d]">📖 What It Measures:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{bun.whatItMeasures}</p>
                </div>

                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🔬</span>
                        <h4 className="font-bold text-[#2c5f8d]">Clinical Significance:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{bun.clinicalSignificance}</p>
                </div>

                {/* Elevated BUN */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {bun.elevatedBUN.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {bun.elevatedBUN.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Decreased BUN */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {bun.decreasedBUN.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {bun.decreasedBUN.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Nursing Implications */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {bun.nursingImplications.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {bun.nursingImplications.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Priority Actions */}
                <div className="bg-[#FFEBEE] p-4 rounded-md shadow-sm border-l-4 border-[#F44336] mb-4">
                    <div className="flex items-start gap-2 mb-2">
                        <h3 className="font-bold text-[#C62828] text-base">{bun.priorityActions.title}</h3>
                    </div>
                    <div className="ml-7">
                        <p className="font-bold text-[#D32F2F] mb-1 text-sm">{bun.priorityActions.subtitle}</p>
                        <ul className="list-disc list-inside text-sm text-[#B71C1C] space-y-1">
                            {bun.priorityActions.items.map((action, idx) => (
                                <li key={idx}>{action}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* ==================== CREATININE SECTION ==================== */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#2c5f8d]">{creatinine.name}</h3>
                </div>

                <div className="flex gap-4 mb-4">
                    {creatinine.normalRanges.map((range, idx) => (
                        <div key={idx} className="flex-1 bg-[#E8F5E9] border border-[#4CAF50] rounded-md p-3">
                            <p className="text-sm font-bold text-[#2E7D32]">{range.label}</p>
                            <p className="text-lg font-bold text-[#1B5E20]">{range.value}</p>
                        </div>
                    ))}
                    <div className="flex-1 bg-[#FFEBEE] border border-[#F44336] rounded-md p-3">
                        <p className="text-sm font-bold text-[#C62828]">Critical:</p>
                        <p className="text-lg font-bold text-[#B71C1C]">{creatinine.criticalRange}</p>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-[#2c5f8d]">📖 What It Measures:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{creatinine.whatItMeasures}</p>
                </div>

                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🔬</span>
                        <h4 className="font-bold text-[#2c5f8d]">Clinical Significance:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{creatinine.clinicalSignificance}</p>
                </div>

                {/* Causes of Elevated Creatinine */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {creatinine.causesOfElevated.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {creatinine.causesOfElevated.items.map((cause, idx) => (
                            <li key={idx}>{cause}</li>
                        ))}
                    </ul>
                </div>

                {/* Nephrotoxic Medications */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {creatinine.nephrotoxicMedications.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {creatinine.nephrotoxicMedications.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Priority Actions */}
                <div className="bg-[#FFEBEE] p-4 rounded-md shadow-sm border-l-4 border-[#F44336] mb-4">
                    <div className="flex items-start gap-2 mb-2">
                        <h3 className="font-bold text-[#C62828] text-base">{creatinine.priorityActions.title}</h3>
                    </div>
                    <div className="ml-7">
                        <p className="font-bold text-[#D32F2F] mb-1 text-sm">{creatinine.priorityActions.subtitle}</p>
                        <ul className="list-disc list-inside text-sm text-[#B71C1C] space-y-1">
                            {creatinine.priorityActions.items.map((action, idx) => (
                                <li key={idx}>{action}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* ==================== BUN/CREATININE RATIO SECTION ==================== */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#2c5f8d]">{bunCreatinineRatio.name}</h3>
                    <span className="bg-[#FFA500] text-white text-xs font-bold px-2 py-1 rounded">
                        HIGH YIELD
                    </span>
                </div>

                <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-[#E8F5E9] border border-[#4CAF50] rounded-md p-3">
                        <p className="text-lg font-bold text-[#1B5E20]">{bunCreatinineRatio.normalRatio}</p>
                    </div>
                </div>

                {/* NCLEX High-Yield */}
                <div className="bg-[#FFF9C4] p-4 rounded-md shadow-sm border-l-4 border-[#FBC02D] mb-4">
                    <h3 className="font-bold text-[#F57F17] text-base mb-3">
                        {bunCreatinineRatio.nclexHighYield.title}
                    </h3>

                    {/* High Ratio */}
                    <div className="mb-4">
                        <h4 className="font-bold text-[#E65100] text-sm mb-1">
                            {bunCreatinineRatio.nclexHighYield.highRatio.title}
                        </h4>
                        <p className="font-bold text-gray-700 text-sm mb-1">
                            {bunCreatinineRatio.nclexHighYield.highRatio.subtitle}
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                            {bunCreatinineRatio.nclexHighYield.highRatio.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <p className="text-sm text-gray-700 mt-2 italic">
                            {bunCreatinineRatio.nclexHighYield.highRatio.think}
                        </p>
                    </div>

                    {/* Normal Ratio */}
                    <div className="mb-4">
                        <h4 className="font-bold text-[#E65100] text-sm mb-1">
                            {bunCreatinineRatio.nclexHighYield.normalRatio.title}
                        </h4>
                        <p className="font-bold text-gray-700 text-sm mb-1">
                            {bunCreatinineRatio.nclexHighYield.normalRatio.subtitle}
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                            {bunCreatinineRatio.nclexHighYield.normalRatio.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <p className="text-sm text-gray-700 mt-2 italic">
                            {bunCreatinineRatio.nclexHighYield.normalRatio.think}
                        </p>
                    </div>

                    {/* Low Ratio */}
                    <div>
                        <h4 className="font-bold text-[#E65100] text-sm mb-1">
                            {bunCreatinineRatio.nclexHighYield.lowRatio.title}
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                            {bunCreatinineRatio.nclexHighYield.lowRatio.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* NCLEX Tip Mnemonic */}
                <div className="bg-[#B2EBF2] p-4 rounded-md shadow-sm border-l-4 border-[#00BCD4]">
                    <div className="flex items-start gap-2 mb-2">
                        <h3 className="font-bold text-[#006064] text-base">{bunCreatinineRatio.nclexTipMnemonic.title}</h3>
                    </div>
                    <div className="ml-7">
                        <p className="font-bold text-[#00838F] mb-2 text-sm">{bunCreatinineRatio.nclexTipMnemonic.subtitle}</p>
                        <div className="space-y-1 text-sm text-[#006064]">
                            {bunCreatinineRatio.nclexTipMnemonic.items.map((item, idx) => (
                                <p key={idx}>{item}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ==================== GFR SECTION ==================== */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#2c5f8d]">{gfr.name}</h3>
                </div>

                <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-[#E8F5E9] border border-[#4CAF50] rounded-md p-3">
                        <p className="text-sm font-bold text-[#2E7D32]">Normal:</p>
                        <p className="text-lg font-bold text-[#1B5E20]">{gfr.normalRange}</p>
                    </div>
                    <div className="flex-1 bg-[#FFEBEE] border border-[#F44336] rounded-md p-3">
                        <p className="text-sm font-bold text-[#C62828]">Kidney Failure:</p>
                        <p className="text-lg font-bold text-[#B71C1C]">{gfr.kidneyFailure}</p>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-[#2c5f8d]">📖 What It Measures:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{gfr.whatItMeasures}</p>
                </div>

                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🔬</span>
                        <h4 className="font-bold text-[#2c5f8d]">Clinical Significance:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{gfr.clinicalSignificance}</p>
                </div>

                {/* CKD Staging Table */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4 overflow-x-auto">
                    <h4 className="font-bold text-[#2c5f8d] mb-3">{gfr.ckdStaging.title}</h4>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-300">
                                {gfr.ckdStaging.headers.map((header, idx) => (
                                    <th key={idx} className="text-left font-bold text-[#2c5f8d] py-2 px-2">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {gfr.ckdStaging.data.map((row, idx) => (
                                <tr key={idx} className="border-b border-gray-200">
                                    <td className="py-2 px-2 font-semibold text-gray-700">{row.stage}</td>
                                    <td className="py-2 px-2 text-gray-700">{row.gfr}</td>
                                    <td className="py-2 px-2 text-gray-700">{row.description}</td>
                                    <td className="py-2 px-2 text-gray-700">{row.implications}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Nursing Implications */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {gfr.nursingImplications.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {gfr.nursingImplications.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* NCLEX Tip */}
                <div className="bg-[#B2EBF2] p-4 rounded-md shadow-sm border-l-4 border-[#00BCD4]">
                    <div className="flex items-start gap-2 mb-2">
                        <h3 className="font-bold text-[#006064] text-base">{gfr.nclexTip.title}</h3>
                    </div>
                    <p className="text-sm text-[#006064] ml-7">{gfr.nclexTip.text}</p>
                </div>
            </div>
        </div>
    );
};

export default RenalFunction;