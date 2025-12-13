import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '@/data/userHome';

const WhatNursingSay = () => {
    return (
        <section id="what-nursing-say" className="py-24 bg-[#020617] relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-[#1e293b] bg-[#0f172a] mb-6">
                        <span className="text-[#38BDF8] text-xs font-bold tracking-widest uppercase">SUCCESS STORIES</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        What Nursing Students Are<br className="hidden md:block" /> Saying
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Join thousands of successful nursing students who trust IQ-Nurse
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            role={testimonial.role}
                            quote={testimonial.quote}
                            initials={testimonial.initials}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatNursingSay;
