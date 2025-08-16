import Link from "next/link";
import React, { ReactElement } from "react";
import { FaHome } from "react-icons/fa";

const DirectionTitle = ({icon , title}:{icon:ReactElement , title:string}) => {
    return (
        <div className="flex items-start justify-start space-x-4   text-[#7B7B7B] lg:pb-5 pb-2 text-sm">
            <Link href="/profile/home" className="flex items-center space-x-2  ">
                <FaHome className="text-[#7B7B7B]" />
                <span className="font-medium">Home</span>
            </Link>
            <span className="text-gray-500">⟷</span>
            <p className="flex items-center space-x-2 ">
               <span> {icon}</span>
                <span className="font-medium">{title}</span>
            </p>
        </div>
    );
};

export default DirectionTitle;