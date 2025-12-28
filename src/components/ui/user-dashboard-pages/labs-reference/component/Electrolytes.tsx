import React from "react";
import { Zap } from "lucide-react";
import { electrolytesData } from "@/data/labsReferenceData";

const Electrolytes = () => {
    const { potassium, sodium, calcium, magnesium } = electrolytesData;

    return (
        <div className="w-full mx-auto  bg-white font-sans space-y-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 border-b pb-2 border-gray-200">
                <Zap className="w-8 h-8 text-[#FFA500]" />
                <h2 className="text-2xl font-bold text-[#2c5f8d]">
                    Electrolytes
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
                            Electrolyte imbalances are among the MOST TESTED topics on NCLEX. Master these values, signs/symptoms, and priority interventions!
                        </p>
                    </div>
                </div>
            </div>

            {/* ==================== POTASSIUM SECTION ==================== */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#2c5f8d]">{potassium.name}</h3>
                    <span className="px-2 py-1 bg-[#FFA500] text-white text-xs font-bold rounded">HIGH YIELD</span>
                    <span className="px-2 py-1 bg-[#DC143C] text-white text-xs font-bold rounded">CRITICAL</span>
                </div>

                <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-[#E8F5E9] border border-[#4CAF50] rounded-md p-3">
                        <p className="text-sm font-bold text-[#2E7D32]">Normal:</p>
                        <p className="text-lg font-bold text-[#1B5E20]">{potassium.normalRange}</p>
                    </div>
                    <div className="flex-1 bg-[#FFEBEE] border border-[#F44336] rounded-md p-3">
                        <p className="text-sm font-bold text-[#C62828]">Critical:</p>
                        <p className="text-lg font-bold text-[#B71C1C]">{potassium.criticalLow}</p>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">📊</span>
                        <h4 className="font-bold text-[#2c5f8d]">What It Measures:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{potassium.whatItMeasures}</p>
                </div>

                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🔬</span>
                        <h4 className="font-bold text-[#2c5f8d]">Clinical Significance:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{potassium.clinicalSignificance}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                            <span className="text-lg">📈</span>{potassium.hyperkalemia.title}
                        </h4>
                        <div className="mb-3">
                            <p className="font-bold text-gray-800 text-sm mb-1">Causes:</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {potassium.hyperkalemia.causes.map((cause, idx) => <li key={idx}>{cause}</li>)}
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800 text-sm mb-1">Signs & Symptoms:</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {potassium.hyperkalemia.signsSymptoms.map((symptom, idx) => <li key={idx}>{symptom}</li>)}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                            <span className="text-lg">📉</span>{potassium.hypokalemia.title}
                        </h4>
                        <div className="mb-3">
                            <p className="font-bold text-gray-800 text-sm mb-1">Causes:</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {potassium.hypokalemia.causes.map((cause, idx) => <li key={idx}>{cause}</li>)}
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800 text-sm mb-1">Signs & Symptoms:</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {potassium.hypokalemia.signsSymptoms.map((symptom, idx) => <li key={idx}>{symptom}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-[#FFEBEE] p-4 rounded-md shadow-sm border-l-4 border-[#F44336] mb-4">
                    <div className="flex items-start gap-2 mb-2">
                        <span className="text-xl">🚨</span>
                        <h3 className="font-bold text-[#C62828] text-base">{potassium.priorityActionsHyper.title}</h3>
                    </div>
                    <div className="ml-7">
                        <p className="font-bold text-[#D32F2F] mb-1 text-sm">{potassium.priorityActionsHyper.subtitle}</p>
                        <p className="text-[#C62828] mb-3 text-sm">{potassium.priorityActionsHyper.lifeThreateningTitle}</p>
                        <p className="font-bold text-[#D32F2F] mb-2 text-sm">{potassium.priorityActionsHyper.emergencyTreatment}</p>
                        <ol className="list-decimal list-inside text-sm text-[#B71C1C] space-y-2 mb-3">
                            {potassium.priorityActionsHyper.treatments.map((treatment, idx) => (
                                <li key={idx}>
                                    <span className="font-bold">{treatment.step.replace(/^\d+\.\s*/, '')}</span>
                                    <br />
                                    <span className="ml-5">{treatment.description}</span>
                                </li>
                            ))}
                        </ol>
                        <ul className="list-disc list-inside text-sm text-[#B71C1C] space-y-1">
                            {potassium.priorityActionsHyper.additionalActions.map((action, idx) => <li key={idx}>{action}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="bg-[#FFEBEE] p-4 rounded-md shadow-sm border-l-4 border-[#F44336] mb-4">
                    <div className="flex items-start gap-2 mb-2">
                        <span className="text-xl">🚨</span>
                        <h3 className="font-bold text-[#C62828] text-base">{potassium.priorityActionsHypo.title}</h3>
                    </div>
                    <div className="ml-7">
                        <p className="font-bold text-[#D32F2F] mb-1 text-sm">{potassium.priorityActionsHypo.subtitle}</p>
                        <p className="text-[#C62828] mb-3 text-sm">{potassium.priorityActionsHypo.critical}</p>
                        <p className="font-bold text-[#D32F2F] mb-2 text-sm">{potassium.priorityActionsHypo.ivPotassiumTitle}</p>
                        <ul className="list-disc list-inside text-sm text-[#B71C1C] space-y-1 mb-3">
                            {potassium.priorityActionsHypo.ivPotassiumItems.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                        <ul className="list-disc list-inside text-sm text-[#B71C1C] space-y-1">
                            {potassium.priorityActionsHypo.additionalActions.map((action, idx) => <li key={idx}>{action}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                    <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                        <span className="text-lg">💊</span>{potassium.medications.title}
                    </h4>
                    <div className="space-y-2 text-sm">
                        <div>
                            <p className="font-bold text-gray-800">{potassium.medications.increase[0]}</p>
                            <p className="text-gray-700 ml-4">{potassium.medications.increase[1]}</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">{potassium.medications.decrease[0]}</p>
                            <p className="text-gray-700 ml-4">{potassium.medications.decrease[1]}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#FFF9E6] p-4 rounded-md shadow-sm border-l-4 border-[#FFA500] mb-4">
                    <div className="flex items-start gap-2 mb-3">
                        <span className="text-xl">⚡</span>
                        <h3 className="font-bold text-[#B8860B] text-base">{potassium.nclexHighYield.title}</h3>
                    </div>
                    <div className="ml-7 space-y-3">
                        <div>
                            <p className="font-bold text-[#8B7500] mb-1 text-sm">{potassium.nclexHighYield.hyperkalemiaECG.title}</p>
                            <ol className="list-decimal list-inside text-sm text-[#6B5A00] space-y-1">
                                {potassium.nclexHighYield.hyperkalemiaECG.items.map((item, idx) => <li key={idx}>{item}</li>)}
                            </ol>
                        </div>
                        <div>
                            <p className="font-bold text-[#8B7500] mb-1 text-sm">{potassium.nclexHighYield.hypokalemiaECG.title}</p>
                            <ul className="list-disc list-inside text-sm text-[#6B5A00] space-y-1">
                                {potassium.nclexHighYield.hypokalemiaECG.items.map((item, idx) => <li key={idx}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-[#B2EBF2] p-4 rounded-md shadow-sm border-l-4 border-[#00BCD4]">
                    <div className="flex items-start gap-2 mb-2">
                        <span className="text-xl">💡</span>
                        <h3 className="font-bold text-[#006064] text-base">{potassium.mnemonic.title}</h3>
                    </div>
                    <div className="ml-7">
                        <p className="font-bold text-[#00838F] mb-2 text-sm">{potassium.mnemonic.subtitle}</p>
                        <div className="space-y-1 text-sm text-[#006064]">
                            {potassium.mnemonic.items.map((item, idx) => (
                                item.letter ? (
                                    <p key={idx}><span className="font-bold">{item.letter}</span>{item.description}</p>
                                ) : (
                                    <p key={idx} className="mt-2">{item.description}</p>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ==================== SODIUM SECTION ==================== */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#2c5f8d]">{sodium.name}</h3>
                    <span className="px-2 py-1 bg-[#FFA500] text-white text-xs font-bold rounded">HIGH YIELD</span>
                </div>

                <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-[#E8F5E9] border border-[#4CAF50] rounded-md p-3">
                        <p className="text-sm font-bold text-[#2E7D32]">Normal:</p>
                        <p className="text-lg font-bold text-[#1B5E20]">{sodium.normalRange}</p>
                    </div>
                    <div className="flex-1 bg-[#FFEBEE] border border-[#F44336] rounded-md p-3">
                        <p className="text-sm font-bold text-[#C62828]">Critical:</p>
                        <p className="text-lg font-bold text-[#B71C1C]">{sodium.criticalRange}</p>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">📊</span>
                        <h4 className="font-bold text-[#2c5f8d]">What It Measures:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{sodium.whatItMeasures}</p>
                </div>

                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🔬</span>
                        <h4 className="font-bold text-[#2c5f8d]">Clinical Significance:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{sodium.clinicalSignificance}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                            <span className="text-lg">📈</span>{sodium.hypernatremia.title}
                        </h4>
                        <div className="mb-3">
                            <p className="font-bold text-gray-800 text-sm mb-1">Causes:</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {sodium.hypernatremia.causes.map((cause, idx) => <li key={idx}>{cause}</li>)}
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800 text-sm mb-1">Signs & Symptoms:</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {sodium.hypernatremia.signsSymptoms.map((symptom, idx) => <li key={idx}>{symptom}</li>)}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                            <span className="text-lg">📉</span>{sodium.hyponatremia.title}
                        </h4>
                        <div className="mb-3">
                            <p className="font-bold text-gray-800 text-sm mb-1">Causes:</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {sodium.hyponatremia.causes.map((cause, idx) => <li key={idx}>{cause}</li>)}
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800 text-sm mb-1">Signs & Symptoms:</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {sodium.hyponatremia.signsSymptoms.map((symptom, idx) => <li key={idx}>{symptom}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-[#FFEBEE] p-4 rounded-md shadow-sm border-l-4 border-[#F44336] mb-4">
                    <div className="flex items-start gap-2 mb-2">
                        <span className="text-xl">🚨</span>
                        <h3 className="font-bold text-[#C62828] text-base">{sodium.priorityActionsHyper.title}</h3>
                    </div>
                    <div className="ml-7">
                        <p className="font-bold text-[#D32F2F] mb-1 text-sm">{sodium.priorityActionsHyper.subtitle}</p>
                        <p className="text-[#C62828] mb-2 text-sm">{sodium.priorityActionsHyper.critical}</p>
                        <p className="text-[#C62828] mb-3 text-sm">{sodium.priorityActionsHyper.treatment}</p>
                        <ul className="list-disc list-inside text-sm text-[#B71C1C] space-y-1">
                            {sodium.priorityActionsHyper.items.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="bg-[#FFEBEE] p-4 rounded-md shadow-sm border-l-4 border-[#F44336] mb-4">
                    <div className="flex items-start gap-2 mb-2">
                        <span className="text-xl">🚨</span>
                        <h3 className="font-bold text-[#C62828] text-base">{sodium.priorityActionsHypo.title}</h3>
                    </div>
                    <div className="ml-7">
                        <p className="font-bold text-[#D32F2F] mb-1 text-sm">{sodium.priorityActionsHypo.subtitle}</p>
                        <p className="text-[#C62828] mb-2 text-sm">{sodium.priorityActionsHypo.critical}</p>
                        <p className="font-bold text-[#D32F2F] mb-2 text-sm">{sodium.priorityActionsHypo.acuteSymptomaticTitle}</p>
                        <ul className="list-disc list-inside text-sm text-[#B71C1C] space-y-1 mb-3">
                            {sodium.priorityActionsHypo.acuteItems.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                        <p className="font-bold text-[#D32F2F] mb-2 text-sm">{sodium.priorityActionsHypo.dangerTitle}</p>
                        <ul className="list-disc list-inside text-sm text-[#B71C1C] space-y-1">
                            {sodium.priorityActionsHypo.dangerItems.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="bg-[#FFF9E6] p-4 rounded-md shadow-sm border-l-4 border-[#FFA500] mb-4">
                    <div className="flex items-start gap-2 mb-3">
                        <span className="text-xl">⚡</span>
                        <h3 className="font-bold text-[#B8860B] text-base">{sodium.nclexHighYield.title}</h3>
                    </div>
                    <div className="ml-7 grid md:grid-cols-2 gap-4">
                        <div>
                            <p className="font-bold text-[#8B7500] mb-1 text-sm">{sodium.nclexHighYield.siadh.title}</p>
                            <ul className="list-disc list-inside text-sm text-[#6B5A00] space-y-1">
                                {sodium.nclexHighYield.siadh.items.map((item, idx) => <li key={idx}>{item}</li>)}
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#8B7500] mb-1 text-sm">{sodium.nclexHighYield.diabetesInsipidus.title}</p>
                            <ul className="list-disc list-inside text-sm text-[#6B5A00] space-y-1">
                                {sodium.nclexHighYield.diabetesInsipidus.items.map((item, idx) => <li key={idx}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-[#B2EBF2] p-4 rounded-md shadow-sm border-l-4 border-[#00BCD4]">
                    <div className="flex items-start gap-2 mb-2">
                        <span className="text-xl">💡</span>
                        <h3 className="font-bold text-[#006064] text-base">{sodium.nclexTip.title}</h3>
                    </div>
                    <div className="ml-7">
                        <p className="font-bold text-[#00838F] mb-2 text-sm">{sodium.nclexTip.subtitle}</p>
                        <div className="space-y-1 text-sm text-[#006064]">
                            {sodium.nclexTip.items.map((item, idx) => <p key={idx}>{item}</p>)}
                        </div>
                    </div>
                </div>
            </div>

            {/* ==================== CALCIUM SECTION ==================== */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#2c5f8d]">{calcium.name}</h3>
                    <span className="px-2 py-1 bg-[#FFA500] text-white text-xs font-bold rounded">HIGH YIELD</span>
                </div>

                <div className="flex gap-4 mb-4">
                    {calcium.normalRanges.map((range, idx) => (
                        <div key={idx} className="flex-1 bg-[#E8F5E9] border border-[#4CAF50] rounded-md p-3">
                            <p className="text-sm font-bold text-[#2E7D32]">{range.label}</p>
                            <p className="text-lg font-bold text-[#1B5E20]">{range.value}</p>
                        </div>
                    ))}
                    <div className="flex-1 bg-[#FFEBEE] border border-[#F44336] rounded-md p-3">
                        <p className="text-sm font-bold text-[#C62828]">Critical:</p>
                        <p className="text-lg font-bold text-[#B71C1C]">{calcium.criticalRange}</p>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">📊</span>
                        <h4 className="font-bold text-[#2c5f8d]">What It Measures:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{calcium.whatItMeasures}</p>
                </div>

                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🔬</span>
                        <h4 className="font-bold text-[#2c5f8d]">Clinical Significance:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{calcium.clinicalSignificance}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                            <span className="text-lg">📈</span>{calcium.hypercalcemia.title}
                        </h4>
                        <div className="mb-3">
                            <p className="font-bold text-gray-800 text-sm mb-1">Causes:</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {calcium.hypercalcemia.causes.map((cause, idx) => <li key={idx}>{cause}</li>)}
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800 text-sm mb-1">Signs & Symptoms:</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {calcium.hypercalcemia.signsSymptoms.map((symptom, idx) => <li key={idx}>{symptom}</li>)}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                            <span className="text-lg">📉</span>{calcium.hypocalcemia.title}
                        </h4>
                        <div className="mb-3">
                            <p className="font-bold text-gray-800 text-sm mb-1">Causes:</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {calcium.hypocalcemia.causes.map((cause, idx) => <li key={idx}>{cause}</li>)}
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800 text-sm mb-1">Signs & Symptoms:</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {calcium.hypocalcemia.signsSymptoms.map((symptom, idx) => <li key={idx}>{symptom}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-[#FFEBEE] p-4 rounded-md shadow-sm border-l-4 border-[#F44336] mb-4">
                    <div className="flex items-start gap-2 mb-2">
                        <span className="text-xl">🚨</span>
                        <h3 className="font-bold text-[#C62828] text-base">{calcium.priorityActionsHyper.title}</h3>
                    </div>
                    <div className="ml-7">
                        <p className="font-bold text-[#D32F2F] mb-3 text-sm">{calcium.priorityActionsHyper.subtitle}</p>
                        <ul className="list-disc list-inside text-sm text-[#B71C1C] space-y-1">
                            {calcium.priorityActionsHyper.items.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="bg-[#FFEBEE] p-4 rounded-md shadow-sm border-l-4 border-[#F44336] mb-4">
                    <div className="flex items-start gap-2 mb-2">
                        <span className="text-xl">🚨</span>
                        <h3 className="font-bold text-[#C62828] text-base">{calcium.priorityActionsHypo.title}</h3>
                    </div>
                    <div className="ml-7">
                        <p className="font-bold text-[#D32F2F] mb-3 text-sm">{calcium.priorityActionsHypo.subtitle}</p>
                        <ul className="list-disc list-inside text-sm text-[#B71C1C] space-y-1">
                            {calcium.priorityActionsHypo.items.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="bg-[#FFF9E6] p-4 rounded-md shadow-sm border-l-4 border-[#FFA500] mb-4">
                    <div className="flex items-start gap-2 mb-3">
                        <span className="text-xl">⚡</span>
                        <h3 className="font-bold text-[#B8860B] text-base">{calcium.nclexHighYield.title}</h3>
                    </div>
                    <div className="ml-7 space-y-3">
                        <div>
                            <p className="font-bold text-[#8B7500] mb-1 text-sm">{calcium.nclexHighYield.chvosteksSign.title}</p>
                            <ul className="list-disc list-inside text-sm text-[#6B5A00] space-y-1">
                                {calcium.nclexHighYield.chvosteksSign.items.map((item, idx) => <li key={idx}>{item}</li>)}
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#8B7500] mb-1 text-sm">{calcium.nclexHighYield.trousseausSign.title}</p>
                            <ul className="list-disc list-inside text-sm text-[#6B5A00] space-y-1">
                                {calcium.nclexHighYield.trousseausSign.items.map((item, idx) => <li key={idx}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-[#B2EBF2] p-4 rounded-md shadow-sm border-l-4 border-[#00BCD4]">
                    <div className="flex items-start gap-2 mb-2">
                        <span className="text-xl">💡</span>
                        <h3 className="font-bold text-[#006064] text-base">{calcium.nclexTip.title}</h3>
                    </div>
                    <div className="ml-7">
                        <p className="font-bold text-[#00838F] mb-2 text-sm">{calcium.nclexTip.subtitle}</p>
                        <div className="space-y-1 text-sm text-[#006064]">
                            {calcium.nclexTip.items.map((item, idx) => <p key={idx}>{item}</p>)}
                        </div>
                    </div>
                </div>
            </div>

            {/* ==================== MAGNESIUM SECTION ==================== */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#2c5f8d]">{magnesium.name}</h3>
                </div>

                <div className="flex gap-4 mb-4">
                    <div className="flex-1 bg-[#E8F5E9] border border-[#4CAF50] rounded-md p-3">
                        <p className="text-sm font-bold text-[#2E7D32]">Normal:</p>
                        <p className="text-lg font-bold text-[#1B5E20]">{magnesium.normalRange}</p>
                    </div>
                    <div className="flex-1 bg-[#FFEBEE] border border-[#F44336] rounded-md p-3">
                        <p className="text-sm font-bold text-[#C62828]">Critical:</p>
                        <p className="text-lg font-bold text-[#B71C1C]">{magnesium.criticalRange}</p>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">📊</span>
                        <h4 className="font-bold text-[#2c5f8d]">What It Measures:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{magnesium.whatItMeasures}</p>
                </div>

                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🔬</span>
                        <h4 className="font-bold text-[#2c5f8d]">Clinical Significance:</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ml-7">{magnesium.clinicalSignificance}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                            <span className="text-lg">📈</span>{magnesium.hypermagnesemia.title}
                        </h4>
                        <div className="mb-3">
                            <p className="font-bold text-gray-800 text-sm mb-1">Causes:</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {magnesium.hypermagnesemia.causes.map((cause, idx) => <li key={idx}>{cause}</li>)}
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800 text-sm mb-1">Signs & Symptoms:</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {magnesium.hypermagnesemia.signsSymptoms.map((symptom, idx) => <li key={idx}>{symptom}</li>)}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="font-bold text-[#2c5f8d] mb-3 flex items-center gap-2">
                            <span className="text-lg">📉</span>{magnesium.hypomagnesemia.title}
                        </h4>
                        <div className="mb-3">
                            <p className="font-bold text-gray-800 text-sm mb-1">Causes:</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {magnesium.hypomagnesemia.causes.map((cause, idx) => <li key={idx}>{cause}</li>)}
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800 text-sm mb-1">Signs & Symptoms:</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {magnesium.hypomagnesemia.signsSymptoms.map((symptom, idx) => <li key={idx}>{symptom}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-[#FFEBEE] p-4 rounded-md shadow-sm border-l-4 border-[#F44336] mb-4">
                    <div className="flex items-start gap-2 mb-2">
                        <span className="text-xl">🚨</span>
                        <h3 className="font-bold text-[#C62828] text-base">{magnesium.priorityActionsHyper.title}</h3>
                    </div>
                    <div className="ml-7">
                        <p className="font-bold text-[#D32F2F] mb-3 text-sm">{magnesium.priorityActionsHyper.subtitle}</p>
                        <ul className="list-disc list-inside text-sm text-[#B71C1C] space-y-1">
                            {magnesium.priorityActionsHyper.items.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="bg-[#FFEBEE] p-4 rounded-md shadow-sm border-l-4 border-[#F44336] mb-4">
                    <div className="flex items-start gap-2 mb-2">
                        <span className="text-xl">🚨</span>
                        <h3 className="font-bold text-[#C62828] text-base">{magnesium.priorityActionsHypo.title}</h3>
                    </div>
                    <div className="ml-7">
                        <p className="font-bold text-[#D32F2F] mb-3 text-sm">{magnesium.priorityActionsHypo.subtitle}</p>
                        <ul className="list-disc list-inside text-sm text-[#B71C1C] space-y-1">
                            {magnesium.priorityActionsHypo.items.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="bg-[#B2EBF2] p-4 rounded-md shadow-sm border-l-4 border-[#00BCD4]">
                    <div className="flex items-start gap-2 mb-2">
                        <span className="text-xl">💡</span>
                        <h3 className="font-bold text-[#006064] text-base">{magnesium.nclexTip.title}</h3>
                    </div>
                    <div className="ml-7">
                        <p className="text-[#006064] text-sm">{magnesium.nclexTip.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Electrolytes;