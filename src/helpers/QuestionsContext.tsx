import React, { createContext, useContext, useState, useEffect } from "react";

export interface QuizQuestion {
  id: number | string;
  topicId: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuestionsContextType {
  questions: QuizQuestion[];
  getQuestionsByTopic: (topicId: string) => QuizQuestion[];
  addQuestion: (question: Omit<QuizQuestion, "id">) => void;
  updateQuestion: (
    id: number | string,
    question: Partial<QuizQuestion>,
  ) => void;
  deleteQuestion: (id: number | string) => void;
}

const QuestionsContext = createContext<QuestionsContextType | undefined>(
  undefined,
);

// Initial mock data
const initialQuestions: QuizQuestion[] = [
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
      "Bronze or hyperpigmented skin is a hallmark sign of Addison's disease due to increased ACTH production. This, along with the mnemonic 'everything is LOW except Potassium and Pigmentation,' helps identify Addison's disease on NCLEX.",
  },
];

export function QuestionsProvider({ children }: { children: React.ReactNode }) {
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => {
    // Try to load from localStorage first
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("nclex_questions");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error("Failed to parse questions from localStorage", e);
        }
      }
    }
    return initialQuestions;
  });

  // Save to localStorage whenever questions change
  useEffect(() => {
    localStorage.setItem("nclex_questions", JSON.stringify(questions));
  }, [questions]);

  const getQuestionsByTopic = (topicId: string) => {
    return questions.filter((q) => q.topicId === topicId);
  };

  const addQuestion = (question: Omit<QuizQuestion, "id">) => {
    const newQuestion = {
      ...question,
      id: Date.now(),
    };
    setQuestions((prev) => [...prev, newQuestion]);
  };

  const updateQuestion = (
    id: number | string,
    updatedQuestion: Partial<QuizQuestion>,
  ) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, ...updatedQuestion } : q)),
    );
  };

  const deleteQuestion = (id: number | string) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        getQuestionsByTopic,
        addQuestion,
        updateQuestion,
        deleteQuestion,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

export function useQuestions() {
  const context = useContext(QuestionsContext);
  if (context === undefined) {
    throw new Error("useQuestions must be used within a QuestionsProvider");
  }
  return context;
}
