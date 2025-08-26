export const questions = [
  {
    id: 1,
    type: "mcq" as const,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    options: [
      "Administer a 1 L 0.9% sodium chloride IV bolus",
      "Initiate an IV infusion of regular insulin",
      "Instruct client to breathe into a paper bag",
      "Obtain blood specimen for a serum glucose test",
      "Place the client on continuous cardiac monitoring",
    ],
    correctAnswer: "A",
    selectedAnswer: "B",
    explanation:
      "Acute psychosis is characteristic of many psychiatric illnesses (eg, schizophrenia) and refers to bizarre thinking that is disconnected from reality. Symptoms of psychosis include hallucinations and delusions. Appropriate nursing interventions include acknowledging the client’s experience without reinforcing hallucinations.",
  },
  {
    id: 2,
    type: "fill" as const,
    question:
      "A nurse is reviewing laboratory results for a client with chest pain. The presence of elevated __________ is most specific for myocardial infarction.",
  },
  {
    id: 3,
    type: "mcq" as const,
    question:
      "A client with type 1 diabetes is found unconscious. Which action should the nurse take first?",
    options: [
      "Administer 50% dextrose IV push",
      "Administer regular insulin subcutaneously",
      "Check the client’s blood glucose level",
      "Place the client in a side-lying position",
    ],
    correctAnswer: "C",
    selectedAnswer: "C",
    explanation:
      "An unconscious diabetic client is most likely hypoglycemic. Immediate treatment is rapid administration of IV glucose or IM glucagon. Checking glucose is ideal if equipment is immediately available, but treatment should not be delayed.",
  },

  {
    id: 4,
    type: "mcq" as const,
    question:
      "A nurse is caring for a client with COPD. Which oxygen delivery device is most appropriate for long-term oxygen therapy at home?",
    options: [
      "Non-rebreather mask",
      "Venturi mask",
      "Nasal cannula",
      "Simple face mask",
    ],
    correctAnswer: "C", 
    selectedAnswer: "B",
    explanation:
      "Nasal cannula is the preferred device for long-term oxygen therapy in stable COPD clients because it is comfortable, allows mobility, and delivers low-flow oxygen safely.",
  },
  {
    id: 5,
    type: "fill" as const,
    question:
      "In clients with increased intracranial pressure (ICP), the nurse should elevate the head of bed to __________ degrees to promote venous drainage.",
  },
  {
    id: 6,
    type: "fill" as const,
    question:
      "The antidote for opioid overdose is __________, which should be administered immediately when respiratory depression is suspected.",
  },
];
