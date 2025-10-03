"use client";

import { useState, useEffect } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaArrowRotateRight } from "react-icons/fa6";

interface SplashScreenProps {
  onComplete: () => void;
  steps: { id: number; text: string }[];
  title: string;
}

export default function SplashScreen({
  onComplete,
  steps,
  title,
}: SplashScreenProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    if (currentStep > steps.length) return;

    // Show loading spinner for current step
    const timer = setTimeout(() => {
      setCompletedSteps((prev) => [...prev, currentStep]);
      if (currentStep === steps.length) {
        setTimeout(() => {
          onComplete();
        }, 1000);
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentStep, steps.length, onComplete]);

  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full space-y-12">
        <h1 className="text-3xl font-medium text-gray-900 text-center mb-14 tracking-wider">
          {title}
        </h1>

        <div className="space-y-8 lg:space-y-12 mx-auto flex flex-col items-center justify-center">
          {steps.map((step) => {
            const isCompleted = completedSteps.includes(step.id);
            const isLoading = currentStep === step.id && !isCompleted;

            return (
              <div
                key={step.id}
                className="flex flex-col items-center gap-1.5 lg:gap-3 space-x-4"
              >
                <div
                  className={`
                    lg:w-16 w-12 lg:h-16 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500
                    ${
                      isCompleted
                        ? "text-green-500 border-green-500"
                        : isLoading
                        ? "border-orange-500"
                        : "border-[#004080]"
                    }
                  `}
                >
                  {isCompleted ? (
                    <IoCheckmarkSharp size={24} className="text-green-500" />
                  ) : isLoading ? (
                    <FaArrowRotateRight
                      size={24}
                      className="text-orange-500 animate-spin"
                    />
                  ) : (
                    <span className="text-xl font-medium text-[#000000]">
                      {step.id}
                    </span>
                  )}
                </div>

                <p className="transition-colors duration-300 text-[#000000] lg:text-2xl text-xl font-normal text-center">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
