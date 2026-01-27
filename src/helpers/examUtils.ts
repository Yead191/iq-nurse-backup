export interface Question {
  id: string;
  type: "multiple-choice" | "select-all" | "drag-drop" | "matrix" | "cloze";
  question: string;
  context?: string;
  imageUrl?: string;
  options?: string[];
  correctAnswer?: string | string[];
  rationale: string;
  optionRationales?: { [key: string]: string };
  rationaleImage?: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
}

export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

export const generateMockQuestions = (count: number): Question[] => {
  const questions: Question[] = [
    {
      id: "q1",
      type: "multiple-choice",
      category: "Pharmacology",
      difficulty: "medium",
      question:
        "A nurse is preparing to administer digoxin 0.25 mg PO to a client. The client's apical pulse is 58/min. Which of the following actions should the nurse take?",
      options: [
        "Administer the medication as prescribed",
        "Withhold the medication and notify the provider",
        "Administer half the prescribed dose",
        "Check the client's blood pressure before administering",
      ],
      correctAnswer: "Withhold the medication and notify the provider",
      rationale:
        "The nurse should withhold digoxin if the apical pulse is below 60/min in adults. Digoxin slows the heart rate, and administering it when the pulse is already low could cause dangerous bradycardia. The provider should be notified before the next dose is given.",
      optionRationales: {
        "Administer the medication as prescribed":
          "INCORRECT: Administering digoxin when the apical pulse is below 60/min could worsen bradycardia and lead to cardiac complications. The medication should be withheld to prevent further slowing of the heart rate.",
        "Withhold the medication and notify the provider":
          "CORRECT: The nurse should withhold digoxin if the apical pulse is below 60/min in adults. Digoxin slows the heart rate, and administering it when the pulse is already low could cause dangerous bradycardia. The provider must be notified to adjust the treatment plan.",
        "Administer half the prescribed dose":
          "INCORRECT: Altering the prescribed dose without provider authorization is beyond the nurse's scope of practice. Even half the dose could further decrease an already low heart rate. The medication should be withheld completely.",
        "Check the client's blood pressure before administering":
          "INCORRECT: While blood pressure monitoring is important, it doesn't address the critical issue of bradycardia. The pulse is the priority parameter for digoxin administration. The medication should be withheld when the pulse is below 60/min.",
      },
      rationaleImage:
        "https://images.unsplash.com/photo-1729339983239-0129e46801de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhcnQlMjBkaWFncmFtfGVufDF8fHx8MTc2ODA1Nzc0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "q2",
      type: "select-all",
      category: "Medical-Surgical",
      difficulty: "hard",
      question:
        "A nurse is caring for a client who has chronic kidney disease. Which of the following findings should the nurse expect? Select all that apply.",
      options: [
        "Increased urinary output",
        "Hypocalcemia",
        "Hyperkalemia",
        "Metabolic acidosis",
        "Hypomagnesemia",
        "Anemia",
      ],
      correctAnswer: [
        "Hypocalcemia",
        "Hyperkalemia",
        "Metabolic acidosis",
        "Anemia",
      ],
      rationale:
        "Chronic kidney disease leads to multiple electrolyte imbalances and complications. Hypocalcemia occurs due to decreased activation of vitamin D. Hyperkalemia results from decreased renal excretion of potassium. Metabolic acidosis develops from the kidneys' inability to excrete hydrogen ions. Anemia is common due to decreased erythropoietin production. Urinary output typically decreases, not increases, and magnesium levels tend to be elevated, not decreased.",
      rationaleImage:
        "https://images.unsplash.com/photo-1715527498605-2d235004b4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRuZXklMjBhbmF0b215fGVufDF8fHx8MTc2ODA1Nzc1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "q3",
      type: "multiple-choice",
      category: "OB/Maternity",
      difficulty: "medium",
      question:
        "A nurse is monitoring a client who is in active labor. The client's cervix is dilated to 6 cm. Which of the following characteristics should the nurse expect the client to exhibit during this phase of labor?",
      options: [
        "Excited and talkative",
        "Focused inward with increased discomfort",
        "Loss of control and irritability",
        "Relief that labor is ending",
      ],
      correctAnswer: "Focused inward with increased discomfort",
      rationale:
        "During the active phase of labor (4-7 cm dilation), clients typically become more focused inward and experience increased discomfort. They are less talkative and more serious. Excitement and talkativeness are characteristic of the early/latent phase. Loss of control and irritability occur during the transition phase (8-10 cm). Relief comes during the pushing stage.",
      rationaleImage:
        "https://images.unsplash.com/photo-1630531207753-f7a2f475f809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvciUyMGRlbGl2ZXJ5JTIwbWVkaWNhbHxlbnwxfHx8fDE3NjgwNTc3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "q4",
      type: "multiple-choice",
      category: "Fundamentals",
      difficulty: "easy",
      question:
        "A nurse is preparing to insert an indwelling urinary catheter for a female client. After performing hand hygiene and opening the catheterization kit, which of the following actions should the nurse take next?",
      options: [
        "Apply sterile gloves",
        "Cleanse the perineal area",
        "Lubricate the catheter",
        "Position the client",
      ],
      correctAnswer: "Apply sterile gloves",
      rationale:
        "After opening the sterile catheterization kit, the nurse should apply sterile gloves before touching any items in the kit to maintain sterile technique. The client should already be positioned before the kit is opened. Once gloved, the nurse can then proceed with preparing supplies, lubricating the catheter, and cleansing the perineal area.",
    },
    {
      id: "q5",
      type: "select-all",
      category: "Pediatrics",
      difficulty: "medium",
      question:
        "A nurse is assessing a 2-year-old toddler during a well-child visit. Which of the following findings should the nurse expect? Select all that apply.",
      options: [
        "Uses 2-3 word sentences",
        "Has 20 deciduous teeth",
        "Rides a tricycle",
        "Builds a tower of 6 blocks",
        "Walks up stairs using alternating feet",
        "Engages in parallel play",
      ],
      correctAnswer: [
        "Uses 2-3 word sentences",
        "Has 20 deciduous teeth",
        "Builds a tower of 6 blocks",
        "Engages in parallel play",
      ],
      rationale:
        "A 2-year-old toddler should be able to use 2-3 word sentences, have all 20 deciduous teeth, build a tower of 6 blocks, and engage in parallel play. Riding a tricycle typically occurs around age 3. Walking up stairs using alternating feet develops around age 3-4 years; at age 2, toddlers typically use both feet on each step.",
    },
  ];

  const result: Question[] = [];
  for (let i = 0; i < count; i++) {
    result.push({ ...questions[i % questions.length], id: `q${i + 1}` });
  }
  return result;
};
