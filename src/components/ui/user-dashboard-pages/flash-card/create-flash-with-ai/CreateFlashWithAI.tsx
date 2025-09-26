"use client";
import React, { useState } from 'react';
import { Card, Form, Input, InputNumber, Select, Button, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import PageNavbar from '@/components/shared/user-dashboard/PageNavbar';
import { IoMdCard } from 'react-icons/io';

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const CreateFlashWithAI = () => {
  const [formData, setFormData] = useState({
    topic: '',
    notes: '',
    numberOfCards: 5,
    difficulty: 'intermediate'
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGenerate = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Generated flashcards with:', formData);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <PageNavbar
        icon={<IoMdCard className=" text-black" />}
        title="Flashcards"
        subtitle="Master nursing concepts with intelligent falscards and spaced repetition"
        isAiEnhanced={false}
      />

      <div className="max-w-6xl mx-auto p-6">
        <Card className="shadow-sm border border-gray-200 p-8">
          <Title level={2} className="mb-8 !text-gray-800">
            Generate Flashcards with AI
          </Title>

          <Form layout="vertical" className="space-y-6">
            <Form.Item
              label={<span className="font-medium text-gray-700">Topic or Concept *</span>}
              required
            >
              <Input
                value={formData.topic}
                onChange={(e) => handleInputChange('topic', e.target.value)}
                placeholder="e.g., Diabetes Management, Heart failure, Medication Administration"
                className="rounded-md"
              />
            </Form.Item>

            <Form.Item
              label={<span className="font-medium text-gray-700">Your Notes or Content (Optional)</span>}
            >
              <TextArea
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                placeholder="Paste your notes, textbook excerpts, or study materials here..."
                rows={6}
                className="rounded-md"
              />
            </Form.Item>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Form.Item
                label={<span className="font-medium text-gray-700">Number of Flashcards to Generate *</span>}
                required
              >
                <InputNumber
                  min={1}
                  max={50}
                  value={formData.numberOfCards}
                  onChange={(val) => handleInputChange('numberOfCards', val || 5)}
                  className="w-full rounded-md"
                />
              </Form.Item>

              <Form.Item
                label={<span className="font-medium text-gray-700">Difficulty Level *</span>}
                required
              >
                <Select
                  value={formData.difficulty}
                  onChange={(val) => handleInputChange('difficulty', val)}
                  className="w-full rounded-md"
                >
                  <Option value="beginner">Beginner</Option>
                  <Option value="intermediate">Intermediate</Option>
                  <Option value="advanced">Advanced</Option>
                  <Option value="nclex-style">NCLEX-Style Questions</Option>
                </Select>
              </Form.Item>
            </div>

            <Form.Item>
              <Button
                type="primary"
                size="large"
                onClick={handleGenerate}
                loading={loading}
                disabled={!formData.topic.trim()}
                className="min-w-[200px] rounded-md"
                icon={loading ? <LoadingOutlined /> : null}
              >
                {loading ? 'Generating...' : 'Generate Flashcards'}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>

  );
};

export default CreateFlashWithAI;