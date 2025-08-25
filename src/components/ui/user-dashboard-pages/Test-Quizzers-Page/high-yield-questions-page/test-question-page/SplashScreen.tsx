"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

const steps = [
  { id: 1, text: "Analyzing Past Performance" },
  { id: 2, text: "Selecting optional questions for you mastery level" },
  { id: 3, text: "Finalizing Exam" },
];

export default function SplashScreen({ onComplete }: SplashScreenProps) {
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
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-16">
          Personalizing Your Exam
        </h1>

        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.id} className="flex items-center space-x-4">
              <div
                className={`
                w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500
                ${
                  completedSteps.includes(step.id)
                    ? "bg-green-500 border-green-500"
                    : currentStep >= step.id
                    ? "border-orange-500 bg-orange-500"
                    : "border-gray-300"
                }
              `}
              >
                {completedSteps.includes(step.id) ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <span
                    className={`text-sm font-medium ${
                      currentStep >= step.id ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {step.id}
                  </span>
                )}
              </div>

              <p
                className={`text-base transition-colors duration-300 ${
                  currentStep >= step.id ? "text-gray-900" : "text-gray-400"
                }`}
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
