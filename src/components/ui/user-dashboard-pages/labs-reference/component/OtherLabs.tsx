import React from "react";
import { FlaskConical, AlertTriangle, Activity, Stethoscope, ChevronRight, TestTube2, AlertCircle } from "lucide-react";
import { otherLabsData } from "@/data/labsReferenceData";

const OtherLabs = () => {
    return (
        <div className="space-y-8">
            <div
                className="flex items-center gap-3 mb-8"
            >
                <FlaskConical className="w-8 h-8 text-[#2A5C82]" />
                <h2 className="text-2xl font-bold text-[#2A5C82]">Other Important Labs</h2>
            </div>

            <div className="space-y-6">
                {otherLabsData.map((lab, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                            <h3 className="text-lg font-bold text-[#2A5C82] mb-4">{lab.name}</h3>

                            {/* Ranges */}
                            <div className="flex flex-wrap gap-3">
                                {lab.normalRange && (
                                    <div className="px-4 py-1.5 rounded-lg bg-green-50 border border-green-200 text-green-700 font-mono text-sm font-medium">
                                        Normal: {lab.normalRange}
                                    </div>
                                )}
                                {lab.normalRanges && lab.normalRanges.map((range, i) => (
                                    <div key={i} className="px-4 py-1.5 rounded-lg bg-green-50 border border-green-200 text-green-700 font-mono text-sm font-medium">
                                        {range.label}: {range.value}
                                    </div>
                                ))}
                                {lab.elevatedRange && (
                                    <div className="px-4 py-1.5 rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-700 font-mono text-sm font-medium">
                                        Elevated: {lab.elevatedRange}
                                    </div>
                                )}
                                {lab.criticalRange && (
                                    <div className="px-4 py-1.5 rounded-lg bg-red-50 border border-red-200 text-red-600 font-mono text-sm font-medium">
                                        Critical: {lab.criticalRange}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* What It Measures */}
                            <div className="bg-blue-50/30 p-4 rounded-lg border border-blue-100/50">
                                <div className="flex items-start gap-3">
                                    <Activity className="w-5 h-5 text-[#2A5C82] mt-0.5 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-[#2A5C82] mb-1">What It Measures:</h4>
                                        <p className="text-gray-600 leading-relaxed text-sm">{lab.whatItMeasures}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Causes */}
                            {lab.causes && (
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="p-1.5 bg-blue-100 rounded-md">
                                            <ChevronRight className="w-4 h-4 text-[#2A5C82]" />
                                        </div>
                                        <h4 className="font-semibold text-[#2A5C82]">{lab.causes.title}</h4>
                                    </div>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 ml-2">
                                        {lab.causes.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#2A5C82]/60 mt-1.5 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Signs */}
                            {lab.signs && (
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="p-1.5 bg-orange-100 rounded-md">
                                            <AlertCircle className="w-4 h-4 text-orange-600" />
                                        </div>
                                        <h4 className="font-semibold text-[#2A5C82]">{lab.signs.title}</h4>
                                    </div>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 ml-2">
                                        {lab.signs.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#2A5C82]/60 mt-1.5 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Nursing Implications */}
                            {lab.nursingImplications && (
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="p-1.5 bg-indigo-100 rounded-md">
                                            <Stethoscope className="w-4 h-4 text-indigo-600" />
                                        </div>
                                        <h4 className="font-semibold text-[#2A5C82]">{lab.nursingImplications.title}</h4>
                                    </div>
                                    <ul className="space-y-2 ml-2">
                                        {lab.nursingImplications.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#2A5C82]/60 mt-1.5 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Priority Actions */}
                            {lab.priorityActions && (
                                <div className="mt-6 bg-red-50 border border-red-200 rounded-lg overflow-hidden">
                                    <div className="bg-red-100/50 px-4 py-2 border-b border-red-200 flex items-center gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-600" />
                                        <span className="font-bold text-red-600 text-sm uppercase tracking-wide">
                                            {lab.priorityActions.title}
                                        </span>
                                    </div>
                                    <div className="p-4">
                                        {lab.priorityActions.subtitle && (
                                            <div className="font-bold text-red-700 mb-2 flex items-center gap-2 text-sm">
                                                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                                {lab.priorityActions.subtitle}
                                            </div>
                                        )}
                                        <ul className="space-y-2">
                                            {/* Check if priorityActions.text is an array or just lines, my data has array for text sometimes but just array of strings in other cases. 
                        Wait, Lactic Acid: text is array. Ammonia: text is array. 
                        Safe to assume text is string[] or just render direct items if specific structure.
                      */}
                                            {Array.isArray(lab.priorityActions.text) ? (
                                                lab.priorityActions.text.map((action, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                        <span className="w-1 h-1 rounded-full bg-red-400 mt-2 shrink-0" />
                                                        <span>{action}</span>
                                                    </li>
                                                ))
                                            ) : null}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OtherLabs;
