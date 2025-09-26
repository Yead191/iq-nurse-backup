"use client";

import {  Form, Input } from "antd";
import React from "react";

const InputField: React.FC<{ name: string; label: string , required?:boolean}> = ({ name, label,required=true }) => {
  return (
    <Form.Item
      name={name} 
      
      label={<p className="text-[#4E4E4E] text-[16px]">{label}</p>}
      rules={[
        {
          required: required,
          message: `Please enter your ${label.toLowerCase()}`,
        },
      ]}
    > 
      <Input
        placeholder={`Enter your ${label.toLowerCase()}`}
        style={{
            height: 47,
            border: "1px solid #d9d9d9",
            outline: "none",
            boxShadow: "none",
            backgroundColor: "white", 
            borderRadius:"10px"
          }} 
      /> 
    </Form.Item>
  );
};

export default InputField;