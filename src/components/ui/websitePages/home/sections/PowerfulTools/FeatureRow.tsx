import React from 'react';
import { FaCheck } from "react-icons/fa";

interface FeatureRowProps {
    badge: string;
    title: string;
    description: string;
    features: string[];
    primaryButton: string;
    secondaryButton: string | null;
    image: string; // Accepts string for now as per data, will likely map to internal components or images later
    isReversed: boolean;
}

const FeatureRow: React.FC<FeatureRowProps> = ({
    badge,
    title,
    description,
    features,
    primaryButton,
    secondaryButton,
    image,
    isReversed
}) => {
    return (
        <div className="flex flex-col gap-12 py-16 md:py-24">
            <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>

                {/* Text Content */}
                <div className="flex-1 w-full">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-[#1e293b] bg-[#0f172a] mb-6">
                        <span className="text-[#38BDF8] text-xs font-bold tracking-widest uppercase">{badge}</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                        {title}
                    </h3>

                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        {description}
                    </p>

                    <ul className="flex flex-col gap-4 mb-10">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#38BDF8] flex items-center justify-center">
                                    <FaCheck className="text-white text-[10px]" />
                                </div>
                                <span className="text-gray-300">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-4">
                        <button className="px-8 py-3 bg-[#38BDF8] hover:bg-[#0ea5e9] text-white font-semibold rounded-full transition-colors duration-300 shadow-lg shadow-sky-900/20">
                            {primaryButton}
                        </button>
                        {secondaryButton && (
                            <button className="px-8 py-3 border border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8]/10 font-semibold rounded-full transition-colors duration-300">
                                {secondaryButton}
                            </button>
                        )}
                    </div>
                </div>

                {/* Image Placeholder / Content */}
                <div className="flex-1 w-full">
                    <div className="relative rounded-2xl overflow-hidden border border-[#1e293b] bg-[#0f172a]/50 min-h-[400px] flex items-center justify-center group">
                        {/* 
                           In a real implementation, we would render specific components or images here based on the 'image' prop key.
                           For now, using a placeholder gradient aesthetic to match the dark theme.
                        */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/5 to-transparent opacity-50"></div>

                        <div className="text-center p-8 relative z-10">
                            <span className="text-[#38BDF8] text-6xl opacity-20 block mb-4">
                                {
                                    image === 'flashcards' ? '⚡' :
                                        image === 'calendar' ? '📅' :
                                            image === 'exam' ? '📝' :
                                                image === 'mindmap' ? '🧠' :
                                                    image === 'community' ? '👥' : '🤖'
                                }
                            </span>
                            <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">
                                {image.replace('-', ' ')} UI Preview
                            </p>
                            <div className="mt-4 px-4 py-2 rounded border border-dashed border-gray-700 text-gray-600 text-xs">
                                Placeholder for {image} component
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeatureRow;
