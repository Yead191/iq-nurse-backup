import { QuizQuestion } from '@/data/chatQuizSection'
import { Radio } from 'antd'
import React from 'react'


export default function QuizQuestionCard({selectedAnswer, handleAnswerChange, currentQuestion}:{selectedAnswer: string, handleAnswerChange: (value: string) => void, currentQuestion: QuizQuestion}) {
  return (
<div className="space-y-3 mb-8">
            <Radio.Group 
              value={selectedAnswer} 
              onChange={(e) => handleAnswerChange(e.target.value)}
              className="w-full"
            >
              {currentQuestion.options.map((option) => (
                <div key={option.id} className="w-full">
                  <Radio.Button
                    value={option.id}
                    className="!w-full !important !h-14 !flex !items-center !justify-start !text-left !px-0 !border-none !rounded-lg !mb-2 hover:!border-blue-300 !bg-gray-100 !transition-colors"
                    style={{
                      backgroundColor: selectedAnswer === option.id ? '#e3f2fd' : 'white',
                      borderColor: selectedAnswer === option.id ? '#1976d2' : '#e0e0e0',
                    }}
                  >
                    <div className="flex items-center w-full">
                      <div 
                        className="w-8 h-8 !rounded-md flex items-center justify-center text-white font-medium text-sm mr-4 ml-4"
                        style={{ 
                          backgroundColor: selectedAnswer === option.id ? '#1976d2' : '#6b7280' 
                        }}
                      >
                        {option.id}
                      </div>
                      <span className="text-gray-700 font-medium">
                        {option.text}
                      </span>
                    </div>
                  </Radio.Button>
                </div>
              ))}
            </Radio.Group>
          </div>
  )
}
