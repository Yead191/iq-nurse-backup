"use client"
import InputField from '@/components/shared/InputField';
import { colors, conceptTypeOptions } from '@/data/connectConcept';
import { Form, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';

const { Option } = Select


const ConceptTypeForm = () => {
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    return (
        <div>
            <Form layout='vertical' >
                <InputField name="name" label="Patient Initials" />
                <InputField name="age" label="Age" />
                <InputField name="title" label="Tab Title" />
                <Form.Item
                    name="type"
                    label={<p className="text-[#4E4E4E] text-[16px]">Tab Type</p>}
                    rules={[{ required: true, message: 'Please select a type' }]}
                >
                    <Select
                        placeholder="Select a type"
                        style={{ width: "100%", height: 50 }}
                        size="middle"
                    >
                        {conceptTypeOptions.map((option) => (
                            <Option key={option.value} value={option.value}>
                                {option.label}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    name="description"
                    label={<p className="text-[#4E4E4E] text-[16px]">Description</p>}
                    rules={[{ required: true, message: 'Please enter a description' }]}
                >
                    <TextArea rows={5} />
                </Form.Item>

                <div className="flex gap-2 flex-wrap">
                    {colors.map((color) => (
                        <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`w-7 h-7 rounded-full border-2 transition-all ${selectedColor === color
                                ? "border-gray-400 scale-110"
                                : "border-gray-200 hover:border-gray-300"
                                }`}
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
            </Form>

        </div>
    );
};

export default ConceptTypeForm;