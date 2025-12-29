import { Star, AlertTriangle } from "lucide-react";
import { MdOutlineBloodtype } from "react-icons/md";

export const bloodPressureData = {
  title: "Blood Pressure",
  icon: MdOutlineBloodtype,
  adultClassifications: {
    title: "Blood Pressure Classifications (Adults - 2017 ACC/AHA Guidelines)",
    headers: ["Category", "Systolic (mmHg)", "And/Or", "Diastolic (mmHg)"],
    rows: [
      {
        category: "Normal",
        tag: "Normal",
        tagColor: "bg-green-600 text-white",
        systolic: "< 120",
        logic: "and",
        diastolic: "< 80",
      },
      {
        category: "Elevated",
        tag: "",
        tagColor: "",
        systolic: "120-129",
        logic: "and",
        diastolic: "< 80",
      },
      {
        category: "Stage 1 Hypertension",
        tag: "Abnormal",
        tagColor: "bg-red-500 text-white",
        systolic: "130-139",
        logic: "or",
        diastolic: "80-89",
      },
      {
        category: "Stage 2 Hypertension",
        tag: "Abnormal",
        tagColor: "bg-red-500 text-white",
        systolic: "≥ 140",
        logic: "or",
        diastolic: "≥ 90",
      },
      {
        category: "Hypertensive Crisis",
        tag: "Critical",
        tagColor: "bg-purple-600 text-white",
        systolic: "> 180",
        logic: "and/or",
        diastolic: "> 120",
      },
      {
        category: "Hypotension",
        tag: "Abnormal",
        tagColor: "bg-red-500 text-white",
        systolic: "< 90",
        logic: "or",
        diastolic: "< 60",
      },
    ],
  },
  pediatricRanges: {
    title: "Pediatric Blood Pressure Ranges",
    headers: ["Age Group", "Systolic (mmHg)", "Diastolic (mmHg)"],
    rows: [
      {
        age: "Newborn (0-1 month)",
        systolic: "60-90",
        diastolic: "20-80",
      },
      {
        age: "Infant (1-12 months)",
        systolic: "80-100",
        diastolic: "55-70",
      },
      {
        age: "Toddler (1-3 years)",
        systolic: "90-105",
        diastolic: "55-70",
      },
      {
        age: "Preschool (3-6 years)",
        systolic: "95-110",
        diastolic: "60-75",
      },
      {
        age: "School Age (6-12 years)",
        systolic: "100-120",
        diastolic: "60-75",
      },
      {
        age: "Adolescent (12-18 years)",
        systolic: "110-135",
        diastolic: "65-85",
      },
    ],
  },
  assessmentTechnique: {
    title: "Blood Pressure Assessment Technique",
    methods: [
      {
        title: "Proper BP Measurement Steps",
        sections: [
          {
            label: "1. Patient Preparation:",
            steps: [
              "Patient should rest 5 minutes before measurement",
              "Empty bladder first",
              "No caffeine/smoking 30 minutes prior",
              "Feet flat on floor, back supported",
              "Arm supported at heart level",
            ],
          },
          {
            label: "1. Cuff Selection:",
            steps: [
              "Cuff bladder should encircle 80% of arm",
              "Width should occupy 40% of arm circumference",
              "Too small = falsely high reading",
              "Too large = falsely low reading",
            ],
          },
          {
            label: "1. Cuff Placement:",
            steps: [
              "Place 1 inch above antecubital fossa",
              "Center bladder over brachial artery",
              "Ensure snug but not tight fit",
            ],
          },
          {
            label: "1. Measurement:",
            steps: [
              "Palpate brachial artery",
              "Inflate cuff 30 mmHg above last palpated systolic",
              "Deflate slowly (2-3 mmHg per second)",
              "Note first sound (systolic) and last sound (diastolic)",
              "Wait 1-2 minutes before repeating",
            ],
          },
        ],
      },
    ],
  },
  korotkoff: {
    title: "Korotkoff Sounds",
    boxTitle: "Five Phases of Korotkoff Sounds",
    items: [
      {
        phase: "Phase I:",
        text: "First clear tapping sound (Systolic BP) - blood begins flowing through artery",
      },
      {
        phase: "Phase II:",
        text: "Swishing or murmuring sound - turbulent blood flow",
      },
      {
        phase: "Phase III:",
        text: "Crisp, louder tapping - increased blood flow",
      },
      {
        phase: "Phase IV:",
        text: "Muffled, softer sound - less turbulence",
      },
      {
        phase: "Phase V:",
        text: "Silence (Diastolic BP) - blood flows freely, no turbulence",
      },
    ],
  },
  commonErrors: {
    title: "Common Errors in BP Measurement",
    items: [
      "Incorrect cuff size (most common error)",
      "Arm not at heart level (above = falsely low, below = falsely high)",
      "Deflating cuff too quickly",
      "Not allowing patient to rest before measurement",
      "Talking to the patient",
      "Repeated measurements without adequate rest period",
    ],
  },
};

export const bloodPressureNclexPoints = {
  title: "NCLEX-RN High-Yield Points",
  Icon: Star,
  defaultColor: "#E74C3C",
  features: [
    "Orthostatic Hypotension: Drop of ≥20 mmHg systolic or ≥10 mmHg diastolic within 3 minutes of standing; indicator of dehydration or autonomic dysfunction",
    "Pulse Pressure: Difference between systolic and diastolic (normal 30-50 mmHg); widened seen in atherosclerosis, aortic regurgitation",
    "Mean Arterial Pressure (MAP): (Systolic + 2*Diastolic) / 3; should be ≥65 mmHg to achieve proper perfusion",
    "Auscultatory Gap: Temporary disappearance of sounds between systolic and diastolic pressure; common in older/hypertensive patients",
    "White Coat Hypertension: Elevated BP in clinical settings but normal at home",
    "Never take BP on arm with: IV infusion, AV fistula/graft, mastectomy, injury, or paralysis",
    "Hypertensive Crisis Management: Gradual BP reduction over hours (not minutes) to prevent organ damage, never lower BP too rapidly",
  ],
};

export const bloodPressureCriticalFindings = {
  title: "Critical Findings Requiring Immediate Action",
  Icon: AlertTriangle,
  defaultColor: "#721c24",
  features: [
    "Systolic BP > 180 mmHg or Diastolic SBP > 120 mmHg (Hypertensive Crisis)",
    "Systolic BP < 90 mmHg with symptoms (dizziness, confusion, decreased urine output)",
    "Sudden significant drop in BP (>20 mmHg from baseline)",
    "MAP < 65 mmHg (indicates inadequate organ perfusion)",
    "Hypertensive emergency with end-organ damage (chest pain, stroke symptoms, pulmonary edema)",
  ],
};
