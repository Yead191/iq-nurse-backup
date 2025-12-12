import React from 'react';
import { Target, Star } from 'lucide-react';

const cardData = [
    {
        title: "Our Mission",
        description:
            "To empower nursing students with innovative AI-powered tools and resources that simplify learning, boost confidence, and prepare them to deliver exceptional patient care. We're committed to making nursing education more accessible, efficient, and effective for every student, regardless of their background or learning style.",
        icon: Target,
        iconColor: "#ff4d4f",
    },
    {
        title: "Our Vision",
        description:
            "To become the world's leading educational platform for nursing students, transforming how future nurses learn and prepare for their careers. We envision a future where every nursing student has access to personalized, AI-powered education that adapts to their needs and helps them achieve their full potential.",
        icon: Star,
        iconColor: "#fbbf24",
    },
];

const MissionVision = () => {
    return (
        <section className="bg-[#020b1f] text-white pb-20 px-4 md:px-8">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center mb-10">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-[#1e3a5f] bg-[#0f2035] text-[#33dfe5] text-xs font-semibold tracking-wider mb-6">
                        OUR PURPOSE
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                        Mission & Vision
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto">
                    {cardData.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="bg-[#0f172a] rounded-[2rem] p-8 md:p-12 border border-[#1e293b] hover:border-[#33dfe5]/30 transition-colors duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-[#008fff] flex items-center justify-center p-3">
                                        <Icon
                                            className="w-full h-full"
                                            style={{ color: item.iconColor }}
                                            fill="currentColor"
                                            fillOpacity={0.2}
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold">{item.title}</h3>
                                </div>

                                <p className="text-gray-400 leading-relaxed text-lg">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
