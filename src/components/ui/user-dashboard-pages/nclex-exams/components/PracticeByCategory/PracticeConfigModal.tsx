// src/components/practice/PracticeConfigModal.tsx
import { Category, Subtopic } from "@/data/types";
import { Modal, Space, Typography, Slider, Radio } from "antd";

const { Text } = Typography;

interface PracticeConfigModalProps {
  open: boolean;
  onCancel: () => void;
  onStart: () => void;
  selectedCategory: Category | null;
  selectedSubtopic: Subtopic | null;
  questionCount: number[];
  onQuestionCountChange: (value: number[]) => void;
  mode: "practice" | "test";
  onModeChange: (value: "practice" | "test") => void;
  maxQuestions: number;
}

export function PracticeConfigModal({
  open,
  onCancel,
  onStart,
  selectedCategory,
  selectedSubtopic,
  questionCount,
  onQuestionCountChange,
  mode,
  onModeChange,
  maxQuestions,
}: PracticeConfigModalProps) {
  return (
    <Modal
      title="Configure Practice Session"
      open={open}
      onCancel={onCancel}
      onOk={onStart}
      okText="Start Practice"
      cancelText="Cancel"
      width={480}
      centered
    >
      <Space
        direction="vertical"
        size="large"
        style={{ width: "100%", marginTop: 16 }}
      >
        <div>
          <Text strong>Selected Topic</Text>
          <div style={{ marginTop: 4 }}>
            <Text type="secondary">
              {selectedCategory?.name}
              {selectedSubtopic && ` — ${selectedSubtopic.name}`}
            </Text>
          </div>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <Text strong>Number of Questions</Text>
            <Text strong style={{ color: "#1890ff" }}>
              {questionCount[0]}
            </Text>
          </div>
          <Slider
            value={questionCount[0]}
            onChange={(val) => onQuestionCountChange([val as number])}
            min={10}
            max={maxQuestions}
            step={10}
          />
          <Text type="secondary" style={{ fontSize: 12 }}>
            Available: {maxQuestions} questions
          </Text>
        </div>

        <div>
          <h4 className="block font-semibold mb-2">Practice Mode</h4>
          <Radio.Group
            value={mode}
            onChange={(e) => onModeChange(e.target.value)}
            style={{ width: "100%" }}
          >
            <div className="flex flex-col gap-2">
              <Radio
                value="practice"
                className="flex !items-start gap-2 border border-gray-200 !p-2 rounded-lg"
              >
                <Text strong>Practice Mode</Text>
                <div style={{ marginTop: 4 }}>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    See rationales immediately after answering each question and
                    make flashcards from rationales
                  </Text>
                </div>
              </Radio>

              <Radio
                value="test"
                className="flex !items-start gap-2 border border-gray-200 !p-2 rounded-lg"
              >
                <div>
                  <Text strong>Test Mode</Text>
                  <div style={{ marginTop: 4 }}>
                    <Text type="secondary" style={{ fontSize: 12 }}>
                      Review rationales only after completing all questions
                    </Text>
                  </div>
                </div>
              </Radio>
            </div>
          </Radio.Group>
        </div>
      </Space>
    </Modal>
  );
}
