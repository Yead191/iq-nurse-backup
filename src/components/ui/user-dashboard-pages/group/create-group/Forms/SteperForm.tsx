import { Button, Form, Steps } from "antd";
import { App as AntdApp } from "antd";
import { useState, useEffect } from "react";
import { StepItem } from "../CreateGroupPage";
import { SuccessGroup } from "./form-steps/SuccessGroup";

export const StepperForm: React.FC<{
  steps: StepItem[];
  onSubmit: (values: any) => void;
}> = ({ steps, onSubmit }) => {
  const [form] = Form.useForm();

  const [current, setCurrent] = useState(() => {
    const savedStep = typeof window !== 'undefined' ? window.localStorage?.getItem('currentStep') : null;
    return savedStep ? parseInt(savedStep, 10) : 0;
  });

  useEffect(() => {
    if(steps[current]?.content)localStorage.setItem('currentStep', current.toString());

  }, [current]);

  const next = async () => {
    try {
      await form.validateFields();
      // Save form data to localStorage
      const currentFormData = form.getFieldsValue(true);
      localStorage.setItem('formData', JSON.stringify(currentFormData));

      setCurrent(current + 1);
    } catch (err) {
      console.log("Validation failed:", err);
    }
  };

  const prev = () => setCurrent(current - 1);

  useEffect(() => {
    // Load saved form data on component mount
    const savedFormData = localStorage?.getItem('formData');
    if (savedFormData) {
      form.setFieldsValue(JSON.parse(savedFormData));
    }
  }, []);

  const handleFinish = (values: any) => {

    onSubmit(values);
    setCurrent(current + 1);
    // Clear localStorage after successful submission
    localStorage.removeItem('currentStep');
    localStorage.removeItem('formData');

  };

  const handleFinalSubmit = async () => {
    try {
      await form.validateFields();
      const allValues = form.getFieldsValue(true);
      handleFinish(allValues);
    } catch (err) {
      console.log("Final validation failed:", err);
    }
  };

  return (
    <Form
      form={form}
      onFinish={handleFinish}
      layout="vertical"
      preserve={true}
    >
      <div
        style={{
          boxShadow: "4px 4px 24px 0px rgba(0, 0, 0, 0.14)",
          borderRadius: 12
        }}
        className="py-2 pt-8">
        <Steps
          current={current}
          responsive={false}
          items={steps.map((s) => ({ title: s.title }))}
          direction="horizontal"
          labelPlacement="vertical"
        />
      </div>

      <div
        style={{
          boxShadow: "4px 4px 24px 0px rgba(0, 0, 0, 0.14)",
          borderRadius: 12
        }}
        className="mt-4  bg-gray-50  max-h-[calc(100vh-350px)] overflow-auto ">
        {steps[current]?.content}

        {
          !steps[current]?.content && <SuccessGroup />
        }
      </div>
      {
        steps[current]?.content &&
        <div style={{ marginTop: 24 }} className="flex justify-between">
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={prev}>
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button className="!bg-primary !text-white" onClick={next}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={handleFinalSubmit}>
              Create Group
            </Button>
          )}
        </div>
      }

    </Form>
  );
};