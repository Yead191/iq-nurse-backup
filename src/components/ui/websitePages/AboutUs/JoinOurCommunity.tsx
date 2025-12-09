import React from 'react';
import Link from 'next/link';

const JoinOurCommunity = () => {
    return (
        <section className="bg-[#051d3b] text-white py-24 px-4 text-center">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
                    Join Our Growing Community
                </h2>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
                    Become part of a movement that's transforming nursing education. Start your
                    journey with IQ-Nurse today and experience the difference AI-powered learning
                    can make.
                </p>
                <Link
                    href="/register"
                    className="inline-block bg-gradient-to-r from-[#33dfe5] to-[#008fff] text-white font-semibold py-4 px-10 rounded-full text-lg hover:shadow-[0_0_20px_rgba(51,223,229,0.4)] transition-shadow duration-300"
                >
                    Start Your Free Trial
                </Link>
            </div>
        </section>
    );
};

export default JoinOurCommunity;
