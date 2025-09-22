"use client";
import React from "react";
import { Form, Select } from "antd";

interface Option {
    label: string;
    value: string;
}

interface CustomSelectProps {
    placeholder?: string;
    options: Option[];
    value?: string;
    onChange?: (value: string) => void;
    name?: string;
    required?: boolean;
    label?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    placeholder,
    options,
    value,
    onChange,
    name,
    required = false,
    label
}) => {
    return (
        <Form.Item
            name={name}
            label={label}
            rules={[
                {
                    required: required,
                    message: `Please select ${label || 'an option'}`
                }
            ]}
        >
            <Select
                size="large"
                placeholder={placeholder || `Enter your ${label?.toLowerCase() || 'selection'}`}
                value={value}
                onChange={onChange}
                style={{
                    height: 48,
                    border: "1px solid #d9d9d9",
                    outline: "none",
                    boxShadow: "none",
                    backgroundColor: "white",
                    borderRadius: "10px"
                }}
            >
                {options.map((option, idx) => (
                    <Select.Option key={`${option.value}-${idx}`} value={option.value}>
                        {option.label}
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>
    );
};

export default CustomSelect;
