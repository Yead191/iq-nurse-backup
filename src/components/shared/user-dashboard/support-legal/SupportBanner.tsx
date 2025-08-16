import React from 'react';
const SupportBanner = ({ title, subTitle, description }:{title:string, subTitle:string, description?:string }) => {
    return (
        <div className=' lg:h-auto w-full me-10  rounded-xl p-6 border-t border-[#C5D0D0] shadow'
            style={{
                backgroundImage: `url('/assets/user-dashboard-images/ProfileHeaderBg.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
                // objectFit: 'cover',  

            }}>
            <div className=' flex flex-col lg:gap-y-3 gap-y-1'>
                <p className='text-[#003877] font-medium text-sm'>{title}</p>
                <p className=' text-black lg:text-xl text-lg font-medium'> {subTitle}</p>
                <p className=' text-[#7B7B7B] lg:text-[16px] text-sm font-normal'> {description} </p>
            </div>
        </div>
    );
};

export default SupportBanner;