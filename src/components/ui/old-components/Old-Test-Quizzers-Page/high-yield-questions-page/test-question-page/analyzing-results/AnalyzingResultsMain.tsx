"use client";
import React, { useEffect, useState } from "react";
import SplashScreen from "../SplashScreen";
import ResultMain from "./Results/ResultMain";

const steps = [
    { id: 1, text: "Grading Exam" },
    { id: 2, text: "Comparing performance" },
    { id: 3, text: "Calculating mastery level" },
];


export default function AnalyzingResultsMain() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    const title = "Analyzing Results"

    return (
        <div className="min-h-[calc(100vh-360px)]">
            {showSplash ? (
                <SplashScreen onComplete={() => setShowSplash(false)} steps={steps} title={title} />
            ) : (
                <ResultMain />
            )}
        </div>
    );
}
