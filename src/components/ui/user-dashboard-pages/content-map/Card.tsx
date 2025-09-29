import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardProps {
    id: number;
    title: string;
    description: string;
    imgUrl: string;
    link: string;
    buttonText: string;
}

interface cardType {
    items: CardProps
}
const Card = ({ items }: cardType) => {
    return (
        <div className='w-full'>
            <div className="w-full  bg-white rounded-lg  border border-gray-50 shadow-lg p-6  mx-auto text-center">
                {/* Icon Circle */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-[#003877] flex items-center justify-center">
                    <Image src={items?.imgUrl} alt="Folder" width={33} height={33} />

                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-900 mb-3">{items?.title}</h2>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 px-2 lg:w-1/2 mx-auto">
                   {items?.description}
                </p>

                {/* Button */}
                <Link href={items?.link}>
                    <button
                        type="submit"
                        className={` ${items?.id === 1 ? "bg-[#003877] text-white" : " border border-[#003877] text-[#003877]"}  rounded-lg px-8 py-2 h-auto font-medium `}
                    >
                       {items?.buttonText}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Card;