"use client"
import { questions } from '@/data/testQuestionData';
import React, { useState } from 'react';
import MCQAnswer from './MCQAnswer';
import { usePathname } from 'next/navigation';

const AllMCQQuestions = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const mode = segments[segments.length - 3];

  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  return (
    <div className="w-full mx-auto lg:p-6 p-2 space-y-8">
      {questions
        .filter((q) => q.type === "mcq") 
        .map((question) => (
          <div key={question.id} className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Question No {question.id}
            </h2>

            <MCQAnswer
              mode={mode}
              question={question.question}
              options={question.options}
              correctAnswer={question.correctAnswer}
              selectedAnswer={question.selectedAnswer}
              onAnswerChange={(answer) =>
                handleAnswerChange(question.id, answer)
              }
              explanation={question.explanation}
            />
          </div>
        ))}
    </div>
  );
};

export default AllMCQQuestions;
