import React, { useState } from "react";
import NCLEXPracticeSection from "../../../user-home-page/practice-qurestion/NCLEXPracticeSection";
import QuestionCard from "../../../user-home-page/practice-qurestion/QuestionCard";
import { SectionHeader } from "../../../user-home-page/SectionHeader";
import CompletionCard from "../../../user-home-page/practice-qurestion/CompletionCard";

const category = {
  questions: [
    {
      id: 1,
      question:
        "A client with heart failure is receiving furosemide (Lasix) 40 mg IV. The nurse should monitor which of the following laboratory values most closely?",
      options: ["Sodium", "Potassium", "Calcium", "Magnesium"],
      correctAnswer: "A.Sodium",
      explanation:
        "Furosemide is a loop diuretic that can cause significant electrolyte imbalances, particularly hyponatremia and hypokalemia. Sodium levels should be monitored closely.",
    },
    {
      id: 2,
      question:
        "Which medication requires the nurse to monitor the client's apical pulse before administration?",
      options: ["Digoxin", "Metformin", "Lisinopril", "Warfarin"],
      correctAnswer: "A.Digoxin",
      explanation:
        "Digoxin affects heart rate and rhythm. The apical pulse should be checked before administration, and the medication should be held if the pulse is below 60 bpm.",
    },
    {
      id: 3,
      question:
        "A client is prescribed warfarin. Which laboratory value should the nurse monitor?",
      options: ["PT/INR", "CBC", "BUN", "Glucose"],
      correctAnswer: "A.PT/INR",
      explanation:
        "Warfarin is an anticoagulant that affects clotting time. PT/INR levels must be monitored to ensure therapeutic levels and prevent bleeding complications.",
    },
    {
      id: 4,
      question:
        "Which side effect is most concerning for a client taking ACE inhibitors?",
      options: ["Dry cough", "Hyperkalemia", "Hypotension", "Angioedema"],
      correctAnswer: "D.Angioedema",
      explanation:
        "While all options are potential side effects, angioedema is the most life-threatening as it can cause airway obstruction.",
    },
    {
      id: 5,
      question:
        "A client receiving heparin therapy should be monitored for which laboratory value?",
      options: ["aPTT", "PT/INR", "Platelet count", "Hemoglobin"],
      correctAnswer: "A.aPTT",
      explanation:
        "Heparin therapy requires monitoring of aPTT (activated partial thromboplastin time) to ensure therapeutic anticoagulation levels.",
    },
  ],
};

export default function ExamTab() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [score, setScore] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);

  const currentQuestion = category?.questions[currentQuestionIndex];
  const totalQuestions = category?.questions.length || 0;

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Calculate score and show completion
      const correctAnswers = category.questions.reduce((acc, question) => {
        if (selectedAnswers[question.id] === question.correctAnswer) {
          return acc + 1;
        }
        return acc;
      }, 0);
      setScore(correctAnswers);
      setShowCompletion(true);
    }
  };

  const handleSubmitAnswer = () => {
    handleNextQuestion();
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowCompletion(false);
    setScore(0);
  };

  return (
    <div>
      {showCompletion ? (
        <div
          style={{
            boxShadow: "4px 4px 29px 0px rgba(0, 0, 0, 0.14)",
            borderRadius: 12,
          }}
          className="my-8 p-4 lg:p-5 py-6 "
        >
          <CompletionCard
            score={score}
            totalQuestions={totalQuestions}
            category={"Pharmacology"}
            onRetry={handleRetry}
          />
        </div>
      ) : (
        currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={totalQuestions}
            selectedAnswer={selectedAnswers[currentQuestion.id]}
            onAnswerSelect={(answer) =>
              handleAnswerSelect(currentQuestion.id, answer)
            }
            onNextQuestion={handleNextQuestion}
            onSubmitAnswer={handleSubmitAnswer}
            isLastQuestion={currentQuestionIndex === totalQuestions - 1}
          />
        )
      )}
    </div>
  );
}
