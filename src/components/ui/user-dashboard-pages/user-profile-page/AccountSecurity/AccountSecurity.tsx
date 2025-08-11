"use client"
import React, { useState } from 'react';
import { Form, Input, Button, Select, Space } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined, MailOutlined, DeleteOutlined } from '@ant-design/icons';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import DeleteAccount from './DeleteAccount';

const { Option } = Select;

const AccountSecurity = () => {
    const [form] = Form.useForm();
    const [imgURL, setImgURL] = useState("https://i.ibb.co.com/CKGDQYkt/Frame-2147227147.png")

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imgUrl = URL.createObjectURL(file);
            setImgURL(imgUrl);
        }
    };

    const onFinish = (values:{}) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className=" mx-auto lg:mt-10 mt-5 lg:p-6 p-4 border border-[#C5D0D0]  rounded-lg shadow lg:me-20 lg:ms-9">
            <Form
                form={form}
                name="profileForm"
                onFinish={onFinish}
                layout="vertical"
            >
                <div className=' grid lg:grid-cols-12 grid-cols-1 gap-x-10'>
                    <div className="lg:col-span-3 col-span-12 border border-gray-100 rounded-xl  p-3">
                        <div className="flex items-center justify-center mb-4">
                            <input
                                onChange={onChange}
                                type="file"
                                name=""
                                id="img"
                                style={{ display: "none" }}
                                className="hidden"
                            />
                            <label
                                htmlFor="img"
                                className="relative w-full h-[250px] cursor-pointer rounded-xl  bg-cover bg-center"
                            // style={{ backgroundImage: `url(${imgURL})` }} 
                            >
                                {imgURL && (
                                    <img
                                        src={imgURL}
                                        alt="Profile"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                )}
                                <div className="absolute -right-1 bottom-0 flex items-center justify-center w-12 h-12 bg-blue-50 border-2 border-primary rounded-full">
                                    <MdOutlineAddPhotoAlternate size={22} color="#003877" />
                                </div>
                            </label>
                        </div>
                        <div className=' flex flex-col gap-y-2 items-center'>
                            <h2 className="lg:text-[28px] text-[24px]  font-semibold text-center">Aiden Max</h2>
                            <p className="text-[#7B7B7B] lg:text-lg text-[16px] ">nathan.roberts@example.com</p>
                        </div>
                    </div>

                    <div className=' lg:col-span-9 col-span-12 '>

                        <div className=' grid lg:grid-cols-2 grid-cols-1 gap-x-5'>

                            <Form.Item
                                name="firstName"
                                label="First Name"
                                rules={[{ required: true, message: 'Please input your first name!' }]}
                            >
                                <Input prefix={<UserOutlined color='#7B7B7B' size={16} />} placeholder="Aiden"  style={{
                                    height: "50px", border: "1px solid #d9d9d9", outline: "none",
                                }} className='form' />
                            </Form.Item>

                            <Form.Item
                                name="lastName"
                                label="Last Name"
                                rules={[{ required: true, message: 'Please input your last name!' }]}
                            >
                                <Input prefix={<UserOutlined color='#7B7B7B' size={16} />} style={{
                                    height: "50px", border: "1px solid #d9d9d9", outline: "none",
                                }} placeholder="Max"  className='form'/>
                            </Form.Item>

                            <Form.Item
                                name="phone"
                                label="Phone"
                                rules={[{ required: true, message: 'Please input your phone number!' }]}
                            >
                                <Input
                                    prefix={<PhoneOutlined color='#7B7B7B' size={16} />}
                                    style={{
                                        height: "50px", border: "1px solid #d9d9d9", outline: "none",
                                    }}
                                    placeholder="(684) 555-0102" className='form'
                                />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
                            >
                                <Input prefix={<MailOutlined color='#7B7B7B' size={16} />} style={{
                                    height: "50px", border: "1px solid #d9d9d9", outline: "none",
                                }} placeholder="nathan.roberts@example.com" className='form' />
                            </Form.Item>

                            <Form.Item
                                name="newPassword"
                                label="New Password"
                                rules={[{ required: true, message: 'Please input your new password!' }]}
                                hasFeedback
                            >
                                <Input.Password prefix={<LockOutlined color='#7B7B7B' size={16} />}
                                    style={{
                                        height: "50px", border: "1px solid #d9d9d9", outline: "none",
                                    }} placeholder="••••••••" />
                            </Form.Item>

                            <Form.Item
                                name="confirmNewPassword"
                                label="Confirm New Password"
                                dependencies={['newPassword']}
                                hasFeedback
                                rules={[
                                    { required: true, message: 'Please confirm your new password!' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('newPassword') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The two passwords do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password prefix={<LockOutlined color='#7B7B7B' size={16} />}
                                    style={{
                                        height: "50px", border: "1px solid #d9d9d9", outline: "none",
                                    }} placeholder="••••••••" />
                            </Form.Item>
                        </div>

                        <Form.Item>
                            <button  type="submit" className="w-full bg-primary h-[50px] rounded-xl text-white text-[16px]">
                                Save Changes
                            </button>
                        </Form.Item>     

                        <div> 
                            <DeleteAccount />
                        </div>
                    </div>
                </div>
            </Form> 
             
        </div>
    );
};

export default AccountSecurity;