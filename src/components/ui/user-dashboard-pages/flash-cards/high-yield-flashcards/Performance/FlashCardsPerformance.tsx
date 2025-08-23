"use client";

import { Card } from "antd";
import { CircularProgressChart } from "../../../Test-Quizzers-Page/high-yield-questions-page/performace-tab/CircularProgressChart";
import { PerformanceLegend } from "../../../Test-Quizzers-Page/high-yield-questions-page/performace-tab/PerformanceLegend";


const generatePerformanceData = () => [
    { name: "Know", value: 43, color: "#FF8E29" },
    { name: "Still Learning", value: 27, color: "#27D095" },
    { name: "Not Attempted", value: 33, color: "#F54F5F" },
];

const OVERALL_SCORE = 90;

export function FlashCardsPerformance() {
    const performanceData = generatePerformanceData();

    return (
        <div className="flex flex-col md:flex-row gap-8 ">
            <Card className="flex-1 p-8">
                <div className="flex lg:flex-row flex-col items-center justify-between space-y-8">
                    <div className=" w-full">
                        <CircularProgressChart
                            data={performanceData}
                            overallScore={OVERALL_SCORE}
                        />
                    </div>
                    <div className="w-full">

                        <PerformanceLegend data={performanceData} />
                    </div>
                </div>
            </Card>

        </div>
    );
}
