import { Star, AlertTriangle, Wind } from "lucide-react";

export const respirationData = {
  title: "Respiration",
  icon: Wind,
  normalRanges: {
    title: "Normal Respiratory Rates by Age",
    headers: [
      "Age Group",
      "Normal Range (breaths/min)",
      "Average (breaths/min)",
    ],
    rows: [
      {
        age: "Newborn (0-1 month)",
        range: "30 - 60",
        average: "40",
      },
      {
        age: "Infant (1-12 months)",
        range: "25 - 50",
        average: "30",
      },
      {
        age: "Toddler (1-3 years)",
        range: "20 - 30",
        average: "25",
      },
      {
        age: "Preschool (3-6 years)",
        range: "20 - 25",
        average: "22",
      },
      {
        age: "School Age (6-12 years)",
        range: "18 - 22",
        average: "20",
      },
      {
        age: "Adolescent (12-18 years)",
        range: "12 - 20",
        average: "16",
      },
      {
        age: "Adult (18+ years)",
        range: "12 - 20",
        average: "16",
      },
    ],
  },
  assessmentTechnique: {
    title: "Respiratory Assessment Technique",
    methods: [
      {
        title: "Proper Assessment Method",
        steps: [
          "Assess respirations without patient's awareness (patients may alter breathing if aware)",
          "Observe chest rise and fall",
          "Count for 30 seconds and multiply by 2 (or 60 seconds if abnormal)",
          "Note rate, depth, rhythm, and effort",
          "Observe for use of accessory muscles",
          "Listen for abnormal sounds (wheezing, stridor)",
        ],
      },
    ],
  },
  patterns: {
    title: "Respiratory Patterns",
    items: [
      {
        title: "Normal Patterns",
        tag: "Normal",
        tagColor: "bg-green-600 text-white",
        points: [
          "Eupnea: Normal rate and depth, regular rhythm",
          "Costal: Chest breathing (thoracic)",
          "Diaphragmatic: Abdominal breathing",
        ],
      },
      {
        title: "Tachypnea",
        tag: "Abnormal",
        tagColor: "bg-red-600 text-white",
        points: [
          "Rate > 20 breaths/min in adults",
          "Shallow, rapid breathing",
          "Causes: Fever, pain, anxiety, hypoxia, metabolic acidosis",
        ],
      },
      {
        title: "Bradypnea",
        tag: "Abnormal",
        tagColor: "bg-red-600 text-white",
        points: [
          "Rate < 12 breaths/min in adults",
          "Slow respiratory rate",
          "Causes: Opioid overdose, increased ICP, sedation",
        ],
      },
      {
        title: "Apnea",
        tag: "Critical",
        tagColor: "bg-purple-600 text-white",
        points: [
          "Absence of breathing",
          "Medical emergency",
          "Requires immediate intervention",
        ],
      },
      {
        title: "Dyspnea",
        tag: "Abnormal",
        tagColor: "bg-red-600 text-white",
        points: [
          "Difficult or labored breathing",
          "Subjective feeling of breathlessness",
          "May indicate respiratory or cardiac distress",
        ],
      },
      {
        title: "Orthopnea",
        tag: "Abnormal",
        tagColor: "bg-red-600 text-white",
        points: [
          "Difficulty breathing when lying flat",
          "Relieved by sitting upright",
          "Common in heart failure, COPD",
        ],
      },
      {
        title: "Cheyne-Stokes",
        tag: "Critical",
        tagColor: "bg-purple-600 text-white",
        points: [
          "Gradual increase then decrease in depth",
          "Periods of apnea between cycles",
          "Seen in heart failure, brain injury, end of life",
        ],
      },
      {
        title: "Kussmaul",
        tag: "Critical",
        tagColor: "bg-purple-600 text-white",
        points: [
          "Deep, rapid, labored breathing",
          "Body's attempt to blow off CO2",
          "Seen in diabetic ketoacidosis (DKA)",
        ],
      },
    ],
  },
};

export const respirationNclexPoints = {
  title: "NCLEX-RN High-Yield Points",
  Icon: Star,
  defaultColor: "#E74C3C",
  features: [
    "Oxygen Saturation (SpO2): Normal is 95-100%; values < 90% indicate hypoxemia requiring intervention",
    "Accessory Muscle Use: Indicates respiratory distress (sternocleidomastoid, intercostal, abdominal muscles)",
    "Tripod Position: Patient leans forward with hands on knees - classic sign of respiratory distress",
    "Nasal Flaring: Sign of respiratory distress, especially in infants and children",
    "Retractions: Pulling in of chest wall during inspiration - indicates increased work of breathing",
    "Cyanosis: Late sign of hypoxia; central cyanosis (lips, tongue) more significant than peripheral",
    "Priority Nursing Action: For respiratory distress - elevate head of bed, apply oxygen, assess airway, notify provider",
  ],
};

export const respirationCriticalFindings = {
  title: "Critical Findings Requiring Immediate Action",
  Icon: AlertTriangle,
  defaultColor: "#721c24",
  features: [
    "Respiratory rate < 8 or > 30 breaths/min in adults",
    "SpO2 < 90% on room air",
    "Severe dyspnea or inability to speak in full sentences",
    "Cyanosis (bluish discoloration of lips, tongue, nail beds)",
    "Use of accessory muscles or retractions",
    "Stridor (high-pitched sound indicating airway obstruction)",
    "Apnea lasting > 15-20 seconds",
  ],
};
