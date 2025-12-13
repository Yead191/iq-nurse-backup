import React from 'react';
import { FaStar } from "react-icons/fa";

interface TestimonialProps {
    name: string;
    role: string;
    quote: string;
    initials: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, quote, initials }) => {
    const avatarBg = "bg-gradient-to-r from-cyan-500 to-[#0078ff]";

    return (
        <div className="bg-[#1a1f3a] p-8 rounded-2xl border border-gray-800/50 flex flex-col justify-between h-full hover:border-gray-700 transition-all duration-300">
            <div>
                <div className="flex gap-1 mb-6 text-[#EAB308]">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={14} />
                    ))}
                </div>
                <p className="text-gray-300 text-[15px] mb-8 italic leading-relaxed font-light">
                    "{quote}"
                </p>
            </div>

            <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${avatarBg} text-white flex items-center justify-center font-bold text-sm shadow-md`}>
                    {initials}
                </div>
                <div>
                    <h4 className="text-white font-semibold tracking-wide">{name}</h4>
                    <p className="text-gray-400 text-xs font-medium">{role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
