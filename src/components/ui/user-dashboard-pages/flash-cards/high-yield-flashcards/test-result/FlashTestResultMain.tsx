"use client"
import React from "react";
import { RotateCcw, AlertTriangle, CheckCircle, X } from "lucide-react";
import { useRouter } from "next/navigation";

const statsData = [
    {
        key: "cardsStudied",
        value: 24,
        label: "Cards Studied",
    },
    {
        key: "markedEasy",
        value: 7,
        label: "Marked Easy",
    },
    {
        key: "markedMedium",
        value: 156,
        label: "Marked Medium",
    },
    {
        key: "markedHard",
        value: 450,
        label: "Marked Hard",
    },
];

// Define common CSS for all action buttons
const commonBtnClass =
    "flex items-center justify-center gap-2 px-3 py-2.5 rounded-md text-xs md:text-base md:font-medium transition cursor-pointer";

// Button variant styles
const actions = [
    {
        key: "reset",
        icon: <RotateCcw className="w-4 h-4" />,
        label: "Reset Cards",
        btnClass:
            "text-gray-700 bg-gray-100 hover:bg-gray-200",
    },
    {
        key: "reviewHard",
        icon: <AlertTriangle className="w-4 h-4" />,
        label: "Review Hard Cards",
        btnClass:
            "text-white bg-[#FFA500] hover:bg-[#ff9400]",
    },
    {
        key: "backTopics",
        icon: <CheckCircle className="w-4 h-4" />,
        label: "Back to Topics",
        btnClass:
            "text-white bg-green-500 hover:bg-[#22963c]",
    },
];

const FlashTestResultMain = () => {

    const router = useRouter();
    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Top Bar */}
            <header className="bg-[#003C82] text-white flex justify-between items-center px-4 py-2">
                <h1 className="text-white sm:text-lg font-medium">Flashcard</h1>
                <button
                    className="hover:bg-[#004b9b] rounded-full p-1 transition"
                    onClick={() => router.back()}
                >
                    <X className="w-4 h-4 cursor-pointer" />
                </button>
            </header>

            {/* Main Content */}
            <main className="flex flex-col justify-center items-center flex-1 p-2 ">
                <div className="max-w-5xl w-full bg-white rounded-lg p-8 md:p-12 text-center">
                    {/* Header */}
                    <div className="mb-24">
                        <h2 className="text-2xl md:text-2xl font-semibold text-gray-900">
                            Study Session Complete
                        </h2>
                        <p className=" text-xs text-black font-semibold mt-2">
                            Here's how you performed in this flashcard session
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="flex flex-wrap gap-6 md:gap-8 mb-12 justify-center">
                        {statsData.map((stat) => (
                            <div
                                key={stat.key}
                                className="bg-gray-50 rounded-lg flex flex-col items-center flex-1 min-w-[136px] max-w-full p-8"
                            >
                                <div className="text-4xl md:text-4xl w-full font-semibold text-primary">
                                    {stat.value}
                                </div>
                                <div className="text-base text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>


                </div>
                {/* Action Buttons */}
                <div className="flex flex-row justify-center gap-3 md:gap-4 ">
                    {actions.map((action) => (
                        <button
                            key={action.key}
                            className={`${commonBtnClass} ${action.btnClass}`}
                        >
                            {action.icon}
                            {action.label}
                        </button>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default FlashTestResultMain;
