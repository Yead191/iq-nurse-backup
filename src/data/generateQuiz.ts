 export const generateDemoQuiz = (name: string) => {
    return {
      name,
      questions: [
        {
          id: 1,
          type: "mcq",
          question: "What is the normal range for adult heart rate?",
          options: ["40-60 bpm", "60-100 bpm", "100-120 bpm", "120-140 bpm"],
          correctAnswer: 1,
        },
        {
          id: 2,
          type: "mcq",
          question: "Which medication is commonly used to treat hypertension?",
          options: ["Aspirin", "Lisinopril", "Metformin", "Albuterol"],
          correctAnswer: 1,
        },
        {
          id: 3,
          type: "text",
          question: "List three signs of dehydration in elderly patients.",
          answer: "Dry mouth, decreased skin elasticity, confusion",
        },
        {
          id: 4,
          type: "mcq",
          question: "What is the first-line treatment for anaphylaxis?",
          options: [
            "Diphenhydramine",
            "Epinephrine",
            "Corticosteroids",
            "Albuterol",
          ],
          correctAnswer: 1,
        },
        {
          id: 5,
          type: "text",
          question:
            "Explain the difference between systolic and diastolic blood pressure.",
          answer:
            "Systolic pressure is the pressure when the heart contracts, diastolic is when the heart relaxes",
        },
      ],
      createdAt: new Date().toISOString(),
      color: "#ec4899",
    };
  };