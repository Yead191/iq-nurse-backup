export interface TestQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
  rationale: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

export const testQuestions: TestQuestion[] = [
  // Fundamentals / Basic Skills
  {
    id: "q1",
    question:
      "A nurse is making an occupied bed for a patient. Which action should the nurse take to prevent complications?",
    options: [
      {
        id: "a",
        text: "Raise the bed to the highest position during the procedure",
      },
      {
        id: "b",
        text: "Keep wrinkles in the bottom sheet to allow air circulation",
      },
      { id: "c", text: "Use the old pillowcase to save time" },
      { id: "d", text: "Shake linens vigorously to remove debris" },
    ],
    correctAnswer: "a",
    rationale:
      "Raising the bed to the highest position promotes proper body mechanics and prevents back injury for the nurse. Wrinkles in sheets can cause pressure ulcers, old linens should be replaced, and shaking linens spreads microorganisms.",
    category: "Fundamentals / Basic Skills",
    difficulty: "Easy",
  },
  {
    id: "q2",
    question:
      "When performing a bed bath, which area should the nurse wash first?",
    options: [
      { id: "a", text: "The perineal area" },
      { id: "b", text: "The face and eyes" },
      { id: "c", text: "The arms and hands" },
      { id: "d", text: "The feet" },
    ],
    correctAnswer: "b",
    rationale:
      "The face and eyes should be washed first, moving from the cleanest to the dirtiest areas. This prevents cross-contamination and follows the principle of washing from clean to dirty.",
    category: "Fundamentals / Basic Skills",
    difficulty: "Easy",
  },
  {
    id: "q3",
    question:
      "A nurse is preparing to transfer a patient from bed to wheelchair. What is the most important action before beginning the transfer?",
    options: [
      { id: "a", text: "Document the transfer in the chart" },
      {
        id: "b",
        text: "Assess the patient's ability to bear weight and assist",
      },
      { id: "c", text: "Call for additional help regardless of patient size" },
      { id: "d", text: "Remove the wheelchair footrests" },
    ],
    correctAnswer: "b",
    rationale:
      "Assessing the patient's ability to bear weight and level of assistance needed is critical for safety and determines if additional staff is required. This assessment guides the transfer technique and prevents falls or injuries.",
    category: "Fundamentals / Basic Skills",
    difficulty: "Medium",
  },
  {
    id: "q4",
    question:
      "A nurse measures a patient's blood pressure as 168/98 mmHg. Which action should the nurse take first?",
    options: [
      {
        id: "a",
        text: "Document the finding and continue with other patients",
      },
      { id: "b", text: "Reassess the blood pressure in 1-2 minutes" },
      { id: "c", text: "Administer antihypertensive medication immediately" },
      { id: "d", text: "Call the physician stat" },
    ],
    correctAnswer: "b",
    rationale:
      "The nurse should reassess the blood pressure after waiting 1-2 minutes to allow venous congestion to resolve and confirm the reading. A single elevated reading may not be accurate due to factors like recent activity, anxiety, or improper technique.",
    category: "Fundamentals / Basic Skills",
    difficulty: "Medium",
  },
  {
    id: "q5",
    question:
      "When performing capillary blood glucose monitoring, the nurse notes the patient's finger is wet with alcohol. What should the nurse do?",
    options: [
      { id: "a", text: "Proceed with the finger stick as planned" },
      {
        id: "b",
        text: "Allow the alcohol to dry completely before proceeding",
      },
      { id: "c", text: "Wipe the finger with gauze and proceed immediately" },
      { id: "d", text: "Use a different cleaning solution" },
    ],
    correctAnswer: "b",
    rationale:
      "Wet alcohol can dilute the blood sample and affect the accuracy of glucose results. The nurse must allow the alcohol to dry completely (at least 30 seconds) before performing the finger stick to ensure accurate readings.",
    category: "Cardiovascular / Monitoring",
    difficulty: "Easy",
  },
  {
    id: "q6",
    question:
      "A patient rates their pain as 8/10 but is laughing and talking with visitors. How should the nurse respond?",
    options: [
      { id: "a", text: "Document that the patient is not really in pain" },
      {
        id: "b",
        text: "Believe the patient's report and provide pain intervention",
      },
      {
        id: "c",
        text: "Tell the patient they don't look like they're in pain",
      },
      { id: "d", text: "Wait until visitors leave to reassess" },
    ],
    correctAnswer: "b",
    rationale:
      "Pain is subjective and whatever the patient says it is. People cope with pain differently - some use distraction and socialization. The nurse should believe the patient's report and provide appropriate pain management interventions.",
    category: "Fundamentals / Basic Skills",
    difficulty: "Medium",
  },

  // Medication Administration
  {
    id: "q7",
    question:
      "Before administering oral medication, the nurse must verify which of the following? (Select the MOST complete answer)",
    options: [
      { id: "a", text: "Right patient, right drug, right dose" },
      {
        id: "b",
        text: "Right patient, right drug, right dose, right route, right time, right documentation",
      },
      { id: "c", text: "Right patient and right medication only" },
      { id: "d", text: "Right dose and right time only" },
    ],
    correctAnswer: "b",
    rationale:
      "The 6 rights of medication administration must ALL be verified: right patient, right drug, right dose, right route, right time, and right documentation. This systematic approach prevents medication errors.",
    category: "Medication Administration",
    difficulty: "Easy",
  },
  {
    id: "q8",
    question:
      "A nurse is preparing to administer an intramuscular injection to an adult patient. Which site provides the least risk for nerve injury?",
    options: [
      { id: "a", text: "Dorsogluteal" },
      { id: "b", text: "Ventrogluteal" },
      { id: "c", text: "Deltoid" },
      { id: "d", text: "Rectus femoris" },
    ],
    correctAnswer: "b",
    rationale:
      "The ventrogluteal site is the preferred site for IM injections as it has no major nerves or blood vessels, has a thick muscle mass, and has a lower risk of complications compared to other sites. The dorsogluteal site is no longer recommended due to proximity to the sciatic nerve.",
    category: "Medication Administration",
    difficulty: "Hard",
  },
  {
    id: "q9",
    question:
      "When teaching a patient to use a metered-dose inhaler (MDI), what should the nurse instruct the patient to do after pressing the canister?",
    options: [
      { id: "a", text: "Exhale immediately" },
      { id: "b", text: "Take another puff right away" },
      { id: "c", text: "Hold breath for 10 seconds" },
      { id: "d", text: "Breathe normally" },
    ],
    correctAnswer: "c",
    rationale:
      "Holding the breath for 10 seconds after inhaling allows the medication to deposit in the airways and be absorbed. Exhaling immediately would expel the medication before it can be effective.",
    category: "Medication Administration",
    difficulty: "Medium",
  },
  {
    id: "q10",
    question:
      "A nurse is administering subcutaneous heparin. Which action is correct?",
    options: [
      { id: "a", text: "Massage the injection site after administration" },
      { id: "b", text: "Aspirate before injecting the medication" },
      { id: "c", text: "Do not massage the injection site" },
      { id: "d", text: "Use a 1.5-inch needle" },
    ],
    correctAnswer: "c",
    rationale:
      "The injection site should NOT be massaged after heparin administration as this can increase bruising and affect absorption. Aspiration is not necessary for subcutaneous injections, and heparin uses a shorter needle (5/8 inch).",
    category: "Medication Administration",
    difficulty: "Medium",
  },

  // Wound Care
  {
    id: "q11",
    question:
      "When performing sterile wound care, the nurse accidentally touches the sterile field with an ungloved hand. What should the nurse do?",
    options: [
      { id: "a", text: "Continue with the procedure if the hand was clean" },
      { id: "b", text: "Consider the field contaminated and start over" },
      { id: "c", text: "Just avoid touching that area again" },
      { id: "d", text: "Clean the hand with alcohol and continue" },
    ],
    correctAnswer: "b",
    rationale:
      "Any break in sterile technique, including touching the sterile field with unsterile items, contaminates the entire field. The nurse must discard contaminated supplies and set up a new sterile field to prevent infection.",
    category: "Wound Care",
    difficulty: "Easy",
  },
  {
    id: "q12",
    question:
      "A nurse is caring for a bedridden patient at high risk for pressure ulcers. How often should the patient be repositioned?",
    options: [
      { id: "a", text: "Every 4 hours" },
      { id: "b", text: "Every 2 hours" },
      { id: "c", text: "Every 8 hours" },
      { id: "d", text: "Once per shift" },
    ],
    correctAnswer: "b",
    rationale:
      "Patients at risk for pressure ulcers should be repositioned every 2 hours to relieve pressure on bony prominences and promote circulation. This is a standard prevention measure supported by evidence-based practice.",
    category: "Wound Care",
    difficulty: "Easy",
  },
  {
    id: "q13",
    question:
      "When assessing a diabetic patient's feet, the nurse notes loss of sensation to monofilament testing. This finding indicates:",
    options: [
      { id: "a", text: "Normal age-related changes" },
      { id: "b", text: "Peripheral neuropathy" },
      { id: "c", text: "Adequate circulation" },
      { id: "d", text: "Need for better footwear only" },
    ],
    correctAnswer: "b",
    rationale:
      "Loss of sensation to monofilament testing indicates peripheral neuropathy, a common complication of diabetes. This increases the patient's risk for foot injuries and ulcers because they cannot feel pain from wounds or pressure.",
    category: "Wound Care",
    difficulty: "Medium",
  },

  // Respiratory
  {
    id: "q14",
    question:
      "A patient is receiving oxygen at 2 L/min via nasal cannula. The nurse should monitor for which safety concern?",
    options: [
      { id: "a", text: "Risk of explosion from oxygen combustion" },
      { id: "b", text: "Oxygen toxicity from high flow rates" },
      { id: "c", text: "Hypoxemia from insufficient oxygen" },
      { id: "d", text: "Carbon dioxide retention" },
    ],
    correctAnswer: "a",
    rationale:
      "Oxygen supports combustion, creating a fire and explosion hazard. 'No Smoking' signs must be posted, and open flames, electrical sparks, and smoking materials must be kept away from oxygen sources. At 2 L/min, oxygen toxicity is not a concern.",
    category: "Respiratory",
    difficulty: "Medium",
  },
  {
    id: "q15",
    question:
      "When performing tracheal suctioning, the nurse should limit suctioning to:",
    options: [
      { id: "a", text: "5 seconds" },
      { id: "b", text: "10-15 seconds" },
      { id: "c", text: "20-25 seconds" },
      { id: "d", text: "30 seconds" },
    ],
    correctAnswer: "b",
    rationale:
      "Suctioning should be limited to 10-15 seconds to prevent hypoxia and vagal stimulation. Prolonged suctioning removes oxygen from the airways and can cause bradycardia, hypoxemia, and respiratory distress.",
    category: "Respiratory",
    difficulty: "Easy",
  },
  {
    id: "q16",
    question:
      "A patient with a tracheostomy is coughing forcefully. The nurse notes the tracheostomy tube has become dislodged. What is the PRIORITY action?",
    options: [
      { id: "a", text: "Call the physician" },
      { id: "b", text: "Attempt to reinsert the tube immediately" },
      { id: "c", text: "Call for help and maintain airway patency" },
      { id: "d", text: "Document the incident" },
    ],
    correctAnswer: "c",
    rationale:
      "The priority is maintaining the airway. The nurse should call for help (rapid response) and keep the stoma open with a hemostat or use the obturator to reinsert the tube if trained. This is an emergency requiring immediate intervention.",
    category: "Respiratory",
    difficulty: "Hard",
  },

  // Intravenous Therapy
  {
    id: "q17",
    question:
      "A nurse is monitoring an IV site and notes swelling, coolness, and pain. The patient reports discomfort. These findings indicate:",
    options: [
      { id: "a", text: "Phlebitis" },
      { id: "b", text: "Infiltration" },
      { id: "c", text: "Normal IV site appearance" },
      { id: "d", text: "Infection" },
    ],
    correctAnswer: "b",
    rationale:
      "Swelling, coolness, pain, and discomfort at the IV site indicate infiltration - the IV fluid is leaking into surrounding tissue. The nurse should stop the IV, remove the catheter, elevate the extremity, and apply warm compresses.",
    category: "Intravenous Therapy",
    difficulty: "Medium",
  },
  {
    id: "q18",
    question:
      "When changing a central line dressing, the nurse and patient should both:",
    options: [
      { id: "a", text: "Wear sterile gloves" },
      { id: "b", text: "Wear a mask" },
      { id: "c", text: "Hold their breath" },
      { id: "d", text: "Face each other" },
    ],
    correctAnswer: "b",
    rationale:
      "Both the nurse and patient should wear masks during central line dressing changes to prevent respiratory droplet contamination. The patient should turn their head away from the site to further reduce contamination risk.",
    category: "Intravenous Therapy",
    difficulty: "Medium",
  },
  {
    id: "q19",
    question:
      "Two nurses are verifying a unit of packed red blood cells at the bedside. Within how many minutes must the transfusion be initiated after removing the blood from the blood bank refrigerator?",
    options: [
      { id: "a", text: "10 minutes" },
      { id: "b", text: "20 minutes" },
      { id: "c", text: "30 minutes" },
      { id: "d", text: "60 minutes" },
    ],
    correctAnswer: "c",
    rationale:
      "Blood products must be initiated within 30 minutes of removal from blood bank refrigeration to prevent bacterial growth and maintain blood integrity. Blood should also be completed within 4 hours of initiation.",
    category: "Intravenous Therapy",
    difficulty: "Hard",
  },

  // Urinary / Elimination & GI
  {
    id: "q20",
    question:
      "After inserting a urinary catheter, the nurse notes no urine output. What should the nurse do first?",
    options: [
      { id: "a", text: "Remove the catheter and start over" },
      { id: "b", text: "Inflate the balloon immediately" },
      { id: "c", text: "Advance the catheter 1-2 more inches" },
      { id: "d", text: "Document 'no urine obtained'" },
    ],
    correctAnswer: "c",
    rationale:
      "If no urine flows, the catheter may not be fully inserted into the bladder. The nurse should advance the catheter 1-2 more inches until urine flows, THEN inflate the balloon. Inflating the balloon in the urethra causes severe pain and trauma.",
    category: "Urinary / Elimination",
    difficulty: "Medium",
  },
  {
    id: "q21",
    question:
      "Before administering a tube feeding, the nurse checks gastric residual volume and obtains 300 mL. What action should the nurse take?",
    options: [
      { id: "a", text: "Discard the residual and give the feeding" },
      { id: "b", text: "Return the residual and give the feeding" },
      { id: "c", text: "Hold the feeding and notify the provider" },
      { id: "d", text: "Give half the feeding amount" },
    ],
    correctAnswer: "c",
    rationale:
      "A gastric residual of 250-500 mL indicates delayed gastric emptying. Per most protocols, feedings should be held if residual exceeds 250 mL, and the provider should be notified. This prevents aspiration and indicates poor tolerance.",
    category: "Gastrointestinal / Nutrition",
    difficulty: "Hard",
  },
  {
    id: "q22",
    question:
      "A patient with a new colostomy asks why the stoma is red and moist. The nurse's best response is:",
    options: [
      { id: "a", text: "This indicates infection and needs treatment" },
      { id: "b", text: "This is normal - the stoma is intestinal mucosa" },
      { id: "c", text: "The stoma should be pink and dry" },
      { id: "d", text: "This means the blood supply is inadequate" },
    ],
    correctAnswer: "b",
    rationale:
      "A red (pink to deep red), moist, shiny stoma is normal and healthy. The stoma is intestinal mucosa that secretes mucus, so it should be moist. A pale, dusky, or black stoma indicates circulatory compromise and is abnormal.",
    category: "Urinary / Elimination",
    difficulty: "Easy",
  },

  // Infection Control -> Fundamentals
  {
    id: "q23",
    question:
      "In which order should the nurse remove PPE after caring for a patient on contact precautions?",
    options: [
      { id: "a", text: "Mask, goggles, gown, gloves" },
      { id: "b", text: "Gloves, goggles, gown, mask" },
      { id: "c", text: "Gown, gloves, mask, goggles" },
      { id: "d", text: "Gloves, gown, goggles, mask" },
    ],
    correctAnswer: "b",
    rationale:
      "PPE should be removed in order from most contaminated to least contaminated: gloves first (most contaminated), then goggles, gown, and mask last (least contaminated). Hand hygiene is performed after removing all PPE.",
    category: "Fundamentals / Basic Skills",
    difficulty: "Medium",
  },
  {
    id: "q24",
    question:
      "A patient is diagnosed with tuberculosis. Which type of isolation precautions should be implemented?",
    options: [
      { id: "a", text: "Contact precautions" },
      { id: "b", text: "Droplet precautions" },
      { id: "c", text: "Airborne precautions" },
      { id: "d", text: "Standard precautions only" },
    ],
    correctAnswer: "c",
    rationale:
      "Tuberculosis requires airborne precautions because the bacteria can remain suspended in the air for long periods. The patient needs a negative pressure room, and staff must wear N95 respirators (not just surgical masks).",
    category: "Fundamentals / Basic Skills",
    difficulty: "Easy",
  },
  {
    id: "q25",
    question:
      "When setting up a sterile field, which area is considered contaminated?",
    options: [
      { id: "a", text: "The entire field" },
      { id: "b", text: "The center of the field" },
      { id: "c", text: "The 1-inch border around the edge" },
      { id: "d", text: "Only the areas that are touched" },
    ],
    correctAnswer: "c",
    rationale:
      "The 1-inch border around the edge of a sterile field is considered contaminated because it may have contact with unsterile surfaces. Only the inner area of the field is considered sterile.",
    category: "Wound Care",
    difficulty: "Easy",
  },

  // Safety -> Fundamentals / Neuro
  {
    id: "q26",
    question:
      "A confused patient attempts to get out of bed without assistance. What is the nurse's BEST intervention?",
    options: [
      { id: "a", text: "Apply wrist restraints" },
      { id: "b", text: "Keep bed in highest position" },
      { id: "c", text: "Perform hourly rounding and place bed alarm" },
      { id: "d", text: "Tell family they must stay 24/7" },
    ],
    correctAnswer: "c",
    rationale:
      "Hourly rounding to meet patient needs proactively (toileting, pain, positioning) and bed alarms are the least restrictive fall prevention measures. Restraints should be a last resort, and keeping the bed high increases fall injury risk.",
    category: "Fundamentals / Basic Skills",
    difficulty: "Medium",
  },
  {
    id: "q27",
    question: "During a seizure, what is the nurse's priority action?",
    options: [
      { id: "a", text: "Insert an oral airway" },
      { id: "b", text: "Restrain the patient's movements" },
      { id: "c", text: "Protect the patient from injury" },
      { id: "d", text: "Give prescribed anti-seizure medication" },
    ],
    correctAnswer: "c",
    rationale:
      "The priority during a seizure is protecting the patient from injury by moving objects away, cushioning the head, and staying with the patient. Never insert anything in the mouth during a seizure or restrain the patient's movements.",
    category: "Neurological",
    difficulty: "Easy",
  },
  {
    id: "q28",
    question:
      "A patient in restraints must be assessed by the nurse at least every:",
    options: [
      { id: "a", text: "15 minutes" },
      { id: "b", text: "30 minutes" },
      { id: "c", text: "1 hour" },
      { id: "d", text: "2 hours" },
    ],
    correctAnswer: "a",
    rationale:
      "Patients in restraints must be assessed every 15-30 minutes (varies by facility policy, but 15 minutes is safest) for circulation, skin integrity, comfort, and need for toileting. Restraints must be released and repositioned every 2 hours.",
    category: "Fundamentals / Basic Skills",
    difficulty: "Medium",
  },

  // Advanced Procedures
  {
    id: "q29",
    question:
      "A nurse is caring for a patient with a chest tube. The nurse notes continuous bubbling in the water seal chamber. This finding indicates:",
    options: [
      { id: "a", text: "Normal chest tube function" },
      { id: "b", text: "The lung has re-expanded" },
      { id: "c", text: "An air leak in the system" },
      { id: "d", text: "The suction is too high" },
    ],
    correctAnswer: "c",
    rationale:
      "Continuous bubbling in the water seal chamber indicates an air leak in the system (either in the patient or the tubing). Intermittent bubbling with respirations is normal. The nurse should check all connections and notify the provider.",
    category: "Advanced / Critical Care",
    difficulty: "Hard",
  },
  {
    id: "q30",
    question:
      "On the first postoperative day, which assessment finding requires immediate intervention?",
    options: [
      { id: "a", text: "Pain rated 6/10 at surgical site" },
      { id: "b", text: "Urine output of 20 mL/hour for 2 hours" },
      { id: "c", text: "Absent bowel sounds" },
      { id: "d", text: "Temperature of 99.2°F (37.3°C)" },
    ],
    correctAnswer: "b",
    rationale:
      "Urine output less than 30 mL/hour for 2 consecutive hours indicates inadequate kidney perfusion and possible shock or acute kidney injury. This requires immediate intervention. Absent bowel sounds are expected immediately post-op, mild fever is common, and pain is expected.",
    category: "Advanced / Critical Care",
    difficulty: "Hard",
  },
];

// Shuffle function for randomizing questions
export const shuffleQuestions = (questions: TestQuestion[]): TestQuestion[] => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
