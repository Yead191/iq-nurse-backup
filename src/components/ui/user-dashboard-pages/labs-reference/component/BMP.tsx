import React from "react";
import { Microscope } from "lucide-react";
import { BMPData, BMP_NCLEX_TIP } from "@/data/labsReferenceData";

const BMP = () => {
    return (
        <div className="w-full mx-auto  bg-white font-sans">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 border-b pb-2 border-gray-200">
                <Microscope className="w-8 h-8 text-[#4CAF50]" />
                <h2 className="text-2xl font-bold text-[#2c5f8d]">
                    Basic Metabolic Panel (BMP)
                </h2>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
                The BMP includes 8 tests that provide information about kidney function, blood sugar, and electrolyte balance. Often ordered for routine screening, monitoring chronic conditions, or evaluating acute illness.
            </p>

            {/* Table */}
            <div className="overflow-x-auto mb-8 shadow-sm border border-gray-200 rounded-lg">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#2c5f8d] text-white">
                            <th className="p-3 md:p-4 font-bold border-r border[#2c5f8d] w-1/4">Test</th>
                            <th className="p-3 md:p-4 font-bold border-r border[#2c5f8d] w-1/4">Normal Range</th>
                            <th className="p-3 md:p-4 font-bold border-r border[#2c5f8d] w-1/4">Critical Values</th>
                            <th className="p-3 md:p-4 font-bold w-1/4">Primary Function</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-800">
                        {BMPData.map((item, index) => (
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
            <div className="bg-[#B2EBF2] p-4 rounded-md shadow-sm border-l-4 border-[#00BCD4]">
                <div className="flex items-start gap-2 mb-2">
                    <span className="text-xl">⚡</span>
                    <h3 className="font-bold text-[#006064] text-lg">
                        {BMP_NCLEX_TIP.title}
                    </h3>
                </div>
                <div className="ml-7 space-y-4">
                    {BMP_NCLEX_TIP.sections.map((section, index) => (
                        <div key={index}>
                            <p className="font-bold text-[#00838F] mb-1">{section.subtitle}</p>
                            <p className="text-[#006064] whitespace-pre-line text-sm md:text-base">
                                {section.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BMP;