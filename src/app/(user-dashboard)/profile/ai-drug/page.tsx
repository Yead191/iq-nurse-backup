import React from 'react';
import { Empty } from 'antd';

const AIDrugPage = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-100px)]'>
            <Empty description="Please select a drug from the left" />
        </div>
    );
};

export default AIDrugPage;