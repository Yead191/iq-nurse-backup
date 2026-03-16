import { useState } from "react";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import {
  Alert,
  Button,
  Card,
  Checkbox,
  Progress,
  Radio,
  Space,
  Typography,
} from "antd";
import { labsPracticeQuestions } from "@/data/labs-ref/labsQuestion";

const { Title, Text, Paragraph } = Typography;

// Assuming labsPracticeQuestions is defined somewhere
// export const labsPracticeQuestions = [ ... ];

export function LabsPracticeTest() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string | number, any>>({});
  const [showResults, setShowResults] = useState<
    Record<string | number, boolean>
  >({});
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = labsPracticeQuestions[currentQuestionIndex];

  const handleMatrixChange = (
    row: string,
    column: string,
    checked: boolean,
  ) => {
    const cellKey = `${row}-${column}`;
    const currentAnswers = answers[currentQuestion.id] || [];

    if (checked) {
      setAnswers({
        ...answers,
        [currentQuestion.id]: [...currentAnswers, cellKey],
      });
    } else {
      setAnswers({
        ...answers,
        [currentQuestion.id]: currentAnswers.filter(
          (key: string) => key !== cellKey,
        ),
      });
    }
  };

  const handleMultipleResponseChange = (
    option: string,
    checked: boolean,
    partIndex?: number,
  ) => {
    const questionId = currentQuestion.id;
    const key =
      partIndex !== undefined ? `${questionId}-${partIndex}` : questionId;
    const currentAnswers = answers[key] || [];

    if (checked) {
      setAnswers({
        ...answers,
        [key]: [...currentAnswers, option],
      });
    } else {
      setAnswers({
        ...answers,
        [key]: currentAnswers.filter((ans: string) => ans !== option),
      });
    }
  };

  const handleMultipleChoiceChange = (option: string, partIndex?: number) => {
    const questionId = currentQuestion.id;
    const key =
      partIndex !== undefined ? `${questionId}-${partIndex}` : questionId;

    setAnswers({
      ...answers,
      [key]: option,
    });
  };

  const checkAnswer = () => {
    setShowResults({
      ...showResults,
      [currentQuestion.id]: true,
    });
  };

  const isCorrect = () => {
    const userAnswer = answers[currentQuestion.id];
    const correctAnswer = currentQuestion.correctAnswers;

    if (
      currentQuestion.type === "matrix" ||
      currentQuestion.type === "multiple-response"
    ) {
      if (!userAnswer || !correctAnswer) return false;
      const userSet = new Set<string>(userAnswer as string[]);
      const correctSet = new Set<string>(correctAnswer as string[]);
      if (userSet.size !== correctSet.size) return false;
      for (let item of userSet) {
        if (!correctSet.has(item)) return false;
      }
      return true;
    } else if (currentQuestion.type === "drag-drop") {
      if (!userAnswer || !correctAnswer) return false;
      return JSON.stringify(userAnswer) === JSON.stringify(correctAnswer);
    } else {
      return userAnswer === correctAnswer;
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < labsPracticeQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults({});
    setQuizComplete(false);
  };

  const calculateScore = () => {
    let correct = 0;
    labsPracticeQuestions.forEach((question) => {
      const userAnswer = answers[question.id];
      const correctAnswer = question.correctAnswers;

      if (question.type === "matrix" || question.type === "multiple-response") {
        if (userAnswer && correctAnswer) {
          const userSet = new Set<string>(userAnswer as string[]);
          const correctSet = new Set<string>(correctAnswer as string[]);
          if (userSet.size === correctSet.size) {
            let allCorrect = true;
            for (let item of userSet) {
              if (!correctSet.has(item)) {
                allCorrect = false;
                break;
              }
            }
            if (allCorrect) correct++;
          }
        }
      } else if (question.type === "drag-drop") {
        if (JSON.stringify(userAnswer) === JSON.stringify(correctAnswer)) {
          correct++;
        }
      } else if (question.type === "case-study") {
        let allPartsCorrect = true;
        question.caseStudyParts?.forEach((part, index) => {
          const key = `${question.id}-${index}`;
          const partAnswer = answers[key];
          const partCorrect = part.correctAnswers;

          if (part.type === "multiple-response") {
            if (!partAnswer || !partCorrect) {
              allPartsCorrect = false;
              return;
            }
            const userSet = new Set<string>(partAnswer as string[]);
            const correctSet = new Set<string>(partCorrect as string[]);
            if (userSet.size !== correctSet.size) {
              allPartsCorrect = false;
              return;
            }
            for (let item of userSet) {
              if (!correctSet.has(item)) {
                allPartsCorrect = false;
                return;
              }
            }
          } else {
            if (partAnswer !== partCorrect) {
              allPartsCorrect = false;
            }
          }
        });
        if (allPartsCorrect) correct++;
      } else {
        if (userAnswer === correctAnswer) correct++;
      }
    });
    return correct;
  };

  if (quizComplete) {
    const score = calculateScore();
    const percentage = Math.round((score / labsPracticeQuestions.length) * 100);

    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <div className="text-center">
            <Title level={2}>Practice Test Complete!</Title>

            <div className="text-6xl font-bold text-[#2C5F8D] my-6">
              {percentage}%
            </div>

            <Text strong className="text-xl block mb-6">
              You scored {score} out of {labsPracticeQuestions.length} questions
              correct
            </Text>

            {percentage >= 80 && (
              <Alert
                message="Excellent work!"
                description="You have a strong understanding of laboratory values and diagnostic tests."
                type="success"
                showIcon
                icon={<CheckCircleOutlined />}
                className="mb-4"
              />
            )}
            {percentage >= 60 && percentage < 80 && (
              <Alert
                message="Good job!"
                description="Review the topics you missed and try again."
                type="warning"
                showIcon
                icon={<ExclamationCircleOutlined />}
                className="mb-4"
              />
            )}
            {percentage < 60 && (
              <Alert
                message="Keep studying!"
                description="Review the study materials and retake the practice test."
                type="error"
                showIcon
                icon={<CloseCircleOutlined />}
                className="mb-4"
              />
            )}

            <Button
              type="primary"
              icon={<RedoOutlined />}
              onClick={resetQuiz}
              size="large"
            >
              Retake Practice Test
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-4">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>
            Question {currentQuestionIndex + 1} of{" "}
            {labsPracticeQuestions.length}
          </span>
          <span className="font-medium text-[#2C5F8D]">
            {currentQuestion.category}
          </span>
        </div>
        <Progress
          percent={Math.round(
            ((currentQuestionIndex + 1) / labsPracticeQuestions.length) * 100,
          )}
          strokeColor="#2C5F8D"
          showInfo={false}
          size={["default", 8]}
        />
      </div>

      <Card
        title={
          currentQuestion.type === "case-study"
            ? "Case Study Question"
            : `Question ${currentQuestionIndex + 1}`
        }
      >
        <Space direction="vertical" size="large" className="w-full">
          {/* Context */}
          {currentQuestion.context && (
            <Alert
              message="Clinical Scenario"
              description={currentQuestion.context}
              type="info"
              showIcon
            />
          )}

          {/* Question */}
          <Paragraph className="font-medium text-base">
            {currentQuestion.question}
          </Paragraph>

          {/* Matrix */}
          {currentQuestion.type === "matrix" && currentQuestion.matrixData && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left font-semibold">
                      Specimen/Scenario
                    </th>
                    {currentQuestion.matrixData.columns.map((col) => (
                      <th
                        key={col}
                        className="border border-gray-300 p-3 text-center font-semibold text-sm"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentQuestion.matrixData.rows.map((row) => (
                    <tr key={row} className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">
                        {row}
                      </td>
                      {currentQuestion.matrixData!.columns.map((col) => {
                        const cellKey = `${row}-${col}`;
                        const isChecked = (
                          answers[currentQuestion.id] || []
                        ).includes(cellKey);
                        const isCorrectCell =
                          currentQuestion.matrixData!.correctCells.includes(
                            cellKey,
                          );
                        const showFeedback = showResults[currentQuestion.id];

                        let checkboxClass = "";
                        if (showFeedback) {
                          if (isCorrectCell && isChecked)
                            checkboxClass =
                              "border-green-500 [&_.ant-checkbox-inner]:bg-green-500";
                          else if (!isCorrectCell && isChecked)
                            checkboxClass =
                              "border-red-500 [&_.ant-checkbox-inner]:bg-red-500";
                          else if (isCorrectCell)
                            checkboxClass = "border-green-500";
                        }

                        return (
                          <td
                            key={col}
                            className="border border-gray-300 p-3 text-center"
                          >
                            <div className="flex justify-center">
                              <Checkbox
                                checked={isChecked}
                                onChange={(e) =>
                                  handleMatrixChange(row, col, e.target.checked)
                                }
                                disabled={showFeedback}
                                className={checkboxClass}
                              />
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Multiple Response */}
          {currentQuestion.type === "multiple-response" &&
            currentQuestion.options && (
              <div>
                <Text type="secondary" italic className="block mb-3">
                  Select all that apply:
                </Text>
                <Space direction="vertical" className="w-full">
                  {currentQuestion.options.map((option) => {
                    const isChecked = (
                      answers[currentQuestion.id] || []
                    ).includes(option);
                    const isCorrect = (
                      currentQuestion.correctAnswers as string[]
                    ).includes(option);
                    const showFeedback = showResults[currentQuestion.id];

                    let itemClass = "border-gray-200 hover:bg-gray-50";
                    if (showFeedback) {
                      if (isCorrect && isChecked)
                        itemClass = "bg-green-50 border-green-300";
                      else if (!isCorrect && isChecked)
                        itemClass = "bg-red-50 border-red-300";
                      else if (isCorrect)
                        itemClass = "bg-green-50 border-green-300";
                    }

                    return (
                      <div
                        key={option}
                        className={`flex items-start space-x-3 p-3 rounded border ${itemClass}`}
                      >
                        <Checkbox
                          checked={isChecked}
                          onChange={(e) =>
                            handleMultipleResponseChange(
                              option,
                              e.target.checked,
                            )
                          }
                          disabled={showFeedback}
                        />
                        <label className="flex-1 cursor-pointer leading-relaxed">
                          {option}
                          {showFeedback && isCorrect && (
                            <CheckCircleOutlined className="ml-2 text-green-600" />
                          )}
                          {showFeedback && !isCorrect && isChecked && (
                            <CloseCircleOutlined className="ml-2 text-red-600" />
                          )}
                        </label>
                      </div>
                    );
                  })}
                </Space>
              </div>
            )}

          {/* Multiple Choice */}
          {currentQuestion.type === "multiple-choice" &&
            currentQuestion.options && (
              <Radio.Group
                value={answers[currentQuestion.id] || ""}
                onChange={(e) => handleMultipleChoiceChange(e.target.value)}
                disabled={showResults[currentQuestion.id]}
                className="w-full"
              >
                <Space direction="vertical" className="w-full">
                  {currentQuestion.options.map((option) => {
                    const isSelected = answers[currentQuestion.id] === option;
                    const isCorrect = currentQuestion.correctAnswers === option;
                    const showFeedback = showResults[currentQuestion.id];

                    let itemClass = "border-gray-200 hover:bg-gray-50";
                    if (showFeedback) {
                      if (isCorrect) itemClass = "bg-green-50 border-green-300";
                      else if (isSelected)
                        itemClass = "bg-red-50 border-red-300";
                    }

                    return (
                      <div
                        key={option}
                        className={`flex items-start space-x-3 p-3 rounded border ${itemClass}`}
                      >
                        <Radio value={option} />
                        <label className="flex-1 cursor-pointer leading-relaxed">
                          {option}
                          {showFeedback && isCorrect && (
                            <CheckCircleOutlined className="ml-2 text-green-600" />
                          )}
                          {showFeedback && isSelected && !isCorrect && (
                            <CloseCircleOutlined className="ml-2 text-red-600" />
                          )}
                        </label>
                      </div>
                    );
                  })}
                </Space>
              </Radio.Group>
            )}

          {/* Case Study Parts */}
          {currentQuestion.type === "case-study" &&
            currentQuestion.caseStudyParts && (
              <Space direction="vertical" size="large" className="w-full">
                {currentQuestion.caseStudyParts.map((part, partIndex) => (
                  <Card
                    key={partIndex}
                    className="border-l-4 border-l-[#2C5F8D]"
                    title={`Part ${part.part}: ${part.question}`}
                  >
                    {part.type === "multiple-response" && (
                      <div>
                        <Text type="secondary" italic className="block mb-3">
                          Select all that apply:
                        </Text>
                        <Space direction="vertical" className="w-full">
                          {part.options.map((option) => {
                            const key = `${currentQuestion.id}-${partIndex}`;
                            const isChecked = (answers[key] || []).includes(
                              option,
                            );
                            const isCorrect = (
                              part.correctAnswers as string[]
                            ).includes(option);
                            const showFeedback =
                              showResults[currentQuestion.id];

                            let itemClass = "border-gray-200 hover:bg-gray-50";
                            if (showFeedback) {
                              if (isCorrect && isChecked)
                                itemClass = "bg-green-50 border-green-300";
                              else if (!isCorrect && isChecked)
                                itemClass = "bg-red-50 border-red-300";
                              else if (isCorrect)
                                itemClass = "bg-green-50 border-green-300";
                            }

                            return (
                              <div
                                key={option}
                                className={`flex items-start space-x-3 p-3 rounded border ${itemClass}`}
                              >
                                <Checkbox
                                  checked={isChecked}
                                  onChange={(e) =>
                                    handleMultipleResponseChange(
                                      option,
                                      e.target.checked,
                                      partIndex,
                                    )
                                  }
                                  disabled={showFeedback}
                                />
                                <label className="flex-1 cursor-pointer leading-relaxed">
                                  {option}
                                  {showFeedback && isCorrect && (
                                    <CheckCircleOutlined className="ml-2 text-green-600" />
                                  )}
                                  {showFeedback && !isCorrect && isChecked && (
                                    <CloseCircleOutlined className="ml-2 text-red-600" />
                                  )}
                                </label>
                              </div>
                            );
                          })}
                        </Space>
                      </div>
                    )}

                    {part.type === "multiple-choice" && (
                      <Radio.Group
                        value={
                          answers[`${currentQuestion.id}-${partIndex}`] || ""
                        }
                        onChange={(e) =>
                          handleMultipleChoiceChange(e.target.value, partIndex)
                        }
                        disabled={showResults[currentQuestion.id]}
                        className="w-full"
                      >
                        <Space direction="vertical" className="w-full">
                          {part.options.map((option) => {
                            const key = `${currentQuestion.id}-${partIndex}`;
                            const isSelected = answers[key] === option;
                            const isCorrect = part.correctAnswers === option;
                            const showFeedback =
                              showResults[currentQuestion.id];

                            let itemClass = "border-gray-200 hover:bg-gray-50";
                            if (showFeedback) {
                              if (isCorrect)
                                itemClass = "bg-green-50 border-green-300";
                              else if (isSelected)
                                itemClass = "bg-red-50 border-red-300";
                            }

                            return (
                              <div
                                key={option}
                                className={`flex items-start space-x-3 p-3 rounded border ${itemClass}`}
                              >
                                <Radio value={option} />
                                <label className="flex-1 cursor-pointer leading-relaxed">
                                  {option}
                                  {showFeedback && isCorrect && (
                                    <CheckCircleOutlined className="ml-2 text-green-600" />
                                  )}
                                  {showFeedback && isSelected && !isCorrect && (
                                    <CloseCircleOutlined className="ml-2 text-red-600" />
                                  )}
                                </label>
                              </div>
                            );
                          })}
                        </Space>
                      </Radio.Group>
                    )}
                  </Card>
                ))}
              </Space>
            )}

          {/* Drag & Drop placeholder */}
          {currentQuestion.type === "drag-drop" && currentQuestion.options && (
            <Alert
              message="Instructions"
              description={
                <div>
                  Read the options below and determine the correct order.
                  <div className="mt-4 space-y-2">
                    {currentQuestion.options.map((option, index) => (
                      <div
                        key={index}
                        className="p-2 bg-white rounded border border-amber-200"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              }
              type="warning"
              showIcon
            />
          )}

          {/* Rationale */}
          {showResults[currentQuestion.id] && (
            <Alert
              message={isCorrect() ? "Correct!" : "Rationale"}
              description={currentQuestion.rationale}
              type={isCorrect() ? "success" : "info"}
              showIcon
              icon={
                isCorrect() ? (
                  <CheckCircleOutlined />
                ) : (
                  <ExclamationCircleOutlined />
                )
              }
            />
          )}

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <Button
              onClick={previousQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </Button>

            <div className="space-x-2">
              {!showResults[currentQuestion.id] && (
                <Button type="primary" onClick={checkAnswer}>
                  Check Answer
                </Button>
              )}
              {showResults[currentQuestion.id] && (
                <Button type="primary" onClick={nextQuestion}>
                  {currentQuestionIndex === labsPracticeQuestions.length - 1
                    ? "View Results"
                    : "Next Question"}
                </Button>
              )}
            </div>
          </div>
        </Space>
      </Card>
    </div>
  );
}
