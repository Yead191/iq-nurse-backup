import React from "react";
import { abgAnalysisData } from "@/data/labsReferenceData";
import { Activity, AlertTriangle, ArrowRight, Brain, CheckCircle2, FileText, HelpCircle, Info } from "lucide-react";

const ABGAnalysis = () => {
    const {
        nclexAlert,
        normalValues,
        keyConcepts,
        romeSteps,
        disorders,
        practiceExamples,
        romeSummary
    } = abgAnalysisData;

    return (
        <div className="w-full mx-auto bg-white font-sans space-y-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 border-b pb-4 border-gray-200">
                <div className="p-2 bg-red-100 rounded-lg">
                    <Activity className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-[#2c5f8d]">
                    Arterial Blood Gas (ABG) Analysis
                </h2>
                <span className="ml-2 px-3 py-1 bg-[#FFA500] text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
                    High Yield
                </span>
            </div>

            {/* NCLEX High-Yield Alert */}
            <div className="bg-[#FFF9E6] p-6 rounded-xl shadow-sm border-l-4 border-[#FFA500] hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-yellow-100 rounded-full shrink-0">
                        <Brain className="w-6 h-6 text-[#B8860B]" />
                    </div>
                    <div>
                        <h3 className="font-bold text-[#B8860B] text-lg mb-2 flex items-center gap-2">
                            NCLEX HIGH-YIELD ALERT
                        </h3>
                        <p className="text-[#8B7500] text-sm leading-relaxed">
                            {nclexAlert}
                        </p>
                    </div>
                </div>
            </div>

            {/* Normal Values Table */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#2c5f8d] flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    ABG Normal Values & Components
                </h3>
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#2c5f8d] text-white">
                                <th className="p-4 font-semibold w-1/4">Component</th>
                                <th className="p-4 font-semibold w-1/4">Normal Range</th>
                                <th className="p-4 font-semibold w-1/2">What It Measures</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                            {normalValues.map((item, idx) => (
                                <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                                    <td className="p-4 font-bold text-gray-800">{item.component}</td>
                                    <td className="p-4 text-gray-700 font-medium">{item.normalRange}</td>
                                    <td className="p-4 text-gray-600">{item.whatItMeasures}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Key Concepts */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-1">
                        <Info className="w-5 h-5 text-[#2c5f8d]" />
                    </div>
                    <h3 className="font-bold text-[#2c5f8d]">Key Concepts:</h3>
                </div>
                <div className="space-y-4 pl-2">
                    {keyConcepts.map((concept, idx) => (
                        <div key={idx} className="flex gap-3">
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#2c5f8d] shrink-0" />
                            <div>
                                <span className="font-bold text-[#2c5f8d]">{concept.title}</span>
                                <ul className="mt-1">
                                    {concept.items.map((item, i) => (
                                        <li key={i} className="text-[#333333] text-sm leading-relaxed mb-1">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Step-by-Step ABG Interpretation Using ROME Method */}
            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <Activity className="w-6 h-6 text-red-500" />
                    <h3 className="text-xl font-bold text-[#2c5f8d]">Step-by-Step ABG Interpretation Using ROME Method</h3>
                </div>

                {romeSteps.map((step, idx) => (
                    <div key={idx} className="space-y-2">
                        <h4 className="text-[#2c5f8d] font-bold text-sm">{step.step}</h4>
                        <div className="bg-[#F8FDFF] border-l-4 border-[#00BCD4] p-4 rounded-r-lg shadow-sm">
                            <p className="text-[#00838F] font-bold text-sm mb-2">{step.title}</p>

                            {step.type === "list" && step.items && (
                                <div className="space-y-1">
                                    {step.items.map((item, i) => (
                                        <div key={i}>
                                            <p className="text-[#00BCD4] font-bold text-sm mt-2 first:mt-0">{item.label}</p>
                                            <p className="text-[#333333] text-sm pl-4">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {step.type === "mnemonic" && step.groups && (
                                <div className="space-y-4">
                                    {step.groups.map((group, i) => (
                                        <div key={i}>
                                            <div className="flex flex-col">
                                                {group.lines.map((line, lIdx) => (
                                                    <div key={lIdx}>
                                                        <span className="text-[#00BCD4] font-bold text-sm">{line.letter}</span>
                                                        <span className="text-[#333333] text-sm pl-2">{line.text}</span>
                                                        {line.letter === "O" || line.letter === "E" ? ":" : ""}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-2 pl-4 border-l-2 border-gray-100">
                                                <p className="text-[#333333] text-sm">{group.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Disorders Grid */}
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6">
                {disorders.map((disorder, idx) => (
                    <div key={idx} className="flex flex-col h-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                        {/* Header */}
                        <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                            <div className="flex items-center justify-between gap-2 mb-3">
                                <h3 className="font-bold text-[#2c5f8d] leading-tight">
                                    {disorder.title}
                                </h3>
                                {disorder.badge && (
                                    <span className="shrink-0 px-2 py-0.5 bg-[#FFA500] text-white text-[10px] font-bold rounded uppercase">
                                        {disorder.badge}
                                    </span>
                                )}
                            </div>

                            <div className="flex gap-2 text-xs font-bold font-mono">
                                {disorder.ranges.map((range, i) => (
                                    <span key={i} className={`px-2 py-1 rounded border ${range.color === "red"
                                        ? "bg-red-50 text-red-700 border-red-100"
                                        : "bg-amber-50 text-amber-700 border-amber-100"
                                        }`}>
                                        {range.label}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 space-y-4 flex-grow">
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                                    <Info className="w-3 h-3" />
                                    What's Happening
                                </h4>
                                <p className="text-sm font-medium text-gray-700 leading-snug">
                                    {disorder.whatsHappening}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Causes</h4>
                                <ul className="space-y-1">
                                    {disorder.causes.map((cause, i) => (
                                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-300 shrink-0" />
                                            {cause}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">Signs & Symptoms</h4>
                                <ul className="space-y-1">
                                    {disorder.signsSymptoms.map((symptom, i) => (
                                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-300 shrink-0" />
                                            {symptom}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Priority Actions */}
                        <div className="bg-red-50 p-4 border-t border-red-100 mt-auto">
                            <h4 className="text-red-700 font-bold text-sm mb-2 flex items-center gap-1.5">
                                <AlertTriangle className="w-4 h-4" />
                                PRIORITY ACTIONS:
                            </h4>
                            <ul className="space-y-1">
                                {disorder.priorityActions.map((action, i) => (
                                    <li key={i} className="text-xs text-red-800 flex items-start gap-2">
                                        <ArrowRight className="w-3 h-3 mt-0.5 shrink-0 opacity-50" />
                                        {action}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* Practice Examples */}
            <div className="bg-[#FFF9E6] rounded-xl border border-[#FFE082] overflow-hidden">
                <div className="bg-[#FFE082] p-4 text-[#8B7500] font-bold flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    NCLEX HIGH-YIELD: ABG Practice Examples
                </div>
                <div className="divide-y divide-[#FFE082]">
                    {practiceExamples.map((example, idx) => (
                        <div key={idx} className="p-4 hover:bg-[#FFFDE7] transition-colors">
                            <div className="mb-2">
                                <h4 className="font-bold text-[#2c5f8d] mb-1">{example.title}</h4>
                                <p className="font-mono text-sm bg-white inline-block px-2 py-1 rounded border border-[#FFE082] text-gray-700">
                                    {example.values}
                                </p>
                            </div>
                            <div className="pl-4 border-l-2 border-[#FFE082]">
                                <p className="font-bold text-gray-800 text-sm mb-1">Answer: {example.answer}</p>
                                <ul className="space-y-0.5">
                                    {example.explanation.map((exp, i) => (
                                        <li key={i} className="text-xs text-gray-600 flex items-center gap-1.5">
                                            <CheckCircle2 className="w-3 h-3 text-green-600" />
                                            {exp}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ROME Summary */}
            <div className="bg-[#E0F7FA] rounded-xl border-l-4 border-[#00BCD4] p-6">
                <div className="flex items-center gap-2 mb-4">
                    <HelpCircle className="w-5 h-5 text-[#006064]" />
                    <h3 className="font-bold text-[#006064]">
                        {romeSummary.title}
                    </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-[#00838F] mb-2">{romeSummary.respiratory.title}</h4>
                        <div className="space-y-2">
                            {romeSummary.respiratory.items.map((item, i) => (
                                <p key={i} className="text-sm text-[#006064] bg-white/50 p-2 rounded">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#00838F] mb-2">{romeSummary.metabolic.title}</h4>
                        <div className="space-y-2">
                            {romeSummary.metabolic.items.map((item, i) => (
                                <p key={i} className="text-sm text-[#006064] bg-white/50 p-2 rounded">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ABGAnalysis;