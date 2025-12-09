import React from 'react';
import Image from 'next/image';

const OurStory = () => {
    return (
        <section className="bg-[#020b1f] text-white py-20 px-4 md:px-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Image Side */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-md aspect-square bg-[#0b1221] rounded-3xl border border-[#1e293b] flex items-center justify-center p-8 shadow-[0_0_50px_rgba(51,223,229,0.1)]">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <div className="text-[#33dfe5] text-center">
                                <Image src="/robot-nurse.png" alt="Robot Nurse Illustration" width={300} height={300} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 text-left">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-[#1e3a5f] bg-[#0f2035] text-[#33dfe5] text-xs font-semibold tracking-wider mb-6">
                        OUR STORY
                    </div>

                    <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">
                        Born from a Nursing <br />
                        Student's Struggle
                    </h2>

                    <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                        <p>
                            IQ-Nurse was founded in 2023 by a team of nursing educators,
                            healthcare professionals, and AI experts who witnessed firsthand
                            the challenges nursing students face every day.
                        </p>
                        <p>
                            We saw students drowning in textbooks, struggling to balance
                            clinical rotations with study time, and feeling overwhelmed by the
                            sheer volume of information they needed to master. We knew there
                            had to be a better way.
                        </p>
                        <p>
                            Combining our expertise in nursing education with cutting-edge
                            artificial intelligence, we created IQ-Nurse—a comprehensive
                            platform designed specifically for the unique needs of nursing
                            students. Today, we're proud to support over 50,000 nursing
                            students on their journey to becoming exceptional healthcare
                            professionals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;