import React from 'react';

const BannerSection = () => {
    return (
        <section className="bg-gradient-to-r from-[#083655] to-[#091735] min-h-[700px] flex flex-col justify-center items-center text-white  text-center">
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight flex flex-col gap-2">
                    <span className="bg-gradient-to-r from-[#ffffff] via-[#63e5ff] to-[#33dfe5] bg-clip-text text-transparent">Empowering the Next </span>
                    <span className="bg-gradient-to-r from-[#ffffff] via-[#63e5ff] to-[#33dfe5] bg-clip-text text-transparent">Generation of Nurses</span>
                </h1>
                <p className="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed">
                    We're on a mission to revolutionize nursing education through innovative AI technology, making learning more accessible, effective, and engaging for every nursing student.
                </p>
            </div>
        </section>
    );
};

export default BannerSection;