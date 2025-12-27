import React from 'react';
import { BookOpen, Target, FileText, Lightbulb } from 'lucide-react';
import { clinicalActivities, nclexSuccessFactors, usageGuide } from '@/data/labsReferenceData';

const Introduction = () => {
    return (
        <div className="w-full space-y-6">
            {/* Header */}
            <div className="flex items-center gap-2 border-b border-[#2c5f8d] pb-2">
                <BookOpen className="text-blue-500 w-6 h-6" />
                <h1 className="text-2xl font-bold text-[#2c5f8d]">Introduction</h1>
            </div>

            {/* Intro Text */}
            <p className="text-gray-600 leading-relaxed ">
                Welcome to your comprehensive nursing laboratory values reference guide. This resource is designed specifically for nursing students preparing for clinical practice and the NCLEX-RN examination. Understanding laboratory values is crucial for:
            </p>

            {/* Two Column Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 pb-6">
                {/* Clinical Practice */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <Target className="text-pink-500 w-5 h-5" />
                        <h2 className="text-lg font-bold text-[#2c5f8d]">Clinical Practice</h2>
                    </div>
                    <ul className="space-y-2">
                        {clinicalActivities.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-700">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-gray-600 rounded-full flex-shrink-0"></span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* NCLEX Success */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <FileText className="text-purple-500 w-5 h-5" />
                        <h2 className="text-lg font-bold text-[#2c5f8d]">NCLEX Success</h2>
                    </div>
                    <ul className="space-y-2">
                        {nclexSuccessFactors.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-700">
                                <span className="mt-1.5 w-1.5 h-1.5 bg-gray-600 rounded-full flex-shrink-0"></span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* How to Use This Guide - Yellow Box */}
            <div className="bg-[#FFF8E1] border border-[#FFE082] rounded-lg p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                    <Target className="text-pink-500 w-5 h-5" />
                    <h3 className="text-lg font-bold text-gray-800">How to Use This Guide</h3>
                </div>
                <ul className="space-y-2">
                    {usageGuide.map((item, index) => (
                        <li key={index} className="text-gray-700">
                            <span className="font-bold text-gray-900">{item.label}</span> {item.description}
                        </li>
                    ))}
                </ul>
            </div>

            {/* NCLEX TIP - Blue Box */}
            <div className="bg-[#E0F7FA] border-l-4 border-[#00BCD4] p-4 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                    <Lightbulb className="text-orange-400 w-5 h-5 flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-bold text-[#00838F] uppercase text-sm mb-1">NCLEX TIP:</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            When answering lab value questions on NCLEX, always consider: (1) Is this value normal or abnormal? (2) What are the patient safety implications? (3) What is the priority nursing action? (4) Which healthcare provider needs to be notified?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
