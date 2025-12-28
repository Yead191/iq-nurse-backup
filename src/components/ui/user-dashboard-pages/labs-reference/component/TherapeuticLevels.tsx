import React from "react";
import { Pill } from "lucide-react";
import { therapeuticLevelsData } from "@/data/labsReferenceData";

const TherapeuticLevels = () => {
    return (
        <div className="w-full mx-auto bg-white font-sans space-y-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 border-b pb-2 border-gray-200">
                <Pill className="w-8 h-8 text-[#FFA500] rotate-45" />
                <h2 className="text-2xl font-bold text-[#2c5f8d]">
                    Therapeutic Drug Levels
                </h2>
                <span className="ml-2 px-3 py-1 bg-[#FFA500] text-white text-xs font-bold rounded-full">
                    HIGH-YIELD
                </span>
            </div>

            {/* NCLEX High-Yield Alert */}
            <div className="bg-[#FFF9E6] p-4 rounded-md shadow-sm border-l-4 border-[#FFA500]">
                <div className="flex items-start gap-2">
                    <span className="text-xl">🎯</span>
                    <div>
                        <h3 className="font-bold text-[#B8860B] text-base mb-1">
                            NCLEX HIGH-YIELD ALERT
                        </h3>
                        <p className="text-[#8B7500] text-sm">
                            Therapeutic drug levels are FREQUENTLY TESTED! Know the normal ranges, signs of toxicity, and nursing actions!
                        </p>
                    </div>
                </div>
            </div>

            {/* Drug Sections */}
            <div className="space-y-12">
                {therapeuticLevelsData.map((drug, index) => (
                    <div key={index} className="border-b last:border-b-0 pb-8 last:pb-0">
                        <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-xl font-bold text-[#2c5f8d]">{drug.name}</h3>
                            {drug.tag && (
                                <span className="px-2 py-1 bg-[#FFA500] text-white text-xs font-bold rounded">
                                    {drug.tag}
                                </span>
                            )}
                        </div>

                        {/* Ranges */}
                        <div className="flex flex-wrap gap-4 mb-4">
                            <div className="bg-[#E8F5E9] border border-[#4CAF50] rounded-md p-3 px-4">
                                <span className="text-sm font-bold text-[#2E7D32] mr-2">Therapeutic:</span>
                                <span className="text-base font-bold text-[#1B5E20] font-mono">{drug.ranges.therapeutic}</span>
                            </div>

                            {drug.ranges.caution && (
                                <div className="bg-[#FFF8E1] border border-[#FFC107] rounded-md p-3 px-4">
                                    <span className="text-sm font-bold text-[#F57F17] mr-2">Caution:</span>
                                    <span className="text-base font-bold text-[#EF6C00] font-mono">{drug.ranges.caution}</span>
                                </div>
                            )}

                            <div className="bg-[#FFEBEE] border border-[#F44336] rounded-md p-3 px-4">
                                <span className="text-sm font-bold text-[#C62828] mr-2">Toxic:</span>
                                <span className="text-base font-bold text-[#B71C1C] font-mono">{drug.ranges.toxic}</span>
                            </div>
                        </div>

                        {/* Usage */}
                        <div className="mb-4 bg-blue-50/50 p-3 rounded-md">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-lg">📖</span>
                                <h4 className="font-bold text-[#2c5f8d] text-sm">What It's Used For:</h4>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed ml-7">{drug.usage}</p>
                        </div>

                        {/* Toxicity */}
                        <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-lg">🚨</span>
                                <h4 className="font-bold text-[#2c5f8d]">{drug.toxicity.title}</h4>
                            </div>
                            <div className="ml-7 grid md:grid-cols-2 gap-x-8 gap-y-2">
                                {drug.toxicity.sections.map((section, idx) => (
                                    <div key={idx} className="text-sm">
                                        {'title' in section ? (
                                            <>
                                                <span className="font-bold text-gray-800">• {section.title}</span>
                                                <p className="ml-3 text-gray-600 mb-1">{section.text}</p>
                                            </>
                                        ) : (
                                            <p className="text-gray-700">• {section.text}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Risk Factors / Factors Affecting / Nursing Implications */}
                        {drug.riskFactors && (
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-lg">⚠️</span>
                                    <h4 className="font-bold text-[#2c5f8d]">{drug.riskFactors.title}</h4>
                                </div>
                                <div className="ml-7">
                                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                        {drug.riskFactors.items.map((item, idx) => (
                                            <li key={idx}>
                                                {typeof item === 'string' ? item : (
                                                    'title' in item ? (
                                                        <span><span className="font-bold text-[#2c5f8d]">{item.title}</span> {item.text}</span>
                                                    ) : (
                                                        <span>{item.text}</span>
                                                    )
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {drug.factorsAffecting && (
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-lg">⚠️</span>
                                    <h4 className="font-bold text-[#2c5f8d]">{drug.factorsAffecting.title}</h4>
                                </div>
                                <div className="ml-7 text-sm space-y-2">
                                    {drug.factorsAffecting.sections.map((section, idx) => (
                                        <div key={idx}>
                                            <span className="font-bold text-[#2c5f8d]">• {section.title}</span>
                                            <p className="ml-3 text-gray-700">{section.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {drug.nursingImplications && (
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-lg">👩‍⚕️</span>
                                    <h4 className="font-bold text-[#2c5f8d]">{drug.nursingImplications.title}</h4>
                                </div>
                                <div className="ml-7">
                                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                        {drug.nursingImplications.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}


                        {/* Priority Actions */}
                        {drug.priorityActions && (
                            <div className="bg-[#FFEBEE] p-4 rounded-md shadow-sm border-l-4 border-[#F44336] mb-4 mt-6">
                                <div className="flex items-start gap-2 mb-2">
                                    <span className="text-xl">⚡</span>
                                    <h3 className="font-bold text-[#C62828] text-base">{drug.priorityActions.title}</h3>
                                </div>
                                <div className="ml-7">
                                    <ul className="list-disc list-inside text-sm text-[#B71C1C] space-y-1">
                                        {drug.priorityActions.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {/* NCLEX Tips / Mnemonic */}
                        {drug.nclexTip && (
                            <div className="bg-[#B2EBF2] p-4 rounded-md shadow-sm border-l-4 border-[#00BCD4] mt-4">
                                <div className="flex items-start gap-2 mb-2">
                                    <span className="text-xl">💡</span>
                                    <h3 className="font-bold text-[#006064] text-base">{drug.nclexTip.title}</h3>
                                </div>
                                <div className="ml-7 text-sm text-[#006064]">
                                    {drug.nclexTip.description && <p className="font-bold mb-2">{drug.nclexTip.description}</p>}
                                    {drug.nclexTip.items && (
                                        <div className="space-y-1">
                                            {drug.nclexTip.items.map((item, idx) => (
                                                <div key={idx} className="flex">
                                                    <span className="font-bold w-4">{item.letter}</span>
                                                    <span>{item.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TherapeuticLevels;