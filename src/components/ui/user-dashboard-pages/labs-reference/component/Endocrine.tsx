import React from "react";
import { Activity } from "lucide-react";
import { endocrineData } from "@/data/labsReferenceData";

const Endocrine = () => {
    const { glucose, hba1c, tsh } = endocrineData;

    return (
        <div className="w-full mx-auto bg-white font-sans space-y-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 border-b pb-2 border-gray-200">
                <Activity className="w-8 h-8 text-[#8B4513]" />
                <h2 className="text-2xl font-bold text-[#2c5f8d]">
                    Endocrine Tests
                </h2>
            </div>

            {/* ==================== GLUCOSE (FASTING) SECTION ==================== */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#2c5f8d]">{glucose.name}</h3>
                    <span className="bg-[#FFA500] text-white text-xs font-bold px-2 py-1 rounded">
                        HIGH YIELD
                    </span>
                </div>

                {/* Glucose Ranges */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="bg-[#E8F5E9] border border-[#4CAF50] rounded-md p-3">
                        <p className="text-sm font-bold text-[#2E7D32]">Normal (fasting):</p>
                        <p className="text-lg font-bold text-[#1B5E20]">{glucose.normalRange}</p>
                    </div>
                    <div className="bg-[#FFF9C4] border border-[#FBC02D] rounded-md p-3">
                        <p className="text-sm font-bold text-[#F57F17]">Prediabetes:</p>
                        <p className="text-lg font-bold text-[#E65100]">{glucose.prediabetesRange}</p>
                    </div>
                    <div className="bg-[#FFEBEE] border border-[#F44336] rounded-md p-3">
                        <p className="text-sm font-bold text-[#C62828]">Diabetes:</p>
                        <p className="text-lg font-bold text-[#B71C1C]">{glucose.diabetesRange}</p>
                    </div>
                    <div className="bg-[#FFEBEE] border border-[#F44336] rounded-md p-3">
                        <p className="text-sm font-bold text-[#C62828]">Critical:</p>
                        <p className="text-lg font-bold text-[#B71C1C]">{glucose.criticalRange}</p>
                    </div>
                </div>

                {/* What It Measures */}
                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-[#2c5f8d]">📖 What It Measures:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{glucose.whatItMeasures}</p>
                </div>

                {/* Hypoglycemia and Hyperglycemia in two columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Hypoglycemia */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="font-bold text-[#2c5f8d] mb-3">{glucose.hypoglycemia.title}</h4>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Causes:</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-3">
                            {glucose.hypoglycemia.causes.map((cause, idx) => (
                                <li key={idx}>{cause}</li>
                            ))}
                        </ul>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Signs & Symptoms:</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            {glucose.hypoglycemia.signsSymptoms.map((symptom, idx) => (
                                <li key={idx}>{symptom}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Hyperglycemia */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="font-bold text-[#2c5f8d] mb-3">{glucose.hyperglycemia.title}</h4>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Causes:</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-3">
                            {glucose.hyperglycemia.causes.map((cause, idx) => (
                                <li key={idx}>{cause}</li>
                            ))}
                        </ul>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Signs & Symptoms:</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            {glucose.hyperglycemia.signsSymptoms.map((symptom, idx) => (
                                <li key={idx}>{symptom}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Priority Actions - Hypoglycemia */}
                <div className="bg-[#FFEBEE] p-4 rounded-md shadow-sm border-l-4 border-[#F44336] mb-4">
                    <h3 className="font-bold text-[#C62828] text-base mb-2">{glucose.priorityActionsHypo.title}</h3>
                    <p className="font-bold text-[#D32F2F] mb-1 text-sm">{glucose.priorityActionsHypo.subtitle}</p>
                    <ul className="list-disc list-inside text-sm text-[#B71C1C] space-y-1">
                        {glucose.priorityActionsHypo.items.map((action, idx) => (
                            <li key={idx}>{action}</li>
                        ))}
                    </ul>
                </div>

                {/* Priority Actions - Hyperglycemia */}
                <div className="bg-[#FFEBEE] p-4 rounded-md shadow-sm border-l-4 border-[#F44336] mb-4">
                    <h3 className="font-bold text-[#C62828] text-base mb-2">{glucose.priorityActionsHyper.title}</h3>
                    <p className="font-bold text-[#D32F2F] mb-1 text-sm">{glucose.priorityActionsHyper.subtitle}</p>
                    <ul className="list-disc list-inside text-sm text-[#B71C1C] space-y-1">
                        {glucose.priorityActionsHyper.items.map((action, idx) => (
                            <li key={idx}>{action}</li>
                        ))}
                    </ul>
                </div>

                {/* NCLEX Tip */}
                <div className="bg-[#B2EBF2] p-4 rounded-md shadow-sm border-l-4 border-[#00BCD4]">
                    <h3 className="font-bold text-[#006064] text-base mb-2">{glucose.nclexTip.title}</h3>
                    <p className="font-bold text-[#00838F] mb-2 text-sm">{glucose.nclexTip.subtitle}</p>
                    <div className="space-y-1 text-sm text-[#006064]">
                        {glucose.nclexTip.items.map((item, idx) => (
                            <p key={idx}>• {item}</p>
                        ))}
                    </div>
                </div>
            </div>

            {/* ==================== HEMOGLOBIN A1C SECTION ==================== */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#2c5f8d]">{hba1c.name}</h3>
                    <span className="bg-[#FFA500] text-white text-xs font-bold px-2 py-1 rounded">
                        HIGH YIELD
                    </span>
                </div>

                {/* HbA1c Ranges */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-[#E8F5E9] border border-[#4CAF50] rounded-md p-3">
                        <p className="text-sm font-bold text-[#2E7D32]">Normal:</p>
                        <p className="text-lg font-bold text-[#1B5E20]">{hba1c.normalRange}</p>
                    </div>
                    <div className="bg-[#FFF9C4] border border-[#FBC02D] rounded-md p-3">
                        <p className="text-sm font-bold text-[#F57F17]">Prediabetes:</p>
                        <p className="text-lg font-bold text-[#E65100]">{hba1c.prediabetesRange}</p>
                    </div>
                    <div className="bg-[#FFEBEE] border border-[#F44336] rounded-md p-3">
                        <p className="text-sm font-bold text-[#C62828]">Diabetes:</p>
                        <p className="text-lg font-bold text-[#B71C1C]">{hba1c.diabetesRange}</p>
                    </div>
                </div>

                <div className="bg-[#FFF9C4] border border-[#FBC02D] rounded-md p-3 mb-4">
                    <p className="text-sm font-bold text-[#E65100]">{hba1c.exceptForDiabetes}</p>
                </div>

                {/* What It Measures */}
                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-[#2c5f8d]">📖 What It Measures:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{hba1c.whatItMeasures}</p>
                </div>

                {/* Clinical Significance */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🔬</span>
                        <h4 className="font-bold text-[#2c5f8d]">Clinical Significance:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{hba1c.clinicalSignificance}</p>
                </div>

                {/* A1C to Average Glucose Conversion */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3">{hba1c.a1cConversion.title}</h4>
                    <div className="space-y-1 text-sm text-gray-700">
                        {hba1c.a1cConversion.data.map((item, idx) => (
                            <div key={idx} className="flex gap-2">
                                <span className="font-semibold">{item.a1c}</span>
                                <span>{item.glucose}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Nursing Implications */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3">{hba1c.nursingImplications.title}</h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {hba1c.nursingImplications.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* NCLEX Tip */}
                <div className="bg-[#B2EBF2] p-4 rounded-md shadow-sm border-l-4 border-[#00BCD4]">
                    <h3 className="font-bold text-[#006064] text-base mb-2">{hba1c.nclexTip.title}</h3>
                    <p className="text-sm text-[#006064]">{hba1c.nclexTip.text}</p>
                </div>
            </div>

            {/* ==================== TSH SECTION ==================== */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#2c5f8d]">{tsh.name}</h3>
                </div>

                {/* TSH Range */}
                <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-[#E8F5E9] border border-[#4CAF50] rounded-md p-3">
                        <p className="text-sm font-bold text-[#2E7D32]">Normal:</p>
                        <p className="text-lg font-bold text-[#1B5E20]">{tsh.normalRange}</p>
                    </div>
                </div>

                {/* What It Measures */}
                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-[#2c5f8d]">📖 What It Measures:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{tsh.whatItMeasures}</p>
                </div>

                {/* Clinical Significance */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🔬</span>
                        <h4 className="font-bold text-[#2c5f8d]">Clinical Significance:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{tsh.clinicalSignificance}</p>
                </div>

                {/* Elevated and Decreased TSH in two columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Elevated TSH */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="font-bold text-[#2c5f8d] mb-3">{tsh.elevatedTSH.title}</h4>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Causes:</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-3">
                            {tsh.elevatedTSH.causes.map((cause, idx) => (
                                <li key={idx}>{cause}</li>
                            ))}
                        </ul>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Signs & Symptoms:</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            {tsh.elevatedTSH.signsSymptoms.map((symptom, idx) => (
                                <li key={idx}>{symptom}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Decreased TSH */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="font-bold text-[#2c5f8d] mb-3">{tsh.decreasedTSH.title}</h4>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Causes:</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-3">
                            {tsh.decreasedTSH.causes.map((cause, idx) => (
                                <li key={idx}>{cause}</li>
                            ))}
                        </ul>
                        <p className="text-sm font-semibold text-gray-700 mb-2">Signs & Symptoms:</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            {tsh.decreasedTSH.signsSymptoms.map((symptom, idx) => (
                                <li key={idx}>{symptom}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* NCLEX Tip */}
                <div className="bg-[#B2EBF2] p-4 rounded-md shadow-sm border-l-4 border-[#00BCD4]">
                    <h3 className="font-bold text-[#006064] text-base mb-2">{tsh.nclexTip.title}</h3>
                    <p className="font-bold text-[#00838F] mb-2 text-sm">{tsh.nclexTip.subtitle}</p>
                    <div className="space-y-1 text-sm text-[#006064]">
                        {tsh.nclexTip.items.map((item, idx) => (
                            <p key={idx}>• {item}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Endocrine;