// types.ts (or inline in the same file)
export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export type CategoryData = {
  questions: Question[];
};

// Here we define all possible categories
export type CategoryName =
  | "Pharmacology"
  | "Med-Surg"
  | "Pediatrics"
  | "OB/GYN"
  | "Mental Health";

export const demoData: Record<CategoryName, CategoryData> = {
  Pharmacology: {
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
  },
  "Med-Surg": {
    questions: [
      {
        id: 6,
        question:
          "A postoperative client develops signs of wound dehiscence. What is the nurse's priority action?",
        options: [
          "Apply sterile saline-soaked gauze",
          "Notify the physician",
          "Place client in low Fowler's position",
          "Administer pain medication",
        ],
        correctAnswer: "A.Apply sterile saline-soaked gauze",
        explanation:
          "The priority is to protect the exposed tissue with sterile saline-soaked gauze to prevent infection and keep tissues moist.",
      },
      {
        id: 7,
        question:
          "Which assessment finding indicates a complication of mechanical ventilation?",
        options: [
          "Decreased breath sounds on one side",
          "Oxygen saturation 95%",
          "Respiratory rate 16/min",
          "PEEP of 5 cmH2O",
        ],
        correctAnswer: "A.Decreased breath sounds on one side",
        explanation:
          "Decreased breath sounds on one side may indicate pneumothorax, a serious complication of mechanical ventilation.",
      },
      {
        id: 8,
        question:
          "A client with diabetes mellitus has a blood glucose of 350 mg/dL. Which complication should the nurse assess for?",
        options: [
          "Diabetic ketoacidosis",
          "Hypoglycemic shock",
          "Somogyi effect",
          "Dawn phenomenon",
        ],
        correctAnswer: "A.Diabetic ketoacidosis",
        explanation:
          "Blood glucose levels above 300 mg/dL put the client at risk for diabetic ketoacidosis, especially in Type 1 diabetes.",
      },
      {
        id: 9,
        question:
          "Which intervention is most important for a client with acute pancreatitis?",
        options: [
          "Pain management",
          "NPO status",
          "IV fluid replacement",
          "Enzyme supplementation",
        ],
        correctAnswer: "A.Pain management",
        explanation:
          "Pain management is the priority as acute pancreatitis causes severe abdominal pain that can lead to shock if not properly managed.",
      },
      {
        id: 10,
        question:
          "A client post-thyroidectomy develops muscle twitching and numbness around the mouth. This indicates:",
        options: [
          "Hypocalcemia",
          "Hyperkalemia",
          "Thyroid storm",
          "Respiratory distress",
        ],
        correctAnswer: "A.Hypocalcemia",
        explanation:
          "These are signs of hypocalcemia due to inadvertent removal or damage to the parathyroid glands during thyroidectomy.",
      },
    ],
  },
  Pediatrics: {
    questions: [
      {
        id: 11,
        question:
          "A 2-year-old child is admitted with suspected epiglottitis. What is the nurse's priority action?",
        options: [
          "Keep child calm and upright",
          "Obtain throat culture",
          "Administer antibiotics",
          "Start IV access",
        ],
        correctAnswer: "A.Keep child calm and upright",
        explanation:
          "The priority is to keep the child calm and in an upright position to maintain airway patency. Throat examination could cause complete airway obstruction.",
      },
      {
        id: 12,
        question: "Which finding is most concerning in a 6-month-old infant?",
        options: [
          "Absence of Moro reflex",
          "Presence of rooting reflex",
          "Rolling from back to side",
          "Sitting with support",
        ],
        correctAnswer: "A.Absence of Moro reflex",
        explanation:
          "The Moro reflex should be present until 4-6 months. Its absence at 6 months may indicate neurological problems.",
      },
      {
        id: 13,
        question: "A child with cystic fibrosis requires which type of diet?",
        options: [
          "High-calorie, high-protein",
          "Low-sodium, low-fat",
          "High-carbohydrate, low-protein",
          "Restricted fluid intake",
        ],
        correctAnswer: "A.High-calorie, high-protein",
        explanation:
          "Children with cystic fibrosis have increased metabolic needs and malabsorption issues, requiring high-calorie, high-protein diets.",
      },
      {
        id: 14,
        question:
          "Which immunization is contraindicated in an immunocompromised child?",
        options: ["MMR (live vaccine)", "DTaP", "Hepatitis B", "Pneumococcal"],
        correctAnswer: "A.MMR (live vaccine)",
        explanation:
          "Live vaccines like MMR are contraindicated in immunocompromised children as they could cause the disease they're meant to prevent.",
      },
      {
        id: 15,
        question:
          "A 4-year-old child with leukemia develops a fever. What is the nurse's priority action?",
        options: [
          "Implement neutropenic precautions",
          "Administer acetaminophen",
          "Encourage fluid intake",
          "Obtain blood cultures",
        ],
        correctAnswer: "A.Implement neutropenic precautions",
        explanation:
          "Children with leukemia are immunocompromised. Fever indicates possible infection, requiring immediate neutropenic precautions.",
      },
    ],
  },
  "OB/GYN": {
    questions: [
      {
        id: 16,
        question:
          "A pregnant client at 32 weeks gestation reports severe abdominal pain and vaginal bleeding. This suggests:",
        options: [
          "Placental abruption",
          "Placenta previa",
          "Normal labor",
          "Braxton Hicks contractions",
        ],
        correctAnswer: "A.Placental abruption",
        explanation:
          "Severe abdominal pain with bleeding at 32 weeks suggests placental abruption, a medical emergency requiring immediate intervention.",
      },
      {
        id: 17,
        question:
          "Which finding indicates successful breastfeeding in a newborn?",
        options: [
          "6-8 wet diapers per day",
          "Sleeping 4-5 hours between feeds",
          "Weight loss of 15%",
          "Feeding every 4 hours",
        ],
        correctAnswer: "A.6-8 wet diapers per day",
        explanation:
          "Adequate urine output (6-8 wet diapers per day) indicates the newborn is receiving sufficient breast milk.",
      },
      {
        id: 18,
        question:
          "A client with preeclampsia is receiving magnesium sulfate. Which assessment indicates toxicity?",
        options: [
          "Absent deep tendon reflexes",
          "Blood pressure 160/100",
          "Proteinuria 2+",
          "Respiratory rate 18/min",
        ],
        correctAnswer: "A.Absent deep tendon reflexes",
        explanation:
          "Absent deep tendon reflexes indicate magnesium toxicity and require immediate intervention to prevent respiratory depression.",
      },
      {
        id: 19,
        question:
          "Which position is best for a client experiencing supine hypotensive syndrome?",
        options: [
          "Left lateral",
          "Right lateral",
          "Semi-Fowler's",
          "Trendelenburg",
        ],
        correctAnswer: "A.Left lateral",
        explanation:
          "Left lateral position relieves pressure on the vena cava, improving venous return and cardiac output.",
      },
      {
        id: 20,
        question:
          "A postpartum client develops heavy bleeding. What is the nurse's first action?",
        options: [
          "Massage the fundus",
          "Check vital signs",
          "Notify the physician",
          "Administer oxytocin",
        ],
        correctAnswer: "A.Massage the fundus",
        explanation:
          "Fundal massage is the first intervention for postpartum hemorrhage to stimulate uterine contraction and control bleeding.",
      },
    ],
  },
  "Mental Health": {
    questions: [
      {
        id: 21,
        question:
          "A client with bipolar disorder in the manic phase refuses to eat. What is the best nursing intervention?",
        options: [
          "Provide finger foods",
          "Insist on sitting for meals",
          "Offer liquid supplements only",
          "Allow skipping meals",
        ],
        correctAnswer: "A.Provide finger foods",
        explanation:
          "Clients in manic phase have difficulty sitting still. Finger foods allow them to eat while moving around.",
      },
      {
        id: 22,
        question:
          "Which statement indicates a client understands lithium therapy teaching?",
        options: [
          "I need to maintain adequate salt intake",
          "I should restrict my fluid intake",
          "I can stop taking it when I feel better",
          "I should take it only when I feel manic",
        ],
        correctAnswer: "A.I need to maintain adequate salt intake",
        explanation:
          "Adequate sodium intake is essential for lithium therapy as low sodium can increase lithium levels and cause toxicity.",
      },
      {
        id: 23,
        question:
          "A client with depression states, 'I'm worthless and should just die.' What is the nurse's priority response?",
        options: [
          "Are you thinking of hurting yourself?",
          "You shouldn't say things like that",
          "Tell me more about feeling worthless",
          "Many people feel that way sometimes",
        ],
        correctAnswer: "A.Are you thinking of hurting yourself?",
        explanation:
          "Direct assessment of suicidal ideation is the priority when a client expresses thoughts of death or worthlessness.",
      },
      {
        id: 24,
        question:
          "Which behavior indicates a client with schizophrenia is experiencing auditory hallucinations?",
        options: [
          "Talking to someone not visible",
          "Refusing to eat food",
          "Pacing back and forth",
          "Avoiding eye contact",
        ],
        correctAnswer: "A.Talking to someone not visible",
        explanation:
          "Talking to someone not visible or responding to voices others cannot hear indicates auditory hallucinations.",
      },
      {
        id: 25,
        question:
          "A client with anxiety disorder is hyperventilating. What is the immediate nursing intervention?",
        options: [
          "Have client breathe into paper bag",
          "Administer oxygen",
          "Encourage deep breathing",
          "Provide reassurance",
        ],
        correctAnswer: "A.Have client breathe into paper bag",
        explanation:
          "Breathing into a paper bag helps rebreathe CO2 and correct respiratory alkalosis caused by hyperventilation.",
      },
    ],
  },
};
