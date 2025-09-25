import { Button } from 'antd';
import React from 'react';
import Image from 'next/image';
import { RiDownload2Line, RiEditLine } from 'react-icons/ri';
import { GoShareAndroid } from 'react-icons/go';

interface cardType {
    id: number;
    title: string;
    lastEdited: string;
    imgUrl: string;
}

interface RecentMapCardProps {
    value: cardType
}
const RecentMapCard = ({ value }: RecentMapCardProps) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-50 p-6 pb-2  mx-auto">
            {/* Concept Map Preview */}
            <div className="mb-4">
                <Image src={value.imgUrl} alt="Concept Map Preview" width={800} height={134} className='object-cover' />
            </div>

            {/* Title and Last Edited */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{value.title}</h3>
                <p className="text-sm text-gray-500">Last Edited: {value.lastEdited}</p>
            </div>

            {/* Action Icons */}
            <div className="flex gap-3 w-1/3">
                <Button
                    type="text"
                    icon={<RiEditLine size={18} />}
                    className="flex-1 h-12 text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                />
                <Button
                    type="text"
                    icon={<GoShareAndroid size={18} />}
                    className="flex-1 h-10 text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                />
                <Button
                    type="text"
                    icon={<RiDownload2Line size={18} />}
                    className="flex-1 h-10 text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                />
            </div>
        </div>
    );
};

export default RecentMapCard;