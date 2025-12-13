import React from 'react';
import FeatureRow from './FeatureRow';
import { powerfulToolsData } from '@/data/userHome';

const PowerfulTools = () => {
    return (
        <section id="powerful-tools" className="py-24 bg-[#020617] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[#38BDF8]/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-[#38BDF8]/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4  relative z-10">
                <div className="text-center  max-w-3xl mx-auto">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-[#1e293b] bg-[#0f172a] mb-6">
                        <span className="text-[#38BDF8] text-xs font-bold tracking-widest uppercase">SMART LEARNING</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Powerful Tools Built for Nursing <br /> Students
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Experience the features that thousands of nursing students rely on daily to excel in their studies
                    </p>
                </div>

                <div className="flex flex-col">
                    {powerfulToolsData.map((tool, index) => (
                        <FeatureRow
                            key={index}
                            badge={tool.badge}
                            title={tool.title}
                            description={tool.description}
                            features={tool.features}
                            primaryButton={tool.primaryButton}
                            secondaryButton={tool.secondaryButton}
                            image={tool.image}
                            isReversed={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PowerfulTools;