"use client"

import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import Swal from 'sweetalert2'; 


const DeleteAccount = () => { 

    const handleDeleteAccount = () => {
    Swal.fire({
      title: 'Are you sure you want to delete your account?',
      text: 'This action is permanent and cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle delete action here
        Swal.fire('Deleted!', 'Your account has been deleted.', 'success');
      }
    });
  }; 

    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100"
        onClick={handleDeleteAccount}>
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 flex items-center justify-center bg-[#EA5455] rounded">
                    <p> <HiOutlineTrash size={24} color='white' /> </p>
                </div>

                <div>
                    <h3 className="text-[#B91C21] font-medium lg:text-[16px] text-sm ">Delete Account</h3>
                    <p className="text-gray-500 lg:text-sm text-xs">Delete your Ace-Nursing account and data permanently.</p>
                </div>
            </div>
            <button className="text-gray-500 hover:text-gray-700">
                <MdOutlineArrowForwardIos size={20} color='#7B7B7B ' />
            </button>
        </div>
    );
};

export default DeleteAccount;