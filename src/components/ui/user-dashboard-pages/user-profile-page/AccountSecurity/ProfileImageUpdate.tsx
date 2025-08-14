import React, { ChangeEvent } from 'react';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';

const ProfileImageUpdate = ({imgURL , setImgURL}:{imgURL:string , setImgURL:(imgURL:string)=>void}) => {
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImgURL(URL.createObjectURL(file));
        }
    };

    return (
        <div className='p-3'>
            <div className="flex items-center justify-center mb-4">
                <input
                    onChange={handleImageChange}
                    type="file"
                    id="img"
                    hidden
                    accept="image/*"
                />
                <label
                    htmlFor="img"
                    className="relative w-full h-[250px] cursor-pointer rounded-xl overflow-hidden"
                >
                    {imgURL && (
                        <img
                            src={imgURL}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    )}
                    <div className="absolute z-50 right-1 bottom-1.5 flex items-center justify-center w-12 h-12 bg-blue-50 border-2 border-primary rounded-full">
                        <MdOutlineAddPhotoAlternate size={22} color="#003877" />
                    </div>
                </label>
            </div>
            <div className="flex flex-col gap-y-2 items-center text-center">
                <h2 className="lg:text-[28px] text-[24px] font-semibold">
                    Aiden Max
                </h2>
                <p className="text-[#7B7B7B] lg:text-lg text-[16px] break-all">
                    nathan.roberts@example.com
                </p>
            </div>
        </div>
    );
};

export default ProfileImageUpdate;