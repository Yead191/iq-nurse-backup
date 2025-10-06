"use client";
import { Slider, Radio, Button, Space, Typography } from "antd";

const { Title, Text } = Typography;

interface ExamConfigSectionProps {
  numQuestions: number;
  setNumQuestions: (value: number) => void;
  examMode: string;
  handleExamModeChange: any;
  handleStart: any;
}

export default function ExamConfigSection({
  numQuestions,
  setNumQuestions,
  examMode,
  handleStart,
  handleExamModeChange,
}: ExamConfigSectionProps) {
  return (
    <div className="space-y-6 py-6">
      {/* Number of Questions */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <Text strong>Number of Questions:</Text>
          <Text>{numQuestions}</Text>
        </div>
        <Slider
          min={5}
          max={256}
          value={numQuestions}
          onChange={setNumQuestions}
          tooltip={{ open: false }}
          trackStyle={{ backgroundColor: "#003877" }}
          handleStyle={{ borderColor: "#1890ff" }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span className="font-semibold text-[#212529]">5</span>
          <span className="font-semibold text-[#212529]">256</span>
        </div>
      </div>

      {/* Exam Mode */}
      <div className="flex flex-col space-y-6">
        <Text strong className="block mb-3 gap-2 md:gap-6">
          Exam Mode:
        </Text>
        <Radio.Group
          value={examMode}
          onChange={handleExamModeChange}
          className="w-full flex items-center "
        >
          <Radio value="practice" className="w-full ">
            <div className="flex justify-between items-center w-full gap-4 md:gap-6 pl-2 md:pl-6">
              <span className="font-medium">Practice</span>
              <span className="text-sm text-gray-500">No time-Limit</span>
              <span className="text-sm text-gray-500">
                Answers are displayed as you go
              </span>
            </div>
          </Radio>

          <Radio value="test" className="w-full">
            <div className="flex justify-between items-center w-full gap-4 md:gap-6 pl-2 md:pl-6">
              <span className="font-medium">Test</span>
              <span className="text-sm text-gray-500">
                Green highlights a correct answer, red highlights an incorrect
                answer
              </span>
            </div>
          </Radio>
        </Radio.Group>
      </div>

      <div className="max-w-lg ">
        {/* Start Button */}
        <Button
          size="large"
          block
          onClick={handleStart}
          style={{
            backgroundColor: "#003877",
            borderColor: "#003877",
            height: "48px",
            fontSize: "16px",
            fontWeight: "500",
            color: "white",
          }}
        >
          Start
        </Button>
      </div>
    </div>
  );
}
