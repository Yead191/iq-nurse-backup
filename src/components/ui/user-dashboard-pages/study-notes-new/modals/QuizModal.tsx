import { useState, useEffect } from "react";
import { Modal, Button, Progress, Badge } from "antd";
import { RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  topicTitle: string;
  topicId?: string;
}

export function QuizModal({
  isOpen,
  onClose,
  topicTitle,
  topicId,
}: QuizModalProps) {
  //   const { getQuestionsByTopic } = useQuestions();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      topicId: "sinus-tachy-brady",
      text: "A nurse is caring for a client with heart failure. Which assessment finding would indicate that the client's condition is worsening?",
      options: [
        "Decreased heart rate",
        "Weight loss of 2 pounds",
        "Crackles in lung bases",
        "Decreased respiratory rate",
      ],
      correctAnswer: 2,
      explanation:
        "Crackles in the lung bases suggest fluid accumulation (pulmonary edema), a sign of worsening left-sided heart failure.",
    },
    {
      id: 2,
      topicId: "sinus-tachy-brady",
      text: "Which medication should the nurse question for a patient with symptomatic sinus bradycardia?",
      options: ["Atropine", "Metoprolol", "Dopamine", "Epinephrine"],
      correctAnswer: 1,
      explanation:
        "Metoprolol is a beta-blocker which decreases heart rate and would worsen bradycardia.",
    },
    {
      id: 3,
      topicId: "sinus-tachy-brady",
      text: "A patient with Atrial Fibrillation is at highest risk for which complication?",
      options: [
        "Pulmonary Embolism",
        "Stroke",
        "Heart Block",
        "Ventricular Tachycardia",
      ],
      correctAnswer: 1,
      explanation:
        "Atrial fibrillation causes stasis of blood in the atria, which can lead to clot formation and subsequent stroke.",
    },
    {
      id: 4,
      topicId: "preeclampsia-eclampsia",
      text: "What is the primary therapeutic level for Magnesium Sulfate when treating preeclampsia?",
      options: [
        "1.5 - 2.5 mEq/L",
        "4 - 7 mEq/L",
        "8 - 10 mEq/L",
        "10 - 12 mEq/L",
      ],
      correctAnswer: 1,
      explanation:
        "The therapeutic range for Magnesium Sulfate for seizure prophylaxis is 4-7 mEq/L. Levels above this can lead to toxicity.",
    },
    {
      id: 5,
      topicId: "preeclampsia-eclampsia",
      text: "Which finding is the FIRST sign of Magnesium Sulfate toxicity?",
      options: [
        "Respiratory depression",
        "Cardiac arrest",
        "Loss of deep tendon reflexes (DTRs)",
        "Decreased urine output",
      ],
      correctAnswer: 2,
      explanation:
        "Loss of deep tendon reflexes (typically the patellar reflex) is the earliest sign of magnesium toxicity, occurring at levels around 8-10 mEq/L.",
    },
    {
      id: 6,
      topicId: "stroke",
      text: "A patient with Addison's disease presents to the emergency department with severe hypotension, tachycardia, and confusion. Which action should the nurse take FIRST?",
      options: [
        "Administer oral prednisone",
        "Start IV normal saline",
        "Administer IV hydrocortisone",
        "Check blood glucose level",
      ],
      correctAnswer: 2,
      explanation:
        "This patient is experiencing Addisonian crisis, a life-threatening emergency. IV glucocorticoids (hydrocortisone) must be administered immediately, followed by IV fluids and dextrose. Never delay steroid administration in suspected adrenal crisis.",
    },
    {
      id: 7,
      topicId: "stroke",
      text: "Which laboratory finding would the nurse expect in a patient with Addison's disease?",
      options: [
        "Hypernatremia and hypokalemia",
        "Hyponatremia and hyperkalemia",
        "Hyperglycemia and hypercalcemia",
        "Hypokalemia and hyperglycemia",
      ],
      correctAnswer: 1,
      explanation:
        "In Addison's disease, there is decreased aldosterone (which normally retains sodium and excretes potassium), leading to hyponatremia (low sodium) and hyperkalemia (high potassium). Remember: ↓ Na = ↑ K.",
    },
    {
      id: 8,
      topicId: "stroke",
      text: "A patient with Addison's disease is being discharged on prednisone. Which statement by the patient indicates a need for further teaching?",
      options: [
        "I will wear a medical alert bracelet at all times.",
        "I can stop taking the medication once I feel better.",
        "I will increase my sodium intake and decrease potassium.",
        "I need to increase my steroid dose during times of stress or illness.",
      ],
      correctAnswer: 1,
      explanation:
        "Patients with Addison's disease require lifelong steroid replacement. Abruptly stopping steroids can trigger an Addisonian crisis. This statement indicates the patient does not understand the critical need for continuous therapy.",
    },
    {
      id: 9,
      topicId: "stroke",
      text: "Which dietary modification should the nurse recommend for a patient with Addison's disease?",
      options: [
        "Increase potassium, decrease sodium",
        "Increase sodium, protein, and carbs; decrease potassium",
        "Low-protein, high-potassium diet",
        "Restrict all fluids and sodium",
      ],
      correctAnswer: 1,
      explanation:
        "Patients with Addison's disease lose sodium due to decreased aldosterone. They should increase sodium, protein, and carbohydrates while decreasing potassium intake to counteract the hyperkalemia.",
    },
    {
      id: 10,
      topicId: "stroke",
      text: "Which classic symptom helps differentiate Addison's disease from other endocrine disorders?",
      options: [
        "Moon face and buffalo hump",
        "Bronze or hyperpigmented skin",
        "Exophthalmos and goiter",
        "Cold intolerance and weight gain",
      ],
      correctAnswer: 1,
      explanation:
        "Bronze or hyperpigmented skin is a classic sign of Addison's disease due to increased ACTH stimulating melanocytes. This is not seen in Cushing's syndrome (moon face), hyperthyroidism (exophthalmos), or hypothyroidism (cold intolerance).",
    },
  ];

  useEffect(() => {
    if (isOpen) {
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setIsAnswered(false);
      setScore(0);
      setShowResult(false);
    }
  }, [isOpen, topicId]);

  if (!questions || questions.length === 0) {
    return (
      <Modal open={isOpen} onCancel={onClose} footer={null} width={500}>
        <h2 className="text-xl font-bold mb-2">{topicTitle} Quiz</h2>
        <p className="text-gray-500 mb-4">
          No questions available for this topic yet.
        </p>

        <div className="flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </Modal>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;

    setIsAnswered(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  return (
    <Modal open={isOpen} onCancel={onClose} footer={null} width={900}>
      <div className="mb-4 mt-5">
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#2C5F8D]">
            {topicTitle} Knowledge Check
          </h2>

          <Badge
            count={`Score: ${score}/${questions.length}`}
            style={{ backgroundColor: "#2C5F8D" }}
          />
        </div>

        <p className="text-gray-500 mt-1">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>

        <Progress percent={progress} showInfo={false} strokeColor="#2C5F8D" />
      </div>

      {!showResult ? (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <p className="text-lg font-medium text-gray-800">
              {currentQuestion.text}
            </p>
          </div>

          <div className="space-y-3">
            {currentQuestion.options.map((option: any, index: any) => {
              const isSelected = selectedOption === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const showCorrect = isAnswered && isCorrect;
              const showIncorrect = isAnswered && isSelected && !isCorrect;

              return (
                <div
                  key={index}
                  className={`
                    p-4 rounded-lg border-2 cursor-pointer transition-all flex items-center gap-3
                    ${isSelected ? "border-[#2C5F8D] bg-blue-50/50" : "border-gray-200 hover:border-gray-300"}
                    ${showCorrect && "border-green-500 bg-green-50"}
                    ${showIncorrect && "border-red-500 bg-red-50"}
                  `}
                  onClick={() => handleOptionSelect(index)}
                >
                  <div
                    className={` 
                      "size-5 rounded-full border-2 flex items-center justify-center shrink-0
                      ${isSelected ? "border-[#2C5F8D]" : "border-gray-300"}
                      ${showCorrect && "border-green-500 bg-green-500"}
                      ${showIncorrect && "border-red-500 bg-red-500"}
                    `}
                  >
                    {(showCorrect || showIncorrect) && (
                      <div className="bg-white size-2 rounded-full" />
                    )}

                    {isSelected && !isAnswered && (
                      <div className="bg-[#2C5F8D] size-2.5 rounded-full" />
                    )}
                  </div>

                  <span
                    className={` 
                      font-medium
                      ${showCorrect && "text-green-700"}
                      ${showIncorrect && "text-red-700"}
                    `}
                  >
                    {option}
                  </span>
                </div>
              );
            })}
          </div>

          {isAnswered && (
            <div
              className={`
                p-4 rounded-lg border flex gap-3
                ${
                  selectedOption === currentQuestion.correctAnswer
                    ? "bg-green-50 border-green-200 text-green-800"
                    : "bg-blue-50 border-blue-200 text-blue-800"
                }
              `}
            >
              <div className="mt-1">
                {selectedOption === currentQuestion.correctAnswer ? (
                  <CheckCircle2 size={20} />
                ) : (
                  <AlertCircle size={20} />
                )}
              </div>

              <div>
                <p className="font-semibold mb-1">
                  {selectedOption === currentQuestion.correctAnswer
                    ? "Correct!"
                    : "Explanation"}
                </p>

                <p className="text-sm">{currentQuestion.explanation}</p>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center pt-4">
            <Button onClick={handleRestart} icon={<RefreshCw size={16} />}>
              Restart
            </Button>

            {!isAnswered ? (
              <Button
                type="primary"
                onClick={handleSubmit}
                disabled={selectedOption === null}
                style={{ background: "#2C5F8D" }}
                className="text-white!"
              >
                Submit Answer
              </Button>
            ) : (
              <Button
                type="primary"
                onClick={handleNext}
                style={{ background: "#2C5F8D" }}
                className="text-white!"
              >
                {currentQuestionIndex < questions.length - 1
                  ? "Next Question"
                  : "View Results"}
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center space-y-6 py-8">
          <div className="size-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <span className="text-4xl font-bold text-[#2C5F8D]">
              {Math.round((score / questions.length) * 100)}%
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">Quiz Completed!</h3>

            <p className="text-gray-500">
              You scored {score} out of {questions.length}
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Button onClick={onClose}>Close</Button>

            <Button
              type="primary"
              onClick={handleRestart}
              style={{ background: "#2C5F8D" }}
              className="text-white!"
            >
              Try Again
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
