
import React from 'react';
import { Syringe, CheckSquare, FileText, AlertTriangle, Lightbulb, Stethoscope, ClipboardCheck } from 'lucide-react';
import { specimenCollectionPhases, specimenCollectionPriorityActions, orderOfDraw } from '@/data/labsReferenceData';

const SpecimenCollection = () => {
    return (
        <div className="w-full space-y-8 pb-8">
            {/* Header */}
            <div className="flex items-center gap-2 border-b border-[#2c5f8d] pb-2">
                <Syringe className="text-green-500 w-6 h-6" />
                <h1 className="text-2xl font-bold text-[#2c5f8d]">Specimen Collection</h1>
            </div>

            {/* General Principles Section */}
            <div className="bg-[#f8f9fa] border-l-4 border-[#2c5f8d] p-5 rounded-lg shadow-sm">
                <div className="space-y-4">
                    <h2 className="text-lg font-bold text-[#2c5f8d]">General Principles of Specimen Collection</h2>

                    <div className="grid gap-6">
                        {specimenCollectionPhases.map((phase, index) => {
                            let Icon;
                            let iconColor;

                            switch (index) {
                                case 0:
                                    Icon = CheckSquare;
                                    iconColor = "text-green-500";
                                    break;
                                case 1:
                                    Icon = Stethoscope; // Or Syringe
                                    iconColor = "text-purple-600";
                                    break;
                                case 2:
                                    Icon = ClipboardCheck;
                                    iconColor = "text-orange-500";
                                    break;
                                default:
                                    Icon = FileText;
                                    iconColor = "text-blue-500";
                            }

                            return (
                                <div key={index} className="bg-white rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Icon className={`${iconColor} w-5 h-5`} />
                                        <h3 className="text-base font-bold text-[#2c5f8d]">{phase.title}</h3>
                                    </div>
                                    <ul className="space-y-2 pl-1">
                                        {phase.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 bg-gray-600 rounded-full flex-shrink-0"></span>
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Priority Actions - Red Box */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="text-red-500 w-5 h-5" />
                    <h3 className="text-lg font-bold text-red-700 uppercase">PRIORITY ACTIONS:</h3>
                </div>
                <ul className="space-y-2">
                    {specimenCollectionPriorityActions.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-800 text-sm">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></span>
                            <span className="leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* NCLEX TIP - Blue/Cyan Box */}
            <div className="bg-[#E0F7FA] border-l-4 border-[#00BCD4] p-5 rounded-r-lg shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                    <Lightbulb className="text-orange-400 w-6 h-6 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-[#00838F] text-base mb-1">NCLEX TIP - Order of Draw Mnemonic:</h4>
                        <p className="text-[#00838F] font-semibold text-lg italic">
                            {orderOfDraw.mnemonic}
                        </p>
                    </div>
                </div>

                <div className="space-y-3 pl-1">
                    {orderOfDraw.steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm">
                            <span className="font-bold text-[#00838F] min-w-[12px]">{step.letter}</span>
                            <span className="text-gray-700">
                                {step.description}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpecimenCollection;