"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <section className="bg-[#0b1120] relative overflow-hidden py-4 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 z-10">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-[#ffffff] via-[#63e5ff] to-[#33dfe5] bg-clip-text text-transparent pe-2">
                Master Your
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Nursing Journey
              </span>{" "}
              <span className="bg-gradient-to-r from-[#ffffff] via-[#63e5ff] to-[#33dfe5] bg-clip-text text-transparent">
                {" "}
                with AI
              </span>
            </h1>

            <p className="text-gray-300 text-lg lg:text-xl max-w-xl leading-relaxed">
              The ultimate AI-powered platform designed exclusively for nursing
              students. From NCLEX prep to clinical tools, we've got everything
              you need to succeed.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/auth/register">
                <button className="bg-gradient-to-r from-cyan-500 to-[#0078ff] hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg shadow-blue-500/25 text-lg">
                  Start Free Trial
                </button>
              </Link>
              <Link href="/demo">
                <button className="border-2 border-[#00c2ff] text-[#00c2ff] hover:bg-[#00c2ff]/10 font-bold py-3 px-8 rounded-full transition-all text-lg">
                  Watch Demo
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              <div>
                <h3 className="text-3xl font-bold text-white">50K+</h3>
                <p className="text-gray-400 text-sm mt-1">Active Students</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#00c2ff]">98%</h3>
                <p className="text-gray-400 text-sm mt-1">NCLEX Pass Rate</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">10K+</h3>
                <p className="text-gray-400 text-sm mt-1">Practice Questions</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end z-10">
            {/* Glow Effect Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
            <Image
              src="/assets/images/home/robot-nurse.png"
              alt="AI Nurse Assistant"
              width={1200}
              height={1200}
              className="w-full h-full object-contain relative z-10 drop-shadow-2xl animate-float"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
