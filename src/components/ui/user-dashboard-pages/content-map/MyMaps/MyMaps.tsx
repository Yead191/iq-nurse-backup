import React from 'react';
import FilterBar from './FilterBar';
import { MyMapsData } from '@/data/contentMap';
import RecentMapCard from '../RecentMapCard';
import { Pagination } from 'antd';

const MyMaps = () => {
    const handleSortChange = (value: string) => {
        console.log("Sort changed to:", value)
    }

    const handleTypeChange = (value: string) => {
        console.log("Type changed to:", value)
    }

    const handleSearch = (value: string) => {
        console.log("Search value:", value)
    }

    return (
        <div>
            <div className=' bg-[#F5F7FA] rounded-lg shadow w-full p-5' style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }} >

                <div className=' w-full overflow-x-auto'>
                    <FilterBar onSortChange={handleSortChange} onTypeChange={handleTypeChange} onSearch={handleSearch} />
                </div>

                <div className=' w-full grid lg:grid-cols-4 grid-cols-1  gap-4 '>
                    {
                        MyMapsData?.map((value, index) => (
                            <RecentMapCard key={index} value={value} />
                        ))
                    }

                </div>
            </div>

            <div className=' mt-6'>
                <Pagination
                    current={1}
                    pageSize={10}
                    total={30}
                    align='center'
                    // onChange={() => setPage(page)} 
                    showSizeChanger={false}
                />
            </div>
        </div>
    );
};

export default MyMaps;