import React from "react";
import { Check } from "lucide-react";
import pricingPlans from "@/data/pricingPlans";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 relative">
      {/* Background glow effect for Pro card if needed, handled via CSS/Tailwind */}

      {/* heading */}
      <div className="text-center mb-24 max-w-[780px] mx-auto px-4">
        <h6 className="section-tagline">FLEXIBLE PRICING</h6>
        <h2 className="section-title">
          Choose the Perfect Plan for Your Nursing Journey
        </h2>
        <h6 className="section-subtitle">
          Invest in your future with plans designed for every stage of nursing
          school
        </h6>
      </div>

      {/* pricing cards container */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-7xl ">
        {pricingPlans?.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-3xl p-8 flex flex-col h-full border transition-all duration-300 ${
              plan.popular
                ? "bg-[#0B1221] border-[#0099FF] shadow-[0_0_30px_rgba(0,153,255,0.15)] z-10 scale-105 md:-mt-4"
                : "bg-[#050A14] border-gray-800 shadow-lg hover:border-gray-700"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 right-6 transform -translate-x-1/2">
                <span className="bg-[#00BFFF] text-white text-xs font-bold py-1 px-4 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-8">
              <h3
                className={`text-xl font-bold mb-4 ${
                  plan.popular ? "text-[#00BFFF]" : "text-[#00BFFF]"
                }`}
              >
                {plan.title}
              </h3>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-bold text-white">
                  ${plan.price}
                </span>
                <span className="text-gray-400 ml-2">/{plan.duration}</span>
              </div>
              <p className="text-gray-400 text-sm h-10">{plan.description}</p>
            </div>

            <div className="flex-grow mb-8">
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-[#00BFFF] mr-3 shrink-0" />
                    <span className="text-gray-300 text-sm leading-tight">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`w-full py-3 rounded-full font-semibold transition-colors duration-200 ${
                plan.popular
                  ? "bg-[#0099FF] hover:bg-[#007acc] text-white"
                  : "bg-transparent border border-[#0099FF] text-white hover:bg-[#0099FF] hover:text-white"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
