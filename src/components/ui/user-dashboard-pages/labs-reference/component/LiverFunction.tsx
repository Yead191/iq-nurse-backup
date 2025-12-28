import React from "react";
import { Activity } from "lucide-react";
import { liverFunctionData } from "@/data/labsReferenceData";

const LiverFunction = () => {
    const { alt, ast, bilirubin, albumin } = liverFunctionData;

    return (
        <div className="w-full mx-auto bg-white font-sans space-y-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 border-b pb-2 border-gray-200">
                <Activity className="w-8 h-8 text-[#8B4513]" />
                <h2 className="text-2xl font-bold text-[#2c5f8d]">
                    Liver Function Tests
                </h2>
            </div>

            {/* ==================== ALT SECTION ==================== */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#2c5f8d]">{alt.name}</h3>
                </div>

                <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-[#E8F5E9] border border-[#4CAF50] rounded-md p-3">
                        <p className="text-sm font-bold text-[#2E7D32]">Normal:</p>
                        <p className="text-lg font-bold text-[#1B5E20]">{alt.normalRange}</p>
                    </div>
                    <div className="flex-1 bg-[#FFEBEE] border border-[#F44336] rounded-md p-3">
                        <p className="text-sm font-bold text-[#C62828]">Critical:</p>
                        <p className="text-lg font-bold text-[#B71C1C]">{alt.criticalRange}</p>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-[#2c5f8d]">📖 What It Measures:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{alt.whatItMeasures}</p>
                </div>

                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🔬</span>
                        <h4 className="font-bold text-[#2c5f8d]">Clinical Significance:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{alt.clinicalSignificance}</p>
                </div>

                {/* Causes of Elevated ALT */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {alt.causesOfElevated.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {alt.causesOfElevated.items.map((cause, idx) => (
                            <li key={idx}>{cause}</li>
                        ))}
                    </ul>
                </div>

                {/* Medications Affecting Results */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {alt.medications.title}
                    </h4>
                    <p className="font-bold text-gray-700 text-sm mb-1">{alt.medications.subtitle}</p>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {alt.medications.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Priority Actions */}
                <div className="bg-[#FFEBEE] p-4 rounded-md shadow-sm border-l-4 border-[#F44336] mb-4">
                    <div className="flex items-start gap-2 mb-2">
                        <h3 className="font-bold text-[#C62828] text-base">{alt.priorityActions.title}</h3>
                    </div>
                    <div className="ml-7">
                        <p className="font-bold text-[#D32F2F] mb-1 text-sm">{alt.priorityActions.subtitle}</p>
                        <ul className="list-disc list-inside text-sm text-[#B71C1C] space-y-1">
                            {alt.priorityActions.items.map((action, idx) => (
                                <li key={idx}>{action}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* ==================== AST SECTION ==================== */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#2c5f8d]">{ast.name}</h3>
                </div>

                <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-[#E8F5E9] border border-[#4CAF50] rounded-md p-3">
                        <p className="text-sm font-bold text-[#2E7D32]">Normal:</p>
                        <p className="text-lg font-bold text-[#1B5E20]">{ast.normalRange}</p>
                    </div>
                    <div className="flex-1 bg-[#FFEBEE] border border-[#F44336] rounded-md p-3">
                        <p className="text-sm font-bold text-[#C62828]">Critical:</p>
                        <p className="text-lg font-bold text-[#B71C1C]">{ast.criticalRange}</p>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-[#2c5f8d]">📖 What It Measures:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{ast.whatItMeasures}</p>
                </div>

                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🔬</span>
                        <h4 className="font-bold text-[#2c5f8d]">Clinical Significance:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{ast.clinicalSignificance}</p>
                </div>

                {/* Causes of Elevated AST */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {ast.causesOfElevated.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {ast.causesOfElevated.items.map((cause, idx) => (
                            <li key={idx}>{cause}</li>
                        ))}
                    </ul>
                </div>

                {/* NCLEX Tip */}
                <div className="bg-[#B2EBF2] p-4 rounded-md shadow-sm border-l-4 border-[#00BCD4]">
                    <div className="flex items-start gap-2 mb-2">
                        <h3 className="font-bold text-[#006064] text-base">{ast.nclexTip.title}</h3>
                    </div>
                    <div className="ml-7 space-y-1 text-sm text-[#006064]">
                        {ast.nclexTip.sections.map((section, idx) => (
                            <div key={idx}>
                                <p className="font-bold text-[#00838F]">{section.subtitle}</p>
                                {section.text && <p>{section.text}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ==================== BILIRUBIN SECTION ==================== */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#2c5f8d]">{bilirubin.name}</h3>
                </div>

                <div className="flex gap-4 mb-4">
                    {bilirubin.ranges.map((range, idx) => (
                        <div key={idx} className="flex-1 bg-[#E8F5E9] border border-[#4CAF50] rounded-md p-3">
                            <p className="text-sm font-bold text-[#2E7D32]">{range.label}</p>
                            <p className="text-lg font-bold text-[#1B5E20]">{range.value}</p>
                        </div>
                    ))}
                    <div className="flex-1 bg-[#FFEBEE] border border-[#F44336] rounded-md p-3">
                        <p className="text-sm font-bold text-[#C62828]">Critical:</p>
                        <p className="text-lg font-bold text-[#B71C1C]">{bilirubin.criticalRange}</p>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-[#2c5f8d]">📖 What It Measures:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{bilirubin.whatItMeasures}</p>
                </div>

                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🔬</span>
                        <h4 className="font-bold text-[#2c5f8d]">Clinical Significance:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{bilirubin.clinicalSignificance}</p>
                </div>

                {/* Causes of Elevated Bilirubin */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {bilirubin.causesOfElevatedBilirubin.title}
                    </h4>
                    <div className="space-y-3">
                        <div>
                            <p className="font-bold text-gray-700 text-sm mb-1">
                                {bilirubin.causesOfElevatedBilirubin.elevatedIndirect.title}
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                                {bilirubin.causesOfElevatedBilirubin.elevatedIndirect.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 text-sm mb-1">
                                {bilirubin.causesOfElevatedBilirubin.elevatedDirect.title}
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-4">
                                {bilirubin.causesOfElevatedBilirubin.elevatedDirect.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Nursing Implications */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {bilirubin.nursingImplications.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {bilirubin.nursingImplications.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* NCLEX Tip */}
                <div className="bg-[#B2EBF2] p-4 rounded-md shadow-sm border-l-4 border-[#00BCD4]">
                    <div className="flex items-start gap-2 mb-2">
                        <h3 className="font-bold text-[#006064] text-base">{bilirubin.nclexTip.title}</h3>
                    </div>
                    <div className="ml-7 space-y-1 text-sm text-[#006064]">
                        {bilirubin.nclexTip.sections.map((section, idx) => (
                            <div key={idx}>
                                <p className="font-bold text-[#00838F]">{section.subtitle}</p>
                                <p>{section.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ==================== ALBUMIN SECTION ==================== */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#2c5f8d]">{albumin.name}</h3>
                </div>

                <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-[#E8F5E9] border border-[#4CAF50] rounded-md p-3">
                        <p className="text-sm font-bold text-[#2E7D32]">Normal:</p>
                        <p className="text-lg font-bold text-[#1B5E20]">{albumin.normalRange}</p>
                    </div>
                    <div className="flex-1 bg-[#FFEBEE] border border-[#F44336] rounded-md p-3">
                        <p className="text-sm font-bold text-[#C62828]">Critical:</p>
                        <p className="text-lg font-bold text-[#B71C1C]">{albumin.criticalRange}</p>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-[#2c5f8d]">📖 What It Measures:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{albumin.whatItMeasures}</p>
                </div>

                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🔬</span>
                        <h4 className="font-bold text-[#2c5f8d]">Clinical Significance:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{albumin.clinicalSignificance}</p>
                </div>

                {/* Causes of Low Albumin */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {albumin.causesOfLowAlbumin.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {albumin.causesOfLowAlbumin.items.map((cause, idx) => (
                            <li key={idx}>{cause}</li>
                        ))}
                    </ul>
                </div>

                {/* Nursing Implications */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {albumin.nursingImplications.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {albumin.nursingImplications.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LiverFunction;