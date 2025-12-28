import React from "react";
import { Beaker } from "lucide-react";
import { bloodTubesData, tubeErrors } from "@/data/labsReferenceData";

export interface TubeData {
    color: string;
    name: string;
    additive: string;
    tests: string;
    note: string;
    borderColor?: string;
}
const BloodTubes = () => {
    return (
        <div className="w-full mx-auto bg-white font-sans text-sm">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6 border-b border-primary pb-2">
                <Beaker className="w-6 h-6 text-[#7CB342]" />{" "}
                {/* Using a Beaker icon to match the test tube feel, colored green-ish like image */}
                <h2 className="text-xl font-bold text-[#1E3A8A] tracking-wide">
                    Blood Collection Tubes Reference
                </h2>
            </div>

            {/* Table-like List */}
            <div className="space-y-6">
                {bloodTubesData.map((tube, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 items-start">
                        {/* Color Box */}
                        <div className="flex-shrink-0">
                            <div
                                className={`w-20 h-10 rounded-sm shadow-sm ${tube.color} ${tube.borderColor ? `border ${tube.borderColor}` : ""
                                    }`}
                            ></div>
                        </div>

                        {/* Tube Info */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Left Column: Name & Additive */}
                            <div>
                                <h3 className="font-bold text-gray-800">{tube.name}</h3>
                                <p className="text-gray-600 text-[16px]">Additive: {tube.additive}</p>
                            </div>

                            {/* Right Column: Tests & Note */}
                            <div>
                                <p className="text-gray-800 text-[16px]">
                                    <span className="font-bold">Tests:</span> {tube.tests}
                                </p>
                                <p className="text-gray-800 text-[16px] mt-1">
                                    <span className="font-bold">Note:</span> {tube.note}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* NCLEX High-Yield Section */}
            <div className="mt-8 bg-[#FFF8E1] border border-[#FFECB3] rounded-lg p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🎯</span>
                    <h3 className="font-bold text-[#856404] text-xl">
                        NCLEX HIGH-YIELD: Tube Selection Errors
                    </h3>
                </div>
                <ul className="space-y-1 ml-1">
                    {tubeErrors.map((error, index) => (
                        <li key={index} className="flex items-start gap-2 text-[16px] text-gray-800">
                            <span className="mt-1.5 w-1 h-1 bg-black rounded-full flex-shrink-0"></span>
                            <span>
                                <span className="font-bold">{error.title}</span> {error.text}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BloodTubes;