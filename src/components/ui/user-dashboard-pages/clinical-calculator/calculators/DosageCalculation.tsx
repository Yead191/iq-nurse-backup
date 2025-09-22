import CustomSelect from "@/components/shared/Form/FormSelect";
import InputField from "@/components/shared/InputField";
import { Form, Input, Row, Select, Col, Button } from "antd";
import React from "react";

export default function DosageCalculation() {
  const quickReferenceData = [
    {
      title: "Standard Drop Factor",
      value: "15 gtt/mL",
    },
    {
      title: "Micro Drop Factor",
      value: "60 gtt/mL",
    },
    {
      title: "1 kg to lbs",
      value: "2.2 lbs",
    },
    {
      title: "1 inch to cm",
      value: "2.54 cm",
    },
  ];

  const formFields = [
    {
      label: "Desired Dose",
      type: "number",
      placeholder: "Enter Desired Dose",
      name: "desiredDose",
    },
    {
      label: "Desired Dose (Unit)",
      type: "text",
      placeholder: "mg",
      name: "desiredDoseUnit",
    },
    {
      label: "Available Quantity",
      type: "number",
      placeholder: "Enter Available Quantity",
      name: "availableQuantity",
    },
    {
      label: "Unit Type",
      type: "select",
      options: [
        { label: "mg/mL", value: "mg/mL" },
        { label: "g/mL", value: "g/mL" },
        { label: "units/mL", value: "units/mL" },
      ],
      name: "unitType",
    },
  ];

  return (
    <div className="p-6 rounded-xl space-y-6  overflow-y-auto">
      {/* Quick Reference */}
      <div className="bg-[#F8F7FB] p-4 rounded-sm">
        <h2 className="text-base font-semibold text-gray-700 mb-3">
          Quick Reference – Common Values
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {quickReferenceData.map((item, index) => (
            <div
              key={index}
              className={`p-3 bg-[#FFFFFF] py-4 rounded-lg text-center shadow-sm`}
            >
              <p className="text-sm text-gray-500 ">{item.title}</p>
              <p className="text-sm font-bold text-gray-700">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dosage Calculation Form */}
      <div className="p-5 bg-[#F8F7FB] rounded-lg shadow-sm ">
        <h2 className="text-base font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <span className="text-blue-600">💊</span> Dosage Calculation
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Calculate the correct dosage amount using the desired dose, and
          available quantity. This calculator uses the formula:
          <br />
          <span className="font-mono text-gray-800">
            (Desired Dose ÷ Available Dose) × Available Quantity = Amount to
            Give
          </span>
        </p>

        {/* Form Fields */}
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={(value) => console.log(value)}
          layout="vertical"
        >
          <Row gutter={[16, 16]}>
            {formFields?.map((field, index) => (
              <Col xs={24} sm={12} key={index}>
                {field.type === "select" ? (
                  <CustomSelect
                    placeholder={field.placeholder}
                    options={field.options || []}
                    name={field.name}
                    label={field.label}
                    required={false}
                  />
                ) : (
                  <InputField
                    name={field.label}
                    key={field.name}
                    label={field.label}
                    required={false}
                  />
                )}
              </Col>
            ))}
          </Row>
          {/* Calculate Button */}
          <div className="mt-5 flex justify-end">
            <Button
              className="px-4 !py-5 w-full sm:w-auto transition !bg-[#003877] !text-white"
              htmlType="submit"
            >
              Calculate
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
