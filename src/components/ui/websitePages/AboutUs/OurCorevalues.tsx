import React from 'react';
import { coreValuesData } from '@/data/AboutUsData';
import { statsData } from '@/data/AboutUsData';
const OurCoreValues = () => {
    return (
        <div>
            <section className="bg-[#020b1f] text-white  px-4 md:px-8">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-[#1e3a5f] bg-[#0f2035] text-[#33dfe5] text-xs font-semibold tracking-wider mb-6">
                            WHAT DRIVES US
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                            Our Core Values
                        </h2>
                        <p className="text-gray-400">The principles that guide everything we do</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {coreValuesData.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="bg-[#0f172a] rounded-[2rem] p-8 border border-[#1e293b] hover:border-[#33dfe5]/30 transition-colors duration-300 flex flex-col items-center text-center group">
                                    <div className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                                        <Icon className="w-8 h-8" style={{ color: item.iconColor }} fill="currentColor" fillOpacity={0.2} />
                                    </div>
                                    <h3 className="text-[#33dfe5] text-xl font-medium mb-4">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="bg-[#020b1f] text-white py-20 px-4 md:px-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {statsData.map((item, index) => (
                            <div
                                key={index}
                                className={`
                                flex flex-col items-center justify-center text-center p-10 rounded-[2rem] border transition-all duration-300 h-full
                                ${item.highlight
                                        ? 'bg-[#0f172a] border-[#33dfe5] shadow-[0_0_30px_rgba(51,223,229,0.15)] relative z-10 scale-105 md:scale-110'
                                        : 'bg-[#0f172a] border-[#1e293b] hover:border-[#33dfe5]/30'
                                    }
                            `}
                            >
                                <h3 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-[#33dfe5] to-[#008fff] bg-clip-text text-transparent mb-4">
                                    {item.value}
                                </h3>
                                <p className="text-gray-400 text-lg leading-snug">
                                    {item.label1} <br />
                                    {item.label2}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurCoreValues;
