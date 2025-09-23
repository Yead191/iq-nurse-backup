import React from 'react';
import { DashboardCardData, DiseaseTemplatesData, RecentMapData } from '@/data/contentMap';
import Card from '../Card';
import RecentMapCard from '../RecentMapCard';
import DiseaseTemplatesCard from '../DiseaseTemplatesCard';

const Dashboard = () => {
    return (
        <div className=' flex flex-col gap-8 pb-10'>
            {/* cards  */}
            <div className=' bg-[#F5F7FA] rounded-lg shadow w-full p-5' style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }} >
                <div className=' w-full flex items-center  gap-4 '>
                    {
                        DashboardCardData?.map((value, index) => (
                            <Card key={index} items={value} />
                        ))
                    }

                </div>
            </div>

            {/* recent maps   */}

            <div className=' bg-[#F5F7FA] rounded-lg shadow w-full p-5' style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }} >
                <div className=' flex items-center justify-between pb-5'>
                    <p className=' text-[16px] font-medium text-[#000000] '> Recent Maps </p>
                    <p className=' text-[#003877]  '>View all</p>
                </div>
                <div className=' w-full flex items-center  gap-4 '>
                    {
                        RecentMapData?.map((value, index) => (
                            <RecentMapCard key={index} value={value} />
                        ))
                    }

                </div>
            </div>

            {/* DiseaseTemplates  */}
            <div className=' bg-[#F5F7FA] rounded-lg shadow w-full p-5' style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }} >
                <div className=' flex items-center justify-between pb-5'>
                    <p className=' text-[16px] font-medium text-[#000000] '>Disease Templates </p>
                    <p className=' text-[#003877]  '>View all</p>
                </div>
                <div className=' w-full flex items-center  gap-4 '>
                    {
                        DiseaseTemplatesData?.map((value, index) => (
                            <DiseaseTemplatesCard key={index} items={value} />
                        ))
                    }

                </div>
            </div> 

        </div>
    );
};

export default Dashboard;