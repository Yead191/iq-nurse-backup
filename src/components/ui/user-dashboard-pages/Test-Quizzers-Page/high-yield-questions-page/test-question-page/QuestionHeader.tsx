"use client"

import { useEffect, useState } from "react"
import { Clock, Flag, Calculator } from "lucide-react"

interface QuestionHeaderProps {
  subject: string
  category: string
  currentQuestion: number
  totalQuestions: number
  timeRemaining: number
  isMarkedForReview: boolean
  onMarkForReview: () => void
}

export default function QuestionHeader({
  subject,
  category,
  currentQuestion,
  totalQuestions,
  timeRemaining: initialTime,
  isMarkedForReview,
  onMarkForReview,
}: QuestionHeaderProps) {
  const [timeRemaining, setTimeRemaining] = useState(initialTime)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => Math.max(0, prev - 1))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="bg-blue-800 text-white px-6 py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Calculator className="w-4 h-4" />
            <span className="text-sm font-medium">Calculator</span>
          </div>

          <div className="text-center">
            <div className="text-lg font-semibold">{subject}</div>
            <div className="text-sm opacity-90">{category}</div>
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Time:{formatTime(timeRemaining)}</span>
          </div>

          <div className="text-center">
            <div className="text-sm opacity-90">
              Question {currentQuestion} of {totalQuestions}
            </div>
          </div>

          <button
            onClick={onMarkForReview}
            className={`flex items-center space-x-2 px-3 py-1 rounded text-sm font-medium transition-colors ${
              isMarkedForReview ? "bg-yellow-500 text-yellow-900" : "bg-blue-700 hover:bg-blue-600"
            }`}
          >
            <Flag className="w-4 h-4" />
            <span>Mark for Review</span>
          </button>
        </div>
      </div>
    </div>
  )
}
