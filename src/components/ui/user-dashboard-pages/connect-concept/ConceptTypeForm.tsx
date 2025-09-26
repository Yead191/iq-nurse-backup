"use client";

import React, { useState } from "react";
import { Form, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import InputField from "@/components/shared/InputField";
import {
  colors,
  conceptTypeOptions,
  connectionStyleOptions,
} from "@/data/connectConcept";

interface FormValues {
  name: string;
  age: string;
  title: string;
  type: string;
  color: string;
  description: string;
  connectionStyle?: "straight" | "dotted" | "smoothstep" | "bezier";
}

interface ConceptTypeFormProps {
  setFormData: (data: Partial<FormValues>) => void;
  onAddNode: (args: { label: string; color: string; connectionStyle?: FormValues["connectionStyle"] }) => void;
}

const ConceptTypeForm = ({ setFormData, onAddNode }: ConceptTypeFormProps) => {
  const [form] = Form.useForm<FormValues>();
  const [selectedColor, setSelectedColor] = useState(colors[0]);


  const handleFinish = (values: FormValues) => {
    setFormData({
      ...values,
      color: selectedColor,
    });
  };

  return (
    <div className="w-full rounded bg-white px-4 py-2">
      <Form<FormValues>
        form={form}
        layout="vertical"
        className="concept-form"
        onFinish={handleFinish}
        initialValues={{ color: selectedColor }}
        onValuesChange={(changed) => {
          if (changed.name !== undefined) {
            setFormData({ name: changed.name }); // live-update center label
          }
        }}
      >
        <InputField name="name" label="Patient Initials" required />
        <InputField name="age" label="Age" required />
        <InputField name="title" label="Tab Title" required />

        <Form.Item
          name="type"
          label={<p className="text-[16px] text-[#4E4E4E]">Tab Type</p>}
          rules={[{ required: true, message: "Please select a type" }]}
        >
          <Select
            placeholder="Select a type"
            size="middle"
            style={{ height: 47 }}
            // use options prop so we can easily get the label in onChange
            options={conceptTypeOptions} // must be [{label, value}]
            onChange={(value, option) => {
              if (!option || Array.isArray(option)) return;

              const connectionStyle =
                (form.getFieldValue("connectionStyle") as FormValues["connectionStyle"]) || "smoothstep";

              onAddNode({
                label: option.label,
                color: selectedColor,
                connectionStyle,
              });

              form.setFieldsValue({ type: option.value });
            }}
          />
        </Form.Item>

        <Form.Item
          name="description"
          label={<p className="text-[16px] text-[#4E4E4E]">Description</p>}
          rules={[{ required: true, message: "Please enter a description" }]}
        >
          <TextArea rows={3} />
        </Form.Item>

        {/* Color Picker */}
        <Form.Item
          label={<p className="text-[16px] text-[#4E4E4E]">Color</p>}
          required
        >
          <div className="mb-3 flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                type="button"
                key={color}
                onClick={() => {
                  setSelectedColor(color);
                  form.setFieldValue("color", color);
                }}
                className={`h-7 w-7 rounded-full border-2 transition-all ${selectedColor === color
                    ? "scale-110 border-gray-400"
                    : "border-gray-200 hover:border-gray-300"
                  }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </Form.Item>

        <Form.Item
          name="connectionStyle"
          label={<p className="text-[16px] text-[#4E4E4E]">Connection Style</p>}
        >
          <Select
            placeholder="Select a connection style"
            size="middle"
            style={{ height: 47 }}
            options={connectionStyleOptions /* [{label,value}] */}
          />
        </Form.Item>

        <Form.Item>
          <button
            type="submit"
            className="mt-4 h-[47px] w-full rounded bg-[#003877] py-2 text-white"
          >
            Apply
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ConceptTypeForm;
