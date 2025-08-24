import React, { useState } from 'react';
import { Pagination, Table } from 'antd';
import { PreviousFlashcardsData } from '@/data/highYieldFlashcardsData';

const PreviousFlashcards = () => { 
    const [page , setPage] = useState(0)

    const columns = [
        {
            title: 'Topics',
            dataIndex: 'topic',
            key: 'topic',
            // width: '25%', 
            render: (_: any, record: any) => (<div className='lg:text-base text-xs flex flex-col gap-1 '>
                <p className=' text-[#110D0D] font-medium '> {record?.topic} </p>
                <p className=' text-[#7B7B7B] '> {record?.date} </p>
            </div>)
        },
        {
            title: 'Score',
            dataIndex: 'score',
            key: 'score',
            // width: '15%',
        },
        {
            title: 'Cards Attempted',
            dataIndex: 'cardsAttempted',
            key: 'cardsAttempted',
            // width: '20%',
        },
        {
            title: 'Know',
            dataIndex: 'know',
            key: 'know',
            // width: '15%',
        },
        {
            title: 'Still Learning',
            dataIndex: 'stillLearning',
            key: 'stillLearning',
            // width: '15%',
        },

    ];

    return (
        <div className='  h-screen lg:w-full w-[calc(100vh-50px)] overflow-y-auto' >
            <Table
                columns={columns}
                dataSource={PreviousFlashcardsData}
                pagination={false}
                scroll={{ x: 600 }} 
                bordered
            />
            <div className="flex justify-center mt-6">
                <Pagination
                    current={page}
                    pageSize={10}
                    total={30}
                    onChange={()=>setPage(page)}
                    showSizeChanger={false}
                />
            </div>
        </div>
    );
};

export default PreviousFlashcards;
