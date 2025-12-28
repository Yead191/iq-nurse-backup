import React from "react";
import { Microscope } from "lucide-react";
import { CMPData, CMP_NCLEX_TIP } from "@/data/labsReferenceData";

const CMP = () => {
    return (
        <div className="w-full mx-auto bg-white font-sans">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 border-b pb-2 border-gray-200">
                <Microscope className="w-8 h-8 text-[#4CAF50]" />
                <h2 className="text-2xl font-bold text-[#2c5f8d]">
                    Comprehensive Metabolic Panel (CMP)
                </h2>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
                The CMP includes all BMP tests PLUS liver function tests. Provides a comprehensive overview of kidney function, liver function, electrolyte balance, and blood sugar levels.
            </p>

            {/* Table */}
            <div className="overflow-x-auto mb-8 shadow-sm border border-gray-200 rounded-lg">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#2c5f8d] text-white">
                            <th className="p-3 md:p-4 font-bold border-r border-[#2c5f8d] w-1/4">Additional Tests in CMP</th>
                            <th className="p-3 md:p-4 font-bold border-r border-[#2c5f8d] w-1/4">Normal Range</th>
                            <th className="p-3 md:p-4 font-bold border-r border-[#2c5f8d] w-1/4">Critical Values</th>
                            <th className="p-3 md:p-4 font-bold w-1/4">Primary Function</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-800">
                        {CMPData.map((item, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}
                            >
                                <td className="p-3 md:p-4 font-bold border-b border-gray-200">{item.test}</td>
                                <td className="p-3 md:p-4 border-b border-gray-200">{item.normalRange}</td>
                                <td className="p-3 md:p-4 border-b border-gray-200">{item.criticalValues}</td>
                                <td className="p-3 md:p-4 border-b border-gray-200">{item.primaryFunction}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* NCLEX TIP Section */}
            <div className="bg-[#fff] p-0 md:p-0 rounded-md">
                <div className="flex items-start gap-2 mb-2">
                    <span className="text-xl text-[#5e35b1]">⚕️</span>
                    <h3 className="font-bold text-[#2c5f8d] text-lg">
                        {CMP_NCLEX_TIP.title}
                    </h3>
                </div>
                <ul className="ml-7 space-y-2 list-none">
                    {CMP_NCLEX_TIP.sections.map((section, index) => (
                        <li key={index} className="text-sm md:text-base text-gray-700">
                            <span className="font-bold text-[#2c5f8d]">{section.subtitle}</span>
                            <br />
                            <span className="text-gray-600 block mt-1">{section.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CMP;