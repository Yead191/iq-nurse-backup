import { useState } from 'react';
import { templateData } from "@/data/templatesData";
import { Button, Checkbox, Empty, Tabs } from "antd";
import { getGroupedSkillsByCategory } from "@/data/clinical-skills-data";
import { FaClock, FaRedoAlt, FaVideo } from "react-icons/fa";
import { CiCircleCheck } from 'react-icons/ci';
import { FaCircleCheck } from 'react-icons/fa6';
import Link from 'next/link';

interface IProps {
    categories: {
        skillCategoryId: string | null;
        setSkillId: string | null;
    };
    setIsSideBarSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ClinicalSkills({ categories, setIsSideBarSelect }: IProps) {
    const [activeTab, setActiveTab] = useState("all");

    const tabs = [
        { key: "all", label: "All Skills" },
        { key: "completed", label: "Completed" },
        { key: "in_progress", label: "In Progress" },
        { key: "not_started", label: "Not Started" },
    ];

    const skill = getGroupedSkillsByCategory(String(categories.skillCategoryId))
    const allSkils = activeTab === "all" ? Object.values(skill).flat() : skill[activeTab]

    const onChange = (e: any) => {
        console.log(`checked = ${e.target.checked}`);
    };

    if (!allSkils?.length) {
        return (

            <div className="flex flex-col items-center justify-center h-[calc(100vh-190px)] overflow-y-auto space-y-4">
                <Empty description="No skills found" />
                <div className='sm:hidden'>
                    <Button
                        type="primary"
                        onClick={() => setIsSideBarSelect((prev) => !prev)}
                        className="w-24 "
                    >
                        Back
                    </Button>
                </div>
            </div>
        )
    }
    const renderComponent = <>
        {
            (allSkils ?? []).map(({id, name, description, duration, status }, index) =>
                <Link href={`/profile/clinicals/${id}`}>

                    <div key={index + 1} className="border border-gray-300 mb-3 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
                        {/* Left section */}
                        <div className="flex items-start gap-3">
                            <div className="mt-1 flex items-center gap-2">
                                <Checkbox onChange={onChange} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">{name}</h3>
                                <p className="text-gray-500 text-sm line-clamp-1">{description}</p>
                                <div className="flex items-center gap-4 mt-2 text-gray-600 text-sm">
                                    <span className="flex items-center gap-1">
                                        <FaClock /> 5 min
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaRedoAlt /> 8/5 attempts
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right section */}
                        <div className="flex items-center gap-2 mt-2 sm:mt-0">
                            <button className="flex items-center gap-1 border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-100">
                                <FaVideo /> Tutorials
                            </button>
                            <button
                                className={"flex items-center gap-1 rounded-md px-4 py-2 font-medium whitespace-nowrap    text-white bg-gradient-to-r to-blue-900 from-blue-600 shadow-md hover:opacity-90 hover:scale-[1.02]   transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-600/4 "}
                            >
                                {status === "completed" && (
                                    <>
                                        <FaCircleCheck className='text-white' /> Completed
                                    </>
                                )}

                                {status === "in_progress" && "In Progress"}
                                {status === "not_started" && "Not Started"}
                            </button>
                        </div>
                    </div>
                </Link>
            )
        }
    </>

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative  max-h-[calc(100vh-125px)] overflow-y-auto">
            <button
                onClick={() => setIsSideBarSelect((prev) => !prev)}

                className="sm:hidden cursor-pointer items-center text-gray-600 hover:text-gray-900 col-span-3 mb-4 flex"
            >
                <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
                Back
            </button>

            <div className="w-full">
                {/* Tab Buttons */}
                <div className="flex gap-2 mb-4 sticky top-0 bg-white z-50 pb-2">
                    {tabs.map((tab, i) => (
                        <button
                            key={i + 1}
                            onClick={() => setActiveTab(tab.key)}
                            className={`px-4 py-2 rounded-lg font-medium border transition cursor-pointer ${activeTab === tab.key
                                ? "bg-blue-500/20 text- text-black  border-blue-800"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div >
                    {activeTab === "all" && renderComponent}
                    {activeTab === "completed" && renderComponent}
                    {activeTab === "resolved" && renderComponent}
                    {activeTab === "in_progress" && renderComponent}
                    {activeTab === "not_started" && renderComponent}
                </div>
            </div>

        </div>
    );
}