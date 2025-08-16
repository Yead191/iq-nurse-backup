"use client";

import React, { useState } from "react";
import { Form, Input } from "antd";
import {
  UserOutlined,
  LockOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import DeleteAccount from "./DeleteAccount";
import ProfileImageUpdate from "./ProfileImageUpdate";
import { FiUser } from "react-icons/fi";
import DirectionTitle from "@/components/shared/user-dashboard/support-legal/DirectionTitle";

const AccountSecurity = () => {
  const [form] = Form.useForm();
  const [imgURL, setImgURL] = useState(
    "https://i.ibb.co.com/CKGDQYkt/Frame-2147227147.png"
  );

  const onFinish = (values: Record<string, string>) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="w-full mx-auto ">
      <DirectionTitle icon={<FiUser className="text-[#28C76F]" />} title={"Profile"} />

      <div className=" w-full  rounded-lg shadow lg:p-6 p-2   bg-gray-50">
        <Form
          form={form}
          name="profileForm"
          onFinish={onFinish}
          layout="vertical"
        >
          <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-x-10 gap-y-8">
            {/* Profile Image Section */}
            <div className="lg:col-span-3 col-span-12 border border-gray-200 rounded-xl lg:p-3 p-2">
              <ProfileImageUpdate imgURL={imgURL} setImgURL={setImgURL} />
            </div>

            {/* Form Section */}
            <div className="lg:col-span-9 col-span-12">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-4">
                <Form.Item
                  name="firstName"
                  label={
                    <p className=" text-[#272728] font-medium ">First Name </p>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Aiden"
                    className="h-[50px] border border-gray-300"
                  />
                </Form.Item>

                <Form.Item
                  name="lastName"
                  label={
                    <p className=" text-[#272728] font-medium ">Last Name </p>
                  }
                  rules={[
                    { required: true, message: "Please input your last name!" },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Max"
                    className="h-[50px] border border-gray-300"
                  />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label={<p className=" text-[#272728] font-medium ">Phone</p>}
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    prefix={<PhoneOutlined />}
                    placeholder="(684) 555-0102"
                    className="h-[50px] border border-gray-300"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Enter valid email!",
                    },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined />}
                    placeholder="nathan.roberts@example.com"
                    className="h-[50px] border border-gray-300"
                  />
                </Form.Item>

                <Form.Item
                  name="newPassword"
                  label={
                    <p className=" text-[#272728] font-medium ">New Password</p>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please input your new password!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="••••••••"
                    className="h-[50px] border border-gray-300"
                  />
                </Form.Item>

                <Form.Item
                  name="confirmNewPassword"
                  label={
                    <p className=" text-[#272728] font-medium ">
                      Confirm New Password{" "}
                    </p>
                  }
                  dependencies={["newPassword"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("newPassword") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("Passwords do not match!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="••••••••"
                    className="h-[50px] border border-gray-300"
                  />
                </Form.Item>
              </div>

              <Form.Item>
                <button
                  type="submit"
                  className="w-full bg-primary h-[50px] rounded-xl text-white text-[16px]"
                >
                  Save Changes
                </button>
              </Form.Item>

              <DeleteAccount />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AccountSecurity;
