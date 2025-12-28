import React from 'react';
import { Library, Lightbulb, Target } from 'lucide-react';
import { studyTipsData } from '@/data/labsReferenceData';

const StudyTips = () => {
    return (
        <div className="w-full mx-auto bg-white font-sans space-y-8 pb-8">
            {/* Header */}
            <div className="flex items-center justify-center gap-3 mb-8">
                <Library className="w-8 h-8 text-blue-500" />
                <h2 className="text-2xl font-bold text-[#4a90e2]">{studyTipsData.title}</h2>
            </div>

            {/* Cards Container */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* Study Strategy Card */}
                <div className="bg-[#E0F7FA] p-6 rounded-r-lg border-l-4 border-[#00BCD4] shadow-sm flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-xl">💡</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4 text-[#00BCD4]">
                        <Lightbulb className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        <h3 className="font-bold text-lg">{studyTipsData.strategies.title}</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                        {studyTipsData.strategies.items.map((item, index) => (
                            <li key={index} className="flex gap-2 justify-center">
                                <span className="text-gray-400">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Test-Taking Tips Card */}
                <div className="bg-[#E0F7FA] p-6 rounded-r-lg border-l-4 border-[#00BCD4] shadow-sm flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 mb-4 text-[#00BCD4]">
                        <Target className="w-5 h-5 text-red-500" />
                        <h3 className="font-bold text-lg">{studyTipsData.testTaking.title}</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                        {studyTipsData.testTaking.items.map((item, index) => (
                            <li key={index} className="flex gap-2 justify-center">
                                <span className="text-gray-400">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Footer */}
            <div className="text-center space-y-1 pt-8">
                <p className="font-bold text-gray-800 text-lg flex items-center justify-center gap-2">
                    {studyTipsData.footer.text}
                </p>

            </div>
        </div>
    );
};

export default StudyTips;