"use client";
import React from "react";
import { ArrowLeftOutlined, UserAddOutlined, LogoutOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";

const members = [
    {
        name: "Sarah Chen",
        status: "Active Now",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        active: true,
    },
    {
        name: "Mike Rodriguez",
        status: "Active Now",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        active: true,
    },
    {
        name: "Jessica Park",
        status: "Active Now",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        active: true,
    },
    {
        name: "Alex Kim",
        status: "Away",
        avatar: "https://randomuser.me/api/portraits/men/76.jpg",
        active: false,
    },
    {
        name: "Maria Santos",
        status: "Active Now",
        avatar: "https://randomuser.me/api/portraits/men/76.jpg",
        active: true,
    },
    {
        name: "David Lee",
        status: "Active Now",
        avatar: null, // Will use initials
        initials: "DL",
        active: true,
    },
];

interface IProps {
    setIsMembersSelcted: React.Dispatch<React.SetStateAction<boolean>>;
}

const TeamMembers: React.FC<IProps> = ({ setIsMembersSelcted }) => {
    return (
        <div className="w-full max-w-sm bg-white  flex flex-col  h-[calc(100vh-95px)] md:h-[calc(100vh)] ">
            {/* Header */}
            <div className=" p-4">
                <button className="flex items-center justify-center w-8 h-8 mb-3 hover:bg-gray-100 transition-colors border border-primary cursor-pointer p-1 rounded-md bg-primary/5"
                    onClick={() => setIsMembersSelcted(prev => !prev)}

                >
                    <MdArrowBackIosNew className="text-xl text-primary" />
                </button>

                <div className="flex flex-col">
                    <span className="text-[#1A2B49] text-[15px] font-semibold leading-tight py-2" style={{ marginBottom: 0 }}>Members</span>
                    <div className="w-18 h-[4px] bg- bg-primary mt-1 rounded" />
                </div>
            </div>

            {/* Members List */}
            <div className="px-4 mt-2 flex-1">
                {members.map((member, idx) => (
                    <div key={idx} className="flex items-center gap-3 mb-3">
                        <Avatar
                            src={member.avatar || undefined}
                            size={44}
                            style={{
                                background: member.avatar ? undefined : "#1A2B49",
                                color: "#fff",
                                fontWeight: 600,
                                fontSize: 18,
                            }}
                        >
                            {!member.avatar && member.initials}
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="font-bold text-[13px] text-[#1A2B49] leading-tight">
                                {member.name}
                            </span>
                            <span
                                className={`text-xs text-black `}
                                style={{ fontWeight: 500, marginTop: "-2px" }}
                            >
                                {member.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* View all contacts, Invite, Exit section with react-icons */}
            <div className="px-4 mt-1 mb-2">
                <Link href="#" className="text-[#2196F3] text-[15px] font-medium" style={{ textDecoration: "none" }}>
                    View all 15 Contacts
                </Link>
            </div>

            <div className="border-t border-[#E0E0E0] my-1" />

            {/* Actions with react-icons */}
            <div className="px-4 flex flex-col gap-4 mb-4">
                <button
                    className="flex items-center gap-2 font-medium text-[16px] text-[#2196F3] hover:underline transition-all"
                    style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                >
                    {/* Invite Friends icon (react-icons) */}
                    <span className="flex items-center justify-center">
                        <svg width="22" height="22" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M15 12h6m-3-3v6"></path>
                            <circle cx="9" cy="8" r="4"></circle>
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        </svg>
                    </span>
                    Invite Friends
                </button>
                <button
                    className="flex items-center gap-2 font-medium text-[16px] text-[#F50057] hover:underline transition-all"
                    style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                >
                    {/* Exit Group icon (react-icons) */}
                    <span className="flex items-center justify-center">
                        <svg width="22" height="22" fill="none" stroke="#F50057" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                    </span>
                    Exit Group
                </button>
            </div>
        </div>
    );
};

export default TeamMembers;
