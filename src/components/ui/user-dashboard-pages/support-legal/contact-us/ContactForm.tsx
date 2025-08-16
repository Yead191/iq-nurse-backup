"use client";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import {
    UserOutlined,
    MailOutlined,
    LockOutlined,
    EyeInvisibleOutlined,
    EyeTwoTone,
} from "@ant-design/icons";

import Link from "next/link";
import BrainIllustration from "@/components/shared/BrainIllustration";
import { FiPhone } from "react-icons/fi";
import TextArea from "antd/es/input/TextArea";

const { Title, Text } = Typography;

const ContactForm = () => {

    const onFinish = () => {

    }
    return (
        <div>
            <div className="  flex flex-col md:flex-row gap-5 lg:gap-14 justify-start md:justify-center md:items-center min-h-[calc(100vh-80px)] ">
                {/* Left Side - Illustration */}
                <div className="relative flex-1">
                    <BrainIllustration
                        title="Need Help? We’re Here for You."
                        text="Our support team is ready to assist you with any issues, questions, or feedback."
                    />
                </div>

                {/* Right Side - Form */}
                <div className="flex flex-1 ">
                    <div
                        className="justify-center items-center p-4 lg:p-10 border border-[#C5D0D0] rounded-xl max-w-[600px]"
                        style={{ width: "100%" }}
                    >
                        <h1 className=" text-xl font-medium lg:pb-8 pb-4" >
                            Create Your Account
                        </h1>


                        <Form layout="vertical" onFinish={onFinish} size="large">

                            <Form.Item
                                label={<p className=" lg:text-[16px] text-sm font-medium">First Name </p>}
                                name="firstName"
                                rules={[{ required: true, message: "Please enter your first name" }]}
                            >
                                <Input
                                    prefix={<UserOutlined style={{ color: "#9ca3af" }} />}
                                    placeholder="Enter Your first Name"
                                    style={{
                                        borderRadius: "8px",
                                        backgroundColor: "#f9fafb",
                                        border: "1px solid #e5e7eb",
                                        height: "50px"
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                label={<p className=" lg:text-[16px] text-sm font-medium">Last Name </p>}
                                name="lastName"
                                rules={[{ required: true, message: "Please enter your last name" }]}
                            >
                                <Input
                                    prefix={<UserOutlined style={{ color: "#9ca3af" }} />}
                                    placeholder="Enter Your last Name"
                                    style={{
                                        borderRadius: "8px",
                                        backgroundColor: "#f9fafb",
                                        border: "1px solid #e5e7eb",
                                        height: "50px"
                                    }}
                                />
                            </Form.Item>


                            <Form.Item
                                label={<p className=" lg:text-[16px] text-sm font-medium">Email </p>}
                                name="email"
                                rules={[
                                    { required: true, message: "Please enter your email" },
                                    { type: "email", message: "Please enter a valid email" },
                                ]}
                            >
                                <Input
                                    prefix={<FiPhone style={{ color: "#9ca3af" }} />}
                                    placeholder="Enter Your Email"
                                    style={{
                                        borderRadius: "8px",
                                        backgroundColor: "#f9fafb",
                                        border: "1px solid #e5e7eb",
                                        height: "50px"
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                label={<p className=" lg:text-[16px] text-sm font-medium">Phone Number </p>}
                                name="phone"
                                rules={[
                                    { required: true, message: "Please enter your Phone Number" },
                                ]}
                            >
                                <Input
                                    prefix={<MailOutlined style={{ color: "#9ca3af" }} />}
                                    placeholder="Enter Your Phone Number"
                                    style={{
                                        borderRadius: "8px",
                                        backgroundColor: "#f9fafb",
                                        border: "1px solid #e5e7eb",
                                        height: "50px"
                                    }}
                                />
                            </Form.Item> 

                            <Form.Item
                                label={<p className=" lg:text-[16px] text-sm font-medium">Message </p>}
                                name="message"
                                rules={[
                                    { required: true, message: "Please enter your Message" },
                                ]}
                            >
                                <TextArea
                                    rows={4}
                                    placeholder="Tell us how we can help you...."
                                    style={{
                                        borderRadius: "8px",
                                        backgroundColor: "#f9fafb",
                                        border: "1px solid #e5e7eb",
                                    }} />

                            </Form.Item>


                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    style={{
                                        height: "48px",
                                        borderRadius: "8px",
                                        backgroundColor: "#003877",
                                        borderColor: "#003877",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        marginTop: "-12px",
                                    }}
                                >
                                    Submit →
                                </Button>
                            </Form.Item>

                        </Form>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ContactForm;