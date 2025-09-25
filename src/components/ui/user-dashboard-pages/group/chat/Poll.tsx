import React, { useState } from 'react';
import { Button, Input, Radio, Space, Typography } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Poll = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleRemoveOption = (index: number) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = () => {
    // Handle poll submission
    console.log({
      question,
      options,
      selectedOption
    });
  };

  return (
    <div className="w-full bg-white rounded-lg p-6 shadow-sm">
      <Title level={4} className="mb-4">Create a Poll</Title>
      
      <div className="space-y-4">
        {/* Question Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Question
          </label>
          <Input
            placeholder="Enter your question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Options */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Options
          </label>
          <Radio.Group
            className="w-full"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <Space direction="vertical" className="w-full">
              {options.map((option, index) => (
                <div key={index} className="flex items-center gap-2 w-full">
                  <Radio value={index} />
                  <Input
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    className="flex-1"
                  />
                  {options.length > 2 && (
                    <Button
                      type="text"
                      icon={<DeleteOutlined />}
                      onClick={() => handleRemoveOption(index)}
                      danger
                    />
                  )}
                </div>
              ))}
            </Space>
          </Radio.Group>
        </div>

        {/* Add Option Button */}
        <Button
          type="dashed"
          onClick={handleAddOption}
          icon={<PlusOutlined />}
          className="w-full"
        >
          Add Option
        </Button>

        {/* Submit Button */}
        <Button
          type="primary"
          onClick={handleSubmit}
          className="w-full bg-blue-500"
        >
          Create Poll
        </Button>
      </div>
    </div>
  );
};

export default Poll;