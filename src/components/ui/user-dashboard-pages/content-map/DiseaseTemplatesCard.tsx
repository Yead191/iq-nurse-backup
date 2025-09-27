import React from 'react';
interface CardProps {
    id: number;
    title: string;
    description: string;
}

interface cardType {
    items: CardProps
} 

const DiseaseTemplatesCard = ({items}:cardType) => {
    return (
        <div className='w-full h-full'>
            <div className="w-full  bg-white rounded-lg  border border-gray-50 shadow-lg p-6  mx-auto text-center">
                {/* Icon Circle */}
                <div className="w-14 h-14 mx-auto mb-3 rounded-full border border-[#003877] bg-[#B8C7D9] flex items-center justify-center">

                </div>

                {/* Title */}
                <h2 className="text-sm font-semibold text-gray-900 mb-1">{items?.title}</h2>

                {/* Description */}
                <p className="text-gray-600 text-xs leading-relaxed mb-6 px-2  mx-auto">
                    {items?.description}
                </p>

            </div>
        </div>
    );
};

export default DiseaseTemplatesCard;