export interface SubTopic {
  id: string;
  title: string;
}

export interface Topic {
  id: string;
  title: string;
  subtopics: SubTopic[];
}

export interface Category {
  id: string;
  title: string;
  topics?: Topic[];
  subtopics?: SubTopic[];
}

export const fundamentalsCategories: Category[] = [
  {
    id: "nursing-process",
    title: "NURSING PROCESS",
    subtopics: [
      { id: "health-history", title: "Health History" },
      { id: "physical-assessment", title: "Physical Assessment" },
      { id: "vital-signs", title: "Vital Signs" },
      { id: "pain-assessment", title: "Pain Assessment" },
      { id: "diagnostic-process", title: "Diagnostic Process" },
      { id: "prioritization", title: "Prioritization of Care" },
      { id: "goal-setting", title: "Goal Setting" },
      { id: "care-planning", title: "Care Planning" },
      { id: "nursing-interventions", title: "Nursing Interventions" },
      { id: "delegation", title: "Delegation" },
      { id: "outcome-evaluation", title: "Outcome Evaluation" },
      { id: "quality-improvement", title: "Quality Improvement" },
    ],
    topics: [],
  },
  {
    id: "communication",
    title: "COMMUNICATION",
    subtopics: [
      { id: "communication-techniques", title: "Communication Techniques" },
      { id: "active-listening", title: "Active Listening" },
      { id: "nonverbal-communication", title: "Nonverbal Communication" },
      { id: "medical-records", title: "Medical Records" },
      { id: "electronic-health-records", title: "Electronic Health Records" },
      { id: "legal-aspects", title: "Legal Aspects of Documentation" },
    ],
    topics: [],
  },
  {
    id: "safety-infection-control",
    title: "SAFETY & INFECTION CONTROL",
    subtopics: [
      { id: "fall-prevention", title: "Fall Prevention" },
      { id: "restraints", title: "Restraints and Safety Devices" },
      { id: "medical-errors", title: "Medical Error Prevention" },
      { id: "hand-hygiene", title: "Hand Hygiene" },
      { id: "standard-precautions", title: "Standard Precautions" },
      {
        id: "transmission-precautions",
        title: "Transmission-Based Precautions",
      },
      { id: "ppe", title: "Personal Protective Equipment (PPE)" },
      { id: "sterile-technique", title: "Sterile Technique" },
    ],
    topics: [],
  },
  {
    id: "basic-care-comfort",
    title: "BASIC CARE & COMFORT",
    subtopics: [
      { id: "bathing", title: "Bathing and Skin Care" },
      { id: "oral-care", title: "Oral Care" },
      { id: "perineal-care", title: "Perineal Care" },
      { id: "positioning", title: "Patient Positioning" },
      { id: "transfers", title: "Transfers and Ambulation" },
      { id: "assistive-devices", title: "Assistive Devices" },
      { id: "nutritional-assessment", title: "Nutritional Assessment" },
      { id: "feeding-assistance", title: "Feeding Assistance" },
      { id: "enteral-nutrition", title: "Enteral Nutrition" },
      { id: "parenteral-nutrition", title: "Parenteral Nutrition" },
      { id: "bowel-elimination", title: "Bowel Elimination" },
      { id: "urinary-elimination", title: "Urinary Elimination" },
      { id: "catheterization", title: "Catheterization" },
    ],
    topics: [],
  },
  {
    id: "therapeutic-procedures",
    title: "THERAPEUTIC PROCEDURES",
    subtopics: [
      { id: "six-rights", title: "Six Rights of Medication Administration" },
      { id: "oral-medications", title: "Oral Medications" },
      { id: "injections", title: "Injections" },
      { id: "iv-therapy", title: "IV Therapy" },
      { id: "wound-assessment", title: "Wound Assessment" },
      { id: "dressing-changes", title: "Dressing Changes" },
      { id: "pressure-injuries", title: "Pressure Injuries" },
      { id: "blood-specimens", title: "Blood Specimens" },
      { id: "urine-specimens", title: "Urine Specimens" },
      { id: "stool-specimens", title: "Stool Specimens" },
    ],
    topics: [],
  },
];
