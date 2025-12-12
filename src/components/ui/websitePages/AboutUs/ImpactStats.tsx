import React from 'react';

const statsData = [
    {
        value: "50K+",
        label1: "Active Students",
        label2: "Worldwide",
        highlight: false
    },
    {
        value: "98%",
        label1: "NCLEX First-Time Pass",
        label2: "Rate",
        highlight: true
    },
    {
        value: "10M+",
        label1: "Questions Answered",
        label2: "by Nurse Nia",
        highlight: false
    },
    {
        value: "500K+",
        label1: "Study Materials",
        label2: "Created",
        highlight: false
    }
];

const ImpactStats = () => {
    return (
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
                            <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#33dfe5] to-[#008fff] bg-clip-text text-transparent mb-6">
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
    );
};

export default ImpactStats;
