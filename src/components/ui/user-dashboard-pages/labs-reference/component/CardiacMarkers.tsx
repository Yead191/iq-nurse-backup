import React from "react";
import { Heart } from "lucide-react";
import { cardiacMarkersData } from "@/data/labsReferenceData";

const CardiacMarkers = () => {
    const { troponin, comparisonTable, nclexTipTroponin, ckMB, bnp } = cardiacMarkersData;

    return (
        <div className="w-full mx-auto  bg-white font-sans space-y-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 border-b pb-2 border-gray-200">
                <Heart className="w-8 h-8 text-[#DC143C]" />
                <h2 className="text-2xl font-bold text-[#2c5f8d]">
                    Cardiac Markers
                </h2>
                <span className="ml-2 px-3 py-1 bg-[#FFA500] text-white text-xs font-bold rounded-full">
                    HIGH YIELD
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
                            Cardiac markers, especially troponin, are CRITICAL for NCLEX. Know the timing, significance, and nursing implications!
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#2c5f8d]">{troponin.name}</h3>
                    <span className="px-2 py-1 bg-[#FFA500] text-white text-xs font-bold rounded">HIGH YIELD</span>
                    <span className="px-2 py-1 bg-[#DC143C] text-white text-xs font-bold rounded">CRITICAL</span>
                </div>

                <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-[#E8F5E9] border border-[#4CAF50] rounded-md p-3">
                        <p className="text-sm font-bold text-[#2E7D32]">Normal:</p>
                        <p className="text-lg font-bold text-[#1B5E20]">&lt;0.04 ng/mL</p>
                    </div>
                    <div className="flex-1 bg-[#FFEBEE] border border-[#F44336] rounded-md p-3">
                        <p className="text-sm font-bold text-[#C62828]">Elevated:</p>
                        <p className="text-lg font-bold text-[#B71C1C]">&gt;0.04 ng/mL</p>
                        <p className="text-xs text-[#C62828] mt-1">(indicates myocardial injury)</p>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">

                        <h4 className="font-bold text-[#2c5f8d]">What It Measures:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{troponin.whatItMeasures}</p>
                </div>

                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🔬</span>
                        <h4 className="font-bold text-[#2c5f8d]">Clinical Significance:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{troponin.clinicalSignificance}</p>
                </div>

                {/* Timing After MI */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {troponin.timingAfterMI.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li><span className="font-bold">{troponin.timingAfterMI.rises.label}</span> {troponin.timingAfterMI.rises.value}</li>
                        <li><span className="font-bold">{troponin.timingAfterMI.peaks.label}</span> {troponin.timingAfterMI.peaks.value}</li>
                        <li><span className="font-bold">{troponin.timingAfterMI.returnsToNormal.label}</span> {troponin.timingAfterMI.returnsToNormal.value}</li>
                        <li><span className="font-bold">{troponin.timingAfterMI.serialTroponins.label}</span> {troponin.timingAfterMI.serialTroponins.value}</li>
                    </ul>
                </div>

                {/* Causes of Elevated Troponin */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {troponin.causesOfElevated.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {troponin.causesOfElevated.items.map((cause, idx) => (
                            <li key={idx}>{cause}</li>
                        ))}
                    </ul>
                </div>

                {/* Nursing Implications */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {troponin.nursingImplications.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {troponin.nursingImplications.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Priority Actions */}
                <div className="bg-[#FFEBEE] p-4 rounded-md shadow-sm border-l-4 border-[#F44336] mb-4">
                    <div className="flex items-start gap-2 mb-2">
                        <h3 className="font-bold text-[#C62828] text-base">{troponin.priorityActions.title}</h3>
                    </div>
                    <div className="ml-7">
                        <p className="font-bold text-[#D32F2F] mb-1 text-sm">{troponin.priorityActions.subtitle}</p>
                        <ul className="list-disc list-inside text-sm text-[#B71C1C] space-y-1">
                            {troponin.priorityActions.items.map((action, idx) => (
                                <li key={idx}>{action}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-[#FFF9E6] p-4 rounded-md shadow-sm border-l-4 border-[#FFA500]">
                <div className="flex items-start gap-2 mb-3">
                    <h3 className="font-bold text-[#B8860B] text-base">{comparisonTable.title}</h3>
                </div>
                <div className="ml-7 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-[#2c5f8d] text-white">
                                {comparisonTable.headers.map((header, idx) => (
                                    <th key={idx} className="border border-gray-300 px-4 py-2 text-left font-bold">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonTable.data.map((row, idx) => (
                                <tr key={idx} className={idx === 0 ? "bg-[#FFF4CC]" : "bg-white"}>
                                    <td className="border border-gray-300 px-4 py-2 font-bold text-[#8B7500]">{row.marker}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-[#6B5A00]">{row.rises}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-[#6B5A00]">{row.peaks}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-[#6B5A00]">{row.returns}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-[#6B5A00]">{row.specificity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="bg-[#B2EBF2] p-4 rounded-md shadow-sm border-l-4 border-[#00BCD4]">
                <div className="flex items-start gap-2 mb-2">
                    <h3 className="font-bold text-[#006064] text-base">{nclexTipTroponin.title}</h3>
                </div>
                <div className="ml-7">
                    <p className="font-bold text-[#00838F] mb-2 text-sm">{nclexTipTroponin.subtitle}</p>
                    <div className="space-y-1 text-sm text-[#006064]">
                        {nclexTipTroponin.items.map((item, idx) => (
                            <p key={idx}>{item}</p>
                        ))}
                    </div>
                    <div className="mt-3">
                        <p className="font-bold text-[#00838F] mb-1 text-sm">{nclexTipTroponin.keyPoints.title}</p>
                        <ul className="list-disc list-inside text-sm text-[#006064] space-y-1">
                            {nclexTipTroponin.keyPoints.items.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#2c5f8d]">{ckMB.name}</h3>
                </div>

                <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-[#E8F5E9] border border-[#4CAF50] rounded-md p-3">
                        <p className="text-sm font-bold text-[#2E7D32]">Normal:</p>
                        <p className="text-lg font-bold text-[#1B5E20]">&lt;5% of total CK or &lt;25 IU/L</p>
                    </div>
                    <div className="flex-1 bg-[#FFEBEE] border border-[#F44336] rounded-md p-3">
                        <p className="text-sm font-bold text-[#C62828]">Elevated:</p>
                        <p className="text-lg font-bold text-[#B71C1C]">&gt;5% of total CK</p>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">

                        <h4 className="font-bold text-[#2c5f8d]">What It Measures:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{ckMB.whatItMeasures}</p>
                </div>

                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🔬</span>
                        <h4 className="font-bold text-[#2c5f8d]">Clinical Significance:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{ckMB.clinicalSignificance}</p>
                </div>

                {/* Timing After MI */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {ckMB.timingAfterMI.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li><span className="font-bold">{ckMB.timingAfterMI.rises.label}</span> {ckMB.timingAfterMI.rises.value}</li>
                        <li><span className="font-bold">{ckMB.timingAfterMI.peaks.label}</span> {ckMB.timingAfterMI.peaks.value}</li>
                        <li><span className="font-bold">{ckMB.timingAfterMI.returnsToNormal.label}</span> {ckMB.timingAfterMI.returnsToNormal.value}</li>
                    </ul>
                </div>

                {/* Causes of Elevated CK-MB */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {ckMB.causesOfElevated.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {ckMB.causesOfElevated.items.map((cause, idx) => (
                            <li key={idx}>{cause}</li>
                        ))}
                    </ul>
                </div>

                {/* NCLEX Tip */}
                <div className="bg-[#B2EBF2] p-4 rounded-md shadow-sm border-l-4 border-[#00BCD4]">
                    <div className="flex items-start gap-2 mb-2">
                        <h3 className="font-bold text-[#006064] text-base">{ckMB.nclexTip.title}</h3>
                    </div>
                    <div className="ml-7">
                        <p className="text-[#006064] text-sm">{ckMB.nclexTip.text}</p>
                    </div>
                </div>
            </div>

            {/* ==================== BNP SECTION ==================== */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#2c5f8d]">{bnp.name}</h3>
                    <span className="px-2 py-1 bg-[#FFA500] text-white text-xs font-bold rounded">NCLEX</span>
                </div>

                <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-[#E8F5E9] border border-[#4CAF50] rounded-md p-3">
                        <p className="text-sm font-bold text-[#2E7D32]">Normal:</p>
                        <p className="text-lg font-bold text-[#1B5E20]">&lt;100 pg/mL</p>
                    </div>
                    <div className="flex-1 bg-[#FFF9E6] border border-[#FFA500] rounded-md p-3">
                        <p className="text-sm font-bold text-[#B8860B]">Heart Failure Likely:</p>
                        <p className="text-lg font-bold text-[#8B7500]">&gt;400 pg/mL</p>
                    </div>
                    <div className="flex-1 bg-[#FFEBEE] border border-[#F44336] rounded-md p-3">
                        <p className="text-sm font-bold text-[#C62828]">Severe HF:</p>
                        <p className="text-lg font-bold text-[#B71C1C]">&gt;900 pg/mL</p>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">

                        <h4 className="font-bold text-[#2c5f8d]">What It Measures:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{bnp.whatItMeasures}</p>
                </div>

                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-[#2c5f8d]">Clinical Significance:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{bnp.clinicalSignificance}</p>
                </div>

                {/* BNP Interpretation */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {bnp.bnpInterpretation.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {bnp.bnpInterpretation.items.map((item, idx) => (
                            <li key={idx}>
                                <span className="font-bold">{item.level}</span> {item.text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Causes of Elevated BNP */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {bnp.causesOfElevated.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {bnp.causesOfElevated.items.map((cause, idx) => (
                            <li key={idx}>{cause}</li>
                        ))}
                    </ul>
                </div>

                {/* Nursing Implications */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        {bnp.nursingImplications.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {bnp.nursingImplications.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* NCLEX Tip */}
                <div className="bg-[#B2EBF2] p-4 rounded-md shadow-sm border-l-4 border-[#00BCD4]">
                    <div className="flex items-start gap-2 mb-2">
                        <h3 className="font-bold text-[#006064] text-base">{bnp.nclexTip.title}</h3>
                    </div>
                    <div className="ml-7">
                        <p className="font-bold text-[#00838F] mb-2 text-sm">{bnp.nclexTip.subtitle}</p>
                        <ul className="list-disc list-inside text-sm text-[#006064] space-y-1">
                            {bnp.nclexTip.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardiacMarkers;
