"use client";
import React, { CSSProperties, useState } from "react";
import { Pagination, Collapse, theme } from "antd";
import { Plus } from "lucide-react";
import { questionsAndAnswers } from "@/data/faqData";
import SupportBanner from "@/components/shared/user-dashboard/support-legal/SupportBanner";

type FAQCategory = keyof typeof questionsAndAnswers;

const AllFaqs = () => {
    const [activeTab, setActiveTab] = useState<FAQCategory>("General");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;
    const { token } = theme.useToken();

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentFaqs = questionsAndAnswers[activeTab]?.slice(indexOfFirstItem, indexOfLastItem) || [];

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const getItems = (panelStyle: CSSProperties) =>
        currentFaqs.map((faq, index) => ({
            key: String(index + 1),
            label: <p className="text-[16px] font-normal text-[#4E4E4E]">{faq.question}</p>,
            children: <p className="text-sm text-[#4E4E4E]">{faq.answer}</p>,
            style: panelStyle,
        }));

    const panelStyle: CSSProperties = {
        marginBottom: 24,
        background: "#fff",
        borderRadius: token.borderRadiusLG,
    };

    return (
        <div className="lg:py-8 py-4">

            {/* Tabs */}
            <div className="flex space-x-4 lg:mb-6 lg:justify-center justify-start  overflow-x-auto lg:pb-3">
                {Object.keys(questionsAndAnswers).map((tab) => (
                    <button
                        key={tab}
                        className={` lg:text-[16px] text-sm font-semibold h-[46px] lg:w-[168px] rounded-lg px-4  ${activeTab === tab
                                ? " text-white bg-[#003877]  "
                                : "text-[#7B7B7B] bg-[#F6F7F8]"
                            }`}
                        onClick={() => {
                            setActiveTab(tab as FAQCategory);
                            setCurrentPage(1);
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className=' lg:hidden block py-8 '>
                <SupportBanner title='The FAQs' subTitle='Help center' description='Every thing you need to know about Ace-Nursing' />
            </div>

            {/* FAQ List */}
            <div className="container grid grid-cols-1 gap-6">
                {currentFaqs.length > 0 ? (
                    <>
                        <Collapse
                            bordered={false}
                            expandIcon={({ isActive }) => (
                                <Plus
                                    size={22}
                                    style={{
                                        transform: `rotate(${isActive ? 0 : 270}deg)`,
                                        transition: "transform 0.3s ease",
                                        color: "#286A25",
                                    }}
                                />
                            )}
                            expandIconPosition="end"
                            style={{ background: "#ffffff", color: "#222222" }}
                            items={getItems(panelStyle)}
                        />

                        <div className="flex justify-center mt-6">
                            <Pagination
                                current={currentPage}
                                pageSize={itemsPerPage}
                                total={questionsAndAnswers[activeTab].length}
                                onChange={handlePageChange}
                                showSizeChanger={false}
                            />
                        </div>
                    </>
                ) : (
                    <div className="text-center text-gray-500">No FAQs available in this category.</div>
                )}
            </div>
        </div>
    );
};

export default AllFaqs;
