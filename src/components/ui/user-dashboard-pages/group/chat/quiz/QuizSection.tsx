import React, { useState } from 'react';
import { Button, Radio, Card, Typography } from 'antd';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { quizData } from '@/data/chatQuizSection';
import QuizQuestionCard from './QuizQuestionCard';

const { Title, Text } = Typography;


const QuizSection: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [questionAndAnswers, setQuestionAndAnswers] = useState<{question: string, answer: string}[]>([]);


  const currentQuestion = quizData[currentQuestionIndex];
  const totalQuestions = quizData.length;

  const handleAnswerChange = (value: string) => {
    setSelectedAnswer(value);
    setQuestionAndAnswers((prev) => {
      const newQuestionAndAnswers = [...prev];
      newQuestionAndAnswers[currentQuestionIndex] = { question: currentQuestion.question, answer: value };
      return newQuestionAndAnswers;
    });
    if (currentQuestionIndex < totalQuestions - 1) {
      console.log(questionAndAnswers);
      
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(''); // Reset selection for new question
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(''); // Reset selection for new question
    }
  };

  return (
    <div className="p-6">
      <Card className="shadow-sm">
        <div className="p-6">
          {/* Question Header */}
          <div className="mb-6">
            <Text className="text-blue-600 font-medium text-sm">
              Question {currentQuestion.id} of {totalQuestions}
            </Text>
            <Title level={3} className="mt-2 text-gray-800 font-medium">
              {currentQuestion.question}
            </Title>
          </div>

          {/* Answer Options */}
          <QuizQuestionCard selectedAnswer={selectedAnswer} handleAnswerChange={handleAnswerChange} currentQuestion={currentQuestion} />

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="flex items-center"
              size="large"
              icon={<ChevronLeft className="w-4 h-4" />}
            >
              Previous
            </Button>

            <Button
              onClick={handleNext}
             
              className="flex items-center !bg-primary !text-white hover:bg-blue-700"
              size="large"
            >
              {currentQuestionIndex === totalQuestions - 1 ? 'Submit' : 'Next'}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

        </div>
      </Card>
    </div>
  );
};

export default QuizSection;