"use client";

import { useId, useState } from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { v4 as uuidv4 } from "uuid";
import dayjs, { type Dayjs } from "dayjs";
import { EventItem } from "./AsidePanel";

const { RangePicker } = DatePicker;

type Props = {
  onAdd: (event: EventItem) => void;
};

export function EventForm({ onAdd }: Props) {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const id = useId();

  const onFinish = async (values: {
    title: string;
    course?: string;
    description?: string;
    time: [Dayjs, Dayjs];
    location: string;
    mode: "Online" | "In Person";
    color: string;
  }) => {
    setSubmitting(true);
    const [start, end] = values.time;
    const newEvent: EventItem = {
      id: uuidv4(),
      title: values.title,
      course: values.course,
      description: values.description,
      start: start.toISOString(),
      end: end.toISOString(),
      location: values.location,
      mode: values.mode,
      color: values.color,
    };
    onAdd(newEvent);
    form.resetFields();
    setSubmitting(false);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        mode: "Online",
        color: "bg-rose-100",
        time: [dayjs().hour(15).minute(0), dayjs().hour(16).minute(30)],
      }}
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: "Please enter a title" }]}
      >
        <Input placeholder="e.g., Pediatrics Clinical" />
      </Form.Item>
      <Form.Item name="course" label="Course">
        <Input placeholder="e.g., Pediatrics" />
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input.TextArea
          placeholder="Short description"
          autoSize={{ minRows: 2, maxRows: 4 }}
        />
      </Form.Item>
      <Form.Item
        name="time"
        label="Time"
        rules={[{ required: true, message: "Select a start and end time" }]}
      >
        <RangePicker showTime format="MMM D, HH:mm" className="w-full" />
      </Form.Item>
      <Form.Item
        name="location"
        label="Location"
        rules={[{ required: true, message: "Enter a location" }]}
      >
        <Input placeholder="Online or Room 201" />
      </Form.Item>
      <div className="grid grid-cols-2 gap-3">
        <Form.Item name="mode" label="Mode">
          <Select
            options={[
              { label: "Online", value: "Online" },
              { label: "In Person", value: "In Person" },
            ]}
          />
        </Form.Item>
        <Form.Item name="color" label="Accent">
          <Select
            options={[
              { label: "Peach", value: "bg-rose-100" },
              { label: "Blue", value: "bg-sky-100" },
              { label: "Purple", value: "bg-violet-100" },
              { label: "Green", value: "bg-emerald-100" },
              { label: "Yellow", value: "bg-amber-100" },
            ]}
          />
        </Form.Item>
      </div>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={submitting}
          className="w-full"
        >
          Add Event
        </Button>
      </Form.Item>
    </Form>
  );
}
