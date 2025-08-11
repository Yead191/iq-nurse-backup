import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const DeleteAccount = () => {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 flex items-center justify-center bg-[#EA5455] rounded">
                    <p> <HiOutlineTrash size={24} color='white' /> </p>
                </div>

                <div>
                    <h3 className="text-[#B91C21] font-medium text-[16px] ">Delete Account</h3>
                    <p className="text-gray-500 text-sm">Delete your Ace-Nursing account and data permanently.</p>
                </div>
            </div>
            <button className="text-gray-500 hover:text-gray-700">
                <MdOutlineArrowForwardIos size={20} color='#7B7B7B ' />
            </button>
        </div>
    );
};

export default DeleteAccount;