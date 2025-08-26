"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { IoCheckmarkSharp } from "react-icons/io5";

interface SplashScreenProps {
  onComplete: () => void; 
  steps: { id: number; text: string }[];
  title: string;
}

export default function SplashScreen({ onComplete  , steps , title}: SplashScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        const nextStep = prev + 1;
        if (nextStep <= 3) {
          // Mark current step as completed
          setCompletedSteps((completed) => [...completed, nextStep]);

          if (nextStep === 3) {
            // All steps completed, transition after a brief delay
            setTimeout(() => {
              onComplete();
            }, 1500);
          }

          return nextStep;
        }
        return prev;
      });
    }, 1500); // Each step takes 1.5 seconds

    return () => clearInterval(stepInterval);
  }, [onComplete]);

  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full space-y-12">
        <h1 className="text-3xl font-medium text-gray-900 text-center mb-14 tracking-wider">
          {title}
        </h1>

        <div className="space-y-8 lg:space-y-12 mx-auto flex flex-col items-center justify-center">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col  items-center gap-1.5 lg:gap-3 space-x-4">
              <div
                className={`
                lg:w-16 w-12 lg:h-16 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500
                ${
                  completedSteps.includes(step.id)
                    ? "text-green-500  border-green-500"
                    : currentStep >= step.id
                    ? "border-orange-500 bg-orange-500"
                    : "border-[#004080]"
                }
              `}
              >
                {completedSteps.includes(step.id) ? ( 
                  <div className="w-4 lg:w-8 lg:h-4 h-8 text-green-500 flex items-center justify-center"> 
                    <IoCheckmarkSharp size={24}/> 
                  </div>
                ) : (
                  <span
                    className={`text-xl font-medium ${
                      currentStep >= step.id ? "text-green-500" : "text-[#000000]"
                    }`}
                  >
                    {step.id}
                  </span>
                )}
              </div>

              <p
                className={` transition-colors duration-300 text-[#000000] lg:text-2xl text-xl font-normal text-center `}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
