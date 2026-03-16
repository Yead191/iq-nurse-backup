export interface Question {
  id: number;
  type:
    | "matrix"
    | "multiple-response"
    | "multiple-choice"
    | "case-study"
    | "drag-drop";
  question: string;
  context?: string;
  options?: string[];
  correctAnswers?: string[] | string;
  matrixData?: {
    rows: string[];
    columns: string[];
    correctCells: string[]; // format: "row-column"
  };
  caseStudyParts?: {
    part: number;
    question: string;
    type: "multiple-choice" | "multiple-response";
    options: string[];
    correctAnswers: string[] | string;
  }[];
  rationale: string;
  category: string;
}

export const labsPracticeQuestions: Question[] = [
  {
    id: 1,
    type: "matrix",
    category: "Specimen Collection",
    question:
      "The nurse is preparing to collect various laboratory specimens. For each specimen type listed below, select the appropriate collection considerations that apply. Each consideration may apply to more than one specimen type.",
    matrixData: {
      rows: [
        "Complete Blood Count (CBC)",
        "Fasting Glucose",
        "Arterial Blood Gas (ABG)",
        "Potassium level (IV running in left arm)",
      ],
      columns: [
        "Lavender/Purple tube",
        "NPO 8-12 hours before",
        "Apply pressure 5+ minutes",
        "Draw from right arm only",
        "Ice specimen immediately",
      ],
      correctCells: [
        "Complete Blood Count (CBC)-Lavender/Purple tube",
        "Fasting Glucose-NPO 8-12 hours before",
        "Arterial Blood Gas (ABG)-Apply pressure 5+ minutes",
        "Arterial Blood Gas (ABG)-Ice specimen immediately",
        "Potassium level (IV running in left arm)-Draw from right arm only",
      ],
    },
    rationale:
      "CBC uses lavender/purple EDTA tube. Fasting glucose requires NPO 8-12 hours (draw before breakfast). ABG requires arterial puncture (5+ minutes pressure) and specimen must be iced and transported immediately. Potassium with IV running: Never draw from same arm as IV infusion (causes falsely elevated or diluted values).",
  },
  {
    id: 2,
    type: "case-study",
    category: "Cardiac Biomarkers",
    context:
      "A 58-year-old male arrives in the ED with crushing chest pain that started 2 hours ago. Pain radiates to left arm and jaw. He is diaphoretic and anxious. Vital signs: BP 158/92, HR 108, RR 22, SpO2 94% on room air.",
    question: "Case Study: Acute Chest Pain",
    caseStudyParts: [
      {
        part: 1,
        question:
          "What laboratory tests should the nurse anticipate will be ordered IMMEDIATELY? (Select all that apply)",
        type: "multiple-response",
        options: [
          "Serial troponin levels",
          "12-lead ECG",
          "BNP",
          "CK-MB",
          "Lipid panel",
          "Complete blood count",
        ],
        correctAnswers: ["Serial troponin levels", "12-lead ECG", "CK-MB"],
      },
      {
        part: 2,
        question:
          "The initial troponin result is 0.02 ng/mL (normal <0.04). What is the nurse's BEST action?",
        type: "multiple-choice",
        options: [
          "Document as normal and reassure the patient",
          "Anticipate repeat troponin in 3 hours",
          "Prepare for immediate discharge",
          "Request a lipid panel instead",
        ],
        correctAnswers: "Anticipate repeat troponin in 3 hours",
      },
      {
        part: 3,
        question:
          "The 3-hour troponin is now 0.28 ng/mL. The patient continues to have chest pain. What interventions should the nurse implement? (Select all that apply)",
        type: "multiple-response",
        options: [
          "Notify the provider immediately",
          "Administer oxygen to maintain SpO2 >90%",
          "Prepare for possible cardiac catheterization",
          "Reassure patient this is normal for chest pain",
          "Continue cardiac monitoring",
          "Obtain another troponin in 3 hours",
        ],
        correctAnswers: [
          "Notify the provider immediately",
          "Administer oxygen to maintain SpO2 >90%",
          "Prepare for possible cardiac catheterization",
          "Continue cardiac monitoring",
          "Obtain another troponin in 3 hours",
        ],
      },
    ],
    rationale:
      "Troponin is the gold standard for MI diagnosis. It rises 3-4 hours after myocardial injury, so serial troponins (at 0, 3, 6 hours) are essential. Rising troponin with chest pain = ACS requiring immediate intervention. ECG and CK-MB are also standard. BNP is for heart failure, not acute MI. Lipid panel is not urgent.",
  },
  {
    id: 3,
    type: "multiple-response",
    category: "Potassium",
    question:
      "A patient with chronic kidney disease has a potassium level of 6.8 mEq/L. Which ECG changes would the nurse expect to observe? (Select all that apply)",
    options: [
      "Peaked T waves",
      "Widened QRS complex",
      "Flattened T waves",
      "Prolonged PR interval",
      "U waves",
      "Shortened QT interval",
    ],
    correctAnswers: [
      "Peaked T waves",
      "Widened QRS complex",
      "Prolonged PR interval",
    ],
    rationale:
      "Hyperkalemia (K+ >6.5) causes characteristic ECG changes: peaked T waves (early), widened QRS, prolonged PR interval, and eventual loss of P waves. Flattened T waves and U waves are seen in HYPOkalemia. This is a critical value requiring immediate intervention to prevent cardiac arrest.",
  },
  {
    id: 4,
    type: "drag-drop",
    category: "Hyperkalemia Emergency",
    question:
      "A patient presents with a potassium level of 7.2 mEq/L and peaked T waves on ECG. Place the emergency interventions in the correct ORDER of priority:",
    options: [
      "1. Administer calcium gluconate IV",
      "2. Administer regular insulin with D50 IV",
      "3. Administer sodium polystyrene sulfonate (Kayexalate)",
      "4. Prepare for emergency dialysis if needed",
      "5. Monitor continuous ECG",
    ],
    correctAnswers: [
      "5. Monitor continuous ECG",
      "1. Administer calcium gluconate IV",
      "2. Administer regular insulin with D50 IV",
      "3. Administer sodium polystyrene sulfonate (Kayexalate)",
      "4. Prepare for emergency dialysis if needed",
    ],
    rationale:
      "Hyperkalemia emergency treatment order: 1) Monitor ECG continuously, 2) Calcium gluconate FIRST to stabilize cardiac membrane (doesn't lower K+), 3) Insulin + D50 to shift K+ into cells (rapid effect), 4) Kayexalate to remove K+ from body (slower), 5) Dialysis if severe or refractory. Remember: Calcium protects the heart, insulin shifts K+ intracellularly, Kayexalate/dialysis removes K+.",
  },
  {
    id: 5,
    type: "multiple-choice",
    category: "Coagulation",
    question:
      "A patient on warfarin therapy has an INR of 5.8. The patient has no signs of bleeding. What is the nurse's PRIORITY action?",
    options: [
      "Continue warfarin at the current dose",
      "Hold warfarin and notify the provider",
      "Administer vitamin K immediately",
      "Prepare fresh frozen plasma (FFP)",
    ],
    correctAnswers: "Hold warfarin and notify the provider",
    rationale:
      "INR >5 is critical and indicates high bleeding risk. The nurse should hold warfarin and notify the provider immediately. Vitamin K may be ordered but takes 12-24 hours to work. FFP is for active bleeding. Never continue warfarin with INR >5. Therapeutic INR is 2-3 for most conditions.",
  },
  {
    id: 6,
    type: "matrix",
    category: "Electrolyte Imbalances",
    question:
      "Match each electrolyte imbalance with its corresponding signs/symptoms. Select all that apply for each imbalance.",
    matrixData: {
      rows: [
        "Hypokalemia (K+ <3.5)",
        "Hyperkalemia (K+ >5.0)",
        "Hypocalcemia (Ca <9.0)",
        "Hypercalcemia (Ca >10.5)",
      ],
      columns: [
        "Peaked T waves",
        "Flattened T waves",
        "Tetany",
        "Muscle weakness",
        "Kidney stones",
        "Prolonged QT interval",
      ],
      correctCells: [
        "Hypokalemia (K+ <3.5)-Flattened T waves",
        "Hypokalemia (K+ <3.5)-Muscle weakness",
        "Hyperkalemia (K+ >5.0)-Peaked T waves",
        "Hyperkalemia (K+ >5.0)-Muscle weakness",
        "Hypocalcemia (Ca <9.0)-Tetany",
        "Hypocalcemia (Ca <9.0)-Prolonged QT interval",
        "Hypercalcemia (Ca >10.5)-Kidney stones",
      ],
    },
    rationale:
      "Hypokalemia: Flattened T waves, U waves, muscle weakness, ileus. Hyperkalemia: Peaked T waves, widened QRS, muscle weakness. Hypocalcemia: Tetany, Chvostek's/Trousseau's signs, prolonged QT, seizures. Hypercalcemia: 'Stones, bones, groans, psychiatric overtones' - kidney stones, bone pain, constipation, confusion.",
  },
  {
    id: 7,
    type: "multiple-response",
    category: "ABG Interpretation",
    question:
      "A patient with COPD exacerbation has the following ABG results: pH 7.28, PaCO2 58, HCO3 26, PaO2 62. Which interpretations are CORRECT? (Select all that apply)",
    options: [
      "Respiratory acidosis",
      "Metabolic acidosis",
      "Uncompensated",
      "Partially compensated",
      "Hypoxemia present",
      "Normal oxygenation",
    ],
    correctAnswers: [
      "Respiratory acidosis",
      "Uncompensated",
      "Hypoxemia present",
    ],
    rationale:
      "pH <7.35 = acidosis. PaCO2 >45 = respiratory cause. HCO3 normal (22-26) = uncompensated (kidneys haven't responded yet). PaO2 <80 = hypoxemia, <60 = severe (needs oxygen). This is uncompensated respiratory acidosis with severe hypoxemia, typical of COPD exacerbation. ROME: Respiratory Opposite (pH down, CO2 up).",
  },
  {
    id: 8,
    type: "case-study",
    category: "Diabetes/DKA",
    context:
      "A 24-year-old female with Type 1 diabetes presents to the ED confused and lethargic. Family reports she has had the flu and hasn't been eating well. Vital signs: BP 98/60, HR 118, RR 28 (deep and rapid), Temp 99.8°F. Her breath has a fruity odor.",
    question: "Case Study: Suspected Diabetic Ketoacidosis",
    caseStudyParts: [
      {
        part: 1,
        question:
          "What laboratory values would the nurse expect to find? (Select all that apply)",
        type: "multiple-response",
        options: [
          "Glucose >400 mg/dL",
          "Glucose <70 mg/dL",
          "pH <7.35",
          "pH >7.45",
          "Positive serum ketones",
          "Negative serum ketones",
        ],
        correctAnswers: [
          "Glucose >400 mg/dL",
          "pH <7.35",
          "Positive serum ketones",
        ],
      },
      {
        part: 2,
        question:
          "The ABG results are: pH 7.24, PaCO2 28, HCO3 12. What is the correct interpretation?",
        type: "multiple-choice",
        options: [
          "Respiratory acidosis",
          "Respiratory alkalosis",
          "Metabolic acidosis with partial compensation",
          "Metabolic alkalosis",
        ],
        correctAnswers: "Metabolic acidosis with partial compensation",
      },
      {
        part: 3,
        question:
          "What type of respirations is this patient exhibiting, and why?",
        type: "multiple-choice",
        options: [
          "Cheyne-Stokes respirations due to heart failure",
          "Kussmaul respirations to blow off CO2 and compensate for acidosis",
          "Biot's respirations due to brain injury",
          "Apneustic breathing due to brainstem damage",
        ],
        correctAnswers:
          "Kussmaul respirations to blow off CO2 and compensate for acidosis",
      },
    ],
    rationale:
      "DKA presents with hyperglycemia (>400 mg/dL), metabolic acidosis (pH <7.35, low HCO3), and positive ketones. Kussmaul respirations (deep, rapid) are the body's attempt to compensate by blowing off CO2 (respiratory compensation for metabolic acidosis). Fruity breath = ketones. This is a medical emergency requiring insulin, fluids, and electrolyte replacement.",
  },
  {
    id: 9,
    type: "multiple-response",
    category: "Anemia",
    question:
      "A patient has a hemoglobin of 6.8 g/dL. Which nursing interventions are PRIORITY? (Select all that apply)",
    options: [
      "Monitor for signs of hypoxia",
      "Implement fall precautions",
      "Prepare for possible blood transfusion",
      "Encourage vigorous exercise",
      "Monitor vital signs for compensatory tachycardia",
      "Restrict all activities immediately",
    ],
    correctAnswers: [
      "Monitor for signs of hypoxia",
      "Implement fall precautions",
      "Prepare for possible blood transfusion",
      "Monitor vital signs for compensatory tachycardia",
    ],
    rationale:
      "Hgb <7 g/dL is critical and transfusion threshold. Priority interventions: Monitor for hypoxia (dizziness, SOB, confusion), fall precautions (risk of syncope), prepare for transfusion, monitor for compensatory tachycardia. Activity should be limited but not completely restricted. Vigorous exercise is contraindicated with severe anemia.",
  },
  {
    id: 10,
    type: "multiple-choice",
    category: "Therapeutic Drug Levels",
    question:
      "A patient on digoxin therapy reports nausea, vomiting, and seeing yellow halos around lights. The digoxin level is 2.6 ng/mL. What is the nurse's BEST action?",
    options: [
      "Administer the next scheduled dose of digoxin",
      "Hold digoxin and notify the provider immediately",
      "Give an antiemetic and continue digoxin",
      "Increase the digoxin dose",
    ],
    correctAnswers: "Hold digoxin and notify the provider immediately",
    rationale:
      "Digoxin level >2.0 ng/mL is TOXIC. Classic signs of digoxin toxicity: N/V, yellow-green halos, arrhythmias (bradycardia, heart blocks). NEVER give more digoxin with toxic level. Hold the drug and notify provider immediately. Therapeutic range is 0.5-2.0 ng/mL. Always check HR before giving digoxin (hold if <60).",
  },
  {
    id: 11,
    type: "matrix",
    category: "ABG Interpretation",
    question:
      "For each ABG result, identify the acid-base disorder and compensation status. Select the correct interpretation(s) for each ABG.",
    matrixData: {
      rows: [
        "pH 7.32, PaCO2 52, HCO3 26",
        "pH 7.48, PaCO2 30, HCO3 22",
        "pH 7.30, PaCO2 32, HCO3 16",
        "pH 7.38, PaCO2 50, HCO3 29",
      ],
      columns: [
        "Respiratory acidosis",
        "Respiratory alkalosis",
        "Metabolic acidosis",
        "Uncompensated",
        "Partially compensated",
        "Fully compensated",
      ],
      correctCells: [
        "pH 7.32, PaCO2 52, HCO3 26-Respiratory acidosis",
        "pH 7.32, PaCO2 52, HCO3 26-Uncompensated",
        "pH 7.48, PaCO2 30, HCO3 22-Respiratory alkalosis",
        "pH 7.48, PaCO2 30, HCO3 22-Uncompensated",
        "pH 7.30, PaCO2 32, HCO3 16-Metabolic acidosis",
        "pH 7.30, PaCO2 32, HCO3 16-Partially compensated",
        "pH 7.38, PaCO2 50, HCO3 29-Respiratory acidosis",
        "pH 7.38, PaCO2 50, HCO3 29-Fully compensated",
      ],
    },
    rationale:
      "Row 1: pH low + CO2 high = respiratory acidosis, HCO3 normal = uncompensated. Row 2: pH high + CO2 low = respiratory alkalosis, HCO3 normal = uncompensated. Row 3: pH low + HCO3 low = metabolic acidosis, CO2 low = partially compensated (lungs trying to help). Row 4: pH normal but CO2 high + HCO3 high = fully compensated respiratory acidosis (kidneys normalized pH).",
  },
  {
    id: 12,
    type: "multiple-response",
    category: "Neutropenia",
    question:
      "A patient receiving chemotherapy has WBC 2,200/µL with absolute neutrophil count (ANC) of 450/µL. Which interventions should the nurse implement? (Select all that apply)",
    options: [
      "Implement neutropenic precautions",
      "Place patient in reverse isolation",
      "Avoid fresh fruits and vegetables",
      "No rectal temperatures or suppositories",
      "Encourage visitors with colds to visit",
      "Monitor for fever >100.4°F",
    ],
    correctAnswers: [
      "Implement neutropenic precautions",
      "Place patient in reverse isolation",
      "Avoid fresh fruits and vegetables",
      "No rectal temperatures or suppositories",
      "Monitor for fever >100.4°F",
    ],
    rationale:
      "ANC <500 = severe neutropenia requiring strict precautions. Interventions: Reverse isolation, avoid fresh produce (bacteria), no rectal procedures (risk of infection), monitor for fever (may be only sign of infection). Sick visitors should NOT visit. WBC <2,000 is also critical. Fever in neutropenic patient is an emergency.",
  },
  {
    id: 13,
    type: "multiple-choice",
    category: "BUN/Creatinine",
    question:
      "A patient has BUN 48 mg/dL and creatinine 1.1 mg/dL. What is the MOST likely cause?",
    options: [
      "Acute kidney injury",
      "Chronic kidney disease",
      "Dehydration or GI bleeding",
      "Overhydration",
    ],
    correctAnswers: "Dehydration or GI bleeding",
    rationale:
      "Elevated BUN with NORMAL creatinine suggests prerenal azotemia (dehydration, GI bleed, high-protein diet). BUN/Cr ratio >20:1 = dehydration. If both BUN and creatinine are elevated, suspect kidney disease. BUN is affected by hydration and protein; creatinine is more specific for renal function.",
  },
  {
    id: 14,
    type: "multiple-response",
    category: "Thrombocytopenia",
    question:
      "A patient has a platelet count of 18,000/µL. Which bleeding precautions should the nurse implement? (Select all that apply)",
    options: [
      "Soft toothbrush or oral swabs",
      "Electric razor instead of blade razor",
      "Avoid IM injections",
      "Apply pressure for 5-10 minutes after venipuncture",
      "Encourage vigorous nose blowing",
      "Fall precautions to prevent trauma",
    ],
    correctAnswers: [
      "Soft toothbrush or oral swabs",
      "Electric razor instead of blade razor",
      "Avoid IM injections",
      "Apply pressure for 5-10 minutes after venipuncture",
      "Fall precautions to prevent trauma",
    ],
    rationale:
      "Platelets <20,000 = spontaneous bleeding risk (critical value). Bleeding precautions: Soft toothbrush, electric razor, no IM injections, prolonged pressure after venipuncture, fall precautions, no rectal temperatures. Avoid nose blowing (gentle if needed). Monitor for petechiae, purpura, bleeding gums. May need platelet transfusion.",
  },
  {
    id: 15,
    type: "case-study",
    category: "Liver Function",
    context:
      "A 52-year-old male with history of alcohol use disorder presents with jaundice, ascites, and confusion. Laboratory results: ALT 180 U/L, AST 320 U/L, Total bilirubin 8.2 mg/dL, Albumin 2.4 g/dL, PT/INR 2.8, Ammonia 165 µg/dL.",
    question: "Case Study: Liver Failure",
    caseStudyParts: [
      {
        part: 1,
        question: "What do the AST and ALT results indicate?",
        type: "multiple-choice",
        options: [
          "Normal liver function",
          "Hepatocellular damage with AST > ALT (2:1 ratio suggests alcoholic liver disease)",
          "Cholestatic disease",
          "Acute viral hepatitis",
        ],
        correctAnswers:
          "Hepatocellular damage with AST > ALT (2:1 ratio suggests alcoholic liver disease)",
      },
      {
        part: 2,
        question: "The patient's confusion is MOST likely due to:",
        type: "multiple-choice",
        options: [
          "Hypoglycemia",
          "Hepatic encephalopathy from elevated ammonia",
          "Alcohol withdrawal",
          "Dehydration",
        ],
        correctAnswers: "Hepatic encephalopathy from elevated ammonia",
      },
      {
        part: 3,
        question:
          "What interventions should the nurse anticipate? (Select all that apply)",
        type: "multiple-response",
        options: [
          "Lactulose to decrease ammonia levels",
          "Low-protein diet",
          "Monitor for bleeding (elevated PT/INR)",
          "High-protein supplements",
          "Assess neurological status frequently",
          "Prepare vitamin K for INR reversal",
        ],
        correctAnswers: [
          "Lactulose to decrease ammonia levels",
          "Low-protein diet",
          "Monitor for bleeding (elevated PT/INR)",
          "Assess neurological status frequently",
        ],
      },
    ],
    rationale:
      "AST:ALT ratio >2:1 suggests alcoholic liver disease. Elevated ammonia (normal 15-45) causes hepatic encephalopathy (confusion). Interventions: Lactulose to decrease ammonia, low-protein diet (protein breakdown produces ammonia), monitor for bleeding (liver synthesizes clotting factors - elevated INR), assess mental status. Vitamin K won't help if liver can't synthesize clotting factors.",
  },
];
