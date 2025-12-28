import React from "react";
import { coagulationData } from "@/data/labsReferenceData";
import { Activity, TrendingUp, TrendingDown, Info, BookOpen } from "lucide-react";

const Coagulation = () => {
    return (
        <div className="w-full mx-auto  bg-white font-sans text-sm">
            {/* Main Header */}
            <div className="flex items-center gap-2 mb-6 border-b border-primary pb-2">
                <div className="text-[#D32F2F]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                </div>
                {/* Custom droplet icon or similar could be better, but sticking to simple headers or reusing icons */}
                <h2 className="text-xl font-bold text-[#2c5f8d] tracking-wide">
                    Coagulation Studies
                </h2>
            </div>

            <div className="space-y-12">
                {coagulationData.map((item, index) => (
                    <div key={item.id} className="bg-[#f8f9fa] border-l-4 border-[#2c5f8d] p-5 rounded-lg shadow-sm">
                        <div className="border-b last:border-b-0 pb-10 last:pb-0">
                            {/* Section Header with Badge */}
                            <div className="flex flex-wrap items-center gap-2 mb-4">
                                <h3 className="text-lg font-bold text-[#2c5f8d]">{item.name}</h3>
                                {item.tags?.map((tag, i) => (
                                    <span key={i} className={`px-2 py-0.5 rounded text-xs font-bold text-white ${tag === "HIGH-YIELD" || tag === "NCLEX" ? "bg-[#FFA000]" : "bg-[#26C6DA]"}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Ranges */}
                            <div className="flex flex-wrap gap-4 mb-6">
                                {item.normalRange ? (
                                    <div className="bg-[#E8F5E9] border border-[#C8E6C9] rounded px-3 py-1.5 text-sm">
                                        <span className="font-bold text-[#2E7D32]">Normal: </span>
                                        <span className="text-[#1B5E20] font-mono">{item.normalRange}</span>
                                    </div>
                                ) : (
                                    item.normalRangeMulti?.map((range, i) => (
                                        <div key={i} className="bg-[#E8F5E9] border border-[#C8E6C9] rounded px-3 py-1.5 text-sm">
                                            <span className="font-bold text-[#2E7D32]">{range.label}: </span>
                                            <span className="text-[#1B5E20] font-mono">{range.value}</span>
                                        </div>
                                    ))
                                )}

                                {item.therapeuticRange && (
                                    <div className="bg-[#FFF8E1] border border-[#FFECB3] rounded px-3 py-1.5 text-sm">
                                        <span className="text-[#F57F17] font-bold font-mono text-wrap">{item.therapeuticRange}</span>
                                    </div>
                                )}

                                {item.criticalRange && (
                                    <div className="bg-[#FFEBEE] border border-[#FFCDD2] rounded px-3 py-1.5 text-sm">
                                        <span className="font-bold text-[#C62828]">Critical: </span>
                                        <span className="text-[#B71C1C] font-mono">{item.criticalRange}</span>
                                    </div>
                                )}
                            </div>

                            {/* Info Cards */}
                            <div className="space-y-4 mb-6">
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <h4 className="flex items-center gap-2 font-bold text-[#2c5f8d] mb-2">
                                        <BookOpen className="w-4 h-4" /> What It Measures:
                                    </h4>
                                    <p className="text-gray-700">{item.whatItMeasures}</p>
                                </div>

                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <h4 className="flex items-center gap-2 font-bold text-[#2c5f8d] mb-2">
                                        <Info className="w-4 h-4" /> Clinical Significance:
                                    </h4>
                                    <p className="text-gray-700">{item.clinicalSignificance}</p>
                                </div>
                            </div>

                            {/* Elevated / Decreased Grid */}
                            <div className={`grid grid-cols-1 ${item.decreased ? 'md:grid-cols-2' : ''} gap-6 mb-6`}>
                                {/* Elevated */}
                                {item.elevated && (
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <h4 className="flex items-center gap-2 font-bold text-[#2c5f8d] mb-3">
                                            <TrendingUp className="w-4 h-4" /> {item.elevated.title}
                                        </h4>
                                        <ul className="space-y-1">
                                            {item.elevated.items.map((point, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                                    <span className="mt-1.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Decreased */}
                                {item.decreased && (
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <h4 className="flex items-center gap-2 font-bold text-[#2c5f8d] mb-3">
                                            <TrendingDown className="w-4 h-4" /> {item.decreased.title}
                                        </h4>
                                        <ul className="space-y-1">
                                            {item.decreased.items.map((point, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                                    <span className="mt-1.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Nursing Implications */}
                            <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
                                <h4 className="flex items-center gap-2 font-bold text-[#2c5f8d] mb-3">
                                    <Activity className="w-4 h-4" /> Nursing Implications:
                                </h4>
                                <ul className="space-y-1">
                                    {item.nursingImplications.map((imp, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                            <span className="mt-1.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                            <span>{imp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Medications */}
                            {item.medications && (
                                <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
                                    <h4 className="flex items-center gap-2 font-bold text-[#2c5f8d] mb-3">
                                        <div className="rotate-45"><Activity className="w-4 h-4" /></div> Medications Affecting Results:
                                    </h4>
                                    <div className="space-y-2">
                                        <div>
                                            <span className="font-bold text-gray-800">• Increase PT/INR:</span>
                                            <p className="text-gray-700 text-sm ml-3 text-wrap">{item.medications.increase}</p>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-800">• Decrease PT/INR:</span>
                                            <p className="text-gray-700 text-sm ml-3 text-wrap">{item.medications.decrease}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Priority Nursing Actions - Red Alert */}
                            {item.priorityActions && (
                                <div className="bg-[#FFEBEE] border border-[#EF9A9A] rounded-lg p-4 mb-6">
                                    <h4 className="flex items-center gap-2 font-bold text-[#C62828] mb-3 uppercase text-sm">
                                        <div className="text-[#C62828] font-bold">⚡</div> {item.priorityActions.title}
                                    </h4>
                                    <ul className="space-y-3">
                                        {item.priorityActions.items.map((action, i) => (
                                            <li key={i} className="items-start gap-2 text-gray-800 text-sm">
                                                <span className="w-1.5 h-1.5 bg-[#C62828] rounded-full mt-1.5 flex-shrink-0 inline-block mr-2"></span>
                                                <span className="font-bold text-[#C62828] mr-1">{action.subtitle}</span>
                                                {Array.isArray(action.text) ? (
                                                    <div className="ml-4 mt-1 space-y-1">
                                                        {action.text.map((t, j) => (
                                                            <div key={j} className="text-gray-700">{t}</div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <span className="text-gray-700">{action.text}</span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* NCLEX High Yield - Yellow Alert */}
                            {item.nclexHighYield && (
                                <div className="bg-[#FFF8E1] border border-[#FFECB3] rounded-lg p-4 mb-6">
                                    <h4 className="flex items-center gap-2 font-bold text-[#FF6F00] mb-3 uppercase text-sm">
                                        <div className="text-[#FF6F00] font-bold">🎯</div> {item.nclexHighYield.title}
                                    </h4>
                                    <ul className="space-y-3">
                                        {item.nclexHighYield.items.map((item, i) => (
                                            <li key={i} className="items-start gap-2 text-gray-800 text-sm">
                                                <span className="w-1.5 h-1.5 bg-[#FF6F00] rounded-full mt-1.5 flex-shrink-0 inline-block mr-2"></span>
                                                <span className="font-bold text-gray-900 mr-1">{item.subtitle}</span>
                                                {Array.isArray(item.text) ? (
                                                    <div className="ml-4 mt-1 space-y-1">
                                                        {item.text.map((t, j) => (
                                                            <div key={j} className="text-gray-700 flex items-start gap-2">
                                                                <span className="mt-1.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                                                                {t}
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <span className="text-gray-700">{item.text}</span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* NCLEX Tip - Blue Alert */}
                            {item.nclexTip && (
                                <div className="bg-[#E0F7FA] border border-[#80DEEA] rounded-lg p-4">
                                    <h4 className="flex items-center gap-2 font-bold text-[#2c5f8d] mb-2 uppercase text-xs">
                                        <div className="text-[#2c5f8d] font-bold">💡</div> {item.nclexTip.title}
                                    </h4>
                                    {Array.isArray(item.nclexTip.text) ? (
                                        <div className="ml-1 space-y-1">
                                            {item.nclexTip.text.map((line, i) => (
                                                <p key={i} className={`text-[#006064] text-sm ${i === 0 ? "font-bold italic mb-2" : ""}`}>
                                                    {i > 0 && <span className="mr-2 text-xs">◆</span>}
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-[#006064] text-sm ml-1">
                                            {item.nclexTip.text}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Coagulation;