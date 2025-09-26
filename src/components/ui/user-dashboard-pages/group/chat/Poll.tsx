import React, { useState } from "react";
import { Button, Progress, Badge, Input, Radio, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const QuickDecisionPoll = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);

  // Poll data - in a real app this would come from props or API
  const pollData = {
    title: "Quick Decision Poll",
    question: "Which of the following is a priority area to focus?",
    status: "Active",
    timeLeft: "3 minutes left",
    totalParticipants: 20,
    options: [
      { id: 1, text: "Partnership growth", votes: 12 },
      { id: 2, text: "Engagement", votes: 5 },
      { id: 3, text: "Co-creation", votes: 2 },
      { id: 4, text: "Shared resources", votes: 1 },
    ],
  };

  const totalVotes = pollData.options.reduce(
    (sum, option) => sum + option.votes,
    0
  );

  const handleOptionClick = (optionId: number) => {
    if (!hasVoted) {
      setSelectedOption(optionId as unknown as null);
    }
  };

  const handleSubmitVote = () => {
    if (selectedOption) {
      setHasVoted(true);
      // Handle vote submission logic here
      console.log("Voted for option:", selectedOption);
    }
  };

  const getVotePercentage = (votes: number) => {
    return totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleRemoveOption = (index: number) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  return (
    <div className="w-full bg-white rounded-lg border-gray-200 overflow-hidden">
      {isCreating ? (
        <div className="p-4">
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
                        onChange={(e) =>
                          handleOptionChange(index, e.target.value)
                        }
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
              <Button
                type="dashed"
                onClick={handleAddOption}
                className="mt-2 w-full"
              >
                Add Option
              </Button>
            </div>

            <div className="flex justify-end gap-2">
              <Button onClick={() => setIsCreating(false)}>Cancel</Button>
              <Button type="primary">Create Poll</Button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-0">
              {pollData.title}
            </h3>
            <Badge
              count={pollData.status}
              style={{
                backgroundColor: "#e6f3ff",
                color: "#1890ff",
                border: "1px solid #91d5ff",
              }}
            />
          </div>

          {/* Poll Content */}
          <div className="p-4">
            <p className="text-gray-700 mb-4 font-medium">
              {pollData.question}
            </p>

            {/* Poll Options */}
            <div className="space-y-3 mb-6">
              {pollData.options.map((option) => {
                const percentage = getVotePercentage(option.votes);
                const isSelected = selectedOption === option.id;

                return (
                  <div
                    key={option.id}
                    onClick={() => handleOptionClick(option.id)}
                    className={`relative cursor-pointer rounded-lg border-2 transition-all duration-200 ${
                      isSelected
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    } ${hasVoted ? "cursor-default" : ""}`}
                  >
                    {/* Progress background for voted options */}
                    {hasVoted && (
                      <div
                        className="absolute inset-0 bg-blue-100 rounded-lg transition-all duration-500"
                        style={{
                          width: `${percentage}%`,
                          opacity: 0.3,
                        }}
                      />
                    )}

                    <div className="relative p-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-gray-800 font-medium">
                          {option.text}
                        </span>
                        {hasVoted && (
                          <span className="ml-2 text-sm text-gray-600">
                            {option.votes} vote{option.votes !== 1 ? "s" : ""}
                          </span>
                        )}
                      </div>

                      {hasVoted && (
                        <span className="text-sm font-medium text-gray-600">
                          {percentage}%
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                <span>
                  {pollData.totalParticipants} participant
                  {pollData.totalParticipants !== 1 ? "s" : ""}
                </span>
                <span className="mx-2">•</span>
                <span>{pollData.timeLeft}</span>
              </div>

              <div className="flex gap-2">
                <Button
                  type="default"
                  className="rounded-lg"
                  onClick={() => setIsCreating(true)}
                >
                  Create Poll
                </Button>
                {!hasVoted ? (
                  <Button
                    type="primary"
                    onClick={handleSubmitVote}
                    disabled={!selectedOption}
                    className="rounded-lg bg-blue-600"
                  >
                    Submit Vote
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    className="rounded-lg bg-green-600"
                    disabled
                  >
                    Voted ✓
                  </Button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default QuickDecisionPoll;
